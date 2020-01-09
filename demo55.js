//const {sendRequest,UIfunction,obj} = require('../comm-js/cardUI');

//var url =  ;
//var v = 100;

class obj {
    constructor (avatar,name,email){
        this.email = email;
        this.avatar = avatar;
        this.name = name;
    }
} 

const main = document.createElement('div'); 
    main.setAttribute('id','root');
    document.body.appendChild(main);

function dataLoader(dataObject,url,v,start,limit,UIfunction){
    arr=[]

    if(dataObject !== null){
        for( var i=0;i<dataObject.length;i++ ){    
            var n =  dataObject[i].name.first+" "+dataObject[i].name.last;
            console.log("="+n)
            var em = dataObject[i].email;
            var pic = dataObject[i].picture.large;    
            var dataObj = new obj(pic, n, em);
            arr.push(dataObj)
        }
       // console.log(arr);
        display(url,v,arr,main,start,limit,UIfunction);
    }
    else{
        alert("dscdsv");
    }
}

function disappear1(){
    document.getElementById('loader1').style.visibility="hidden";
}

function display(url,v,arr,main,start,limit,UIfunction){
   // console.log(start+" "+limit)
    //console.log(arr);
    for(var i=start;i<limit;i++){
        UIfunction(arr[i],main)
    }
    
        
    window.onscroll = scroll();

    start = limit;
    limit  = 12+limit;
    //onsole.log(limit+" " +arr.length)
    if(start<arr.length){
        v += 100;
        arr=[];
        sendRequest(url,v,"results",disappear1,UIfunction);

    }
}
function load(){
    const loader1 = document.createElement('div');
    loader1.setAttribute('id','loader1');

    document.body.appendChild(loader1);
    sendRequest("https://randomuser.me/api/?results=",100,"results",disappear1,UIfunction);
}

function scroll(){
    if (((window.innerHeight+window.scrollY)  ) >= document.body.offsetHeight) 
    { 

        document.getElementById('loader2').style.visibility="visible";
        display(url,v,arr,main,start,limit,UIfunction); 
        document.getElementById('loader2').style.visibility="hidden"; 
        var t = true;
        return t;
    }
};
module.exports={dataLoader};