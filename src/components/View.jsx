import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [student, changeStudent] = useState(
        [
            {"name":"Rad",
            "rno": "iyuui",
            "admno":"fg",
            "college":"jiil"}
    ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Student Rollno</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Student Admno</th>
                                    <th scope="col">College</th>
                                </tr>
                            </thead>
                            {
                                student.map(
                                    (value,index)=>{
                                        return <tbody>
                                        <tr>
                                            <td scope="row">{value.rno}</td>
                                            <td>{value.name}</td>
                                            <td>{value.admno}</td>
                                            <td>{value.college}</td>
                                        </tr>
                                        
                                    </tbody>
                                    }
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View