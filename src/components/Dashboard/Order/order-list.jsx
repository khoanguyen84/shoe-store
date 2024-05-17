import React from "react";
function OrderList() {
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-12'>
                    <h5>Order Management</h5>
                    <table className="table table-striped order-table">
                        <thead>
                            <tr>
                                <th className="text-end align-middle">Order Date</th>
                                <th className="text-end align-middle">Total Products</th>
                                <th className="text-end align-middle">Subtotal</th>
                                <th className="text-end align-middle">Shipping</th>
                                <th className="text-end align-middle">Total Amount</th>
                                <th className="text-end align-middle">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderList;