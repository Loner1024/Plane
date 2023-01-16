import React from 'react';
import {Image} from "@geist-ui/core";
import DemoImg from "../public/001.png"

const Hero = () => {
    return (
        <div className="max-w-[1240px] mx-auto relative flex justify-center z-[2] h-48 md:h-96 my-10">
            <Image width="100%" height="100%" style={{objectFit: 'cover'}} src={DemoImg.src}/>
        </div>
    );
};

export default Hero;
