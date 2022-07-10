
export const Add_Data="Add_Data";

export const setData=data=>dispatch=>{
 dispatch({
    type:Add_Data,
    payload:data,
 })
}
