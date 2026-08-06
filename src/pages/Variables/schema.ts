import * as yup from "yup";

const schema = yup.object({
  key: yup.string().required("A chave é obrigatória"),
});

export default schema;
