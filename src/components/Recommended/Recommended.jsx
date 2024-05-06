import React, { useContext } from "react";
import { ShoeContext } from "../../context/shoe-context";
import { setRecommendedAction } from "../../reducer/actions";

const recommendedList = [
    {
        value: 'All',
        name: 'All Products'
    },
    {
        value: 'Nike',
        name: 'Nike'
    },
    {
        value: 'Adidas',
        name: 'Adidas'
    },
    {
        value: 'Puma',
        name: 'Puma'
    },
    {
        value: 'Vans',
        name: 'Vans'
    }
]
function Recommended() {
    const { state: { filters: { recommended } }, dispatch } = useContext(ShoeContext)
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Recommended</h5>
            <div className="form-group">
                {
                    recommendedList.map(recmd => (
                        <button key={recmd.value}
                            className={
                                `btn btn-sm btn-outline-secondary me-1
                                    ${recmd.value === recommended ? 'active' : ''}
                                `
                            }
                            type="button"
                            onClick={() => dispatch(setRecommendedAction(recmd.value))}
                        >
                            {recmd.name}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Recommended;