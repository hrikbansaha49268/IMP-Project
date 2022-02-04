import React from 'react';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span className='for-margin'>WebDev</span>
                News
            </h1>
            <hr />
            <p className={headerStyles.description}>Keep Up to date with Latest News</p>
            <style jsx>
                {`
                    .for-margin{
                        margin: 0 1rem;
                    }
                `}
            </style>
        </div>
    )
};

export default Header;
