import Work from '../model/Work';
import {APIWorksBySubjectRawResponse} from '../types';

export default class SubjectWorksResponse {
  works: Work[];

  constructor(response: APIWorksBySubjectRawResponse) {
    this.works = response.works.map(work => Work.fromSubjectWork(work));
  }
}
