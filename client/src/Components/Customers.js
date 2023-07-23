import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Customers() {

    const [customers, setCustomer] = useState([]);
    let count = 0;
    let price = 190;

    const navigate = useNavigate();

    const handleNavigation = (itemId) => {
        navigate(`/account/${itemId}`);
    };

    useEffect(() => {
        try {
            axios.get('http://localhost:8000/')
                .then(res => setCustomer(res.data.activeusers))
                .catch(err => console.log(err));
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <div>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Accounts</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(((item) => {
                        count += 1;
                        return (
                            <tr key={count}>
                                <th scope="row">{count}</th>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td> {item.accounts.map(id => {
                                    return (<span key={id}><span className="accountId" onClick={() => handleNavigation(id)} >
                                        {id}
                                    </span>
                                        &nbsp;
                                    </span>
                                    )
                                })} </td>
                            </tr>
                        )
                    }))}
                </tbody>
            </table>
        </div>
    )
}

export default Customers