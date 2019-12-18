class obj {
    constructor (avatar,fname,lname,email){
        this.email = email;
        this.avatar = avatar;
        this.fname = fname;
        this.lname = lname;
    }
} 

function sendRequest(url,index,display){
    const severReq = new XMLHttpRequest();
    severReq.open("GET",url,true);

    severReq.onload = function() {
        var data = JSON.parse(this.response)

        const app = getElement('id','root')
   
        if (severReq.status >= 200 && severReq.status < 400) {
            var dObj = data[index];
            
            display(dObj,app);
        }
        else {
            alert('Error in server connection!')
        }
    }
    severReq.send();
}

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
    return parent.appendChild(child);
}

function imageValidation(info,noNullInfo,nullTag,nullSelector,nullSelectorName,noNullTag,noNullSelector,noNullSelectorName){
    if(info){
        logo = createTags(noNullTag,noNullSelector,noNullSelectorName)
        logo.src = info
        return logo;
    }       
    else{
        imgh3 =createTags(nullTag,nullSelector,nullSelectorName)
        imgh3.textContent=noNullInfo;
        return imgh3;
    }
}

function hideElement(selector,name){
    return getElement(selector,name).style.visibility="hidden";
}

function UIfunction(details,main){
        const container = createTags('div','class', 'container');
        var regex = details.fname[0]+" "+details.lname[0];
        const imgVal = imageValidation(details.avatar,regex,'h1','class','imgh3','img','class','img');
        
        appendChildToParent(main,container)
        const card = createTags('div','class', 'card')
        
        const imdiv = createTags('div','class','imdiv')

        const h2 = createTags('h2')
        h2.textContent = details.fname+" "+details.lname

        const p = createTags('p')
        p.textContent = details.email

        appendChildToParent(container,card)
        
        appendChildToParent(imdiv,imgVal)
        
        appendChildToParent(card,imdiv)
        
        appendChildToParent(card,h2)
        
        appendChildToParent(card,p)
}
