
// nanoid= create uinpe id

import { nanoid,createSlice } from "@reduxjs/toolkit";


// 👍 intial stage means defualt data icould be number , object , array 
// why object here  because we can  insert multple data it could from in array , funcrtion , and inside another object , value etc
const  initialStage={
    todos:[{id:1 ,text:'hello redux toolkit'}]
}


//   ()   =========> ese function khete hai   jab bhi symbol mille esa means funciton 
// here  inside  function   means ()  eske under object hai samch gaye tum pass kiya 
const todoSlice=createSlice({  
    ///////////////////////////////////////
    name:'todos',                          // 👿name dena must hai          👿 first properties
 ///////////////////////////////////////////////////////
    initialStage,                        // alter nate hai app chahe to inital stage ko direct niche diclare bhi kr   sakete   hai              👿 second properties

          //////////////////////////////////////////////////////////////////////
         // 👿 third properties

          addTodo:(state,action)=>{
     // addtodo properties and  state (current)  and action (update)  both are function 
     // but phele to hume state me initail value to object push krni hogi na that why i use array
      const todo={
        id:nanoid(),
        text:action.payload,  /// action arrae bhai user jo likhega vo direction action ke ayega but uske payload use krna hoga why payload . payload khud ek object hai  jese here mujhe text ko acces krna hoga to me kya likhuga action. payload.text   but hum single data hai to kya payload only  auger apko kuch aur extract krn ahai to dot lagage ke kr do 

        // overall samjho action and payload me connection hai bss   payload ke user ka data rahta hai 
      }       
      state.todos.push(todo)   // now we push proper todo to defualt todo    state ko update kiya 
    
          },
////////////////////////////////////////////////////////////////////
      // 👿 fourth properties
        removetodo:(state,action)=>{
       state.todos=state.todos((task)=> task.id !== action.payload)   // here payload automatic id uth lega kuki payload ek object hai
        }


})
