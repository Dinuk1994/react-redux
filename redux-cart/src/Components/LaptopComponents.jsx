import { useDispatch, useSelector } from "react-redux"
import { laptopSliceSelector } from "../Store/Reducers/LaptopSlice"
import { addToCart, cartSliceSelector } from "../Store/Reducers/CartSlice";

const LaptopComponents = () => {

    const laptop = useSelector(laptopSliceSelector);
    const cart = useSelector(cartSliceSelector)
    const dispatch = useDispatch();

    let total = 0
    if(Array.isArray(cart)){
        cart.forEach(ele=>{
            total+=(ele.count * ele.price)
        })
    }
  
    let cartCount = 0
    cart.forEach(ele=>{
        cartCount+= ele.count
    })

    console.log(cart);
    return (
        <div>
            {laptop.map(ele => {
                return <p key={ele.id}>{ele.id} |{ele.price} | {ele.cpu} | {ele.ram} | {ele.hdd}
                    <button onClick={()=>dispatch(addToCart(ele.id, ele.price, ele.cpu, ele.ram,ele.hdd))}>Add to cart</button>
                </p>
            })}

            <br />
            <h1>CART</h1>
            <hr />
            <h3>{cartCount}</h3>
            <h2>Total Price : Rs . {total}</h2>
        </div>
    )
}

export default LaptopComponents