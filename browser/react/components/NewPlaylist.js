import React, { Link, Component } from 'react';
import axios from 'axios';

export default class NewPlaylist extends Component {

  constructor(){
    super();
    this.state = {
      inputValue: '',
      changed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addPlaylist(this.state.inputValue); // pass the input value to the method from Main!
    this.setState({inputValue: '', changed: false});
  }

  handleChange(event){
    this.setState({inputValue: event.target.value});
    this.setState({changed: true});
  }

  render() {
    const value = this.state.inputValue;
    const changed = this.state.changed;
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input onChange={this.handleChange} className="form-control" type="text" value={this.state.inputValue} />
              </div>
            </div>
            {((value.length === 0 || value.length > 16) && changed) ?
            <div className="alert alert-warning">Please enter a name</div> : <div />}
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" value={this.state.inputValue} disabled={value.length === 0 || value.length > 16 }>Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
