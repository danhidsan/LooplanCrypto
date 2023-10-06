export type CryptoItemProps = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  highPrice24h: number;
  lowPrice24h: number;
  onPress: (id: string) => void;
};
