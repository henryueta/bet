

const rollGroup = {
    rollContainer:document.querySelector(".rollContainer"),
    rolls:document.querySelectorAll('.rollContainer>div'),
    rollSymbols: document.querySelectorAll('.rollContainer>div>img'),
    group:[
        {
            value:0,
            timer:1500
        },
        {
            value:0,
            timer:1500
        },
        {
            value:0,
            timer:1500
        }
    ],
    limitOfGroup:3,
    setItemValue(id,number){
        typeof number === 'number'
        ? this.group = this.group.map((item,index)=>{
            return index === id ? {
                timer:1500,
                value:number
            } : item 
        })
        : null
    },
    setGroupValues(array){
        typeof array === 'object'
        && array.length == 3
        ? this.group.forEach((item,index)=>
        {
            this.group[index].value = array[index]
        }
        )
        : null
    },
    setGroupTimers(array){
        typeof array === 'object'
        && array.length == 3
        ? this.group.forEach((item,index)=>
        {
            this.group[index].timer = array[index]
        }
        )
        : null
    }
}


export  {
    rollGroup
}