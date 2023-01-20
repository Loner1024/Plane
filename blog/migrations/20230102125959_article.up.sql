create table article
(
    id         serial primary key,
    title      text      not null,
    content    text               default null,
    created_at timestamp not null default now(),
    updated_at timestamp not null default now()
);
