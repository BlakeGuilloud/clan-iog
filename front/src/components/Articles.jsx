import React, { Component, Fragment } from 'react';
import marked from 'marked';
import dateFns from 'date-fns';
import cx from 'classnames';

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
        'badge-secondary': name === 'Tech',
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
        {this.state.articles.filter(item => item.approved).map(renderArticle)}
      </Fragment>
    );
  }
}

export default Articles;