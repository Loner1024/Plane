import React from 'react';
import {Display,Image} from "@geist-ui/core";
import DemoImg from "../public/001.jpeg"
import {inspect} from "util";
import styles = module

const Hero = () => {
    return (
        <div className="max-w-[1240px] mx-auto relative flex justify-center z-[2] h-96">
            <div className="flex pt-10">
                <Image width="100%" style={{objectFit:'cover'}}  src={DemoImg.src}/>
            </div>
        </div>
    );
};

export default Hero;
