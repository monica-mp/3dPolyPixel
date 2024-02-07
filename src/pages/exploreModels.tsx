import { useAuth } from "../context/authContext"
import SideMenu from "../components/sideMenu/sideMenu"
import Navbar from "../components/navbar/navbar"

const ExploreModels = () => {
  const { logout, loading} = useAuth()
  

  const handleLogout = async () => {
    await logout()
   
  }

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="bg-blackBackground h-screen w-screen  pr-6 pt-2">
      <Navbar/>      
      <SideMenu/>
      <button onClick={handleLogout}>Logout</button>
    </div>
    
  )
}

export default ExploreModels