import {APISubjectWork, APITrendingWork, APIWorkRawResponse} from '../types';

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

    if (typeof description === 'string') {
      work.description = description;
    } else {
      work.description = description.value;
    }

    return work;
  }

  public static fromSubjectWork(apiWork: APISubjectWork): Work {
    const {key, title, authors, cover_id, edition_count, first_publish_year} =
      apiWork;

    const work = new Work();

    work.title = title;
    work.key = key;
    work.coverImageId = cover_id;
    work.editionCount = edition_count;
    work.firstPublishYear = first_publish_year;
    work.authors = authors.map(author => author.name);

    return work;
  }
}
