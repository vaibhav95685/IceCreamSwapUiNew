import React, { useState } from 'react';
import Head from 'next/head';
import Radio from './Radio';
import Dropdown2 from './Dropdown2';
import Dropdown from './Dropdown';

const MultiStepForm = () => {
  return (

    <div>
          <Head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</link>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
</link>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


   
    </Head>
      <div style={{marginTop:"50px"}} className="container">
      <div   className="form-group">
                    <label style={{ marginBottom:"15px"}} className="control-label">Token Type</label>
                   
  <div>
 <Dropdown2/>
 </div>
 <div style={{ marginBottom:"15px", marginTop:"15px"}}  className="form-group">
                    <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Name</label>
                    <input  type="text" className="form-control" placeholder="Name" />
                </div>
                <div style={{ marginBottom:"15px", marginTop:"15px"}}  className="form-group">
                    <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Symbol</label>
                    <input  type="text" className="form-control" placeholder="Symbol" />
                </div>
                <div style={{ marginBottom:"15px", marginTop:"15px"}}  className="form-group">
                    <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Decimals</label>
                    <input  type="text" className="form-control" placeholder="Decimals" />
                </div>
                <div style={{ marginBottom:"15px", marginTop:"15px"}}  className="form-group">
                    <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Total supply</label>
                    <input  type="text" className="form-control" placeholder="Total supply" />
                </div>
             
 </div>


 <div style={{marginTop:"30px"}}>
    <button style={{ backgroundColor: '#f8567f', color: '#fff', padding: '0.5em 1em',  borderRadius: '0.25em',border: 'none' }} className="nextBtn btn-lg pull-left" >Create Token</button>
    </div>


      </div>
    </div>
  );
};



export default MultiStepForm;