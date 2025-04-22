
const animation = {
    onCreate(onAnimate,limitOfTime,onEnd){
        let id;
        const onExecute = (time)=>{
            typeof onAnimate === 'function'
            ? id = requestAnimationFrame(onExecute)
            : null
            onAnimate()
        }
        onExecute();
        setTimeout(()=>{
            cancelAnimationFrame(id)
            typeof onEnd === 'function'
            ? onEnd()
            : null
        },limitOfTime)
    }
}

export {
    animation
}