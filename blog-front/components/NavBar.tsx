import React from 'react';
import {Divider, Link} from "@geist-ui/core";


const NavBar = ({page}:{page:String}) => {
    const judgeColor = (pageName:String):string => {
        return page === pageName ? 'text-black' : 'text-gray-500';
    }
    return (
        <div>
            <div className="flex justify-start items-center my-5 text-gray-500 mb-10">
                <Link href="/#" style={{marginRight:'1.5rem'}} className={judgeColor('blog')}>Blog</Link>
                <Link href="/#" style={{marginRight:'1.5rem'}} className={judgeColor('photo')}>Photo</Link>
                <Link href="/#" style={{marginRight:'1.5rem'}} className={judgeColor('about')}>About</Link>
            </div>
            <Divider/>
        </div>
    );
};

export default NavBar;
