// App.js

import React from 'react';
import Sidebar from './Sidebar';
import'./App.css';
import { FaRegSquare } from 'react-icons/fa';

const App = () => {
  return (
    <div className='aa'>
      
      <Sidebar />


      <div className="main"style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="search-container">
          <input type="text" className='ss' placeholder="search"></input>
        </div>
        <h1>Sales Information</h1>
        <div className='container'>
        <label className="Customer1">Customer:</label>
        <label className="Customer2">Invoice ID:</label>
        <label className="Customer3">Start date:</label>
        <label className="Customer4">End date:</label>
        </div>
            <div className='text'>
        <div><input
          type="text"
          id="Customer"
          placeholder="entercustomername"
        /></div>
        <div><input
          type="text"
          id="invoiceId" 
          placeholder="enter invoice id"
        /></div>
        
        <div><input
          type="text"
          id="Startdate" 
          placeholder="start date"
        /></div>
        <div><input
          type="text"
          id="Enddate" 
          placeholder="end date"
        /></div>
        </div>
        <table>
  <thead>
    <tr>
      <th><FaRegSquare />Invoice ID</th>
      <th>Date</th>
      <th>Customer</th>
      <th>Payable Amount</th>
      <th>Paid Amount</th>
      <th>Due</th>
    </tr>
  </thead>
  <tbody>
  
    <tr>
      <td><FaRegSquare />#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
    

    </tr>
    <tr>
    <td><FaRegSquare />#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
      
    </tr> <tr>
    <td><FaRegSquare />#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
      
    </tr> <tr>
    <td><FaRegSquare />#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
      
    </tr>
    <tr>
    <td><FaRegSquare />#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
    </tr>
    <tr>
   
      
    </tr>
    <tr>
    <td><FaRegSquare />#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
      
    </tr>
    <tr>
    <td><FaRegSquare />#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
      
    </tr>
    <tr>
    <td><FaRegSquare />#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$100</td>
      <td>$100</td>
    </tr>
  
  </tbody>
</table>
      </div>
      
    
    </div>
  );
};

export default App;
