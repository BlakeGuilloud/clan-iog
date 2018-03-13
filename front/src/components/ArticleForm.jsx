import React, { Component, Fragment } from 'react';
import marked from 'marked';

import { createArticle } from '../actions/articleActions';

class ArticleForm extends Component {
  state = {
    disabledSave: false,
    body: '',
    title: '',
    author: '',
    activeNavItem: 'Edit',
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const payload = {
      body: this.state.body,
      title: this.state.title,
      author: this.state.author,
    };

    createArticle(payload)
      .then(console.log);
  }

  render() {
    const navItems = ['Edit', 'Preview'];

    const renderNavItems = (item, idx) => {
      let classNames = 'nav-link';

      if (this.state.activeNavItem === item) {
        classNames += ' active';
      }

      return (
        <li className="nav-item" key={idx}>
          <a onClick={() => this.setState({ activeNavItem: item })} href="javascript:void(0)" className={classNames}>{item}</a>
        </li>
      );
    };

    const renderEditForm = () => {
      return (
        <Fragment>
          <br />
          <div className="form-group">
            <input className="form-control" value={this.state.title} name="title" onChange={this.handleChange} placeholder="Title" />
          </div>
          <div className="form-group alt__font">
            <textarea className="form-control" value={this.state.body} rows="10" name="body" placeholder="Content" onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group alt__font">
            <input className="form-control" value={this.state.author} name="author" onChange={this.handleChange} placeholder="Author" />
          </div>
        </Fragment>
      );
    };

    const renderPreview = () => {
      return (
        <div className="about">
          <div className="about-item">
            <div className="about-item__header">{this.state.title}</div>
            <div className="about-item__content alt__font article-form__preview-body" dangerouslySetInnerHTML={{ __html: marked(this.state.body) }} />
          </div>
        </div>
      );
    };

    return (
      <div className="article-form">
        <ul className="nav nav-tabs">
          {navItems.map(renderNavItems)}
        </ul>
        {
          this.state.activeNavItem === 'Edit' ? renderEditForm() : renderPreview()
        }

        <div className="form-group">
          <button className="btn btn-dark" disabled={this.state.disableSave} onClick={this.handleSubmit} type="submit">Submit Article</button>
        </div>
      </div>
    );
  }
}

export default ArticleForm;