import React, { memo, FC } from 'react';

import { TextInputProps } from './TextInput.types';
import { TextInputBase } from './TextInput.styles';

const TextInput: FC<TextInputProps> = (props) => {
  return <TextInputBase {...props} />;
};

export default memo(TextInput);
