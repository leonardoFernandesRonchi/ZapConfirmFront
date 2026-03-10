import { apiClient } from './apiClient';

const register = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await apiClient.post('/users', {
    username,
    email,
    password,
  });

  return response;
};

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await apiClient.post('/users/signIn', {
    email,
    password,
  });

  return response;
};

export default {
  login,
  register,
};
