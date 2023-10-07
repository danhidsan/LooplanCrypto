import { useQuery } from 'react-query';

import { getCoins } from '../services/coins';
import { Coin } from '../services/types';

export const useCoins = () => {
  const { data, isLoading, isFetching } = useQuery<Coin[]>(
    ['coins'],
    () => getCoins(),
    {
      refetchInterval: 47000,
    },
  );
  return {
    coins: data || [],
    isLoading,
    isFetching,
  };
};
