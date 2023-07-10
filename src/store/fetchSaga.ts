import { all, put, call, takeLatest } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from './naverSlice';
import postNaverLists from '../api/postNaverLists';
import { AnyAction } from 'redux';
import { SagaIterator } from 'redux-saga';
import { FetchNaverListsParams } from '../types/index';

function* fetchDataSaga(action: AnyAction): SagaIterator {
  try {
    const { startDate, endDate, timeUnit, category, keyword, device, gender, ages }: FetchNaverListsParams =
      action.payload;
    const res = yield call(postNaverLists, {
      startDate,
      endDate,
      timeUnit,
      category,
      keyword,
      device,
      gender,
      ages,
    });
    yield put(fetchDataSuccess(res));
  } catch (error: any) {
    yield put(fetchDataFailure(error));
  }
}

function* watchFetchData() {
  yield takeLatest('FETCH_DATA_REQUEST', fetchDataSaga);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
