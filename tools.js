import axios from 'axios-https-proxy-fix'
const t0=Date.now();
function sleep(time){
    return new Promise(resolve=>setTimeout(resolve,time,));

}

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
const arr=['Nothing is impossible to a willing heart',
'The longest journey begins with the first step',
'One minute on the stage needs ten years practice off stage',
'Good wine needs no bush.',
'The membrance of the past is the teacher of the future.',
'You have to believe in yourself. That is the secret of success.',
];
let p_arr=[];
arr.forEach(value=>{
   p_arr.push(caiyun(value, "auto2zh")); 
})
p_arr.forEach(async(value)=>{
    console.log(await value);
    console.log(Date.now()-t0);
})


// for (let index = 0; index < arr.length; index++) {
// 	const element = arr[index];
//     //  sleep(1000);
// 	console.log(index+'  :  '+(await caiyun(element, "auto2zh")));

// }
// console.log(Date.now()-t0);




