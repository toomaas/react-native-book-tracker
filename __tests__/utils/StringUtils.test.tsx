import {describe, expect, test} from '@jest/globals';
import StringUtils from '../../src/utils/StringUtils';

describe('StringUtils module', () => {
  test('given an object with 2 keys, returns a joined string of those keys in URI format', () => {
    const searchParams = {
      limit: 10,
      offset: 10,
    };

    expect(StringUtils.getSearchParamsStringFromObj(searchParams)).toBe(
      'limit=10&offset=10',
    );
  });
});
