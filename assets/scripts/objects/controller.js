import { menu } from "./menu.js"

const controller = {
    controllerContainer:document.querySelector(".controllersContainer"),
    controllers:document.querySelectorAll(".controllersContainer>button"),
    upButton:document.querySelector("#up_button"),
    selectButton:document.querySelector("#select_button"),
    downButton:document.querySelector("#down_button"),
    onTurnOn(){

    },
    onTurnOff(){
       return this.controllers.forEach((item,index)=>{
            console.log(item)
            item.style.display = "none"
        })
    },
    onUp(){
        return this.upButton.addEventListener("click",()=>{
            menu.onSetOptionIndex(menu.optionIndex-=1)
            menu.onOption()
        })
    },
    onSelect(){
        return this.selectButton.addEventListener('click',()=>{
            menu.onChoice()
        })
    },
    onDown(){
        return this.downButton.addEventListener("click",()=>{
            menu.onSetOptionIndex(menu.optionIndex+=1)
            menu.onOption()
        })
    }
}



export {
    controller
}