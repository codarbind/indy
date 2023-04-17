import urlModel from "../models/urlModel"
import { createSlug } from "./createSlug.service"

export const encode = async(longurl:string)=>{
let {slug,success, message,status} = await createSlug()
if(!success) return {success,message,status}
if(slug){
   let doc =await (await urlModel.create({longurl,slug})).save()

   return {success:true,doc,status:200}
}
return {success,message,status}

}