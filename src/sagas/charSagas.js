import { put } from 'redux-saga/effects'
import { loadDataCharSuccess,loadDataCharFailure } from './../actions'
import { select } from 'redux-saga/effects';   
import md5 from 'md5'
const publicKey = "3d54d19626d9e415ec7306f68e53d66f"
const privateKey = "d28a4001c7d760a4b3234b495e0615a3a78d8028"
export const getString = (state) => state.search

function *getChar (axios) {
  let string = yield select(getString);
  try{
    const timeStamp = (new Date()).getTime()
    const hash = md5(timeStamp+privateKey+publicKey)
    //console.log("HASH:",hash)
    const dados = yield axios.get('https://gateway.marvel.com/v1/public/characters?ts='+timeStamp+'&nameStartsWith='+string.search+'&limit=8&apikey='+publicKey+'&hash='+hash)
    //const dados = yield axios.get('https://gateway.marvel.com/v1/public/characters?ts=1561894698999&nameStartsWith='+string.search+'&limit=8&apikey=3d54d19626d9e415ec7306f68e53d66f&hash=82e51e8b5f16e0374a957f5f2d7a16fa')
    //const dados = yield call(axios.get, 'https://gateway.marvel.com/v1/public/characters?ts=1561894698999&nameStartsWith='+string.search+'&limit=8&apikey=3d54d19626d9e415ec7306f68e53d66f&hash=82e51e8b5f16e0374a957f5f2d7a16fa')
    yield put(loadDataCharSuccess(dados.data.data))
  }catch (error) {
    yield put(loadDataCharFailure())
  }
}
export default getChar
