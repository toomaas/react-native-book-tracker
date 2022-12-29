import {OPEN_LIBRARY_URL} from '@env';
import StringUtils from '../../../utils/StringUtils';
import SubjectWorksResponse from './response/SubjectWorksResponse';
import APITrendingWorksResponse from './response/TrendingWorksResponse';
import WorkRatingsResponse from './response/WorkRatingsResponse';
import WorkResponse from './response/WorkResponse';
import {
  APITrendingWorksRawResponse,
  APIWorkRatingsRawResponse,
  APIWorkRawResponse,
  APIWorksBySubjectRawResponse,
} from './types';

export enum TRENDING_SICE_ENUM {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  FOREVER = 'forever',
  // monthly...
}

export default function WorksApi() {
  return {
    async listTrending(
      limit: number = 5,
      since = TRENDING_SICE_ENUM.WEEKLY,
    ): Promise<APITrendingWorksResponse> {
      const searchParams = {
        limit,
      };

      const searchParamsString =
        StringUtils.getSearchParamsStringFromObj(searchParams);

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
    async getWorksBySubject(
      subject: string,
      limit: number = 5,
    ): Promise<SubjectWorksResponse> {
      const searchParams = {
        limit,
      };

      const searchParamsString =
        StringUtils.getSearchParamsStringFromObj(searchParams);

      const response = await fetch(
        `${OPEN_LIBRARY_URL}/subjects/${subject}.json?${searchParamsString}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        },
      );
      if (response.status >= 200 && response.status < 300) {
        const jsonResponse: APIWorksBySubjectRawResponse =
          await response.json();
        return new SubjectWorksResponse(jsonResponse);
      }

      throw response;
    },
    async getWorkRatings(key: string): Promise<WorkRatingsResponse> {
      const response = await fetch(`${OPEN_LIBRARY_URL}${key}/ratings.json?`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      });
      if (response.status >= 200 && response.status < 300) {
        const jsonResponse: APIWorkRatingsRawResponse = await response.json();
        return new WorkRatingsResponse(jsonResponse);
      }

      throw response;
    },
  };
}
