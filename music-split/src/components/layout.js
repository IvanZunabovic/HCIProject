import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Navigation from './navigation';

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        {
            site(siteMetadata: {}) {
                siteMetadata {
                    menuItems {
                        path
                        text
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Navigation menuItems={data.site.siteMetadata.menuItems}/>
            {children}
        </div>
    );
};

export default Layout;