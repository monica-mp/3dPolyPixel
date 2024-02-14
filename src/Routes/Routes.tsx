import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../pages/login'

import Welcome from '../pages/welcome'
import Signup from '../pages/signup'
import ExploreModels from '../pages/exploreModels'
import ProtectedRoute from '../utils/ProtectedRoute'

export function Rutes (): JSX.Element {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />        
        <Route path="/login" element={<Login />} />        
        <Route path="/signup" element={<Signup />} />        
        <Route path="/models" element={
        <ProtectedRoute>
          <ExploreModels />
        </ProtectedRoute>
        } />      
      </Routes>
    </BrowserRouter>
  )
}

