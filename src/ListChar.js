import React, { Component } from 'react'
import { loadDataCharRequest } from './actions'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
class ListChar extends Component {
  specific = (id) =>{
    this.props.history.push("/"+id)
  }
  render () {
    return (
      <div className="container mt-10">
      <div className="row">
        {this.props.isFetching ? <div className="text-center">Carregando...<FontAwesomeIcon icon={faSpinner} spin /></div>: ""}
          {
            this.props.data.results ? this.props.data.results.map(char=>{return(
            <div className="col-sm-3 mt-4" key={char.id}>
              <div className="card">
                  <img className="card-img-top img-fluid" src={char.thumbnail.path+"."+char.thumbnail.extension} alt="" />
                  <div className="card-body">
                      <h5 className="card-title">{char.name}</h5>
                      <p className="card-text">
                        <button className="btn bg-primary" onClick={()=> this.specific(char.id)}> Detalhes</button> <br/>
                          <strong>Descrição: </strong>
                          {char.description != "" ? char.description : "Sem Descrição"}
                      </p>
                  </div>
              </div>
              </div>
            );
            }) : null
          }
            </div>
            </div>
  );
}
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.char.isFetching,
    data: state.char.data,
    error: state.char.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadDataCharRequest())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListChar)