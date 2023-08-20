import { useState } from 'react';
import React from "react";
import {PostData} from '../../api-request/form'
import './index.css'

const Form=() => {
    const [name,Setname]=useState('')
    // const [last_name,Setlast_name]=useState('')
    const [cost,Setcost]=useState('')
    // const [Number,SetNumber]=useState('')
    // const [password,Setpassword]=useState('')

    const updatename = (e: any) => {
        Setname(e.target.value);
      };

    
    //   const updatelast_name = (e: any) => {
    //     Setlast_name(e.target.value);
    //   };
      
    const updateemail = (e: any) => {
        Setcost(e.target.value);
      };

      
    // const updateNumber = (e: any) => {
    //     SetNumber(e.target.value);
    //   };
      
    // const updatepassword = (e: any) => {
    //     Setpassword(e.target.value);
    //   };


      const Handlesubmit=async(e:any)=>{
        e.preventDefault();

        const data={
            name:name,
            // last_name:last_name,
            cost:cost,
            // Number:Number,
            // password:password,

        }
        console.log(data)
        const Data=await PostData(data)
        console.log(Data)

      }





    return(
        <div>
            <input type="text" className="name" value={name} onChange={updatename} />
            {/* <input type="text" className="name" value={last_name} onChange={updatelast_name} /> */}
            <input type="text" className="name" value={cost} onChange={updateemail} />
            {/* <input type="text" className="name" value={Number} onChange={updateNumber} /> */}
            {/* <input type="text" className="name" value={password} onChange={updatepassword} /> */}
            <button onClick={Handlesubmit}>submit</button>




        </div>
    )
}

export default Form