import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../StateProvider';
import { getBasketTotal } from '../reducer';
function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <div className="container">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items):  
                            <strong>
                                {value}
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift.
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(cart)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"LE"}
            />
            </div>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
