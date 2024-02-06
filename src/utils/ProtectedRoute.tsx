import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext';

function ProtectedRoute({ children }: { children: JSX.Element }) {

    const {user, loading} = useAuth();


    if (loading) {
        return <h1>Loading...</h1>
    }
    if (!user) {
        return <Navigate to="/login" />
    }

    return <>{children}</>;
}
export default ProtectedRoute