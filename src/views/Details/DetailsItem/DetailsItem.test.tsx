import React from 'react';
import renderer from 'react-test-renderer';

import DetailsItem from './DetailsItem';

describe('DetailsItem tests', () => {
  test('DetailsItem renders correctly', () => {
    const tree = renderer
      .create(<DetailsItem label="label" value="value" />)
      .toJSON();

    expect(tree).toBeTruthy();
  });
});
