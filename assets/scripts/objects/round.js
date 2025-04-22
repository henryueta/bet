import { animation } from "./animation.js";
import { audio } from "./audio.js";
import { randomNumber } from "./random.js";
import { rollGroup } from "./roll.js";

const round = {
    hasStarted:false,
    onStart(){
    audio.play('cash_audio')
    rollGroup.setGroupTimers([
        randomNumber.onCreateNumber(1000,2500),
        randomNumber.onCreateNumber(2500,3500),
        randomNumber.onCreateNumber(3500,5000)
    ])
    rollGroup.rolls.forEach((item,index)=>{
        let current_randomNumber = 0;
        animation.onCreate(()=>{
            current_randomNumber = randomNumber.onCreateNumber(1,10);
            item.innerHTML = current_randomNumber        
        },rollGroup.group[index].timer,()=>{
            rollGroup.setItemValue(index,current_randomNumber)
            audio.play('cashFinished_audio')
            let default_rollValues = rollGroup.group.filter((item,index)=>{
               return item.value === 0
            })
            if(!default_rollValues.length){
                this.onEnd();
            }
        })
    })
    },
    onEnd(){
        // let teste = rollGroup.group.filter((item,index)=>item.value === rollGroup.group[0].value)
        // console.log(teste)
        rollGroup.setGroupValues([0,0,0])
        round.hasStarted = false
    }
}

export {
    round
}