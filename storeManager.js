const LS_KEY="users";
function saveUsers(user){
    let oldData=readUsers();
    oldData.push(user);

    let val=JSON.stringify(oldData);//parse into json string

    localStorage.setItem(LS_KEY,val);//send it to the localStorage
}
function readUsers(){
    //get te values from localstorage
    let data= localStorage.getItem(LS_KEY);
    if(!data){//Not users?}
        return[];//creating the array first registration
    }else{
        let list=JSON.parse(data); //parse the string into ab n obj
        return list;
    }
}