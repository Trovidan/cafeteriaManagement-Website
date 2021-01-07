import React,{useEffect} from 'react';

// formik validation
import {Formik,Form,Field,ErrorMessage} from 'formik';

// Utility functions for checking password
export const containsDigit = (val) => /[0-9]+/i.test(val);
export const containsCapitalLetters = (val) => /[A-Za-z]+/i.test(val);
export const containSpecialCharacters = (val) => /@|!|@|#|\$|%|\^|&|\*|\?/i.test(val);

const Register = () => {

  // initial values for formik validation
  const initialValues ={
    firstName:'',
    lastName:'',
    email:'',
    password1:'',
    password2:''
  }

  const [submit,setSubmit] = React.useState(false)
  // function containg regex for email validation
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }



  // validate function for form validaton
  const validate = (values)=>{
    let errors ={}

    if(!values.firstName){
      errors.firstName='*Required'
    }

    
    if(!values.lastName){
      errors.lastName='*Required'
    }

    
    if(!values.email){
      errors.email='*Required'
    } else if(!validateEmail(values.email) ){
      errors.email='Invalid email'
    }

    
    if(!values.password1){
      errors.password1='*Required'
    }else if(values.password1.length <6){
      errors.password1='*password length must be greater than 6'

    }else if(!containSpecialCharacters(values.password1))
    {
      errors.password1='*password must contain special characters'
    }else if(!containsCapitalLetters(values.password1)){
      errors.password1='*password must contain captial letters'
    }else if(!containsDigit(values.password1)){
      errors.password1='*password must contain numbers'
    }

    
    if(!values.password2){
      errors.password2='*Required'
    }else if(values.password1!==values.password2)
    {
      errors.password2='*passwors are not same'
    }

    return errors
  }


  // Invisible Recaptcha's Site Key
  const siteKeyInvisible = '6LcJXh8aAAAAAJy3WOYOt4GU99HCkqjWuVnNTMvL';

  // Recaptcha call-back functions
  const verifyRecaptcha = ()=>{
  //  alert('verification done');
  console.log('verified');
    window.submitform();
  }

  const errorRecaptcha = ()=> {
    console.log('error relted to recpatcha');
  }
  // binding funtion to window object
  window.verifyRecaptcha = verifyRecaptcha;
  window.errorRecaptcha = errorRecaptcha;

  //  function for handling submit
  const handleSubmit = values => {
      console.log('submitted');
  }

  useEffect(()=>{
    let scriptRecaptcha = document.createElement('script');
     scriptRecaptcha.src="https://www.google.com/recaptcha/api.js" ;
     scriptRecaptcha.async=true;
     scriptRecaptcha.defer=true;

      document.body.appendChild(scriptRecaptcha);

    })

    return(
    
    <div>
       
    <Formik
      initialValues = {initialValues}
      onSubmit ={handleSubmit}
      validate ={validate}
    >

    {formik => {
      // {console.log(formik);}
      window.submitform = ()=>{
        formik.submitForm();
      }
      return(
        <div className="w-25 mx-auto mt-5 mh-100 border border-dark p-3">
        <h4 className="text-center">Sign Up</h4>
              
        <form onReset={formik.handleReset} id='registrationForm' action="#" onSubmit={formik.handleSubmit} >

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <Field type="text" className="form-control" 
              id="firstName"
              name="firstName"  
              placeholder="Nikhil"
              />
              <ErrorMessage name='firstName'>
              { errorMsg =><small className='text-danger'> {errorMsg} </small> }
              </ErrorMessage>
            </div>
            
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" className="form-control" 
              id="lastName" 
              name="lastName" 
              placeholder="Pareek"
              />   
              <ErrorMessage name='lastName'>
              { errorMsg =><small className='text-danger'> {errorMsg} </small> }
              </ErrorMessage>     
              </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="text" className="form-control"
            id="email" name="email"
            placeholder="nikhilPareek33@gmail.com"/>

            <ErrorMessage name='email'>
            { errorMsg =><small className='text-danger'> {errorMsg} </small> }
            </ErrorMessage>
          </div>
        
          <div className="form-group">
            <label htmlFor="password1">Password</label>
            <Field type="password" className="form-control"
            id="password1"
            name="password1"
            placeholder="Atleast 6 characters"
            />
            <ErrorMessage name='password1'>
            { errorMsg =><small className='text-danger'> {errorMsg} </small> }
            </ErrorMessage>
          </div>

          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <Field type="password" className="form-control"
            id="password2" 
            name="password2" 
            placeholder="Confirm password"
            
            />
            <ErrorMessage name='password2'>
            { errorMsg =><small className='text-danger'> {errorMsg} </small> }
            </ErrorMessage>
          </div>

          <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-primary g-recaptcha" 
            disabled={!(formik.isValid && formik.dirty)}
            data-sitekey={siteKeyInvisible}
            data-callback='verifyRecaptcha'
            data-badge='bottomright' 
            data-error-callback = 'errorRecaptcha'
          >
            Sign Up
          </button>
          </div>
        </form>
        
      </div>

        )
      }}
    
    </Formik>
    
    </div>
  );
}

export default Register;
