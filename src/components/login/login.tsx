/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import {useAuth} from "../../context/authContext"
import { Link, useNavigate } from "react-router-dom"


function Login() {

    const [user, setUser] = useState({        
        email: '',
        password: '',
    })

    const [error, setError] = useState<string>();
    const {login} = useAuth();
    const navigate = useNavigate();
    const handleChange = ({target: {name, value}}: {target: {name: string, value: string}}) => {       
        setUser({...user, [name]: value});
      }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
          await login(user.email,user.password);          
          navigate('/models');
       
       } catch (error:any) {
           
        if(error.code === "auth/user-not-found"){
          setError("User not found");
        }
        if(error.code === "auth/invalid-credential"){
          setError("Wrong password");
        }
        if(error.code === "auth/too-many-requests"){
          setError("Too many requests");
        }
        if(error.code === "auth/invalid-email"){
          setError("Invalid email");
        }
        if(error.code === "auth/missing-password"){
          setError("Missing password");
        }
        if (error.code === 'auth/email-already-in-use') {
          setError('Email already in use');
        }
      
        if (error.code === 'auth/weak-password') {
            setError('The password must contain a minimum of 6 characters');
        }
      }       
    }
      


  return (
    <div  className="h-screen flex flex-col lg:flex-row justify-evenly py-20 items-center border-l-8 border-lightPurple bg-blackBackground text-white gap-10 xl:px-52 lg:px-32 md:py-0">
      <div className="w-2/3 h-1/4 justify-between md:justify-evenly flex flex-col rounded-xl xl:h-2/4 lg:h-2/5 md:w-2/3 md:mt-14 gap-1">
        <div className="flex gap-4 items-center ">
          <img src="src\assets\img\logo.png" alt="logo" className="w-10"/>
          <h1 className="text-xl font-font2">3dPolyPixel</h1>          
        </div>
        <span className="h-0.5 bg-white w-2/6 rounded"></span>
        <div>          
          <h1 className="text-xl font-font2 font-normal md:text-4xl lg:text-5xl">A 3d marketplace to find any model you need</h1>          
        </div>
      </div> 
      <form onSubmit={handleSubmit} className="w-2/3 h-/5 flex flex-col bg-gray px-10 py-16 rounded-xl lg:py-20 lg:px-16 md:w-2/3 md:py-16 md:px-16">  
        <h1 className="text-3xl font-bold font-font2 mb-8">Login</h1>      
        
        <input type="text" name="email" onChange={handleChange} placeholder="example@gmail.com"  className="h-12 bg-black p-4 rounded focus:outline-none focus:ring focus:ring-lightPurple"  />
        <span className="h-2 bg-gradient-to-r from-purple to-lightPink mb-6"></span>
        
        <input type="password" name="password" onChange={handleChange} placeholder="******" className="h-12 bg-black p-4 rounded focus:outline-none focus:ring focus:ring-lightPurple"/>
        <span className="h-2 bg-gradient-to-r from-purple to-lightPink"></span>
        {error && <p className="text-lightPink mt-2">{error}</p>}         
        <button
          className="btn py-2 px-6 bg-gradient-to-r from-purple to-pinkBorder mb-4 text-xl text-white font-font2  mt-16"
          type="submit"
        >
          LOGIN
        </button>
        <Link to="/signup">Don't have an account? <a className="text-lightPink">Sign up</a></Link>
      </form>
    </div>    
    
  )
}

export default Login