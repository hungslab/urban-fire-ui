import {get,post,upload} from '../utils/request';



export const upload1=(params)=> upload("api/upload",params);


//用户相关接口
export const login=(params)=> post("api/user/login",params);
export const getUser=(params)=> get("api/user/list",params);
export const addUser=(params)=> post("api/user/add",params);
export const editUser=(params)=> post("api/user/edit",params);
export const delUser=(params)=> get("api/user/del",params);

//院校相关接口
export const getUni=(params)=> get("api/university/list",params);
export const addUni=(params)=> post("api/university/add",params);
export const editUni=(params)=> post("api/university/edit",params);
export const delUni=(params)=> get("api/university/del",params);

//专业相关接口
export const getMajor=(params)=> get("api/major/list",params);
export const addMajor=(params)=> post("api/major/add",params);
export const editMajor=(params)=> post("api/major/edit",params);
export const delMajor=(params)=> get("api/major/del",params);
export const getDetail=(params)=> get("api/major/detail",params);


export const addScore=(params)=> post("api/userScore/add",params);

export const editScore=(params)=> post("api/userScore/edit",params);
export const getScoreDetail=(params)=> get("api/userScore/detail",params);

//批次相关接口
export const getLot=(params)=> get("api/lot/list",params);
export const addLot=(params)=> post("api/lot/add",params);
export const editLot=(params)=> post("api/lot/edit",params);
export const delLot=(params)=> get("api/lot/del",params);


//专业类型相关接口
export const getType=(params)=> get("api/majorType/list",params);
export const addType=(params)=> post("api/majorType/add",params);
export const editType=(params)=> post("api/majorType/edit",params);
export const delType=(params)=> get("api/majorType/del",params);
