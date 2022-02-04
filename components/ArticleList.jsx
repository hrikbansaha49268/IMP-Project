import articleStyles from '../styles/Article.module.css';
import React from 'react';
import ArtcileItem from './ArtcileItem';

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map(article => (<ArtcileItem article={article} />))}
        </div >
    );
};

export default ArticleList;
