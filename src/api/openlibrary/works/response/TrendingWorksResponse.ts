import Work from '../model/Work';
import {APITrendingWorksRawResponse} from '../types';

export default class TrendingWorksResponse {
  works: Work[];

  constructor(response: APITrendingWorksRawResponse) {
    this.works = response.works.map(work => Work.fromAPITrendingWork(work));
  }
}
