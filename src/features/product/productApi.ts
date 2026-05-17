import { apiRequest } from '../../services/api';

export const fetchHomeProductsApi = async () => {
  return await apiRequest({
    endpoint: '/products?page=1&limit=6',
    method: 'GET',
  });
};

export const fetchViewAllProductsApi = async (page: number, limit: number) => {
  return await apiRequest({
    endpoint: `/products?page=${page}&limit=${limit}`,
    method: 'GET',
  });
};
