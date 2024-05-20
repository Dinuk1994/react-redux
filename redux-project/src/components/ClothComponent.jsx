import { useDispatch, useSelector } from "react-redux"
import { addCloths, clothSliceSelector } from "../store/reducers/clothSlice"
import { useRef } from "react"

const ClothComponent = () => {
  const cloths = useSelector(clothSliceSelector)
  const dispatch = useDispatch()
  
  const xxl = useRef()
  const xl = useRef()
  const md = useRef()
  const sm = useRef()
  const xs = useRef()
  const brand = useRef()


  const clothHandle = () =>{
    dispatch(addCloths(xxl.current.value,xl.current.value,md.current.value,sm.current.value,xs.current.value,brand.current.value))
  }

  return (
    <div>
      <h3>Add Clothes</h3>
      <div>
        <input ref={xxl} type="text" placeholder="xxl" />
        <input ref={xl} type="text" placeholder="xl" />
        <input ref={md} type="text" placeholder="md" />
        <input ref={sm} type="text" placeholder="sm" />
        <input ref={xs} type="text" placeholder="xs" />
        <input ref={brand} type="text" placeholder="brand" />
        <button onClick={clothHandle}>Add clothes</button>
      </div>
      <div>
        {cloths.map(ele =>{
          return <p key={ele.id}>{ele.categories.xxl} | {ele.categories.xl} | {ele.categories.md} | {ele.categories.sm} | {ele.categories.sm} | {ele.categories.xs} | {ele.brand}</p>
        })}
      </div>
    </div>
  )
}

export default ClothComponent