

export default async function apirequest(url='',optionobj=null,errmsg=null) {
  try{
    const response=await fetch(url,optionobj);
    if(!response.ok) throw Error('Sync error, Please reload first..')
}
catch(err){
    errmsg=err.message;
}finally{
    return errmsg;
}
}
