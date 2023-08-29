
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todo,setTodo]=useState("");
  const [list,setList]=useState([]);

function addTodo()
{
  if(todo.trim() !=="")
  {
    setList([...list,todo]);
    setTodo("");
  }
}

function removeTodo(i)
{
  let update=list.filter((element,index)=>{
    return i!==index;
  })
  setList(update);
}


  return (
    <div className="main">
       <h1>To-Do-List</h1>
       <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
       <button type="button" onClick={addTodo}>Add Todo</button>
       <ul>
        {
          list.map((element,index)=>{
            <li key={index}>
              <div>{element}</div>
              <button onClick={()=>removeTodo(index)}>Remove</button>
            </li>
          })
        }
       </ul>
    </div>
  )
}

export default App
