use std::process::Command;

fn main() {
    tonic_build::configure()
        .out_dir("src/pb")
        .compile(&["protos/abi.proto"], &["protos"])
        .unwrap();

    Command::new("cargo").arg("fmt").output().unwrap();

    println!("cargo:rerun-if-changed=protos/abi.proto");
}
