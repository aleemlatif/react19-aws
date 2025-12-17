import { Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function ProtectedRoute({ children }) {
  const { route } = useAuthenticator((context) => [context.route]);
  
  if (route !== 'authenticated') {
    return <Navigate to="/login" />;
  }
  
  return children;
}