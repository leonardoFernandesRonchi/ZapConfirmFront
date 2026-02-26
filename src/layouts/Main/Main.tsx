import { Calendar, Home, Users, MessageCircle } from "react-feather"
import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Sidebar */}
      <aside className="
        fixed bottom-0 left-0 right-0 
        bg-white border-t 
        md:static md:w-64 md:border-r md:border-t-0
        p-2 md:p-4
      ">
        
        {/* Logo (some no mobile) */}
        <div className="hidden md:block">
          <img src="ZapConfirm.png" alt="Logo" />
        </div>

        <nav className="
          flex justify-around 
          md:flex-col md:justify-start md:gap-4 ml-5
        ">
          
          <div className="flex flex-col items-center md:flex-row gap-1 md:gap-2 cursor-pointer">
            <Home size={18} />
            <p className="text-xs md:text-base">Dashboard</p>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-1 md:gap-2 cursor-pointer">
            <Calendar size={18} />
            <p className="text-xs md:text-base">Agenda</p>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-1 md:gap-2 cursor-pointer">
            <Users size={18} />
            <p className="text-xs md:text-base">Clientes</p>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-1 md:gap-2 cursor-pointer">
            <MessageCircle size={18} />
            <p className="text-xs md:text-base">Mensagens</p>
          </div>

        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-4 md:p-6 bg-gray-50 pb-20 md:pb-6">
        <Outlet />
      </main>

    </div>
  )
}

export default Main