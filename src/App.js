import React, { Component } from 'react'
import {Route,Switch,withRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import indexSaga from './sagas/index'
import Nav from "./Nav";
import ListChar from './ListChar';
import SpecificChar from './SpecificChar';



const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(indexSaga)
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <Nav {...this.props} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <ListChar {...props} />
              )}
            />
            <Route
              path="/:search?"
              render={props => (
                <SpecificChar {...props} />
              )}
            />
          </Switch>
          
        </div>
      </Provider>
    )
  }
}

export default withRouter(App)