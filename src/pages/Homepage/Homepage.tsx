import { useEffect, useState } from "react";
import { BaseModal, Input } from "@/components";
import schema from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { customerService } from "@/services";
import { useFetch } from "@/hooks/useFetch";
import { Trash, Edit } from "react-feather";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<any | null>(null);
  const [allCustomers, setAllCustomers] = useState<any[]>([]);

  const handleEditOpen = (customer: any) => {
    setEditOpen(true);
    setEditingCustomer(customer);
  };

  const handleOpen = () => setOpen(true);

  type FormData = {
    email: string;
    phone: string;
    name: string;
  };

  const { data } = useFetch(customerService.index);
  const customers = data?.data?.customers || [];

  useEffect(() => {
    if (customers) {
      setAllCustomers(customers);
    }
  }, [customers]);

  useEffect(() => {
    if (editingCustomer) {
      reset({
        name: editingCustomer.name,
        email: editingCustomer.email,
        phone: editingCustomer.phone,
      });
    } else {
      reset({
        name: "",
        email: "",
        phone: "",
      });
    }
  }, [editingCustomer]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      phone: "",
      name: "",
    },
    resolver: yupResolver(schema),
  });

  const handleAdd = (customer: any) => {
    setAllCustomers((prev) => [...prev, customer]);
  };

  const handleDelete = async (customerId: string) => {
    try {
      await customerService.destroy(customerId);

      setAllCustomers((prev) => prev.filter((c) => c.id !== customerId));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteClick = (customerId: string) => {
    const confirm = window.confirm("Tem certeza que deseja excluir?");

    if (confirm) {
      handleDelete(customerId);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const filtered = customers.filter((customer: any) =>
      customer.name.toLowerCase().includes(value)
    );
    setAllCustomers(filtered);
  };

  const onSubmit = async (data: FormData) => {
    try {
      setSecondLoading(true);
      if (editingCustomer) {
        const response = await customerService.update({
          id: editingCustomer.id,
          data: {
            name: data?.name,
            email: data?.email,
            phone: data?.phone,
          },
        });
        const customer = response?.data?.customer;

        setAllCustomers((prev) =>
          prev.map((c) => (c.id === editingCustomer.id ? customer : c))
        );
        return;
      } else {
        const customer = await customerService.create({
          email: data?.email,
          phone: data?.phone,
          name: data?.name,
        });
        const customerToAdd = customer?.data?.customer;
        handleAdd(customerToAdd);
        reset();
      }
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
              {...register("name")}
              error={errors.name?.message}
              label="Preencha o nome"
              placeholder="Nome do contato"
            />
            <Input
              {...register("email")}
              error={errors.email?.message}
              label="Preencha o email"
              placeholder="Email do contato"
            />
            <Input
              {...register("phone")}
              error={errors.phone?.message}
              label="Preencha o fone"
              placeholder="Fone do contato"
            />
          </div>
        </BaseModal>
      </form>

      <form id="edit-customer" onSubmit={handleSubmit(onSubmit)}>
        <BaseModal
          open={!!editingCustomer}
          setOpen={setEditingCustomer}
          title="Editar Contato"
          text="Preencha os dados"
          confirmButton
          form="edit-customer"
        >
          <div className="flex flex-col gap-1 min-w-[50%]">
            <Input
              {...register("name")}
              error={errors.name?.message}
              label="Preencha o nome"
              placeholder="Nome do contato"
            />
            <Input
              {...register("email")}
              error={errors.email?.message}
              label="Preencha o email"
              placeholder="Email do contato"
            />
            <Input
              {...register("phone")}
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
        <div className="w-[90%] flex justify-center items-center overflow">
          <input
            className="w-[90%] min-w[80%] max-w[80%] border-2 border-[#E2E8F0] min-w-[50%] py-2 px-8 rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Buscar por nome"
            onChange={(ev) => handleChange(ev)}
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[100%] max-h-[300px] min-w-[300px] overflow-y-auto overflow-x-auto">
          <table className="mt-5 table-fixed w-full">
            <thead className="min-w-[90%] max-w-[90%] text-[#6D7C92]  bg-gray-200 rounded-3xl border-[#E2E8F0]">
              <tr className="p-5">
                <th className="p-5">Nome do Paciente</th>
                <th className="p-5">Contato</th>
                <th className="p-5">Fone</th>
                <th className="p-5">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9] bg-white text-center">
              {allCustomers.map((customer: any, index: number) => (
                <tr className="text-xs lg:text-base" key={index}>
                  <td className="p-5 truncate max-w-[100px]">
                    {customer.name}
                  </td>
                  <td className="p-5 truncate max-w-[100px]">
                    {customer.email}
                  </td>
                  <td className="p-5 truncate max-w-[100px]">
                    {customer.phone}
                  </td>
                  <td className="p-5">
                    <div className=" m-1 flex justify-center items-center gap-2">
                      <Edit
                        className="cursor-pointer"
                        size={20}
                        onClick={() => handleEditOpen(customer)}
                      />
                      <Trash
                        className="cursor-pointer"
                        size={20}
                        onClick={() => handleDeleteClick(customer.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Homepage;
