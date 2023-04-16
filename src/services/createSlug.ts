
import { customAlphabet, nanoid } from 'nanoid'
import { slug_is_taken } from './slugtaken'

export const createSlug = async ()=>{
  try{
    let proposed_slug = customAlphabet('ABCDEFGHIJKLMNOPQRSTUV1234567890abcdefghijklmopqrstuvwxyz', 6)()
  //check if slugistaken
  let {taken, status, message, success} = await slug_is_taken(proposed_slug)
  if (!taken && success) return {slug:proposed_slug, success:true}
  if ( !success) return {status, message, success}
  await createSlug()
  return {success:false,status:400}
}catch(error:any){
  return {success:false,status:500,message:error.message}
}
}