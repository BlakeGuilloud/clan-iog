import React, { Component, Fragment } from 'react';
import marked from 'marked';
import dateFns from 'date-fns';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { fetchArticles } from '../actions/articleActions';

class Articles extends Component {
  state = {
    articles: [],
    pageLoading: true,
  }

  componentDidMount() {
    fetchArticles()
      .then((articles) => {
        this.setState({
          articles,
          pageLoading: false,
        });
      });
  }

  render() {
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

    const renderArticle = ({ category, _id, title, body, author, createdAt }) => (
      <div className="about" key={_id}>
        <div className="about-item">
          <div className="about-item__header">{title}</div>
          <div className="alt__font" dangerouslySetInnerHTML={{ __html: marked(body) }} />
          <div className="alt__font">{dateFns.format(createdAt, 'MM/DD/YYYY')}</div>
          <div className="alt__font">{author}</div>
          {renderCategoryBadge(category)}
        </div>
      </div>
    );

    if (this.state.pageLoading) {
      return (
        <div className="loader">Loading...</div>
      );
    }

    return (
      <Fragment>
        <div className="upload__button">
          <Link className="u-m-0-a btn btn-outline-dark" to="/createArticle">Write Article</Link>
        </div>
        {this.state.articles.filter(item => item.approved).map(renderArticle)}
      </Fragment>
    );
  }
}

export default Articles;