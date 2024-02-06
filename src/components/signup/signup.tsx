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
    const {signup} = useAuth();
    const navigate = useNavigate();
    const handleChange = ({target: {name, value}}: {target: {name: string, value: string}}) => {       
        setUser({...user, [name]: value});
      }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
          await signup(user.email,user.password);          
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
    <div>
        
        <form onSubmit={handleSubmit}>
        
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleChange}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange}/>
        {error && <p>{error}</p>}
        <button>Sign up</button>
        
        <button
          className="btn btn-outline text-white  font-bold whitespace-nowrap bg-orange-400 justify-center  mt-7 px-16  rounded-md max-md:max-w-full max-md:px-5"
          type="submit"
        >
          Signup
        </button>
        <Link to="/login">Already have an account? Login</Link>
    </form>
    

    </div>
    
  )
}

export default Login