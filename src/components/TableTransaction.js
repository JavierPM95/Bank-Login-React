import React from 'react'

const TableTransaction = () => {
    return (
        <>
        <table className="table bg-white table-striped">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>07/10/2020</td>
                    <td>Vendor Cash</td>
                    <th scope="row">$1500,00</th>
                </tr>
                <tr>
                    <td>14/10/2020</td>
                    <td>Thrid party transfer</td>
                    <th scope="row">-$570,00</th>
                </tr>
                <tr>
                    <td>14/10/2020</td>
                    <td>Vendor Cash</td>
                    <th scope="row">$4430,00</th>
                </tr>
                <tr>
                    <td>14/10/2020</td>
                    <td>Thrid party transfer</td>
                    <th scope="row">-$770,00</th>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default TableTransaction;