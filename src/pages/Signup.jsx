import React, { useState } from 'react'
import { signUp } from '../functions/auth';

export default function Signup() {
  const [ firstName, setFirstName] = useState('');
  const [ lastName, setLastName] = useState('');
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const [ confirmPassword, setConfirmPassword] = useState('');

  const userData = {
    firstName,
    lastName,
    email,
  }

  const handleCreateUser = () => {
    if (password !== confirmPassword) {
      alert('Passwords no corresponden')
      return
    } else if (!email){
      alert('Please enter email address')
      return
    }else if (!password){
      alert('Please enter password')
      return
    } else {
      signUp(email, password, userData)
    }
  };

  return (
    <>
    <h1 className='text-3xl font-bold text-center' >Register</h1>
    <div className='grid grid-cols2 gap-4 max-w-5xl mx-auto'>
      <input type="text" placeholder="Nombre"
      onChange={(e) => {
        setFirstName(e.target.value);
      }}
       />
      <input type="text" placeholder="Apellido" 
      onChange={(e) => {
        setLastName(e.target.value);
      }}
      />
      <input type="email" placeholder="email" 
      onChange={(e) => {
        setEmail(e.target.value);
      }}
      />
      <input type="password" placeholder="Password" 
      onChange={(e) => {
        setPassword(e.target.value);
      }}
      />
      <input type="password" placeholder="Confirma Password" 
      onChange={(e) => {
        setConfirmPassword(e.target.value);
      }}
      />
      <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
      onClick={handleCreateUser}
      >Sign Up</button>
    </div>
    </>
  )
}
