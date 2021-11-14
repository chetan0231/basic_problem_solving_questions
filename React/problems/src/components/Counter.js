import React,{ useState } from 'react'


const style = {
    divProps : {
        width : '40%',
        height : '200px',
        margin : 'auto',
        textAlign : 'center',
        marginTop : '200px',
        background : 'skyblue',
        paddingTop : '10px'
    },
    anotherDiv : {
        marginTop : '30px'
    },
    spanProps : {
        marginRight : '20px'
    },
    buttonProps : {
        padding : '10px',
        color : 'white'
    }
}

export default function Counter() {
    const [count,setCount] = useState(0)

    return (
        <div style={style.divProps}>
            <h2>Counter</h2>
            <h2>{count}</h2>   
            <div style={style.anotherDiv}>
                <span style={style.spanProps}>
                    <button style={{...style.buttonProps,background : 'green'}} onClick={() => {setCount(count + 1)}}>+</button>
                </span>
                <span>
                    <button style={{...style.buttonProps,background : 'red'}} onClick={() => {setCount(count - 1)}}>-</button>     
                </span>    
            </div>
        </div>
    )
}
