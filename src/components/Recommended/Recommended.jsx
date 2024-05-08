import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecommendedAction } from "../../reducer/actions";
import { filtersSelector } from "../../redux/selectors";

const recommended = [
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
    const { recommended: currenRecommended } = useSelector(filtersSelector)
    const dispatch = useDispatch()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Recommended</h5>
            <div className="form-group">
                {
                    recommended.map(recmd => (
                        <button key={recmd.value}
                            className={
                                `btn btn-sm btn-outline-secondary me-1
                                    ${recmd.value === currenRecommended ? 'active' : ''}
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