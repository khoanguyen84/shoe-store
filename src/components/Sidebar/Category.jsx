import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryAction } from "../../reducer/actions";
import { filtersSelector } from "../../redux/selectors";

const categories = [
    "All", "Sneakers", "Flats", "Sandals", "Heels"
]
function Category() {
    const { category: currentCategory } = useSelector(filtersSelector)
    const dispatch = useDispatch()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Category</h5>
            <div className="form-group">
                {
                    categories.map((cat, index) => (
                        <div key={cat} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="category"
                                id={`cat_${index}`}
                                value={cat}
                                defaultChecked={cat === 'All'}
                                onChange={() => dispatch(setCategoryAction(cat))}
                            />
                            <label
                                htmlFor={`cat_${index}`}
                                role="button"
                                className={`form-check-label ${cat === currentCategory ? 'text-decoration-underline fw-bolder' : ''}`}
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