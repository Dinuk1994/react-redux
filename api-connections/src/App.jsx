// /* eslint-disable no-unused-vars */
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getPost, selectAllPost } from './Store/Reducers/postSlice'

// const App = () => {
//   const postObj = useSelector(selectAllPost)
//   const dispatch = useDispatch()
//   console.log(postObj);
//   return (
//     <div>
//         <button onClick={()=>dispatch(getPost())}>get Data</button>
//     </div>
//   )
// }

// export default App

import { useDispatch, useSelector } from 'react-redux'
import { getPost, postSelector } from './Store/Reducers/postSlice'

const App = () => {
  const postData = useSelector(postSelector)
  const dispatch = useDispatch()
  console.log(postData);
  return (
    <div>
      <button onClick={()=>dispatch(getPost())}>Hello</button>
    </div>
  )
}

export default App