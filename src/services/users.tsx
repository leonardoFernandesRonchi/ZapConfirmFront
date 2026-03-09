import { apiClient } from "./apiClient";


const register = async (username: string, email: string, password: string) => {
  const response = await apiClient.post("/login", {
    username,
    email,
    password
  });

  return response
};


const login = async (email: string, password: string) => {
    const response = await apiClient.post("/login", {
      email,
      password
    });

    return response
}

export default {
  login,
  register
};