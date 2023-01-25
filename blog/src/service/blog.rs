use sqlx::{PgPool, Row};
use tonic::{Request, Response, Status};

use crate::pb::blog_service_server::BlogService;
use crate::pb::{
    Article, BlogListRequest, BlogListResponse, CreateBlogRequest, CreateBlogResponse,
    DeleteBlogRequest, DeleteBlogResponse, GetBlogRequest, GetBlogResponse, UpdateBlogRequest,
    UpdateBlogResponse,
};

pub struct Service {
    #[allow(dead_code)]
    db: PgPool,
}

impl Service {
    pub fn new(db: PgPool) -> Self {
        Self { db }
    }
}

#[tonic::async_trait]
impl BlogService for Service {
    async fn create_blog(
        &self,
        request: Request<CreateBlogRequest>,
    ) -> Result<Response<CreateBlogResponse>, Status> {
        let request = request.into_inner();
        match sqlx::query("INSERT INTO article (title, content) VALUES ($1, $2) RETURNING id")
            .bind(request.title.clone())
            .bind(request.content.clone())
            .fetch_one(&self.db)
            .await
        {
            Ok(row) => {
                let id: i64 = match row.try_get::<i32, _>("id") {
                    Ok(id) => id as i64,
                    Err(_) => 0,
                };
                Ok(Response::new(CreateBlogResponse {
                    article: Some(Article {
                        id,
                        title: request.title,
                        content: request.content,
                        created_at: None,
                        updated_at: None,
                        tags: vec![],
                    }),
                }))
            }
            Err(e) => Err(Status::internal(e.to_string())),
        }
    }

    async fn update_blog(
        &self,
        _request: Request<UpdateBlogRequest>,
    ) -> Result<Response<UpdateBlogResponse>, Status> {
        todo!()
    }

    async fn get_blog(
        &self,
        _request: Request<GetBlogRequest>,
    ) -> Result<Response<GetBlogResponse>, Status> {
        todo!()
    }

    async fn blog_list(
        &self,
        _request: Request<BlogListRequest>,
    ) -> Result<Response<BlogListResponse>, Status> {
        todo!()
    }

    async fn delete_blog(
        &self,
        _request: Request<DeleteBlogRequest>,
    ) -> Result<Response<DeleteBlogResponse>, Status> {
        todo!()
    }
}
