import { Shield, Lock, Mail } from 'react-feather';
import { Link } from 'react-router-dom';
import { Input } from '../../components';

const Register = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-r from-[#F5F8F5] to-[#DDF8DD] min-h-screen">
        <div className="max-w-sm flex items-center justify-center h-full">
          <div className="p-3 h-[80%] rounded-lg bg-white shadow-lg">
            <Shield size={48} className="mx-auto mt-8 text-green-500" />
            <h2 className="text-2xl font-bold text-center mt-1">
              Faça seu cadastro!
            </h2>
            <p className="text-center text-gray-600 mt-1">
              Faça seu cadastro para acessar a plataforma e aproveitar todos os
              recursos
            </p>
            <div className="mt-2 p-1">
              <Input name="Email" icon={<Mail size={18} />} />
            </div>
            <div className="mt-2 p-1">
              <Input name="Senha" icon={<Lock size={18} />} />
            </div>
            <div className="mt-2 p-1">
              <Input name="Confirmação de Senha" icon={<Lock size={18} />} />
            </div>
            <div className="p-1 w-[90%] flex items-center justify-between mt-1 mx-auto">
              <button className="w-full mt-3 bg-green-400 p-2.5 rounded-2xl text-blacks">
                Entrar na plataforma
              </button>
            </div>
            <div className="p-1 h-[5%] flex items-center justify-center mt-1">
              <p className="flex items-center text-sm text-gray-600">
                Já tem uma conta?
                {/* <a href="#" className="text-green-500 font-semibold ml-2">
                  Faça login
                </a> */}
                <Link to="/login" className="text-green-500 font-semibold ml-2">
                  Faça login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
