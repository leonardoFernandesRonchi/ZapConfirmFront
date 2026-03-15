import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Homepage, Login, Register } from './pages';
import { Main } from './layouts';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { ProtectedRoute, LoggedRoute } from './routes';

function App() {
  const { user } = useAuth();

  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Main />}>
            <Route path="/" element={<Homepage />} />
          </Route>
        </Route>
        <Route element={<LoggedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
