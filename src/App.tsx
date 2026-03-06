import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Login, Register } from './pages';
import { Main } from './layouts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
