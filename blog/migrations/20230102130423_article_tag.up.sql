create table article_tag
(
    article_id int not null,
    tag_id     int not null,
    primary key (article_id, tag_id),
    foreign key (article_id) references article (id),
    foreign key (tag_id) references tags (id)
);
