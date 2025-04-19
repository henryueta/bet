const cash_audio = document.querySelector(".cash_audio");
const cashFinished_audio = document.querySelector(".cashFinished_audio")

const audio = {
    audioList:[
        {
            name:"cash_audio",
            source:document.querySelector(".cash_audio")
        },
        {
            name:"cashFinished_audio",
            source:document.querySelector(".cashFinished_audio")
        }
    ],
    getAudio(name){
       return audio.audioList.find((item,index)=>
             item.name === name
        )
    },
    play(name){
        return this.getAudio(name).source.play()
    }
}


export {
    audio,
    cash_audio,
    cashFinished_audio
}