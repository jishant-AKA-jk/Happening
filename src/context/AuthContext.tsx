import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_STORAGE_KEY} from '../utils/appConstants';

type IAuthContext = {
  isLoggedIn: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const AuthContext = createContext<IAuthContext | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const storedAuthState = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        if (storedAuthState) {
          setIsLoggedIn(JSON.parse(storedAuthState));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthState();
  }, []);

  const login = async () => {
    try {
      setIsLoggedIn(true);
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(true));
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      setIsLoggedIn(false);
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthProvider not found');
  }

  return context;
};
