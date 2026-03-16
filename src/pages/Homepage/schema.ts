import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: yup.string().required('Numero de telefone é obrigatório'),
  name: yup.string().required('Nome é obrigatório'),
});

export default schema;
