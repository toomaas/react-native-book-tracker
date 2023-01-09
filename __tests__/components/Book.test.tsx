import React from 'react';
import renderer from 'react-test-renderer';
import Book from '../../src/components/Home/Book';

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe('WorkCarousel Component', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Book
          work={{
            authors: ['author1'],
            coverImageId: 10473609,
            description: 'desc',
            editionCount: 25,
            firstPublishYear: 2016,
            key: '/works/OL18020194W',
            title: 'It Ends With Us',
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
