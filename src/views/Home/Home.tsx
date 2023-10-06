import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { ScreenProps } from '../../navigator/types';

const Home: FC = () => {
  const navigation = useNavigation<ScreenProps<'Home'>['navigation']>();

  const handleClickDetails = () => {
    navigation.navigate('Details', {});
  };

  return (
    <View>
      <RectButton onPress={handleClickDetails}>
        <Text>Go to details</Text>
      </RectButton>
    </View>
  );
};

export default Home;
