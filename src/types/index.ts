export interface FetchNaverListsParams {
  startDate: string;
  endDate: string;
  timeUnit: 'date' | 'week' | 'month';
  category: string;
  keyword: string;
  device: '' | 'mo' | 'pc';
  gender: '' | 'm' | 'f';
  ages: string[];
}
