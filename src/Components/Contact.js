import React,{useState} from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";

import "../Allcss/Contact.css";

function Contact() { 
  
  const [formValues , setFormVales] = useState ({
       name:"" ,
       email:"" , 
       password:""})
 
  const [formErrors ,setFormErrors] = useState ({});
  const [isSubmitted ,setIsSubmitted] = useState (false);


    const handleChange = (e) => {
         const {name , value} = e.target;
         setFormVales({...formValues,[name]:value });
    };

    const validate = () => {
      const errors = {};

      if(!formValues.name.trim()) {
        errors.name = "name is required";
      }

      if(formValues.email.trim()){
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formValues.email)){
         errors.email = "Email is invalid";
      }

      if (!formValues.password){
         errors.password = "Password is required";
      } else if (formValues.password.length < 6) {
        errors.password = "password must be at least 6 characters long";
      }
      return errors;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validate();
      setFormErrors(errors);
  
      if (Object.keys(errors).length === 0) {
        setIsSubmitted(true);
        console.log("Form submitted successfully" , formValues);
      }  else {
        setIsSubmitted(false);
      }
    };
   

    return (
    <section className="contact">
       <div className="content">
           <h2>Contact Me</h2>
            <span> Let' s Talk About Ideas</span>

   {isSubmitted && <div className="alert alert-success">Form submitted successfully!</div>}

       </div>
      <div className="container-con">
        <div className="contactInfo">
        <div className="box">
            <div className="icon"> <FaRegMap /></div>
              <div className="text">
                <h3>Address</h3> 
                <p> North Tower, Toronto , Canada</p>
              </div>
        </div>

        <div className="box">
            <div className="icon"><FaRegUser /></div>
              <div className="text">
                <h3>Freelance</h3>
                <p> Available Right Now </p>
              </div>
        </div>

        <div className="box">
            <div className="icon"><FaRegEnvelope /></div>
              <div className="text">
                <h3>Email</h3>
                <p>sayaliwalde25@gmail.com</p>
              </div> 
            </div>

        <div className="box">
            <div className="icon"><FaRegAddressBook /></div>
              <div className="text">
                <h3>Phone</h3>
                <p>+1 900 - 900 - 90000</p>
              </div> 
          </div>
       </div>
       <section className='contact'>
      <form  onSubmit={handleSubmit}>
          <div className='input-box'>
             <label>Name</label> 
             <input 
              type='text'
              className= "field"
              name="name"
              value={formValues.name}
              onChange={handleChange}
               />
 {formErrors.name && <p style={{color:"red"}}>{formErrors.name}</p>}

         </div>    
          <div className='input-box'>
             <label>Email</label>
             <input
                type='email'
                className= "field"           
                name="email"
                value={formValues.email}
                onChange={handleChange}
             />
 {formErrors.email && <p style={{color:"red"}}>{formErrors.email}</p>}
      </div>

          <div className='input-box'>
             <label>password</label>
             <input
              type='password'
               className= "field-message"
                name="password"
              value={formValues.password}
              onChange={handleChange}
            />
{formErrors.password && <p style={{color:"red"}}>{formErrors.password}</p>}
         </div>   
          
          <button type='submit'>Send Message</button>  
      </form>
    {isSubmitted && <p style={{color:"green"}}>Form submitted successfully!</p>}

    </section>

      </div> 
    </section>
  );
}

export default Contact;
