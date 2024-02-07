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
          navigate('/exploreModels');
       
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
    <div  className="h-screen flex justify-center items-center border-l-8 border-lightPurple bg-blackBackground2 text-white">
      <div className="w-1/3 flex flex-col px-16 py-20 rounded-xl">
        <div className="flex gap-2 items-center ">
          <img src="src\assets\img\logo.png" alt="logo" className="w-16"/>
          <h1 className="text-3xl font-font2">3dPolyPixel</h1>          
        </div>
        <span className="h-0.5 bg-white w-1/6 my-20 rounded"></span>
        <div>          
          <h1 className="text-6xl font-font2 font-normal">A 3d marketplace to find any model you need</h1>          
        </div>
      </div> 
      <form onSubmit={handleSubmit} className="w-1/3 flex flex-col bg-gray px-16 py-20 rounded-xl">  
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