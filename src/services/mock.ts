import { Coin } from './types';

export const cryptosMock: Coin[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    current_price: 27726,
    high_24h: 28081,
    low_24h: 27389,
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
    current_price: 1633.69,
    high_24h: 1649.37,
    low_24h: 1610.86,
  },
  {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
    image:
      'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661',
    current_price: 1633.69,
    high_24h: 1.002,
    low_24h: 0.998128,
  },
];
