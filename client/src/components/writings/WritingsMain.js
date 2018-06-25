import React from 'react';
import WritingsMobile from './WritingsMobile';
import WritingsTable from './WritingsTable';

const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)|(pixel)/i);

const WritingsMain = () => {
    if (isMobile) {
        return <WritingsMobile />
    } else {
        return <WritingsTable />
    }
}

export default WritingsMain; 