var url = "https://randomuser.me/api/?results=" ;
var v = 100;
var limit = 12;
function dataLoader(dataObject,arr,main,start,limit,display){
    if(dataObject !== null){
        for( var i=0;i<dataObject.length;i++ ){    
            var n =  dataObject[i].name.first+" "+dataObject[i].name.last;
            var em = dataObject[i].email;
            var pic = dataObject[i].picture.large;    
            var dataObj = new obj(pic, n, em);
            arr.push(dataObj)
        }
        console.log(arr);
        display(arr,main,start,limit)
    }
    else{
        alert("dscdsv");
    }
}

function disappear1(){
    document.getElementById('loader1').style.visibility="hidden";
}

function display(arr,main,start,limit){
    console.log(start+" "+limit)
    //console.log(arr);
    for(var i=start;i<limit;i++){
        UIfunction(arr[i],main)
    }
    window.onscroll = function(dataObject){
        if (((window.innerHeight+window.scrollY)  ) >= document.body.offsetHeight) 
        { 
            display(arr,main,start,limit,)
            
        }
    };
    start = limit;
    limit  = 12+limit;
    if(limit>arr.length){
        v += v;
        sendRequest(url+v,"results",display,disappear1);
    }
}




sendRequest(url+v,"results",display,disappear1);
