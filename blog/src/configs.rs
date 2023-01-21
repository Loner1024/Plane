use config::{Config, File};
use serde::Deserialize;

#[derive(Deserialize)]
pub struct Configs {
    pub app: App,
    pub database: DatabaseConfig,
}

#[derive(Deserialize)]
pub struct App {
    pub host: String,
    pub port: u16,
}

#[derive(Deserialize)]
pub struct DatabaseConfig {
    pub host: String,
    pub port: u16,
    pub username: String,
    pub password: String,
    pub database_name: String,
}

pub fn get_configs() -> Result<Configs, config::ConfigError> {
    let settings = Config::builder()
        .add_source(File::with_name("config"))
        .build()?;
    settings.try_deserialize()
}

impl DatabaseConfig {
    pub fn connection_string(&self) -> String {
        format!(
            "postgres://{}:{}@{}:{}/{}",
            self.username, self.password, self.host, self.port, self.database_name
        )
    }
}
