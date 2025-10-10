import StudentCard from './StudentCard'
import React, { useState } from 'react'
import student from '../student.json'
function Studentlist(props)
{
    const [filterdata, setfilterdata] = useState(student)

   const handlefilter = (age) =>{
     if(age>=18)
     {
        setfilterdata(student.filter((student)=> student.age>=18))
     }
     else if(age<18){
        setfilterdata(student.filter((student) => student.age<18))
     }
     else{
        setfilterdata(student)
     }
   }
    return(
        <>
            <div>
                <button onClick={()=>handlefilter()}>All</button>
                <button onClick={()=> handlefilter(17)}>Teen</button>
                <button onClick={()=> handlefilter(18)}>Adult</button>
                

                </div>
        {


            // student.map((student) =>(
            //     <div>
            //         <StudentCard  name={student.name} cource = {student.course} age={student.age}  year={student.year} city = {student.city} email= {student.email} />
            //     </div>
                
            // ))
            filterdata.map((student) =>(
                <div>
                    <StudentCard  name={student.name} cource = {student.course} age={student.age}  year={student.year} city = {student.city} email= {student.email} />
                </div>
            ))
        }
        </>
    )

}
export default Studentlist