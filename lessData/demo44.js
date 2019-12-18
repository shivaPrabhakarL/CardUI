var v = 1;
var url = "https://reqres.in/api/users?page=" ;
function LoadMoreCall(){
    v = v+1;
    console.log(url+v)
    sendRequest(url+v,"data",display)
}

function display(infoObj,main){
    if(infoObj.length !== 0){
        console.log(infoObj[1].first_name);
        for( var i=0;i<infoObj.length;i++ ){
           // dObj[i].avatar = null; 
            var dataObj = new obj(infoObj[i].avatar, infoObj[i].first_name, infoObj[i].last_name, infoObj[i].email);
             UIfunction(dataObj,main);
        }
    }
    else{
        hideElement('id','button'); 
    }
}


sendRequest(url+"1","data",display);

