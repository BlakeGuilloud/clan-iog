import React, { Component, Fragment } from 'react';
import marked from 'marked';
import dateFns from 'date-fns';
import cx from 'classnames';

const articles = [
  {
    id: 1,
    title: 'Custom Keys',
    body: 'Many players use custom keys to enhance their gameplay.  This allows for a more organized keyboard. Step 1: To try them out for yourself download this <a className="link-brand" download href="downloads/CustomKeys.txt">Customkeys.txt</a> file. Step 2: Find the C:/Progrom Files/Warcraft III folder. Step 3: Put “Customkeys.txt” into the folder. Double check if the name of your file is “Customkeys.txt” -Don’t rename it!- Step 4: Start/Restart Wc3 and in the gamplay options you have to check the box “Use my own Customkeys”! The file provided above keeps the arrangement of icons standard.  So for example the top row of action icons for a unit will remain: MOVE STOP HOLD ATTACK.  The difference is that now the hot keys will be Q W E R, rather than M S H A.  However, some player prefer to keep attack on A so they rearrange the icons with warkeys. For more on customKeys try: <a className="link-brand" href="http://gaming-tools.com/warcraft-3/warkey/">WarKeys</a> this program will also allow you to get your item inventory keys set to 7 8 / 4 5 / 1 2 so that the game inventory section lines up with your numberpad.',
    author: 'LegaL_EasE',
    date: dateFns.format(new Date(), 'MM/DD/YYYY'),
    approved: true,
    category: {
      id: 1,
      name: 'Tech',
    },
  },
];

class Articles extends Component {
  render() {
    const renderBadge = ({ id, name }) => {
      const badgeClasses = cx('badge', 'alt__font', {
        'badge-secondary': id === 1,
      });

      return <span className={badgeClasses}>{name}</span>;
    };

    const renderArticle = (item) => {
      const { category, id, title, body, author, date } = item;

      const badgeClasses = cx('badge', 'alt__font', {
        'badge-secondary': category.id === 1,
      });

      return (
        <div className="about" key={id}>
          <div className="about-item">
            <div className="about-item__header">{title}</div>
            <div className="alt__font" dangerouslySetInnerHTML={{ __html: marked(body) }} />
            <div className="alt__font">{date}</div>
            <div className="alt__font">{author}</div>
            <span className={badgeClasses}>{category.name}</span>
          </div>
        </div>
      );
    };


    return (
      <Fragment>
        {articles.filter(item => item.approved).map(renderArticle)}
      </Fragment>
    );
  }
}

export default Articles;