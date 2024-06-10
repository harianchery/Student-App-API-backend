import React, { useState } from 'react'
import Navbar from './Navbar'

const Add= () => {
    const[student,changeStudent]=useState(
        {
            "name":"",
            "rno":"",
            "admno":"",
            "college":""
        }
    )
    const InputHandler=(event)=>{
        changeStudent({...student,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(student)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Student Name</label>
                            <input type="text" className="form-control"name='name' value={student.name} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Student rno</label>
                            <input type="text" className="form-control" name='rno' value={student.rno} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Admission No</label>
                            <input type="text" className="form-control" name='admno' value={student.admno} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control"  name='college' value={student.college} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add New student</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add