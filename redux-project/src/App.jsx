import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, numberSliceSelector } from "./store/reducers/numberSlice";
import { number2SliceSelector } from "./store/reducers/number2Slice";
import LaptopComponents from "./components/LaptopComponents";
import ClothComponent from "./components/ClothComponent";


const App = () => {

  const number = useSelector(numberSliceSelector)
  const number2 = useSelector(number2SliceSelector)

  const dispatch = useDispatch();
  return (
    <div>
      <h1>{number.number}</h1>
      <h1>{number2.number}</h1>
      <div>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
        <button onClick={() => dispatch(decrement(2))}>Decrement</button></div>

        <br />
        <div>
          <LaptopComponents/>
        </div>

        <br />
        
        <div>
          <ClothComponent/>
        </div>
    </div>

  
  )
}

export default App