import { takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import getChar from './charSagas'
function *index () {
  yield takeLatest('LOAD_DATA_CHAR_REQUEST', getChar,axios)
}
export default index
