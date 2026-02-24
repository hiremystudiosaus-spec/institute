import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path }) => {
    const fullTitle = `${title} | HS Times Global Institute`;
    const url = `https://hs-times.com${path || ''}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} data-rh="true" />
            <meta name="description" content={description} data-rh="true" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" data-rh="true" />
            <meta property="og:url" content={url} data-rh="true" />
            <meta property="og:title" content={fullTitle} data-rh="true" />
            <meta property="og:description" content={description} data-rh="true" />
            <meta property="og:image" content="https://hs-times.com/hero-bg.png" data-rh="true" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" data-rh="true" />
            <meta property="twitter:url" content={url} data-rh="true" />
            <meta property="twitter:title" content={fullTitle} data-rh="true" />
            <meta property="twitter:description" content={description} data-rh="true" />
            <meta property="twitter:image" content="https://hs-times.com/hero-bg.png" data-rh="true" />

            {/* Keywords */}
            <meta name="keywords" content="hs times, education, international courses, domestic courses, engineering college, higher education, university" data-rh="true" />

            {/* Canonical */}
            <link rel="canonical" href={url} data-rh="true" />
        </Helmet>
    );
};

export default SEO;
