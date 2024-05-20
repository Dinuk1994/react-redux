import { useDispatch, useSelector } from "react-redux"
import { addLaptop, laptopSliceSelector } from "../store/reducers/laptopSlice"
import { useRef } from "react"


const LaptopComponents = () => {

  const laptop = useSelector (laptopSliceSelector)
  const dispatch = useDispatch()

  const price = useRef()
  const cpu = useRef()
  const gen = useRef()
  const ram = useRef()
  const hdd = useRef()


  const addLaptopHandle = () =>{
    dispatch(addLaptop(price.current.value, cpu.current.value , gen.current.value , ram.current.value , hdd.current.value))
  }

  return (
    <div>
      <div>
        <h3>Add laptop</h3>
        <input ref={price} type="text" name="" id="" placeholder="Enter price"/>
        <input ref={cpu} type="text" name="" id="" placeholder="Enter CPU"/>
        <input ref={gen} type="text" name="" id="" placeholder="Enter Gen"/>
        <input ref={ram} type="text" name="" id="" placeholder="Enter RAM"/>
        <input ref={hdd} type="text" name="" id="" placeholder="Enter HDD"/>
        <button  onClick={addLaptopHandle}>ADD LAPTOP</button>
      </div>
      {laptop.map(element=>{
        return <p key={element.id}> {element.price} | {element.specs.cpu} | {element.specs.gen} | {element.specs.ram} | {element.specs.hdd}</p>
      })}
    </div>
  )
}

export default LaptopComponents