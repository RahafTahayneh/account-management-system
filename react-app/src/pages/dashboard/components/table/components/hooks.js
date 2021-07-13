import _ from 'lodash'
export const useOptions = (account) => {
    return _.compact([
        (account.status === 'pending' || (account.status==='funded') || account.status ==='approved')&& {
            label: 'Close',
            key: 'closed',
        },
        (account.status === 'approved') && {
                label: 'Fund',
                key: 'funded',
            },
        (account.status === 'pending') &&{
                label: 'Approve',
                key: 'approved',
            }
    ]);
}

