import React from 'react';
import { Link } from 'gatsby';

const Navigation = ({menuItems}) => {
    return (
        <div>
            <ul>
            {
                menuItems.map(({path, text}) => {
                return (
                    <li key={path}>
                        <Link to={path}>{text}</Link>
                    </li>
                )
                })
            }
            </ul>
        </div>
    );
};

export default Navigation;