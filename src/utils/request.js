import axios from "axios";//创建一个axios的对象
//生成一个axios的实例

export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}
export function get(url, params) {
    // url+='?pageIndex=1&pageSize=1'
    return new Promise((resolve, reject) => {
         axios.get(url, {params})
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}
export function upload(url, formData) {
    // url+='?pageIndex=1&pageSize=1'
    return new Promise((resolve, reject) => {
         axios.post(url,  formData,{
            headers: {
               "Content-Type": "multipart/form-data",//配置header，我们上传的文件编码格式就是multipart/form-data
             },
         })
        
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}

