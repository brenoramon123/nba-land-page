// const todasImg = document.getElementsByTagName("img");

// const arrayImg = Array.from(todasImg)

// console.log(arrayImg.forEach(function(element) {
//     if(element.querySelectorAll('img[src^="/"]'))
//     console.log(element)
// }))

// const comeca = document.querySelectorAll("a[href^='#']")
// console.log(comeca.forEach(function(element) {
//     console.log(element)
// }))

// const h2Animais = document.querySelector(".animais-descricao h2")

// console.log(h2Animais)

// const ultimoP = document.querySelector("html p:last-child ")

// console.log(ultimoP)
// const imgs = document.querySelectorAll("img");

// // imgs.forEach(element => console.log(element))

// const paragrafo = document.querySelectorAll("p");

// const arrayp = Array.from(paragrafo);

// arrayp.forEach(element => console.log(element));
// arrayp.forEach(element => console.log(element.innerText));   
// const imgs = document.querySelectorAll('img');
// const arrayImg = Array.from(imgs);
// arrayImg.forEach((item,index) => {
//     console.log(item,"oii",index);
// })
// {
// let i = 0;
// arrayImg.forEach(()=>{
//     console.log(i++);
// })
// }
// {
//     let i=0
// imgs.forEach(()=>{console.log(i++)})
// }
// console.log(menu[0])
// const imgs = document.querySelectorAll("img");
// imgs.forEach(element =>{
//     console.log(element.hasAttribute("alt"));
// })
// const modifique = document.querySelector('nav [href^="https"]')
// modifique.setAttribute("href","oi")
// console.log(modifique)
// const menu = document.querySelectorAll("nav ul li");
// console.log(menu)
// menu.forEach(element => {
//     element.classList.add("ativo")
//     console.log(element)
// })
// const nao = document.querySelectorAll(".menu li:not(:first-child)")
// nao.forEach(element => {
//     element.classList.remove("ativo")
// })
// const img = document.querySelector("img")
// console.log(img.getBoundingClientRect.top);
// const imgs = document.querySelectorAll("img");
// console.log()
// const img = document.querySelectorAll("img");
// function soma(){
// img.forEach(element => {
//     console.log(element.offsetTop)
// })
// }
//   console.log(img[0].offsetTop)
// window.onload = function() {
//   soma()
// }
// const links = document.querySelectorAll("a")
// window.onload  = function() {links.forEach((element,index) => {
//   if(element.clientHeight>48 && element.clientWidth>48){
//     console.log("está certo",index)
//   }else{
//     console.log("está errado",index)  }
// })
// }
// console.log(links[1].clientHeight)
// document.addEventListener("keydown",function(event) {
//   console.log(event.key)
// })
// const links = document.querySelectorAll("a[href^='#']")
// links.addEventListener("click", function() {
// })

// const links = document.querySelectorAll("a[href^='#']")

// function clicou(event){
//     event.preventDefault()
    
//     links.forEach(element => {
//             element.classList.remove("ativo")
        
//     })
//     event.target.classList.toggle("ativo")
// }

// links.forEach(element => {
//     console.log("passou")
    
//     element.addEventListener("click",clicou)  
// })


// const todosElementos = document.querySelectorAll("body *");
// console.log(todosElementos)

// function handleElemento(event){
//     event.target.remove()
// }

// todosElementos.forEach(element => {
//     element.addEventListener("click", handleElemento)
// });

// const menu = document.querySelector(".menu");
// const clone = menu.cloneNode(true);
// const copy = document.querySelector(".copy");

// copy.appendChild(clone)

// const faq = document.querySelector(".faq");

// const primeiro = faq.children[1].children[0].nextElementSibling

// console.log(primeiro)

// const animais = document.querySelector(".animais").innerHTML

// console.log(animais)

// faq.innerHTML = animais


