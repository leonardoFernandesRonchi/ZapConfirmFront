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

const destroy = async (id: string) => {
  const response = await apiClient.delete(`/customers/${id}`);
  return response;
};

const update = async ({ id, data }: { id: string; data: any }) => {
  const response = await apiClient.put(`/customers/${id}`, data);
  return response;
};

export default {
  create,
  index,
  destroy,
  update,
};
