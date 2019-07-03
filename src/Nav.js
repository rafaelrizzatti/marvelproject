import React, { Component } from 'react'
import logo from './marvel2.png';
import { loadDataCharRequest,changeSearch } from './actions';
import { connect } from 'react-redux'

class Nav extends Component {
  load=(string)=>{
    this.props.loadData(string)
    this.props.history.push("/")
  }
  render () {
    return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-brand col-1">
        <img src={logo} className="Navbar-logo" alt="logo" />
      </div>
      <div className="form-group justify-content-center row col-10 my-2">
        <input
          onChange={e => this.props.changeSearch(e.target.value)}
          value={this.props.search}
          className="form-control col-9 mr-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <button className="btn"  onClick={() => this.load(this.props.search)}>
      Buscar
      </button>
    </nav>
  );
 }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.char.isFetching,
    data: state.char.data,
    error: state.char.error,
    search: state.search.search
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (string) => dispatch(loadDataCharRequest(string)),
    changeSearch: (string) =>dispatch(changeSearch(string))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
