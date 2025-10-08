import StudentCard from './StudentCard'
import student from '../student.json'
function Studentlist(props)
{
    return(
        <>
        {

            student.map((student) =>(
                <div>
                    <StudentCard  name={student.name} cource = {student.course} age={student.age}  year={student.year} city = {student.city} email= {student.email} />
                </div>
                
            ))
        }
        </>
    )

}
export default Studentlist