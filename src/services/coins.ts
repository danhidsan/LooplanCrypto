import api from './api';
import { Coin } from './types';

const PATH = '/coins';

export const getCoins = async () => {
  const response = await api.get<Coin[]>(`${PATH}/markets?vs_currency=usd`);
  return response.data;
};
