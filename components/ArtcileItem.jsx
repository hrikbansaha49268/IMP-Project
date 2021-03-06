import React from 'react';
import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

const ArtcileItem = ({ article }) => {
    return (
        <Link href='/article/[id]' as={`article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    );
};

export default ArtcileItem;
