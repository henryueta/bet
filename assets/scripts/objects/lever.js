import { animation } from "./animation.js";
import { round } from "./round.js";


const lever = {
    leverContainer:document.querySelector(".leverContainer>div"),
    start_y:0,
    top_y:0,
    onHandleStart(onAction){
        !round.hasStarted
            && typeof onAction === 'function' 
            && (
                onAction()
            )
    },
    onMove:{
        start(){
            return lever.leverContainer.addEventListener('touchstart',(e)=>{
                lever.onHandleStart(()=>{
                    console.log("nao comecou")
                    const touch = e.touches[0];
                    lever.start_y = touch.clientY;
                    lever.top_y = parseInt(lever.leverContainer.style.top || 0)
                })
            })
        },
        middle(){
           return lever.leverContainer.addEventListener('touchmove',(e)=>{
                let view_y = 0;
                let current_y = 0
                lever.onHandleStart(()=>{
                    view_y = e.touches[0].clientY - lever.start_y
                    current_y = lever.top_y + view_y;
                })
                current_y >= 0 
                ?
                current_y >= 90 
                ? (()=>{
                    let new_current_y = 90;
                    animation.onCreate(()=>{
                        new_current_y+=50;
                        if(new_current_y <= 160){
                            lever.leverContainer.style.top = new_current_y +"px"
                        }
                    },2000)
                    
                })()      

                :
                lever.onHandleStart(()=>{
                    lever.leverContainer.style.top = current_y +"px"
                })
                : null
            })
        },
        end(){
           return lever.leverContainer.addEventListener('touchend',(e)=>{
            lever.onHandleStart(()=>{
                round.hasStarted = true;
                console.log("round"+round.hasStarted)
                round.onStart()
                console.log(round.hasStarted)
                setTimeout(()=>{
                    lever.leverContainer.style.top = 0;
                },500)
            })
        })
        }
    }
}


export {
    lever
}