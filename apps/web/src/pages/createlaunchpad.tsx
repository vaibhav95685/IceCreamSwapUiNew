import React, { useState } from 'react';
import Head from 'next/head';
import Radio from './Radio';
import Dropdown from './Dropdown';
import Dropdown1 from './Dropdown1';


const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  return (

    <div>
          <Head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</link>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
</link>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


   
    </Head>
      <div className="steps">
        Step {step} of 4
      </div>
      {step === 1 && (
        <Step1 handleNextStep={handleNextStep} />
      )}
      {step === 2 && (
        <Step2 handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
      )}
      {step === 3 && (
        <Step3 handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
      )}
      {step === 4 && (
        <Step4 handlePrevStep={handlePrevStep} />
      )}
    </div>
  );
};

const Step1 = ({ handleNextStep }) => (

  <div>
    <h2 style={{fontSize:"20px",marginTop:"10px", marginBottom:"5px"}}>Step 1 - Verify Token</h2>
    <h3 style={{ color:"grey", marginBottom:"10px"}}>Enter the token address and verify</h3>
    <div   className="row setup-content" id="step-1">
        <div   className="col-xs-12">
            <div   className="col-md-12">
                <div   className="form-group">
                    <label className="control-label">First Name</label>
                    <input type="text"     className="form-control" placeholder="Enter First Name"  />
                </div>
                <div   className="form-group">
                    <label className="control-label">Last Name</label>
                    <input type="text"     className="form-control" placeholder="Enter Last Name" />
                </div>
              
            </div>
        </div>
    </div>
    <button  onClick={handleNextStep} style={{ backgroundColor: '#f8567f', color: '#fff', padding: '0.5em 1em',  borderRadius: '0.25em',border: 'none' }} className="nextBtn btn-lg pull-right" > Next </button>
   
  </div>
);

