var v = 1;
var url = "https://reqres.in/api/users?page=" ;
function LoadMoreCall(){
    v = v+1;
    console.log(url+v)
    sendRequest(url+v,"data",display)
}


function dataLoader(dataObject,arr,main,start,limit,display){
    if(dataObject !== null){
        for( var i=0;i<dataObject.length;i++ ){   
            var name =  dataObject[i].first_name+" "+dataObject[i].last_name;
            var dataObj = new obj(dataObject[i].avatar, name,dataObject[i].email);
            arr.push(dataObj)
        }
        console.log(arr);
        display(arr,main,start,limit) 
    }
}

function display(arr,main,start,limit){
    if(arr.length>0){
        for(var i=start;i<limit;i++){
            UIfunction(arr[i],main)
        }
    }
    else{
        hideElement('id','button'); 
    }
    display(arr,main,start,limit)
        start = limit;
    limit  = 12+limit;
    if(limit>arr.length){
        v += v;
        sendRequest(url+v,"results",display);
    }
}


sendRequest(url+v,"data",display);

