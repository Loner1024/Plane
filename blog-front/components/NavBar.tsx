import React from 'react';
import { Link, Text} from "@geist-ui/core";
import {Search} from "@icon-park/react";


const NavBar = ({page}:{page:String}) => {
    const judgeColor = (pageName:String):string => {
        return page === pageName ? 'text-black' : 'text-gray-500';
    }
    return (
        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 relative">
            <div className="max-w-[1240px] flex justify-between items-center text-xl px-32 pt-10 m-auto">
                    <div className="basis-1/4">
                        <Text h4 className="m-0">Logo</Text>
                    </div>
                    <div className="flex">
                        <Link href="#" style={{padding:'1rem'}}>Home</Link>
                        <Link href="#" style={{padding:'1rem'}}>Archives</Link>
                        <Link href="#" style={{padding:'1rem'}}>Topics</Link>
                        <Link href="#" style={{padding:'1rem'}}>About</Link>
                        <div className="p-4 mt-1">
                            <Search theme="outline" size="22" fill="#333"/>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default NavBar;
