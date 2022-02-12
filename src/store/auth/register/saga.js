import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

//Account Redux states
import { REGISTER_USER } from './actionTypes';
import { registerUserSuccessful, apiError } from './actions';

//AUTH related methods
import { postRegister } from '../../../helpers/authUtils';

// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
    try {
        console.log("USers", user);
        const response = yield call(postRegister, user);
        yield put(registerUserSuccessful(response));
    } catch (error) {
        yield put(apiError(error));
    }
}

export function* watchUserRegister() {
    yield takeEvery(REGISTER_USER, registerUser)
}

function* accountSaga() {
    yield all([fork(watchUserRegister)]);
}

export default accountSaga;