
//localStorage.setItem('users', 'Mike');


//let user = localStorage.getItem('users');
//console.log(user);

const lsKey = "services";
function save(service){

   let val = JSON.stringify(data)
    localStorage.setItem(lsKey, va);
}

function read(){
    let data = localStorage.getItem(lsKey);
    if(!data){
        return[];

    }else{
        let list =JSON.parse(data);
        return list;
    }
}