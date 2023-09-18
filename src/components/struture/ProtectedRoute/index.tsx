import { PropsWithChildren, useContext } from 'react';
import { ContextAuth } from '../AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { authenticated, loading } = useContext(ContextAuth);

  return authenticated && !loading ? <Outlet /> : <Navigate to={'/'} />
}