import React, { useContext } from "react";
import { FaCartPlus, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { ShoeContext } from "../../context/shoe-context";
import { setSearchTextAction } from "../../reducer/actions";

function Navbar() {
    const { dispatch, state } = useContext(ShoeContext)
    console.log(state?.filters);
    return (
        <div className="container d-flex align-items-center border-bottom py-2">
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
                        onInput={(e) => dispatch(setSearchTextAction(e.target.value))}
                    />
                    <FaSearch size={15} style={{ marginLeft: '-25px', color: 'rgba(0,0,0,.2)' }} />
                </form>
                <div className="">
                    <Link to={'/cart'}>
                        <FaShoppingCart size={20} className="me-2" role="button" />
                    </Link>
                    <FaUser size={20} role="button" />
                </div>
            </div>

        </div>
    )
}

export default Navbar;