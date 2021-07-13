import {action, computed, makeObservable, observable} from 'mobx';
import _ from 'lodash';
import {AccountApi} from "../../module/account";

class AccountsStore {
    static DEFAULT_PAGE = 0;

    static DEFAULT_PAGE_SIZE = 15;

    @observable accounts = [];

    @observable loading = false;

    @observable count = 0;

    @observable page = AccountsStore.DEFAULT_PAGE;

    @observable pageSize = AccountsStore.DEFAULT_PAGE_SIZE;

    constructor() {
        void this.init()
        makeObservable(this)
    }

    @action
    async fetch() {
        this.loading = true;
        try {
            const { data, count } = await AccountApi.getAccounts(this.pageSize, this.page * this.pageSize);
            this.accounts = data;
            this.count = count
        } finally {
            this.accounts = this.filteredAccounts
            this.loading = false;
        }
    }

    @action async init() {
        this.page = AccountsStore.DEFAULT_PAGE;
        this.pageSize = AccountsStore.DEFAULT_PAGE_SIZE;

        await this.fetch();
    }

    @computed get filteredAccounts() {
        return _.filter(this.accounts, (account) => account.status === 'pending' || account.status === 'approved' || account.status === 'funded' || account.status === 'closed')
    }

    @action async setPage(page) {
        this.page = page;

        await this.fetch();
    }

    @action async setPageSize(pageSize) {
        this.pageSize = pageSize;
        this.page = 0;

        await this.fetch();
    }

    @action
    async update(accountId, data) {
        this.loading = true;
        const account = await AccountApi.updateAccount(accountId, data);
        this.accounts = _.map(this.accounts, (a) => (a.id === accountId
            ? account
            : a));
        this.loading = false;
    }

    getTotalBalancePerAccountStatus() {
        return [...this.accounts.reduce((map, account) => {
            const key = account.status;

            const item = map.get(key) || Object.assign({}, account, {
                totalBalance: 0
            });

            item.totalBalance += account.balance;

            return map.set(key, item);
        }, new Map).values()];
    }
}


export default new AccountsStore();