
import { produce } from "immer";
import { useState } from "react";

// const obj = {
//   name : 'dinuk',
//   city : 'kandy',
//   position : 'web developer',
//   address : {
//     addressLine1 : "No 157",
//     addressLine2 : "Mawilmada"
//   }
// }

// obj.language = ['html', 'js']

// // const objCopy = produce(obj,(copy)=>{
// //   copy.address.addressLine2 = 'Watapuluwa'
// // })

// // const arr = [1,2,3,4,5,6,7,8,9,10]

// // const arrCopy = produce(arr , (copy)=>{
// //   copy[3]= {
// //     name : "dinuk",
// //     address : "kandy"
// //   }
// // })

// const App = () => {
//   const [test,setTest] = useState({...obj})

//   const clickHandle= () =>{
//     setTest(produce((copy)=>{
//       copy.address.addressLine2 ="panadura"
//     }))
//   }
//   console.log(test);

//   return (
//     <div><button onClick={clickHandle}>Click me</button></div>
//   )
// }

// export default App

const obj = {

  name: "dinuk",
  city: "Kandy",
  position: "Web developer",
  address: {
    addressLine1: "NO,157",
    addressLine2: "Mawilmada"
  }
}

const App = () => {
  const [test, setTest] = useState({ ...obj })

  const handleClick = () => {
    setTest(produce((copy) => {
      copy.address.addressLine2 = "Watapuluwa"
    }))
  }
  console.log(test);
  return (
    <div><button onClick={handleClick}>Click me</button></div>
  )
}

export default App