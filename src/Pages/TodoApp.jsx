
import React, { useRef, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from '../Components/Navbar';
import { auth } from '../Config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
function TodoApp() {

let [todo,setTodo] = useState([])
let navigate = useNavigate();
let todoValue = useRef()

function AddTodo(){
   
    onAuthStateChanged(auth, (user) => {
        if (user) {
       
          const uid = user.uid;
        
        } else {
       navigate('')

        }
      });
      


    todo.push(todoValue.current.value)
    setTodo(todo)
console.log(todo);


todoValue.current.value =''

}

  return (

<>

<div>
    
{
    onAuthStateChanged(auth, (user) => {
        if (user) {
     
            const uid = user.uid;
            {<Navbar/> ? null : <Navbar/>}
        } else {
            
        }
    })
    
}
    </div>


<h1 className='text-center mt-3 font-bold text-3xl'>Todo App</h1>


<div className='text-center mt-4'>

<input type="text" ref={todoValue} placeholder="Type here" className="input input-bordered w-full max-w-xs" />

<button className="btn btn-xs sm:btn-sm  mt-4 md:btn-md  bg-success ml-3" onClick={()=>{AddTodo()}}>Add Todo</button>

</div>
<div>
    return <div>

{todo ? todo.map((item)=>{
    
<ul>

    <p>{item}</p>

</ul>
}): <p>Items Not Found</p> }

</div>




</div>


</>
)
}

export default TodoApp