import { useState } from 'react';
import { BaseModal, Input } from '@/components';

const Homepage = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <BaseModal
        open={open}
        setOpen={setOpen}
        title="Registrar Contato"
        text="Preencha os dados"
      >
        <div className="flex flex-col gap-1 min-w-[50%]">
          <form>
            <Input label="Preencha o nome" placeholder="Nome do contato" />
            <Input label="Preencha o email" placeholder="Email do contato" />
            <Input label="Preencha o fone" placeholder="Fone do contato" />
          </form>
        </div>
      </BaseModal>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Gestão de Contatos</h1>
        <button
          className="mt-3 bg-green-500 p-3.5 text-blacks rounded-2xl"
          onClick={handleOpen}
        >
          Novo Contato
        </button>
      </div>
      <div className="mt-3 flex mx-auto items-center min-h-[15%] min-w-[90%] max-w-[90%] bg-white rounded-2xl border-2 border-[#E2E8F0]">
        <div className="w-[90%] flex justify-center items-center">
          <input
            className="w-[90%] min-w[80%] max-w[80%] border-2 border-[#E2E8F0] min-w-[50%] py-2 px-8 rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Buscar por nome, telefone ou e-mail"
          />
        </div>
      </div>
      <div className="min-w-[90%] flex justify-center items-center">
        <table className="mt-5 table-fixed w-[90%]">
          <thead className="min-w-[90%] max-w-[90%] text-[#6D7C92]  bg-gray-200 rounded-3xl border-[#E2E8F0]">
            <tr className="p-4">
              <th className="p-5">Nome do Paciente</th>
              <th className="p-5">Contato</th>
              <th className="p-5">Última Consulta</th>
              <th className="p-5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9] bg-white text-center">
            <tr className="p-4">
              <td className="p-5">Alfreds Futterkiste</td>
              <td className="p-5">Maria Anders</td>
              <td className="p-5">Germany</td>
              <td className="p-5">Ativo</td>
            </tr>
            <tr className="p-4">
              <td className="p-5">Centro comercial Moctezuma</td>
              <td className="p-5">Francisco Chang</td>
              <td className="p-5">Mexico</td>
              <td className="p-5">Ativo</td>
            </tr>
            <tr className="p-4">
              <td className="p-5">Ernst Handel</td>
              <td className="p-5">Roland Mendel</td>
              <td className="p-5">Austria</td>
              <td className="p-5">Inativo</td>
            </tr>
            <tr className="p-4">
              <td className="p-5">Island Trading</td>
              <td className="p-5">Helen Bennett</td>
              <td className="p-5">UK</td>
              <td className="p-5">Ativo</td>
            </tr>
            <tr className="p-4">
              <td className="p-5">Laughing Bacchus Winecellars</td>
              <td className="p-5">Yoshi Tannamuri</td>
              <td className="p-5">Canada</td>
              <td className="p-5">Inativo</td>
            </tr>
            <tr className="p-4">
              <td className="p-5">Magazzini Alimentari Riuniti</td>
              <td className="p-5">Giovanni Rovelli</td>
              <td className="p-5">Italy</td>
              <td className="p-5">Ativo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Homepage;
