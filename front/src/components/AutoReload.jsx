import React, { Component } from 'react';

class AutoReload extends Component {
  state = {
    hashHasChanged: false,
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.text())
      .then(this.generateHash)
      .then(hash => {
        const previousHash = localStorage.getItem('cacheHash');

        if (!previousHash) {
          localStorage.setItem('cacheHash', hash);
        } else if (previousHash !== hash) {
          localStorage.setItem('cacheHash', hash);
          this.setState({ hashHasChanged: true });
        }
      });
  }

  generateHash = s => s
    .split('')
    .reduce((a,b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);

      return a & a;
    }, 0)
    .toString();

  reloadPage() {
    window.location.reload(true);
  }

  render() {
    if (!this.state.hashHasChanged) return null;

    return (
      <div className="alert alert-light" role="alert">
        <h4 className="alert-heading">
          Welcome back to clan-iog.com
        </h4>
        <p className="alt__font">
          This website is still under active development, and it looks like your browser has cached an older version of the site!
        </p>
        <hr />
        <button onClick={this.reloadPage} className="btn btn-outline-dark">
          Reload Site
        </button>
      </div>
    );
  }
}

AutoReload.defaultProps = {
  url: 'clan-iog.com',
};

export default AutoReload;