import { useState } from "react";
import { BaseModal, Input } from "@/components";
import schema from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Variables = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <form id="create-variable">
        <BaseModal
          open={open}
          setOpen={setOpen}
          title="Nova Variável"
          text="Preencha as informações"
          confirmButton
        >
          <div className="flex flex-col gap-1 min-w-[50%]">
            <Input
              {...register("key")}
              error={errors.key?.message}
              label="Preencha a chave"
              placeholder="Nome da variável"
            />
          </div>
        </BaseModal>
      </form>
      <div className="flex justify-between gap-4">
        <h1 className="mt-2 text-2xl font-bold">Variáveis de Ambiente</h1>
        <button
          className="mt-3 btn bg-green-500 p-3.5 text-blacks rounded-2xl"
          onClick={handleOpen}
        >
          Nova Varíavel
        </button>
      </div>
    </div>
  );
};

export default Variables;
