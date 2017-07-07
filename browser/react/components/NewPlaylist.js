import React, { Link, Component } from 'react'

export default class NewPlaylist extends Component {

  constructor(){
    super();
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    console.log('A name was submitted: ' + this.state.inputValue);
    // event.preventDefault();
  }

  handleChange(event){
    console.log(event);
    this.setState({inputValue: event.target.value});
  }

  render() {
    console.log("render newplaylist");
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input onChange={this.handleChange} className="form-control" type="text"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
              <Link to="/new-playlist">
                <button type="submit" className="btn btn-success">Create Playlist</button>
              </Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
