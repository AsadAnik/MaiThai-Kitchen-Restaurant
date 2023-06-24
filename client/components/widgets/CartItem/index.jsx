import Link from 'next/link';

const CartItemCard = ({ item, removeCartItem }) => {
    return (
        <div className="CartItemCard">
            <img src={item.image} alt="ssa" />
            <div>
                <Link href={`/product/${item.product}`}>{item.name}</Link>
                <span>{`Price: ${item.price} BDT`}</span>
                <p onClick={() => removeCartItem(item.productId)}>Remove</p>
            </div>
        </div>
    );
};

export default CartItemCard;