import {Component} from "react";
import React from "react";

class Input extends Component {

  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }


  render() {
    return (
      <div className="bottom">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Unesi poruku i stisni ENTER"
            // bilo autofocus="true"
            autoFocus={true}
            className="input-msg"
          />
          <button className="login-btn">Pošalji</button>
        </form>
      </div>
    );
  }


}

export default Input;