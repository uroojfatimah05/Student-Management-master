import React, { useEffect, useState } from 'react'
import { PiStudentBold } from 'react-icons/pi'
import { BiBookBookmark } from 'react-icons/bi';
import { CalendarFilled } from '@ant-design/icons';
import { getCountFromServer } from 'firebase/firestore';
import { Count } from '../config/firebase';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Dashboard() {
    const [studentCount, setStudentCount] = useState()
    const [CoursesCount, setCoursesCount] = useState()
    const [AttendanceCount, setAttendanceCount] = useState()

    const numberOfStudents = async () => {
        const snapshot = await getCountFromServer(Count);
        let numberOfStudents = snapshot.data().count
        setStudentCount(numberOfStudents)
    }
    const numberOfCourses = async () => {
        const snapshot = await getCountFromServer(Count);
        let numberOfStudents = snapshot.data().count
        setCoursesCount(numberOfStudents)
    }
    const numberOfAttendance = async () => {
        const snapshot = await getCountFromServer(Count);
        let numberOfStudents = snapshot.data().count
        setAttendanceCount(numberOfStudents)
    }
    useEffect(() => {
        numberOfStudents()
        numberOfCourses()
        numberOfAttendance()
    }, [])

    const data = [
        { name: "G1", value: 200 },
        { name: "G2", value: 400 },
        { name: "G3", value: 100 },
        { name: "G4", value: 700 },
        { name: "G5", value: 400 },
        { name: "G6", value: 500 },
        { name: "G7", value: 300 },
        { name: "G8", value: 100 },

    ]
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className='rounded-3 p-3' style={{ backgroundColor: "white", color: '#7A99E2', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}>
                            <h3 className='d-flex align-items-center justify-content-between'>Students <PiStudentBold /></h3>
                            <p>Number of Student:{studentCount}</p>
                        </div>
                    </div>
                    <div className="col-12 my-2 my-md-0 col-md-6 col-lg-4">
                        <div className='rounded-3 p-3' style={{ backgroundColor: "white", color: '#E46A8F', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}>
                            <h3 className='d-flex align-items-center justify-content-between'>Courses <BiBookBookmark /></h3>
                            <p>Number of Courses:{CoursesCount}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-md-2 mt-lg-0 col-lg-4">
                        <div className='rounded-3 p-3' style={{ backgroundColor: "white", color: '#69D8AB', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}>
                            <h3 className='d-flex align-items-center justify-content-between'>Attendance <CalendarFilled /></h3>
                            <p>Number of Attendance:{AttendanceCount}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col">
                                <LineChart width={900} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
