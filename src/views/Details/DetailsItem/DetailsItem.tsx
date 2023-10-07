import React, { FC } from 'react';

import { DetailsItemProps } from './DetailsItem.types';
import { Container, LabelText, ValueText } from './DetailsItem.styles';

const DetailsItem: FC<DetailsItemProps> = ({ label, value }) => {
  return (
    <Container>
      <LabelText>{label}</LabelText>
      <ValueText>{value}</ValueText>
    </Container>
  );
};

export default DetailsItem;
