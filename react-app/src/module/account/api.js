import axios from 'axios';

export class AccountApi {
    static async getAccounts(limit, skip) {
        const response = await axios.get("/api/accounts/", {
            query: {
                limit,
                skip
            }});
        return response.data.data;
    }

    static async updateAccount(accountId, data) {
        const response = await axios.put(`/api/accounts/${accountId}/`, data)
        return response.data.data;
    }
}