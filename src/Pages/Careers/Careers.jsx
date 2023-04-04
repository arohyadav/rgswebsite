import React, { useState } from 'react';

const Careers = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [currentctc, setCurrentCTC] = useState('');
  const [resume, setResume] = useState(null);
  const [agree, setAgree] = useState(false);
  const [formError, setFormError] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file.size < 1000000) { // minimum file size required
      setResume(file);
      setFormError('');
    } else {
      setFormError('File size must be less than 1 MB.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (agree) {
      // credentials validation goes here
      console.log(`Full Name: ${fullName}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
      console.log(`Resume: ${resume.name}`);
      // submit application logic goes here
    } else {
      setFormError('You must agree to the Privacy Policy & Terms of Use.');
    }
  };

  return (
    <div className="career-page">
      <h1>Careers</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="company">Company*</label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          {errors.company && <span className="error">{errors.company}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="currentctc">Current CTC*</label>
          <input
            type="tel"
            id="currentctc"
            value={currentctc}
            onChange={(event) => setCurrentCTC(event.target.value)}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="currentctc">Expected
           CTC*</label>
          <input
            type="tel"
            id="currentctc"
            value={currentctc}
            onChange={(event) => setCurrentCTC(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Resume:</label>
          <input
            type="file"
            id="resume"
            onChange={handleFileUpload}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={(event) => setAgree(event.target.checked)}
            required
          />
          <label htmlFor="agree">
            I agree to the Privacy Policy &amp; Terms of Use of this website.
          </label>
        </div>
        <div className="form-group">
          <button type="submit">Submit Application</button>
        </div>
        <div className="form-error">{formError}</div>
      </form>
    </div>
  );
};

export default Careers;
