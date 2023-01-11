import React from 'react';
import AvatarImg from '../public/avatar.png'
import {Avatar,Text} from "@geist-ui/core";

const Hero = ({heading}:{heading:String}) => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex w-24 h-24">
                <Avatar src={AvatarImg.src} width="100%" height="100%"/>
            </div>
            <div className="mt-2 mb-0">
                <Text h2 style={{marginBottom:0}}>{heading}</Text>
            </div>
        </div>
    );
};

export default Hero;
