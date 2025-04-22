import { controller } from "./controller.js";
import { lever } from "./lever.js";
import { rollGroup } from "./roll.js";

const menu = {

    menuContainer:document.querySelector(".menuContainer"),
    menuOptions:document.querySelectorAll(".menuContainer>ul>li"),
    optionIndex:3,
    onSetOptionIndex(number){
        number >= 0 
        ? this.optionIndex = number
        : this.optionIndex = 0
    },
    onOption(){
        this.menuOptions[this.optionIndex].style.listStyle = 'square';
        this.menuOptions.forEach((item,index)=>{
            this.menuOptions[index] !== this.menuOptions[this.optionIndex]
            && (this.menuOptions[index].style.listStyle = "none")
        })
    },
    onChoice(){
        this.menuContainer.style.display = "none";
        controller.onTurnOff()
        const menuChoices = {
            0:()=>{
                lever.onTurnOn()
                rollGroup.rollContainer.style.display = "flex";
            },
            1:()=>{
                console.log("c")
            },
            2:()=>{
                console.log("m")
            }
        }
        menuChoices[this.optionIndex]()
    }
}

export {
    menu
}