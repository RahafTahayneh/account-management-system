import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

export class AccountApi {
    static async getAccounts(limit, skip) {
        const response = await axios.get("/api/accounts/", {
            query: {
                limit,
                skip
            }});
        return response.data;
    }

    static async updateAccount(accountId, data) {
        const response = await axios.put(`/api/accounts/${accountId}/`, data, {headers: {xsrfHeaderName: "X-CSRFToken"}})
        return response.data.data;
    }
}