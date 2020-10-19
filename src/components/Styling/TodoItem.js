import React from 'react'
function TodoItem(){
    return(
        <div>
            <input type="checkbox"/>
            <p id="todo-text">Place holder text here</p>
            <ol style={{color:"blue"}}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ol>
            <p style={{color: "blueviolet"}}>
            This is some writing</p>
        </div>
    )
}

export default TodoItem; 