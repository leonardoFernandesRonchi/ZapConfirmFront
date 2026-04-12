import { apiClient } from './apiClient';

const create = async ({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) => {
  const response = await apiClient.post('/customers', {
    name,
    email,
    phone,
  });
  return response;
};

const index = async () => {
  const response = await apiClient.get('/customers');
  return response;
};

export default {
  create,
  index,
};
