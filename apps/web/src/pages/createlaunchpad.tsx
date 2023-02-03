import React, { useState } from 'react';
import Head from 'next/head'
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
        Step {step} of 3
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
    <h2>Step 1</h2>
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
    <button type="button" onClick={handleNextStep}>Next</button>
  </div>
);

const Step2 = ({ handleNextStep, handlePrevStep }) => (
  <div>
    <h2>Step 2</h2>
    <div   className="row setup-content" id="step-2">
        <div   className="col-xs-12">
            <div   className="col-md-12">
                <div   className="form-group">
                    <label className="control-label">Company Name</label>
                    <input  type="text"     className="form-control" placeholder="Enter Company Name" />
                </div>
                <div   className="form-group">
                    <label   className="control-label">Company Address</label>
                    <input type="text"     className="form-control" placeholder="Enter Company Address"  />
                </div>
            </div>
        </div>
    </div>
    <button type="button" onClick={handlePrevStep}>Prev</button>
    <button type="button" onClick={handleNextStep}>Next</button>
  </div>
);
const Step3 = ({ handleNextStep, handlePrevStep }) => (
  <div>
    <h2>Step 3</h2>
    <div   className="row setup-content" id="step-3">
        <div   className="col-xs-12">
            <div   className="col-md-12">
                <div   className="form-group">
                    <label   className="control-label">Company Name</label>
                    <input  type="text"     className="form-control" placeholder="Enter Company Name" />
                </div>
                <div   className="form-group">
                    <label   className="control-label">Company Address</label>
                    <input  type="text"     className="form-control" placeholder="Enter Company Address"  />
                </div>
            </div>
        </div>
    </div>
    <button type="button" onClick={handlePrevStep}>Prev</button>
    <button type="button" onClick={handleNextStep}>Next</button>
  </div>
);

const Step4 = ({ handlePrevStep }) => (
  <div>
    <h2>Step 4</h2>
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
    <button type="button" onClick={handlePrevStep}>Prev</button>
    <button type="submit">Submit</button>
  </div>
);

export default MultiStepForm;