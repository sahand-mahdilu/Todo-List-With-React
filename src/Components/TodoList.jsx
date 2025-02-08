import { Icon } from "@iconify-icon/react/dist/iconify.js";
import Header from "./Header";
import Todos from "./Todos";
import { useState } from "react";

export default function TodoList() {
    const [title ,setTitle]=useState("")
    const [todos, setTodos]= useState([])


    const todoTitleHandler=(event)=>{

        setTitle(event.target.value)

      
    }

    const addTodo= (event)=>{

        event.preventDefault()

        let newTodoObject={
            id:todos.length+1,
            todoTitle:title,
            status:false
        }


        setTodos(prev=>{

          return [...prev,newTodoObject]
        })

        setTitle("")

       

        
        
    }
    
    console.log(todos);



  return (

    <div>
        <Header/>

        <div>
            <form onSubmit={addTodo} className="flex justify-center items-center gap-3 mt-5 " action="">
                <div className="w-[40%] relative ">
                <input onChange={todoTitleHandler} value={title} className="p-2 pr-10 w-full " placeholder="Enter todo..." type="text"name="todo-name" />
                <button type="submit">
                <Icon className=" hover:bg-blue-300 hover:text-white text-green-400  absolute right-0 top-1/2 transform -translate-y-1/2" icon="mynaui:plus-square" width="40" height="40" />
                </button>
                

                </div>
                <select className="p-2" name="todos" id="todo-option">
                <option value="all">all</option>
                <option className="text-green-600" value="completed">completed</option>
                <option className="text-red-500" value="Uncompleted">Uncompleted</option>

                </select>

                

            </form>

        </div>

        <div className="todo_container mt-10 flex flex-col justify-center items-center gap-3">

            {todos.map(todo=>{

               return <Todos key={todo.id} {...todo}/>


            })}

              
        </div>


    </div>
  )
}
