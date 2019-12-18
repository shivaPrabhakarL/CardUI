var url = "https://randomuser.me/api/?results=100" ;
function LoadMoreCall(){
    sendRequest(url,"results",display)
}

function display(infoData,main){
    
    if(infoData.length !== 0){
                
        for( var i=0;i<12;i++ ){
           // dObj[i].avatar = null; 
           var n =  infoData[i].name;
           var em = infoData[i].email;
           var pic = infoData[i].picture.large;
            var dataObj = new obj(pic, n.first, n.last, em);
            UIfunction(dataObj,main);
        }
    }
    else{
        hideElement('id','button'); 
    }
}

sendRequest(url,"results",display);