const Step2 = ({ handleNextStep, handlePrevStep }) => (
  <div>
    <h2 style={{fontSize:"20px",marginTop:"10px", marginBottom:"5px"}}>Step 2 - DeFi Launchpad Info</h2>
    <h3 style={{ color:"grey", marginBottom:"10px"}}>Enter the launchpad information that you want to raise , that should be enter all details about your presale</h3>
    <div   className="row setup-content" id="step-2">
        <div   className="col-xs-12">
            <div   className="col-md-12">
                <div   className="form-group">
                    <label style={{ marginBottom:"15px"}} className="control-label">Presale rate</label>
                    <input  type="text" className="form-control" placeholder="Enter Presale rate" />
                </div>
                <div   className="form-group">
                    <label   className="control-label">Whitelist</label>
                    <div>
                    
    <Radio/>

<div style={{display:"flex", flexDirection:"row"}} >
               <div style={{ marginBottom:"15px", marginTop:"15px"}}  className="form-group">
                    <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Softcap (BNB)</label>
                    <input  type="text" className="form-control" placeholder="Enter Softcap (BNB)" />
                </div>

                <div style={{ marginBottom:"15px",marginTop:"15px",}}   className="form-group">
                    <label style={{ marginLeft:"55px",marginBottom:"15px",marginTop:"15px",}}  className="control-label">Hardcap (BNB)</label>
                    <input  style={{ marginLeft:"55px"}}  type="text" className="form-control" placeholder="Enter Hardcap (BNB)" />
                </div>

 </div>

 <div style={{display:"flex", flexDirection:"row"}} >
               <div style={{ marginBottom:"15px", marginTop:"5px"}}  className="form-group">
                    <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Minimum Buy (BNB)</label>
                    <input  type="text" className="form-control" placeholder="Minimum Buy (BNB)" />
                </div>

                <div style={{ marginBottom:"15px",marginTop:"5px",}}   className="form-group">
                    <label style={{ marginLeft:"55px",marginBottom:"15px",marginTop:"15px",}}  className="control-label">Maximum Buy (BNB)</label>
                    <input  style={{ marginLeft:"55px"}}  type="text" className="form-control" placeholder="Maximum Buy (BNB)" />
                </div>

 </div>



 <div   className="form-group">
                    <label style={{ marginBottom:"15px"}} className="control-label">Refund Type</label>
                    <div style={{display:"flex", flexDirection:"row"}}>
  <div>
 <Dropdown/>
 </div>
 <div style={{marginLeft:"55px"}}>
 <Dropdown1/>
 </div>
                </div>

 </div>
 <div style={{display:"flex", flexDirection:"row"}} >
               <div style={{ marginBottom:"15px", marginTop:"5px"}}  className="form-group">
                    <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Liquidity %</label>
                    <input  type="text" className="form-control" placeholder="Liquidity %" />
                </div>

                <div style={{ marginBottom:"15px",marginTop:"5px",}}   className="form-group">
                    <label style={{ marginLeft:"55px",marginBottom:"15px",marginTop:"15px",}}  className="control-label">Listing rate</label>
                    <input  style={{ marginLeft:"55px"}}  type="text" className="form-control" placeholder="Listing rate" />
                </div>

 </div>
 <label style={{marginTop:"15px",}}  className="control-label">Select start time & end time (UTC)</label>
 <div style={{display:"flex", flexDirection:"row"}} >
  
               <div style={{ marginBottom:"15px", marginTop:"5px"}}  className="form-group">
              
                    <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Start time (UTC)</label>
                    <input  type="text" className="form-control" placeholder="Start time (UTC)" />
                </div>

                <div style={{ marginBottom:"15px",marginTop:"5px",}}   className="form-group">
                    <label style={{ marginLeft:"55px",marginBottom:"15px",marginTop:"15px",}}  className="control-label">End time (UTC)</label>
                    <input  style={{ marginLeft:"55px"}}  type="text" className="form-control" placeholder="End time (UTC)" />
                </div>

 </div>

 <div style={{ marginBottom:"15px", marginTop:"5px"}}  className="form-group">
                    <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Liquidity lockup (minutes)</label>
                    <input  type="text" className="form-control" placeholder="Liquidity lockup (minutes)" />
                </div>


  </div>
                </div>
            </div>
        </div>
    </div>
    
    <button onClick={handlePrevStep} style={{ backgroundColor: '#ccc', color: '#000', padding: '0.5em 1em',  borderRadius: '0.25em',border: 'none' }} className="prevBtn btn-lg pull-left" > Back </button>
    <button onClick={handleNextStep} style={{ backgroundColor: '#f8567f', color: '#fff', padding: '0.5em 1em',  borderRadius: '0.25em',border: 'none' }} className="nextBtn btn-lg pull-right" > Next </button>

  </div>
);
const Step3 = ({ handleNextStep, handlePrevStep }) => (
  <div>
    <h2 style={{fontSize:"20px",marginTop:"10px", marginBottom:"5px"}}>Step 3 - Add Additional Info</h2>
    <h3 style={{ color:"grey", marginBottom:"10px"}}>Let people know who you are</h3>
    <div   className="row setup-content" id="step-3">
        <div   className="col-xs-12">
            <div   className="col-md-12">
            <div style={{display:"flex", flexDirection:"row"}} >
  
  <div style={{ marginBottom:"15px", marginTop:"5px"}}  className="form-group">
 
       <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Logo URL*</label>
       <input  type="text" className="form-control" placeholder="Logo URL*" />
   </div>

   <div style={{ marginBottom:"15px",marginTop:"5px",}}   className="form-group">
       <label style={{ marginLeft:"55px",marginBottom:"15px",marginTop:"15px",}}  className="control-label">Website</label>
       <input  style={{ marginLeft:"55px"}}  type="text" className="form-control" placeholder="Website" />
   </div>

</div>

<div style={{display:"flex", flexDirection:"row"}} >
  
  <div style={{ marginBottom:"15px", marginTop:"5px"}}  className="form-group">
 
       <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Facebook</label>
       <input  type="text" className="form-control" placeholder="Facebook*" />
   </div>

   <div style={{ marginBottom:"15px",marginTop:"5px",}}   className="form-group">
       <label style={{ marginLeft:"55px",marginBottom:"15px",marginTop:"15px",}}  className="control-label">Twitter</label>
       <input  style={{ marginLeft:"55px"}}  type="text" className="form-control" placeholder="Twitter" />
   </div>

</div>

<div style={{display:"flex", flexDirection:"row"}} >
  
  <div style={{ marginBottom:"15px", marginTop:"5px"}}  className="form-group">
 
       <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Github</label>
       <input  type="text" className="form-control" placeholder="Github" />
   </div>

   <div style={{ marginBottom:"15px",marginTop:"5px",}}   className="form-group">
       <label style={{ marginLeft:"55px",marginBottom:"15px",marginTop:"15px",}}  className="control-label">Telegram</label>
       <input  style={{ marginLeft:"55px"}}  type="text" className="form-control" placeholder="Telegram" />
   </div>

</div>


<div style={{display:"flex", flexDirection:"row"}} >
  
  <div style={{ marginBottom:"15px", marginTop:"5px"}}  className="form-group">
 
       <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Instagram</label>
       <input  type="text" className="form-control" placeholder="Instagram" />
   </div>

   <div style={{ marginBottom:"15px",marginTop:"5px",}}   className="form-group">
       <label style={{ marginLeft:"55px",marginBottom:"15px",marginTop:"15px",}}  className="control-label">Discord</label>
       <input  style={{ marginLeft:"55px"}}  type="text" className="form-control" placeholder="Discord" />
   </div>

</div>


<div style={{display:"flex", flexDirection:"row"}} >
  
  <div style={{ marginBottom:"15px", marginTop:"5px"}}  className="form-group">
 
       <label style={{ marginBottom:"15px",marginTop:"15px",}}  className="control-label">Reddit</label>
       <input  type="text" className="form-control" placeholder="Reddit" />
   </div>

   <div style={{ marginBottom:"15px",marginTop:"5px",}}   className="form-group">
       <label style={{ marginLeft:"55px",marginBottom:"15px",marginTop:"15px",}}  className="control-label">Youtube Video</label>
       <input  style={{ marginLeft:"55px"}}  type="text" className="form-control" placeholder="Youtube Video" />
   </div>

</div>
<div   className="form-group">
                    <label style={{ marginBottom:"15px"}} className="control-label">Description</label>
                    <input style={{ height:"150px"}} type="text" className="form-control" />
                </div>
            </div>
        </div>
    </div>
    <button onClick={handlePrevStep} style={{ backgroundColor: '#ccc', color: '#000', padding: '0.5em 1em',  borderRadius: '0.25em',border: 'none' }} className="prevBtn btn-lg pull-left" > Back </button>
    <button onClick={handleNextStep} style={{ backgroundColor: '#f8567f', color: '#fff', padding: '0.5em 1em',  borderRadius: '0.25em',border: 'none' }} className="nextBtn btn-lg pull-right" > Next </button>
  </div>
);

const Step4 = ({ handlePrevStep }) => (
  <div>
    <h2 style={{fontSize:"20px",marginTop:"10px", marginBottom:"5px"}}>Step 4 - Finish</h2>
    <h3 style={{ color:"grey", marginBottom:"10px"}}>Review your information</h3>
    <div   className="row setup-content" id="step-4">
        <div   className="col-xs-12">
            <div   className="col-md-12">
               
                <div   className="form-group">
                    <label   className="control-label">Skills</label>
                    <input  type="text"     className="form-control" placeholder="Enter skill or skills" />
                </div>
                <div   className="form-group">
                    <label   className="control-label">Comment</label>
                    <textarea   className="form-control" placeholder="Enter Comment" ></textarea>
                </div>
            </div>
        </div>
    </div>
    
    <button onClick={handlePrevStep} style={{ backgroundColor: '#ccc', color: '#000', padding: '0.5em 1em',  borderRadius: '0.25em',border: 'none' }} className="prevBtn btn-lg pull-left" > Back </button>
    <button style={{ backgroundColor: '#f8567f', color: '#fff', padding: '0.5em 1em',  borderRadius: '0.25em',border: 'none' }} className="prevBtn btn-lg pull-right" > Submit </button>
  </div>
);

export default MultiStepForm;