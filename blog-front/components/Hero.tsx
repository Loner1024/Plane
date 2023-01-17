import React from 'react';
import Image from "next/image";

const Hero = () => {
    return (
        <div className="max-w-[1240px] mx-auto relative flex justify-center z-[2] min-h-fit mt-8">
            <Image className="md:h-96 h-56 rounded-md" width={1240} height={24} alt="banner" priority={true}
                   style={{objectFit: 'cover'}}
                   src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
        </div>
    );
};

export default Hero;
