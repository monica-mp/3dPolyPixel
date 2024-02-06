
import { useAuth } from "../context/authContext"

const ExploreModels = () => {
  const { logout, loading} = useAuth()
  

  const handleLogout = async () => {
    await logout()
   
  }

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div>exploreModels</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
    
  )
}

export default ExploreModels