import withLayout from '@/layout';
import { useDispatch, useSelector } from 'react-redux';
import { FcEmptyBattery } from 'react-icons/fc';
import { Typography } from '@mui/material';
import Link from 'next/link';
import CartItem from '@/components/widgets/CartItem';
import { addToCart, removeFromCart } from '@/redux/actions/cartActions';


const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // Control Quantity Controller..
  const controlQuantity = (type, productId, quantity, stock) => {
    if (type === "INCREMENT") {
      const newQuantity = quantity + 1;
      if (stock <= quantity) return;
      dispatch(addToCart(productId, newQuantity));
    }

    if (type === "DECREMENT") {
      const newQuatity = quantity - 1;
      if (1 >= quantity) return;
      dispatch(addToCart(productId, newQuatity));
    }
  };

  // Remove Items Handler...
  const removeCartItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckOut = () => { };


  if (cartItems.length === 0) {
    return (
      <section className='mt-5 mb-5'>
        <div className="container">
          <div className="emptyCart">
            <FcEmptyBattery size={100} />

            <Typography className="mb-3 text-muted">No Products in Your Cart</Typography>
            <Link href="/foodOrder">View Products</Link>
          </div>
        </div>
      </section>
    );

  } else {
    return (
      <section className='mt-5 mb-5'>
        <div className="container">
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {
              cartItems &&
              cartItems.map(item => (
                <div className="cartContainer" key={item.product}>
                  <CartItem item={item} removeCartItem={removeCartItem} />
                  <div className="cartInput">
                    <button onClick={() => controlQuantity("DECREMENT", item.productId, item.quantity)}>-</button>
                    <input type="number" value={item.quantity} readOnly />
                    <button onClick={() => controlQuantity("INCREMENT", item.productId, item.quantity, item.stock)}>+</button>
                  </div>

                  <p className="cartSubtotal">{`${item.price * item.quantity} BDT`}</p>
                </div>
              ))
            }

            <div className="cartGrossProfit">
              <div></div>

              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)} BDT`}</p>
              </div>

              <div></div>

              <div className="checkOutBtn">
                <button onClick={handleCheckOut}>Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withLayout(Cart);