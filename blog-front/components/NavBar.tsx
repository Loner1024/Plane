import React from 'react';
import {Link, Text} from "@geist-ui/core";
import {Moon, Search, Sun} from "@icon-park/react";


const NavBar = ({page, switchTheme, themeType}: { page: String, switchTheme: any, themeType: String }) => {
    const judgeColor = (pageName: String): string => {
        return page === pageName ? 'text-black' : 'text-gray-500';
    }
    return (
        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 relative">
            <div
                className="max-w-[1240px] box-border w-screen flex shrink md:flex-row flex-col md:justify-between justify-center items-center text-xl pt-5 md:pt-10 md:px-10 m-auto">
                <div className="w-full inline-flex justify-center items-center md:justify-start md:basis-6/12">
                    <Text h4 className="m-0">Logo</Text>
                </div>
                <div className="inline-flex box-border items-center justify-between mt-5 px-5 md:mt-0 w-full">
                    <Link font="none" className="text-xl" href="#">Home</Link>
                    <Link font="none" href="#">Archives</Link>
                    <Link font="none" href="#">Topics</Link>
                    <Link font="none" href="#">About</Link>
                    {
                        themeType === "dark" ?
                            <Sun onClick={switchTheme} style={{cursor: "pointer"}}/> :
                            <Moon onClick={switchTheme} style={{cursor: "pointer"}}/>
                    }
                    <Search size="22" style={{cursor: "pointer"}}/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
