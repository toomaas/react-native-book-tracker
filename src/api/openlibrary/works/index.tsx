import APITrendingWorksResponse from './response/TrendingWorksResponse';
import WorkResponse from './response/WorkResponse';
import {APITrendingWorksRawResponse, APIWorkRawResponse} from './types';

export enum TRENDING_SICE_ENUM {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  FOREVER = 'forever',
  // monthly...
}

const OPEN_LIBRARY_URL = 'https://openlibrary.org';

export default function WorksApi() {
  return {
    async listTrending(
      limit: number = 5,
      since = TRENDING_SICE_ENUM.WEEKLY,
    ): Promise<APITrendingWorksResponse> {
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
        const jsonResponse: APITrendingWorksRawResponse = await response.json();
        return new APITrendingWorksResponse(jsonResponse);
      }

      throw response;
    },
    async getWork(key: string): Promise<WorkResponse> {
      console.log('key', key);
      const response = await fetch(`${OPEN_LIBRARY_URL}${key}.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      });
      if (response.status >= 200 && response.status < 300) {
        const jsonResponse: APIWorkRawResponse = await response.json();
        return new WorkResponse(jsonResponse);
      }

      throw response;
    },
  };
}
