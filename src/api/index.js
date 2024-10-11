import axios from "axios";

export const AuthorizationCode = async (username, password) => {
    const urlEncodedData = new URLSearchParams({
        username,
        password,
        grant_type: 'password',
        client_id:
            '14f5d937e42ec6077cd8ed41c5110682d2b23627641fe538351e688ca1ffc28d',
        client_secret:
            '95e42d519324bf999c9063dad756ad69ece202ab8d97b1867a47dffb3c08da5a',
        scope: 'projects pull_requests issues notes  hook groups gists enterprises'
    }).toString()

    return await (axios.post('https://gitee.com/oauth/token', urlEncodedData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }))
}

export const CreateRepository = async () => {
    
}