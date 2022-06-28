import { config } from "./config";

class Api {
    constructor({url, token}){
        this._url = url;
        this._token = token;
    }

    getList(itemID){
        const requestURL = itemID? `${this._url}/getList${itemID}` : `${this._url}/getList?limit=27`;
        return fetch(requestURL, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${this._token}`
            }
        })
        .then(res => res.json())
        .catch(err => alert(err.message));

    }

}

export default new Api(config);