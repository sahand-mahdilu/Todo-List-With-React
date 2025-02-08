import { Icon } from "@iconify-icon/react/dist/iconify.js";
import Header from "./Header";

export default function TodoList() {
  return (

    <div>
        <Header/>

        <div>
            <form className="flex justify-center items-center gap-3 mt-5 " action="">
                <div className="w-[40%] relative ">
                <input className="p-2 pr-10 w-full " placeholder="Enter todo..." type="text"name="todo-name" />
                <button type="submit">
                <Icon className=" text-green-400  absolute right-0 top-1/2 transform -translate-y-1/2" icon="mynaui:plus-square" width="40" height="40" />
                </button>
                

                </div>
                <select className="p-2" name="todos" id="todo-option">
                <option value="all">all</option>
                <option value="completed">completed</option>
                <option value="Uncompleted">Uncompleted</option>

                </select>

                

            </form>
        </div>


    </div>
  )
}
