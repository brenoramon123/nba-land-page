const tabMenu = document.querySelectorAll(".js-tabmenu li");
const menu = document.querySelector("js-tabmenu");
const tabContent = document.querySelectorAll(".js-tabcontent section");

tabContent[0].classList.add("ativo")
if(tabContent.length&&tabMenu.length){
    function activeTab(index){
        tabContent.forEach(element => {
            element.classList.remove("ativo");
        })
    
        tabContent[index].classList.add("ativo")
    }
    
    tabMenu.forEach( (event,index) =>{
    
        event.addEventListener("click", function() {
            activeTab(index);
        })
    
    })
}
