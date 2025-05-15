import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Errorpage from './Errorpage';


const Signup = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)

   const navigate= useNavigate();
    const [values, setValues] = useState({username:"",email:"",
    password:""});
    const change=(e)=>{
        const{name,value}=e.target
        setValues({...values,[name]:value})
    }

    const handleSubmit= async()=>{
        try{
         const res=   await axios.post("http://localhost:1000/api/v1/sign-up",values)
navigate("/login");
console.log(res.data)
        } catch(error){
            toast.error(error.response.data.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
               
                })
        }
    }
  return (<>{isLoggedIn?<Errorpage/>:
  <div className="min-h-screen  bg-green-300 flex items-center justify-center">
  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
{/* AUDIFY LINK */}
<Link
  to="/"
  className="absolute mt-20 top-4 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-800 tracking-wide animate-fade-in-up drop-shadow-lg"
>
  AUDIFY
</Link>

<div className="w-[72%] h-[100%] bg-green-200 bg-opacity-60 rounded-2xl shadow-[2px_2px_30px_rgba(66,57,238,0.2)] flex items-center justify-center relative overflow-hidden bg-cover bg-center" >
  {/* Left Sign Up Form */}
  <div className="w-1/2  bg-green-200 flex flex-col items-center mt-8 max-[1080px]:w-full">
    <h1 className="text-[rgba(30,30,30,1)] text-2xl font-semibold mb-4 font-[Calibri] max-[420px]:text-center">
      Hello, friend!
    </h1>

    {/* Input Fields */}
    {[
{ name: "username", type: "text", placeholder: "Name", icon: "/user.png" },
{ name: "email", type: "email", placeholder: "Email", icon: "/email.png" },
{ name: "password", type: "password", placeholder: "Password", icon: "/password.png" },
].map((input, i) => (
<div key={i} className="...your classes here...">
<img src={input.icon} alt="icon" className="h-5 mr-4 py-4"  />
<input
name={input.name}
type={input.type}
placeholder={input.placeholder}
value={values[input.name]}
onChange={change}
required
className="w-full h-full outline-none  py-4  px-12  rounded-4xl border-none text-sm bg-white"
/>
      </div>
    ))}

    {/* Submit Button */}
    <button className="mt-4 w-[200px] h-[40px] text-white font-semibold text-sm rounded-full bg-gradient-to-tr from-[#3B02ED] to-[#8E2AE0] shadow-[2px_6px_16px_rgba(66,57,238,0.3)] hover:scale-105 transition-all duration-300" onClick={handleSubmit}>
      CREATE ACCOUNT
    </button>

    {/* Sign in Prompt */}
    <p className="mt-3 text-[#050504] text-sm">
      Already have an account? <Link to="/login" className='font-bold'>Login</Link>
    </p>
  </div>

  {/* Right Side Text (hidden on small screens) */}
  <div className="w-1/2    h-full flex flex-col justify-center items-center text-center px-8 max-[1080px]:hidden">
    <h1 className="text-[#2D2C2C] text-lg font-bold mb-2">Glad to see you!</h1>
    <p className="text-sm font-normal text-gray-700">
      Welcome, please fill in the blanks for sign up
    </p>
  </div>
</div>
</div>}</>
   
  );
};

export default Signup;
