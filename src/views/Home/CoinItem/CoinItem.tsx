import React, { FC, useCallback } from 'react';
import FastImage from 'react-native-fast-image';

import { CryptoItemProps } from './CoinItem.types';
import {
  Container,
  ImageContainer,
  NameContainer,
  PriceContainer,
  SymbolContainer,
  PriceText,
  NameText,
  CryptoImage,
  MaxText,
  MaxContainer,
} from './CoinItem.styles';

const CoinItem: FC<CryptoItemProps> = ({
  id,
  name,
  currentPrice,
  symbol,
  highPrice24h,
  lowPrice24h,
  image,
  onPress,
}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [id, onPress]);

  return (
    <Container onPress={handlePress}>
      <ImageContainer>
        <CryptoImage
          source={{ uri: image }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </ImageContainer>
      <NameContainer>
        <NameText>{name}</NameText>
        <SymbolContainer>
          <PriceText>{symbol.toUpperCase()}</PriceText>
          <PriceText> - ${currentPrice}</PriceText>
        </SymbolContainer>
      </NameContainer>
      <PriceContainer>
        <MaxText>Max - Min (24h)</MaxText>
        <MaxContainer>
          <PriceText>${highPrice24h}</PriceText>
          <PriceText> - ${lowPrice24h}</PriceText>
        </MaxContainer>
      </PriceContainer>
    </Container>
  );
};

export default CoinItem;
