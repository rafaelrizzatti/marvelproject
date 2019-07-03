import React, { Component } from 'react'
class SpecificChar extends Component {
  componentDidMount() {
    fetch("https://gateway.marvel.com:443/v1/public/characters/"+this.props.match.params.search+"?ts=1561894698999&limit=8&apikey=3d54d19626d9e415ec7306f68e53d66f&hash=82e51e8b5f16e0374a957f5f2d7a16fa")
    .then(response => response.json())
    .then(data => this.setState({char: data.data.results[0]}));
  }
    constructor(props) {
        super(props);
        this.state = {editar:false, char: ""}
      }

      salvar = (e) =>
      {
        let char = this.state.char
        char.name = e.target.value 
        this.setState({char: char})
      }
  render () {
    return (
        <div className="container mt-10">
          {
            this.state.editar ?
                <input
                onChange={e => this.salvar(e)}
                // value={this.props.search}
                defaultValue={this.state.char.name}
                className="form-control col-9 mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
            :<h5 className="card-title">{this.state.char.name}</h5>
          }
        {this.state.editar ? 
         <button className="btn bg-primary" onClick={() =>this.setState({editar:false})} >Salvar</button>
         :<button className="btn bg-primary" onClick={() =>this.setState({editar:true})} >Editar</button>}
         <br/><br/>
        <img className="card-img-top img-fluid" src={this.state.char != "" ? this.state.char.thumbnail.path+"."+this.state.char.thumbnail.extension : ""}  alt="" />
        <div className="card-body">
          <p className="card-text">
            <strong>Descrição: </strong>
           {this.state.char.description}
          </p>
          Series:
          {this.state.char != "" ? this.state.char.series.items.map(series =>{
            return(
              <li key={series.name}>
                {series.name}
              </li>
            )
          }): "" }
        </div>
      </div>
    )
  }
}
export default SpecificChar
