import localforage from "localforage";
export default async function Load(backpack){
    console.log('started backpack')
    const content = await localforage.getItem("backpack3");
    if(content !== null){
        console.log('loading backpack')
        backpack.setContents(content)
    }
    Save(backpack)
}
async function Save(backpack){
setInterval(async function(){ 
    console.log('saving backpack')
    localforage.setItem("backpack3",backpack.getContents());
  
}, 1000);
}