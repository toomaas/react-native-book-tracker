import renderer from 'react-test-renderer';
import Text from '../../src/components/Text';
import React from 'react';

describe('Text Component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
