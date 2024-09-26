import {useDispatch, useSelector} from "react-redux";
import {getCartItems, postChangeCart} from "../api/CartApi";
import {getCartItemsAsync, postChangeCartAsync} from "../slices/cartSlice";

const useCustomCart = () => {

    const cartItems = useSelector(state => state.cartSlice)

    const dispatch = useDispatch()

    const refreshCart = () => {

        dispatch(getCartItemsAsync())

    }

    const changeCart = (param) => {

        dispatch(postChangeCartAsync(param))

    }

    return {cartItems, dispatch, refreshCart,changeCart}

}

export default useCustomCart