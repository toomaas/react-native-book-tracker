import {APIWorkRawResponse, APITrendingWork} from '../types';

export default class Work {
  title: string = '';
  key: string = '';
  description: string = '';
  coverImageId: number = 0;
  authors: string[] = [];
  firstPublishYear: number = 0;
  editionCount: number = 0;

  public static fromAPITrendingWork(apiWork: APITrendingWork): Work {
    const {
      author_name,
      cover_i,
      edition_count,
      first_publish_year,
      key,
      title,
    } = apiWork;

    const work = new Work();

    work.title = title;
    work.key = key;
    work.authors = author_name;
    work.coverImageId = cover_i;
    work.firstPublishYear = first_publish_year;
    work.editionCount = edition_count;

    return work;
  }

  public static fromAPIWork(apiWork: APIWorkRawResponse): Work {
    const {description, key, title} = apiWork;

    const work = new Work();

    work.title = title;
    work.key = key;
    work.description = description.value;

    return work;
  }
}
