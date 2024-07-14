import React, { useState } from 'react'

const SignUp = () => {
  const [Fname,setFname]= useState("")
  const [Lname,setLname]= useState("")
  const [Email,setEmail]= useState("")
  const [Password,setPassword]= useState("")
  const [showPassword,setShowPassword]=useState(true)

  const PasswordVisiblity=()=>{
    setShowPassword(!showPassword)
  }

  const handleSignUp=(e)=>{
    e.preventDefault()
    setFname("")
    setLname("")
    setEmail("")
    setPassword("")
  }
  return (
    <div>
        <form  onSubmit={handleSignUp}>
            <input type="text"
            placeholder='Enter the First Name'
            value={Fname}
            required
            onChange={(e)=>setFname(e.target.value)} />
            <input type="text"
            placeholder='Enter the Last Name'
            value={Lname}
            required
            onChange={(e)=>setLname(e.target.value)} />
            <input type="email"
            placeholder='Enter the Email'
            value={Email}
            required
            onChange={(e)=>setEmail(e.target.value)} />
            <div>

            <input type="pasword"
            placeholder='Enter the Password'
            value={Password}
            required
            onChange={(e)=>setPassword(e.target.value)}
            
            />
            <button onClick={()=>PasswordVisiblity}>Show</button>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp