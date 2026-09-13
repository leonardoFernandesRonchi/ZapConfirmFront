import { apiClient } from "./apiClient";

const create = async ({ key }: { key: string }) => {
  const response = await apiClient.post("/variables", {
    key,
  });
  return response;
};

export default {
  create,
};
