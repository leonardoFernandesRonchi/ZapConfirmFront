import { createContext } from "react";

type AuthContextType = {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
};

 const AuthContext = createContext<AuthContextType | null>(null);

 export default AuthContext