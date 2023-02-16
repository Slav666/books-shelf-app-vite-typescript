import axios from 'axios';
import LoginForm from '../components/bookshelf/Login-Register-Form';
import { GenericResponse, ILoginResponse, IUserResponse } from './types';

const BASE_URL = 'http://localhost:8000/api/';

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const loginUserFn = async (user: LoginForm) => {
  const response = await authApi.post<ILoginResponse>('auth/login', user);
  return response.data;
};

export const verifyEmailFn = async (verificationCode: string) => {
  const response = await authApi.get<GenericResponse>(
    `auth/verifyemail/${verificationCode}`,
  );
  return response.data;
};

export const logoutUserFn = async () => {
  const response = await authApi.get<GenericResponse>('auth/logout');
  return response.data;
};
