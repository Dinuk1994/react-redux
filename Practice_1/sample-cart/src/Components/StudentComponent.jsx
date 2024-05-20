import { useDispatch, useSelector } from "react-redux"
import { addStudent, studentSliceSelector } from "../Store/Reducers/studentSlice"
import { useRef } from "react"

const StudentComponent = () => {
    const student = useSelector(studentSliceSelector)

    const id = useRef();
    const name = useRef();
    const telePhone =useRef();
    const address = useRef();

    const dispatch = useDispatch();


    const addStudentHandle =()=>{
        dispatch(addStudent(id.current.value , name.current.value , telePhone.current.value , address.current.value))
    }

    return (
        <div>
            <h1>ADD STUDENT</h1>
            <div>
                <input ref={id} type="text" placeholder="id"/>
                <input ref={name} type="text" placeholder="name"/>
                <input ref={telePhone} type="text" placeholder="telePhone"/>
                <input ref={address} type="text" placeholder="address"/>
                <button onClick={addStudentHandle}>Add student</button>
            </div>
            <hr />

            <div>
                {student.map(elm => {
                    return <p key={elm.id}>{elm.id} | {elm.name} | {elm.telePhone} | {elm.address}</p>
                })}
            </div>
            <br />

        </div>
    )
}

export default StudentComponent