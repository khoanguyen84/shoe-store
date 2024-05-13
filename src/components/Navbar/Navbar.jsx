import React from "react";
import { FaCartPlus, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import filtersSlice from "../../slices/filters-slice";
import { cartSelector } from "../../redux-toolkit/selector";

function Navbar() {
    const dispatch = useDispatch()
    const cart = useSelector(cartSelector)
    return (
        <div className="container d-flex align-items-center border-bottom py-2 pt-3">
            <div className="d-flex align-items-center" style={{ minWidth: "180px" }}>
                <Link to={"/"} className="logo fw-bolder">
                    <FaCartPlus size={22} className="me-2" /> Shoe Store
                </Link>
            </div>
            <div className="d-flex flex-grow-1 justify-content-between">
                <form className="w-50 d-flex align-items-center">
                    <input
                        type="search"
                        placeholder="Enter your search shoes"
                        className="form-control form-control-sm"
                        style={{ paddingRight: '25px' }}
                        onInput={(e) => dispatch(filtersSlice.actions.setSearchText(e.target.value))}
                    />
                    <FaSearch size={15} style={{ marginLeft: '-25px', color: 'rgba(0,0,0,.2)' }} />
                </form>
                <div className="">
                    <Link to={'/cart'} className="position-relative">
                        <FaShoppingCart size={20} className="me-2" role="button" />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.orderDetails?.length}
                        </span>
                    </Link>
                    <FaUser size={20} role="button" className="ms-3"/>
                </div>
            </div>

        </div>
    )
}

export default Navbar;