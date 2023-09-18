import { PropsWithChildren, createContext } from 'react';
import { IUseAuth, useAuth } from './userAuth.tsx';

export const ContextAuth = createContext({} as IUseAuth);

export function AuthProvider({ children }: PropsWithChildren) {

  const AUTH = useAuth();

  return (
    <ContextAuth.Provider value={AUTH}>
      {children}
    </ContextAuth.Provider>
  )
}