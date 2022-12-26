import APITrendingBooksResponse from './response/APITrendingBooksResponse';
import {TrendingBooksRawResponse} from './types';

export enum TRENDING_SICE_ENUM {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  FOREVER = 'forever',
  // monthly...
}

const OPEN_LIBRARY_URL = 'https://openlibrary.org';

export default function BooksApi() {
  return {
    async listTrending(
      limit: number = 5,
      since = TRENDING_SICE_ENUM.WEEKLY,
    ): Promise<APITrendingBooksResponse> {
      const searchParams = {
        limit,
      };

      const searchParamsString = Object.keys(searchParams)
        .map((key: string) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(
            // @ts-ignore
            searchParams[key],
          )}`;
        })
        .join('&');

      const response = await fetch(
        `${OPEN_LIBRARY_URL}/trending/${since}.json?${searchParamsString}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        },
      );
      if (response.status >= 200 && response.status < 300) {
        const jsonResponse: TrendingBooksRawResponse = await response.json();
        return new APITrendingBooksResponse(jsonResponse);
      }

      throw response;
    },
    async,
  };
}
