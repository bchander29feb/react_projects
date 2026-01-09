import { useState } from "react"
const SimpleForm = () => {
const  [formdata, setFormdata] = useState({
    firstname : '',
    email : '',
    password : '',
    phone : ''
  })

  const [error, setError] = useState({})

  const handleChange = (e) => {
    setFormdata({...formdata, [e.target.name]: e.target.value  })
  }

 // validation 

  const chekValid = () => {
    
    let temerror = {}
    let isValid =  true

    // firstname 
    if(!formdata.firstname){
        temerror.firstname = " Firstname is reuired "
        isValid = false
    }

    // email 
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!formdata.email){
        temerror.email = 'Email is required !'
        isValid = false
    }
    else if(!emailregex.test(formdata.email)){
        temerror.email = 'emnail should be in correct formate'
        isValid = false
    }

    // password

    if(!formdata.password){
        temerror.password = 'password is reuired '
        isValid = false
    }
    else if(formdata.password.length < 10){
        temerror.password = "password should be minmun 8 characters"
        isValid = false
    }

    // phone 

    let phoneRegex =/^\+?[1-9][0-9]{7,14}$/;

   if(!formdata.phone){
    temerror.phone = "phone is required"
    isValid = false
   }
    else if(formdata.phone.length < 10){
        temerror.password = "phone must be at least 10 chracters"
        isValid = false
    }

    else if(!phoneRegex.test(formdata.phone)){
        temerror.password = "phone must be at least 8 chracters"
        isValid = false
    }

   setError(temerror)
   return isValid

  }

  const handleSubmitForm = (e) => {
   e.preventDefault()

    if(chekValid()){
        alert('form submited successfully !')

        setFormdata({
        firstname : '',
        email : '',
        password : '',
        phone : ''
        });

        console.log(formdata)
    }



  }

  return (
    <>
       
        {/* {error &&  <p> somthing went wrong : </p> } */}

      <p>  {error.firstname}</p>
       <p>  {error.email}</p>
        <p>  {error.password}</p>
         <p>  {error.phone}</p>

       <h1> Form validation : </h1>
   
        <form onSubmit={handleSubmitForm}>
        <div>
            <label htmlFor="firstname"> Name : </label>
          <input autoComplete="off" type="text" name='firstname' value={formdata.firstname} 
           onChange={handleChange} id='firstname'
           />
        </div>
        <div>
            <label htmlFor="email"> Email : </label>
          <input autoComplete="off" type="email" name='email' value={formdata.email} 
           onChange={handleChange} id='email'
           />
        </div>
          <div>
            <label htmlFor="password"> Password : </label>
          <input autoComplete="off" type="password" name='password' value={formdata.password} 
           onChange={handleChange} id='password'
           />
        </div>
          
          <div>
          <label htmlFor="phone"> Phone : </label>
          <input autoComplete="off" type="tel" name='phone' value={formdata.phone} 
           onChange={handleChange} id='phone'
           />
        </div>
    
          <button type="submit">  Submit </button>

        </form>
      


    </>)

}

export default SimpleForm