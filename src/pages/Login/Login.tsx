import { Shield, Lock, Mail } from 'react-feather';
import { Input } from '../../components';

const Login = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#F5F8F5] to-[#DDF8DD] h-screen">
        <div className="flex items-center justify-center h-full">
          <div className="w-[60%] lg:w-[30%] h-[80%] rounded-lg bg-white shadow-lg">
            <Shield size={48} className="mx-auto mt-8 text-green-500" />
            <h2 className="text-2xl font-bold text-center mt-4">
              Bem-vindo de volta!
            </h2>
            <p className="text-center text-gray-600 mt-2">
              Faça login para acessar sua conta
            </p>
            <div className="mt-6 px-4">
              <Input name="Email" icon={<Mail size={18} />} />
            </div>
            <div className="mt-6 px-4">
              <Input name="Senha" icon={<Lock size={18} />} />
            </div>
            <div className="w-[90%] flex items-center justify-between mt-4 mx-auto">
              <button className="w-full mt-3 bg-green-400 p-2.5 rounded-2xl text-blacks">
                Entrar na plataforma
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="flex items-center text-sm text-gray-600">
                Não tem uma conta?{' '}
                <a href="#" className="text-green-500 font-semibold ml-2">
                  Cadastre-se
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
