create table tags
(
    id    serial primary key,
    value varchar(255) not null unique
)
