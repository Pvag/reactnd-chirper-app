import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
import { Redirect } from 'react-router-dom';

class NewTweet extends Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      text,
      toHome: false
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const text = this.state.text;

    const { dispatch, id } = this.props;
    dispatch(handleAddTweet(text, id));

    this.setState(() => ({
      text: '',
      toHome: id ? false : true
    }));
  }

  render() {
    const { text, toHome } = this.state;
    const charLeft = 280 - text.length;

    if (toHome === true) {
      return <Redirect to="/" />
    }
    
    return(
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            className="textarea"
            maxLength={280}
            value={text}
            onChange={this.handleChange}
          />
          {charLeft <= 100 && (
            <div className="tweet-length">{charLeft}</div>
          )}
          <button className="btn" type="submit" disabled={text.length === 0}>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet);