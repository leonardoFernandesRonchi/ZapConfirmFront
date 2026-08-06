import {
  Calendar,
  Home,
  Users,
  MessageCircle,
  LogOut,
  FileText,
  Code,
} from "react-feather";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

const Main = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();

  const logOut = async () => {
    try {
      logout();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside
        className="
        fixed bottom-0 left-0 right-0 
        bg-white border-t 
        md:static md:w-64 md:border-r md:border-t-0
         md:p-4
      "
      >
        <div className="hidden md:block">
          <img src="ZapConfirm.png" alt="Logo" />
        </div>

        <nav
          className="
          hidden
          md:flex md:flex-col md:justify-start md:gap-4 ml-5
        "
        >
          <div className="hidden md:flex-row gap-1 md:gap-2 cursor-pointer">
            <Home size={18} />
            <p className="text-xs md:text-base">Dashboard</p>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-1 md:gap-2 cursor-pointer">
            <Link
              to="/agenda"
              className="flex flex-col items-center md:flex-row gap-1 md:gap-2 hover:text-green-600"
            >
              <Calendar size={18} />
              <p className="text-xs md:text-base">Agenda</p>
            </Link>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-1 md:gap-2 cursor-pointer">
            <Link
              to="/clientes"
              className="flex flex-col items-center md:flex-row gap-1 md:gap-2 hover:text-green-600"
            >
              <Users size={18} />
              <p className="text-xs md:text-base">Clientes</p>
            </Link>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-1 md:gap-2 cursor-pointer">
            <Link
              to="/variaveis"
              className="flex flex-col items-center md:flex-row gap-1 md:gap-2 hover:text-green-600"
            >
              <Code size={18} />
              <p className="text-xs md:text-base">Variáveis</p>
            </Link>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-1 md:gap-2 cursor-pointer">
            <Link
              to="/templates"
              className="flex flex-col items-center md:flex-row gap-1 md:gap-2 hover:text-green-600"
            >
              <FileText size={18} />
              <p className="text-xs md:text-base">Templates</p>
            </Link>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-1 md:gap-2 cursor-pointer">
            <Link
              to="/mensagens"
              className="flex flex-col items-center md:flex-row gap-1 md:gap-2 hover:text-green-600"
            >
              <MessageCircle size={18} />
              <p className="text-xs md:text-base">Mensagens</p>
            </Link>
          </div>

          <div
            onClick={logOut}
            className="flex flex-col items-center md:flex-row gap-1 md:gap-2 cursor-pointer"
          >
            <LogOut className="md:hidden" size={18} />
            <button className=" hidden md:inline cursor-pointer w-[50%] rounded-2xl text-white rounded bg-red-600">
              Deslogar
            </button>
          </div>
        </nav>
      </aside>

      <div className=" w-full p-2.5 rounded-4xl text-blacks sticky top-0 md:hidden bg-[#F5F8F5]">
        <button
          className="bg-slate-800 text-white py-2 px-4 rounded-md"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>

        {open && (
          <div className=" flex flex-col flex-2 mt-2 w-[30%] bg-white p-4 gap-2 rounded-md shadow-md">
            <ul>
              <li className="bg-yellow-100">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="bg-yellow-100">
                <Link to="/agenda">Agenda</Link>
              </li>
              <li className="bg-yellow-100">
                <Link to="/clientes">Clientes</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <main className="flex-1 p-4 md:p-3 bg-[#F5F8F5] pb-20 md:pb-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
