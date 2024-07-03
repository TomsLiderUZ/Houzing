import React, { useState, useEffect } from 'react';
import {
    CardCaruselUpTopBg,
    CardCaruselUpTopTitle,
    CardCaruselUpTopAbout
} from "./style";


function TitleText({ title, about, minAbout }) {

    const [sizeAbout, setSizeAbout] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.offsetWidth;
            setSizeAbout(bodyWidth <= 750 ? minAbout : about);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [about, minAbout]);

    return (
        <CardCaruselUpTopBg>
            <CardCaruselUpTopTitle>{title}</CardCaruselUpTopTitle>
            <CardCaruselUpTopAbout>{sizeAbout}</CardCaruselUpTopAbout>
        </CardCaruselUpTopBg>
    );
}

export default TitleText;
