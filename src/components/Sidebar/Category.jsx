import React from "react";
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from "../../slices/filters-slice";
import { categorySelector } from './../../redux-toolkit/selector';

const categories = [
    "All", "Sneakers", "Flats", "Sandals", "Heels"
]
function Category() {
    const dispatch = useDispatch()
    const category = useSelector(categorySelector)
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Category</h5>
            <div className="form-group">
                {
                    categories.map((cat,index) => (
                        <div key={cat} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="category"
                                id={`cat_${index}`}
                                value={cat}
                                defaultChecked={cat === 'All'}
                                onChange={() => dispatch(filtersSlice.actions.setCategory(cat))}
                            />
                            <label 
                                htmlFor={`cat_${index}`}
                                role="button"
                                className={`form-check-label ${cat === category ? 'text-decoration-underline fw-bolder' : ''}`}
                            >
                                {cat}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category;