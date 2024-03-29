import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from "../assets/login.png";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Check if the local storage is empty (no token)
    const token = localStorage.getItem('token');

    if (token) {
      // Local storage is not empty, redirect to the dashboard page
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Efffffffff")
    
      const response = await axios.post('http://localhost:3000/login', { email, password });

      const { token } = response.data;

      document.cookie = `token=${token}; path=/`;

      toast.success("Login successful");


    }
 

  return (
    <section className='flex justify-center items-start overflow-hidden w-full text-white font-extrabold'>
      <div className='hidden md:flex w-[55%] bg-slate-900 h-screen rounded-3xl overflow-hidden'>
        <img src={img} alt='React Logo' className='w-full h-[99vh] object-contain' />
      </div>
      <main className="mx-auto flex min-h-screen w-full md:w-[45%] items-center justify-center text-white" dir='rtl'>
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-gray-300 text-4xl font-extrabold">تسجيل الدخول </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="text"
              id="email"
              placeholder="ادخل البريد الإلكتروني"
              className="w-full border-none bg-transparent outline-none placeholder:text-sm placeholder:font-semibold focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <label htmlFor="password">كلمة المرور</label>
            <input
              type="password"
              id="password"
              placeholder="ادخل كلمة المرور"
              className="w-full border-none bg-transparent outline-none placeholder:text-sm placeholder:font-semibold focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400" onClick={handleSubmit}>
            تسجيل الدخول
          </button>
          <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"> ملحوظه هذا التسجيل للمسؤولين فقط</a>
        </section>
      </main>
    </section>
  );
}

export default Login;
