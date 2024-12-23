//!DOM
//?DOM stands for Document Object Model
//?● It is an object created by the browser that describes the HTML document.
//?● It allows for manipulate (creating, delete, modify,..etc) HTML elements.

//!accessing html element

// let h1555=document.getElementsByTagName('p')
// console.log(h1555)

// let h1=document.getElementById('test')
// console.log(h1)

// let p=document.getElementsByClassName('omar')
// console.log(p)

// let ali=document.querySelectorAll('.omar');
// console.log(ali)

// let ali=document.querySelector('p');
// console.log(ali)





//!Accessing DOM Elements

/*
 Document object has multiple methods for accessing/finding nodes:
○ document.getElementById(“elementId”)
○ document.getElementsByTagName(“tagName”)
○ document.getElementsByClassName(“className”)
○ document.querySelector(“any css selector”) -> HTML5 
○ document.querySelectorAll(“any css selector”) -> HTML5 
● getElementById and querySelector methods return the matching node/element if 
exists.
● All other methods return a HTML collection (list/array of nodes) that match the 
selections

*/







//!Events
  /*

 JavaScript can be executed when an event occurs (e.g. user clicks, hovers,..etc).
● document.addEventListner() method is used to attach event handler to a specific element.
● Event handler is a javascript function (callback) that is called wherever the event occurs.
● Adding new event handler doesn’t overwrite(remove) old ones.
● You can add as many events as you want.




  */





// let image=document.querySelector('#test');
// console.log(image.attributes)
// console.log(image.getAttribute('src'))
// image.setAttribute('src','images/61dlft5BTGL._AC_SY879_.jpg')

// let h1=document.querySelector('#h1test');
// h1.style.color='red'
// h1.classList.add('omar')


// let btn=document.querySelector('#btn');
// console.log(btn)

// btn.addEventListener('click',()=>{
//     console.log("test")
// })

// function test(){
//     console.log("test");
// }


let smallImg=document.querySelectorAll('.smallImg');
let largeImg=document.querySelector('.largeImg');

console.log(smallImg)
for(let img of smallImg){
    img.addEventListener('click',()=>{
        let imgSrc=img.getAttribute('src');
        largeImg.setAttribute('src',imgSrc)
    })
}