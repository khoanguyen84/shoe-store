import React, { useContext } from "react";
import { ShoeContext } from "../../context/shoe-context";
import { setCategoryAction } from "../../reducer/actions";

const categories = [
    "All", "Sneakers", "Flats", "Sandals", "Heels"
]
function Category() {
    const { state: { filters: { category } }, dispatch } = useContext(ShoeContext)
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
                                onChange={(e) => dispatch(setCategoryAction(e.target.value))}
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