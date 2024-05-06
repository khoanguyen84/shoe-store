import React, { useContext } from "react";
import { ShoeContext } from "../../context/shoe-context";
import { setPriceAction } from "../../reducer/actions";

const prices = [
    {
        value: '0,0',
        name: "All"
    },
    {
        value: '0,50',
        name: "$0-$50"
    },
    {
        value: '50,100',
        name: "$50-$100"
    },
    {
        value: '100,150',
        name: "$100-$150"
    },
    {
        value: '150,150',
        name: "Over $150"
    },

]
function Price() {
    const { state: { filters: { price: currentPrice } }, dispatch } = useContext(ShoeContext)
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Price</h5>
            <div className="form-group">
                {
                    prices.map((price, index) => (
                        <div key={price.value} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="price"
                                id={`price_${index}`}
                                value={price.value}
                                defaultChecked={price.name === 'All'}
                                onChange={(e) => dispatch(setPriceAction(e.target.value))}
                            />
                            <label
                                role="button"
                                htmlFor={`price_${index}`}
                                className={`form-check-label ${price.value === currentPrice ? 'text-decoration-underline fw-bolder' : ''}`}
                            >
                                {price.name}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Price;