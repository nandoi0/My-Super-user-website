function createRow(usersArray){
    for(let i=0;i<usersArray.length;i++){
        let user= usersArray[i];
        let tmp=`
            <tr>
                <td>$(user.email)</td>
                <td>$(user.fname)</td>
                <td>$(user.lname)</td>
            </tr`;
        $("#userList").append(tmp);
    }
}
function init(){
    console.log("Listing");
    let user=readUsers();
    createRow(users);

}
window.onload=init;