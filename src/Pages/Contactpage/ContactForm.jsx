import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(null);
  const [help, setHelp] = useState('');
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let errors = {};
    let isValid = true;

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!company.trim()) {
      errors.company = 'Company name is required';
      isValid = false;
    }

    if (!jobTitle.trim()) {
      errors.jobTitle = 'Job title is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (phone && !/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number is invalid';
      isValid = false;
    }

    if (!help.trim()) {
      errors.help = 'Please let us know how we can help you';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const navigate = useNavigate();

  const handleContact = async () => {
    try {
      const savedUser = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first:firstName?.first,
          last:lastName?.last,
          company:company?.company,
          job:jobTitle?.job,
          email_id:email?.email_id,
          phoneno:phone?.phoneno,
          helpyou:help?.helpyou

        }),
      });

      const formatResponse = await savedUser.json();

      //Error handling
      if (!formatResponse?.isSuccess) {
        throw new Error(formatResponse?.message);
      }

      alert(formatResponse?.message);
      navigate("/login");
    } catch (err) {
      alert(err);
    }
  };



  

  return (
    <div className='contact-all-details'>
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form         
        onSubmit={(event) => {
          event.preventDefault();
          handleContact()
        }}>
        <div className="form-group">
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
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
          <label htmlFor="jobTitle">Job Title*</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          {errors.jobTitle && 
<span className="error">{errors.jobTitle}</span>}
</div>

<div className="form-group">
      <label htmlFor="email">Email*</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <span className="error">{errors.email}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone number(optional)</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <span className="error">{errors.phone}</span>}
    </div>


<br/>
    <div className="form-group">
      <label htmlFor="help"></label> 
      <textarea
        id="help"
        name="help" placeholder='How can we help you?'
        value={help}
        onChange={(e) => setHelp(e.target.value)}
      ></textarea>
      {errors.help && <span className="error">{errors.help}</span>}
    </div>

    <div className="form-group">
      <button type="submit">Submit</button>
    </div>
  </form>
</div>
</div>
);
};

export default ContactForm;

