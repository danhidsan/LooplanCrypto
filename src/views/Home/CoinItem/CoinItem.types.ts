export type CryptoItemProps = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  changePercentage: number;
  onPress?: (id: string) => void;
};
