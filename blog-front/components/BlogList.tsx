import React from 'react';
import {Card, Image, Pagination, Text} from "@geist-ui/core";
import {Article} from "./ArticleData";
import {ArrowRight} from '@geist-ui/icons'

const BlogList = ({articles}: { articles: Article[] }) => {
    let d = new Date();
    return (
        <div
            className="max-w-[1240px] mx-auto relative flex flex-col justify-between z-[2] my-10">
            {
                articles.map((article: Article, index: number) => {
                    return (
                        <Card hoverable key={index} className="max-h-max"
                              style={{marginBottom: "1.25rem", marginTop: "1.25rem", border: "0"}}>
                            {article.image !== "" ?
                                <Image width="100%" h="none" className="md:h-64 h-36" style={{objectFit: 'cover'}}
                                       src={article.image}/> : null}
                            <Text h4>{article.title}</Text>
                            <Text type="secondary"
                                  small>{d.getFullYear() + "/" + d.getMonth() + 1 + "/" + d.getDate()}</Text>
                            <Text>{article.description}</Text>
                            <Text style={{color: "#ed556a"}} span>
                                Read More <ArrowRight className="inline-block"/>
                            </Text>
                        </Card>
                    )
                })
            }
            <Pagination className="flex flex-wrap justify-center my-10" margin="none" count={5} initialPage={1}
                        limit={5} scale={1.2}/>
        </div>
    );
};

export default BlogList;
