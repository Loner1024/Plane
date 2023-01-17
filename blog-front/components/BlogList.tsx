import React, {useState} from 'react';
import {Card, Pagination, Text} from "@geist-ui/core";
import {Article} from "./ArticleData";
import {ArrowRight} from '@geist-ui/icons'
import Image from "next/image";

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const BlogList = ({articles}: { articles: Article[] }) => {
        const [isLoading, setLoading] = useState(true);
        let d = new Date();
        return (
            <div
                className="max-w-[1240px] mx-auto relative flex flex-col justify-between z-[2] my-10">
                {
                    articles.map((article: Article, index: number) => {
                        return (
                            <Card hoverable key={index} className="max-h-max"
                                  style={{marginBottom: "1.25rem", marginTop: "1.25rem", border: "0"}}>
                                <Card.Content padding="none" className="pb-4">
                                    {article.image !== "" ?
                                        <Image width={1240} height={24} alt={article.title}
                                               onLoadingComplete={() => setLoading(false)}
                                               className={cn(
                                                   'md:h-64 h-36 duration-1000 ease-in-out rounded-t-md',
                                                   isLoading
                                                       ? 'grayscale blur-xl scale-100'
                                                       : 'grayscale-0 blur-0 scale-100'
                                               )}
                                               style={{objectFit: 'cover'}}
                                               src={article.image}/> : null}
                                    <Text className="px-4 pt-4" h4>{article.title}</Text>
                                    <Text className="px-4" type="secondary"
                                          small>{d.getFullYear() + "/" + d.getMonth() + 1 + "/" + d.getDate()}</Text>
                                    <Text className="px-4">{article.description}</Text>
                                    <Text className="px-4" style={{color: "#ed556a"}} span>
                                        Read More <ArrowRight className="inline-block"/>
                                    </Text>
                                </Card.Content>
                            </Card>
                        )
                    })
                }
                <Pagination className="flex flex-wrap justify-center my-10" margin="none" count={5} initialPage={1}
                            limit={5} scale={1.2}/>
            </div>
        );
    }
;

export default BlogList;
