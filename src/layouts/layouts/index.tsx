import Head from 'next/head';
import React from 'react';

interface ILayoutProps {
    children: React.ReactNode;
    title?: string;
}
/**
 * Page Layout
 * @param {string} title ex: Page title 
 * @param {jsx} children  
 * @returns MainLayout
 */

const MainLayout = ({ title, children }: ILayoutProps) => {

    const pageTitle = typeof title !== undefined && title !== null && title !== "" ? `${title} || M.A Foyez` : `M.A Foyez`;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#000000" />
                <meta name="author" content="Muhammad Abul Foyez" />
                <meta name="keyword" content="Frontend Developer, MERN Stack Developer, Web Developer, Junior Software Engineer, Web Designer. JavaScript Developer, React JS Developer," />
                <meta name="description" content="updated soon...." />
                <link rel="icon" href={`./public/favicon.svg`} />
            </Head>
            <main>
                {/* <Header /> */}
                <section id="content">{children}</section>
                {/* <Footer /> */}
            </main>
        </>
    );
};

export default MainLayout;