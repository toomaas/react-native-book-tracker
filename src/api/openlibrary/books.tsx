// import {
//     KEYCLOAK_GTFS_CLIENT_AUTH_URL,
//     KEYCLOAK_GTFS_CLIENT_ID,
//     KEYCLOAK_GTFS_CLIENT_SECRET,
//     KEYCLOAK_REALM,
//   } from '@env';

// export enum GRANT_TYPE_ENUM {
//   CLIENT_CREDENTIALS = 'client_credentials',
//   PASSWORD = 'password',
// }

export enum TRENDING_SICE_ENUM {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  FOREVER = 'forever',
  // monthly...
}

//   fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue'
//   })
// });

// const getMoviesFromApiAsync = async () => {
//   try {
//     const response = await fetch(
//       'https://reactnative.dev/movies.json'
//     );
//     const json = await response.json();
//     return json.movies;
//   } catch (error) {
//     console.error(error);
//   }
// };

const OPEN_LIBRARY_URL = 'https://openlibrary.org';

export default function BooksApi() {
  return {
    async trending(
      limit: number = 5,
      since = TRENDING_SICE_ENUM.WEEKLY,
    ): Promise<TrendingBooksResponse> {
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
        return response.json().then((json: TrendingBooksRawResponse) => {
          console.log(json);
          const res: TrendingBooksResponse = {
            books: [{author: 'abc', coverImageId: 123, title: 'dummy title'}],
          };
          return res;
        });
      }

      throw response;
    },
    // async introspect(loginResponse: LoginResponse): Promise<LoginResponse> {
    //   const body = {
    //     token: loginResponse.access_token,
    //     client_id: KEYCLOAK_GTFS_CLIENT_ID,
    //     client_secret: KEYCLOAK_GTFS_CLIENT_SECRET,
    //   };

    //   const searchParams = Object.keys(body)
    //     .map((key: string) => {
    //       return `${encodeURIComponent(key)}=${encodeURIComponent(
    //         // @ts-ignore
    //         body[key],
    //       )}`;
    //     })
    //     .join('&');

    //   const response = await fetch(
    //     `${KEYCLOAK_GTFS_CLIENT_AUTH_URL}/auth/realms/${KEYCLOAK_REALM}/protocol/openid-connect/token/introspect`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //       },
    //       body: searchParams,
    //     },
    //   );
    //   if (response.status >= 200 && response.status < 300) {
    //     return response.json().then((json: IntrospectResponse) => {
    //       return {...loginResponse, introspect: json};
    //     });
    //   }

    //   throw response;
    // },
  };
}
export interface TrendingBooksRawResponse {
  query: string;
  works: Work[];
}

export interface Work {
  title: string;
  cover_i: number;
}

export interface TrendingBooksResponse {
  books: Book[];
}

export interface Book {
  title: string;
  coverImageId: number;
  author: string;
}
