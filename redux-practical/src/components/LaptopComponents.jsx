import { useDispatch, useSelector } from "react-redux"
import { selectLaptop } from "../store/reducers/LaptopSlice"
import { addItemToCart, selectCart } from "../store/reducers/CartSlice"


const LaptopComponents = () => {
    const laptop = useSelector(selectLaptop)
    const cart = useSelector(selectCart)
    const dispatch = useDispatch()
    console.log(cart);

    let Total = 0;
    if (Array.isArray(cart)) {
        cart.forEach(element => {
            Total += (element.count * element.price)
        });
    }

    let cartCount = 0;
    cart.forEach(element=>{
        cartCount+=element.count
    })

    return (
        <div>
            {laptop.map((elm) => {
                return <p key={elm.id}>{elm.id} | {elm.price} | {elm.cpu} | {elm.ram}
                    <button onClick={() => dispatch(addItemToCart(elm.id, elm.price, elm.cpu, elm.ram))}>Add to cart</button>
                </p>
            })}
            <br />
            <h1>CART</h1>
            <hr />
            <h3>{cartCount}</h3>
            <h2>Total price = Rs.{Total}</h2>

        </div>
    )
}

export default LaptopComponents