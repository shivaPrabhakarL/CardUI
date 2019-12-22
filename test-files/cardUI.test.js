const {sendRequest,UIfunction} = require('../comm-js/cardUI');
const {display,dataLoader} = require('../moreData/demo55.js');
class pic{
    constructor(avatar){
        this.large = avatar
    }
};
class n{
    constructor(fname,lname){
        this.first = fname;
        this.last = lname;
    }
}
class oobj{
    constructor (avatar,fname,lname,email){
        this.email = email;
        this.picture = new pic(avatar);
       this.name = new n(fname,lname);
    }
}

beforeAll(()=>{
   var arr= [];
  // const main = document.getElementById('root')
    var limit = 1;
    var oo = new oobj("diufhsfnk","shiva" ,"prabhakar","shiva@some.com");
    var ooob = [];
    ooob.push(oo)
    dataLoader(ooob,null,null,0,1,UIfunction)
});
// test('test',()=>{
//     expect(true).toBeTruthy()
// })

test('testing name of the person',function(){
    const name = document.getElementsByTagName('h3');
    console.log(name[0].textContent);
    expect(name[0].textContent).toBe('shiva prabhakar');
});

test('testing email of the person',function(){
    const email = document.getElementsByTagName('p');
    expect(email[0].textContent).toBe('shiva@some.com');
});

test('testing image of the person',function(){
    const image = document.getElementsByTagName('img');
    expect(image[0].src).toBe('http://localhost/diufhsfnk');
});

test('testing build of card',function(){
    const card = document.getElementsByClassName('card');
    expect(card[0]).toBeTruthy();
});

test('testing load onscroll ',function(){
   window.scrollTo(5,1000,);
   const load = document.getElementById('loader2');
   expect(load).toBeDefined();

});

