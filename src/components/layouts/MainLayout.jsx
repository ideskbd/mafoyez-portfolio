import React from 'react';

/**
 * Page Layout
 * @param {string} title ex: Page title 
 * @param {jsx} children  
 * @returns MainLayout
 */

const MainLayout = ({ title, children }) => {

    document.title = typeof title !== "undefined" && title !== null ? `${title} || M.A FAYEZ` : `M.A FAYEZ`;

    return (
        <div>
            {children}
        </div>
    );
};

export default MainLayout;