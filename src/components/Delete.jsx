import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {
    const[student,changeStudent]=useState(
        {
            "rno":""
        }

    )
    const InputHandler=(event)=>{
        changeStudent({...student,[event.target.name]:event.target.value})

    }
    const  readValue=()=>{{
        console.log(student)}
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Student Rollno</label>
                        <input type="text" className="form-control"name='rno' value={student.rno} onChange={InputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger"onClick={readValue} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete