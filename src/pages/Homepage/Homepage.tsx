import { useEffect, useState } from 'react';
import { BaseModal, Input } from '@/components';
import schema from './schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { customerService } from '@/services';
import { useFetch } from '@/hooks/useFetch';
import { Trash, Edit } from 'react-feather';

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);
  const [allCustomers, setAllCustomers] = useState<any[]>([]);

  const handleOpen = () => setOpen(true);

  type FormData = {
    email: string;
    phone: string;
    name: string;
  };


    const { data } = useFetch(customerService.index);
    const customers = data?.data?.customers || [];
  
    useEffect(() => {
      if(customers) {
       setAllCustomers(customers)
      }
    }, [customers])

 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      phone: '',
      name: '',
    },
    resolver: yupResolver(schema),
  });

  const handleAdd = (customer : any) => {
    setAllCustomers(prev => [...prev, customer])
  }

  const onSubmit = async (data: FormData) => {
    try {
      setSecondLoading(true);
      const customer = await customerService.create({
        email: data?.email,
        phone: data?.phone,
        name: data?.name,
      });
      const customerToAdd = customer?.data?.customer
      handleAdd(customerToAdd)
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setSecondLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <form id="create-customer" onSubmit={handleSubmit(onSubmit)}>
        <BaseModal
          open={open}
          setOpen={setOpen}
          title="Registrar Contato"
          text="Preencha os dados"
          confirmButton
          form="create-customer"
        >
          <div className="flex flex-col gap-1 min-w-[50%]">
            <Input
              {...register('name')}
              error={errors.name?.message}
              label="Preencha o nome"
              placeholder="Nome do contato"
            />
            <Input
              {...register('email')}
              error={errors.email?.message}
              label="Preencha o email"
              placeholder="Email do contato"
            />
            <Input
              {...register('phone')}
              error={errors.phone?.message}
              label="Preencha o fone"
              placeholder="Fone do contato"
            />
          </div>
        </BaseModal>
      </form>
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
      <div className="min-w-[90%] flex justify-center items-center overflow-y-auto">
        <table className="mt-5 table-fixed w-[90%]">
          <thead className="min-w-[90%] max-w-[90%] text-[#6D7C92]  bg-gray-200 rounded-3xl border-[#E2E8F0]">
            <tr className="p-4">
              <th className="p-5">Nome do Paciente</th>
              <th className="p-5">Contato</th>
              <th className="p-5">Fone</th>
              <th className="p-5">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9] bg-white text-center">
            {
              allCustomers.map((customer: any, index: number) => (
  <tr key={index}>
    <td className="p-5">{customer.name}</td>
    <td className="p-5">{customer.email}</td>
    <td className="p-5">{customer.phone}</td>
    <div className=' m-1 flex justify-center items-center gap-2'>
    <Edit className='cursor-pointer' size={20}/>
    <Trash className='cursor-pointer' size={20} />
    </div>
  </tr>
))
            }
           
          </tbody>
        </table>
      </div>
       
    </>
  );
};

export default Homepage;
