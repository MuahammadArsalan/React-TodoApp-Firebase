
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useRef, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from '../Components/Navbar';
import { auth, db } from '../Config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import {  addDoc } from "firebase/firestore"; 





function TodoApp() {

let [todo,setTodo] = useState([])
let [getTodo,setGetTodo] = useState([])
let navigate = useNavigate();
let todoValue = useRef()

async function AddTodo(){
   



    onAuthStateChanged(auth, (user) => {
        if (user) {
       
          const uid = user.uid;
        
        } else {
       navigate('')

        }
      })
      



      const docRef = await addDoc(collection(db, "todos"), {
    todo:todoValue.current.value
      });
    //   console.log("Document written with ID: ", docRef.id);

    todo.push(todoValue.current.value)
    setTodo([...todo])
// console.log(todo);



useEffect(()=>{


    async function getData(){
        
        
        const querySnapshot = await getDocs(collection(db, "todos"));
        querySnapshot.forEach((doc) => {

      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      todo.push(doc.data())
      setTodo([...todo])
      
    });
    
    
}
getData()
},[])
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



{todo ? todo.map((item,index)=>{
    return <ul key={index}>
    <li >

{item}
    
    </li>
</ul>
    
}):console.log('not available')
}




</>
)
}

export default TodoApp