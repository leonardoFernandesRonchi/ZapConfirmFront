import { useState } from "react";
import { BaseModal, Input } from "@/components";
import schema from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { variablesService } from "@/services";

const Variables = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  type formData = {
    key: string;
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({
    defaultValues: {
      key: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: formData) => {
    try {
      console.log(data);
      setLoading(true);
      await variablesService.create({
        key: data?.key,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
    console.log(data);
  };

  return (
    <div>
      <form id="create-variable" onSubmit={handleSubmit(onSubmit)}>
        <BaseModal
          open={open}
          setOpen={setOpen}
          title="Nova Variável"
          text="Preencha as informações"
          confirmButton
          form="create-variable"
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
