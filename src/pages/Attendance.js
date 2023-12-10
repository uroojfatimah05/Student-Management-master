import React, { useEffect, useState } from 'react'
import { message } from 'antd'
import { firestore } from '../config/firebase'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, } from "firebase/firestore";

export default function Attendance() {
  const [documents, setDocuments] = useState([])
  const handlePresent=async(id)=>{
      const docRef = doc(firestore, "Admission", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data=docSnap.data()
        const VenueId = Math.random().toString(36).substring(2)
        const presentStudent={
          studentId:data.id,
          courseId:VenueId,
          date:serverTimestamp(),
          status:"present"
        }
        await setDoc(doc(firestore, "Attendance", VenueId), presentStudent);
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    }
  const handelAbsent= async (id)=>{ 
    const docRef = doc(firestore, "Admission", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data=docSnap.data()
    const VenueId = Math.random().toString(36).substring(2)
    const presentStudent={
      studentId:data.id,
      courseId:VenueId,
      date:serverTimestamp(),
      status:"present"
    }
    await setDoc(doc(firestore, "Attendance", VenueId), presentStudent);
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }}
  
  
  const getData = async () => {
    try {
      const q = query(collection(firestore, "Admission"))
      const querySnapshot = await getDocs(q);
      const array = []
      querySnapshot.forEach((doc) => {
        let data = doc.data()
        array.push(data)
        console.log(data)
        setDocuments(array)
      });
    } catch (error) {
      console.log(error)
      message.error("please connect to Internet")
      return () => getData()
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (

    <>
      <table className="table mt-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Father Name</th>
            <th scope="col">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document, i) => {
            return (
              <tr className="col" key={i}>
                <td>{i + 1}</td>
                <td>{document.name || "Student Name"}</td>
                <td>{document.fname || "Father Name"}</td>
                <td>
                  <button onClick={()=>handlePresent(document.id)} className='btn btn-success me-1 px-1 py-1'>Present</button>
                  <button onClick={()=>handelAbsent(document.id)} className='btn btn-danger px-1 py-1'>Absent</button>
                </td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </>
  )
}