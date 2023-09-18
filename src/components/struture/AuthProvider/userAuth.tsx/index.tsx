import { useEffect, useState } from 'react';
import { apiService } from '../../../../services/api.service';

const TOKEN = 'star-wars';

export function useAuth(): IUseAuth {

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);

    if (token) {
      apiService.defaults.headers.Autorization = `Bearer ${token}`;
      // apiService.interceptors.request.use((config) => {

      //   if (token)
      //     config.headers.Authorization = `Bearer ${token}`;

      //   return config
      // })
      setAuthenticated(true)
    }

    setLoading(false);
  }, []);

  function saveToken(token: IToken) {
    localStorage.removeItem(TOKEN);
    localStorage.setItem(TOKEN, token.access_token);
    apiService.defaults.headers.Autorization = `Bearer ${token.access_token}`;

    setAuthenticated(true);
    setUserId(token.userId);
  }

  async function removeToken() {
    await localStorage.removeItem(TOKEN);

    apiService.defaults.headers.Autorization = ``;

    setAuthenticated(false);
    setUserId('');
  }

  return { authenticated, loading, userId, saveToken, removeToken };
}

export interface IUseAuth {
  authenticated: boolean;
  loading: boolean;
  userId: string;
  saveToken: (token: IToken) => void;
  removeToken: () => void;
}