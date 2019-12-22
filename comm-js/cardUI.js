//const {dataLoader} = require('../moreData/demo55');



function sendRequest(url,v,index,disappear1,UIfunction){
   
    var url1 = url+v;
    const severReq = new XMLHttpRequest();
    severReq.open("GET",url1,true);
    //console.log(url+" "+index)
    severReq.onload = function() {
        if(disappear1 !== null){
            disappear1();
        }
        var data = JSON.parse(this.response)

        
           var dataObject = data[index];
           if(dataObject !== null){
            //console.log(dataObject)
            dataLoader(dataObject,url,v,0,12,UIfunction,sendRequest)
           }
    }
    severReq.send();
}

//module.exports()



function createTags(ele,selector,name){
    var tag = document.createElement(ele);
    if(selector){
        tag.setAttribute(selector,name);
    }
    return tag;

}

function getElementWithId(selector,name){
    if(selector === "Id" || selector === "id" || selector === "ID"){
        var ele  = document.getElementById(name);
        return ele;
    }
}
function getElementWithClassName(selector,name){
    if(selector === "Class" || selector === "class" || selector === "CLASS"){
        var ele = document.getElementsByClassName(name);
        return ele;
    }
}
function getElementWithName(selector,name){
    if(selector === "Name" || selector === "name" || selector === "NAME"){
        return(document.getElementsByName(name));
    }
}
function getElementWithTag(selector,name){
    if(selector === "Tag" || selector === "tag" || selector === "TAG"){
        return(document.getElementsByTagName(name));
    }
}


function getElement(selector,name){
    if(selector === "Id" || selector === "id" || selector === "ID"){
        var ele  = document.getElementById(name);
        return ele;
    }
    if(selector === "Class" || selector === "class" || selector === "CLASS"){
        var ele = document.getElementsByClassName(name);
        return ele;
    }
    if(selector === "Name" || selector === "name" || selector === "NAME"){
        var ele = document.getElementsByName(name);
        return ele;
    }
    if(selector === "Tag" || selector === "tag" || selector === "TAG"){
        var ele = document.getElementsByTagName(name);
        return ele;
    }
}

// function getElement(selector,name){
//     getElementWithId(selector,name)
//     getElementWithClassName(selector,name)
//     getElementWithName(selector,name)
//     getElementWithTag(selector,name)
//     return 

// }

function appendChildToParent(parent,child){
    console.log(parent)
    return parent.appendChild(child);
}

function dataValidation(info,nullInfo,nullTag,nullSelector,nullSelectorName,noNullTag,noNullSelector,noNullSelectorName){
    if(info !== null){
        if(noNullTag === "img"){
            logo = createTags('img',noNullSelector,noNullSelectorName);
            logo.src = info;
            return logo;
        }
        if(noNullTag === "p"){
            pt = createTags('p')
            pt.textContent = info;
            return pt;

        }
        if(noNullTag === "h3"){
            h2t = createTags('h3');
            h2t.textContent = info;
            return h2t;
        }
    }       
    else{
            imgh3 =createTags(nullTag,nullSelector,nullSelectorName)
            imgh3.textContent=nullInfo;
            return imgh3;
    }
}


function hideElement(selector,name){
    return getElement(selector,name).style.visibility="hidden";
}

function UIfunction(details,main){
       // console.log(details)
        const container = createTags('div','class', 'container');
        var str1 = details.email;
        var str = details.name;
        
        if(str === null || str1 === null ){
            var str = "N A";
        }
        var res = str.split(" ");
        //console.log(str);
        var nullData = res[0][0]+res[1][0];
        var name = details.name;
        var email = details.email;
        //console.log(name);
        //console.log(email);
        const imgVal = dataValidation(details.avatar,nullData,'h1','class','imgh3','img','class','img');
        
        appendChildToParent(main,container)
        const card = createTags('div','class', 'card')
        
        const imdiv = createTags('div','class','imdiv')

        const h2 = dataValidation(name,nullData,'h2','class','h2h3','h3','class','pnmae');

        const p = dataValidation(email,nullData,'p','class','ph3','p','class','pemail');

        const txtdiv = createTags('div','class','txtdiv');


        appendChildToParent(container,card)
        
        appendChildToParent(imdiv,imgVal)
        
        appendChildToParent(card,imdiv)
        
        appendChildToParent(txtdiv,h2)
        
        appendChildToParent(txtdiv,p)
        
        appendChildToParent(card,txtdiv);
}

module.exports= {sendRequest,UIfunction};