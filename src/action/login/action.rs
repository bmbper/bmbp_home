use bmbp_http_type::{BmbpResp, RespVo};
use salvo::prelude::*;

#[handler]
pub async fn root_handler(
    _req: &mut Request,
    _resp: &mut Response,
    _depot: &mut Depot,
) -> BmbpResp<RespVo<String>> {
    Ok(RespVo::ok_data_msg(
        Some("欢迎使用BMBP系统".to_string()),
        "访问成功".to_string(),
    ))
}
