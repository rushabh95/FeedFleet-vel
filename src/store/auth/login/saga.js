import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { CHECK_LOGIN } from './actionTypes';
import {  apiError, loginUserSuccessful } from './actions';

// AUTH related methods
import { setLoggeedInUser,postLogin } from '../../../helpers/authUtils';

//If user is login then dispatch redux action's are directly from here.
function* loginUser({ payload: { email, password, history } }) {
        try {
            const response = yield call(postLogin, 'http://localhost:5000/api/v1/login', {email:email, password: password});
             setLoggeedInUser(response);
             yield put(loginUserSuccessful(response));
            history.push('/dashboard');
          
        } catch (error) {
            yield put(apiError(error));
        }
}

export function* watchUserLogin() {
    yield takeEvery(CHECK_LOGIN, loginUser)
}

function* loginSaga() {
    yield all([fork(watchUserLogin)]);
}

export default loginSaga;