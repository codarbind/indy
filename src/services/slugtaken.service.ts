import urlModel from "../models/urlModel"

export const slug_is_taken = async (slug:string)=>{
try{

let slug_found = await urlModel.findOne({slug})
if(slug_found) return {taken:true, success:true}
return {taken:false, success:true }
}catch(error:any){
    return {success:false,status:500,message:error.message}
}
}