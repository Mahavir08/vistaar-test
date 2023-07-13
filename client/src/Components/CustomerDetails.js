import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CustomerDetails() {

  const [customer, setCustomer] = useState([]);
  let count = 0;
  const { id } = useParams();
  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/account/${id}`)
        .then(res => {
          setCustomer(res.data);
        })
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div>
        <table className="table table-hover table-bordered table-striped">
          <thead className='table-dark'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Transaction Code</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {customer && customer.map((info) => {
              count += 1;
              return (
                <tr key={count}>
                  <td>{count}</td>
                  <td>{String(info.date).slice(0, 10)}</td>
                  <td> {info.transaction_code}</td>
                  <td> {info.symbol}</td>
                  <td> {Number(info.price).toFixed(2)}</td>
                  <td>{info.amount}</td>
                  <td> {Number(info.total).toFixed(2)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomerDetails