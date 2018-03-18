import React, { Component, Fragment } from 'react';
import dateFns from 'date-fns';
import cx from 'classnames';
import Markdown from 'markdown-to-jsx';

import { createArticle, fetchCategories } from '../actions/articleActions';

class ArticleForm extends Component {
  state = {
    disabledSave: false,
    title: 'Article Title',
    author: '',
    activeNavItem: 'Edit',
    categories: [],
    category: '',
    body:
`### Write an Article using the Markdown markup language.

Markdown is a **super** easy, and provides an *easy* syntax for styling text!

#### Edit this Textarea using Markdown syntax to style your Article.

[Click here](https://www.markdownguide.org/cheat-sheet) for a quick guide on getting started with Markdown syntax!

It allows you to easily embed assets! Check out Nic Cage:

![Nick Cage](http://placecage.com/400/300)

#### Here is a list of things:
- List Item 1
- List Item 2`,
  }

  componentDidMount() {
    fetchCategories()
      .then(categories => this.setState({ categories, category: categories[0]._id }));
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  }

  handleSelect = (e) => {
    const { value } = e.currentTarget;

    this.setState({ category: value });
  }

  handleSubmit = () => {
    const payload = {
      body: this.state.body,
      title: this.state.title,
      author: this.state.author,
      category: this.state.category,
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
          <div className="form-group">
            <select defaultValue={this.state.category} onChange={this.handleSelect}>
              {this.state.categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
            </select>
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

    const renderCategoryBadge = (category) => {
      if (!category) return null;

      const { _id, name } = category;

      const badgeClasses = cx('badge', 'alt__font', {
        'badge-secondary': name === 'Strategy',
        'badge-primary': name === 'Tournament',
        'badge-success': name === 'News',
        'badge-danger': name === 'Other',
      });

      return <span key={_id} className={badgeClasses}>{name}</span>;
    };

    const renderPreview = () => {
      return (
        <div className="about">
          <div className="about-item">
            <div className="about-item__header">{this.state.title}</div>
            <div className="alt__font">
              <Markdown options={{ forceBlock: true }}>
                {this.state.body}
              </Markdown>
            </div>
            <div className="alt__font">{dateFns.format(new Date(), 'MM/DD/YYYY')}</div>
            <div className="alt__font">{this.state.author}</div>
            {renderCategoryBadge(this.state.categories.find(c => c._id === this.state.category))}
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