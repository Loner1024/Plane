use sqlx::PgPool;
use tonic::{Request, Response, Status};

use crate::pb::blog_service_server::BlogService;
use crate::pb::{
    BlogListRequest, BlogListResponse, CreateBlogRequest, CreateBlogResponse, DeleteBlogRequest,
    DeleteBlogResponse, GetBlogRequest, GetBlogResponse, UpdateBlogRequest, UpdateBlogResponse,
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
        _request: Request<CreateBlogRequest>,
    ) -> Result<Response<CreateBlogResponse>, Status> {
        todo!()
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
