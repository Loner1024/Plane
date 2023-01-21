mod configs;
mod pb;
mod service;

use crate::pb::blog_service_server::BlogServiceServer;
use service::blog::Service;
use sqlx::PgPool;
use tonic::transport::Server;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let conf = configs::get_configs()?;
    let db_pool = PgPool::connect(&conf.database.connection_string()).await?;

    let blog_service = Service::new(db_pool);

    let addr = format!("{}:{}", conf.app.host, conf.app.port).parse()?;
    Server::builder()
        .add_service(BlogServiceServer::new(blog_service))
        .serve(addr)
        .await?;
    Ok(())
}
