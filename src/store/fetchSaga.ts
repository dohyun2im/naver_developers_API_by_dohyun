import { all, put, call, takeLatest } from 'redux-saga/effects';
import { fetchNaverSuccess, fetchNaverFailure } from './naverSlice';
import postNaverLists from '../api/postNaverLists';
import { AnyAction } from 'redux';
import { SagaIterator } from 'redux-saga';
import { FetchNaverListsParams } from '../types/index';

function* fetchNaverSaga(action: AnyAction): SagaIterator {
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
    yield put(fetchNaverSuccess(res));
  } catch (error: any) {
    yield put(fetchNaverFailure(error));
  }
}

function* watchFetchNaverData() {
  yield takeLatest('FETCH_NAVER_REQUEST', fetchNaverSaga);
}

export default function* rootSaga() {
  yield all([watchFetchNaverData()]);
}
