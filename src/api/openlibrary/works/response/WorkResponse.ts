import Work from '../model/Work';
import {APIWorkRawResponse} from '../types';

export default class WorkResponse {
  work: Work;

  constructor(response: APIWorkRawResponse) {
    this.work = Work.fromAPIWork(response);
  }
}
