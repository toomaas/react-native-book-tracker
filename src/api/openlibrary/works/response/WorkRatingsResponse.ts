import {APIWorkRatingsRawResponse} from '../types';

export default class WorkRatingsResponse {
  average: number;

  constructor(response: APIWorkRatingsRawResponse) {
    this.average = response.summary.average;
  }
}
