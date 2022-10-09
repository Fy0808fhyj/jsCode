import axios from 'axios-https-proxy-fix'
function caiyun(source, direction) {
    const url = "http://api.interpreter.caiyunai.com/v1/translator";
    const token = "91obpah86azwvhszsq6c";

    const payload = {
        "source": source,
        trans_type: direction,
        "detect": true,
    }
    const headers = {
        "content-type": "application/json",
        "x-authorization": "token " + token,
    }
    return axios.post(url, payload, {
        headers: headers,
    }).then(res => res.data.target)
}
console.log(await caiyun("hello world", "auto2zh"));
