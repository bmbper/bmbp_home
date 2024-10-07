use bmbp_app_util::parse_user;
use bmbp_auth::{BmbpApp, BmbpAuthUtil, BmbpMenu, BmbpUser};
use bmbp_http_type::{BmbpResp, RespVo};
use salvo::prelude::*;

#[handler]
pub async fn query_user_info(
    _req: &mut Request,
    _resp: &mut Response,
    depot: &mut Depot,
) -> BmbpResp<RespVo<BmbpUser>> {
    let current_user_op = parse_user(depot);
    if current_user_op.is_none() {
        return Ok(RespVo::fail_msg("用户未登录".to_string()));
    }
    let current_user = current_user_op.unwrap();
    let user_id_op = current_user.get_id();
    if user_id_op.is_none() {
        return Ok(RespVo::fail_msg("用户信息无效，请重新登录".to_string()));
    }
    let user_id = user_id_op.as_ref().unwrap().clone();
    match BmbpAuthUtil::get_user_by_id(user_id).await {
        Ok(data) => {
            return Ok(RespVo::ok_data_msg(data, "查询成功！".to_string()));
        }
        Err(err) => {
            return Ok(RespVo::fail_msg(
                err.get_msg()
                    .as_ref()
                    .unwrap_or(&"".to_string())
                    .to_string(),
            ));
        }
    }
}

#[handler]
pub async fn query_app_page(
    _req: &mut Request,
    _resp: &mut Response,
    _depot: &mut Depot,
) -> BmbpResp<RespVo<Vec<BmbpApp>>> {
    let app_rs = BmbpAuthUtil::get_apps_by_user_id("".to_string()).await;
    match app_rs {
        Ok(data) => {
            return Ok(RespVo::ok_data_msg(data, "查询成功！".to_string()));
        }
        Err(err) => {
            return Ok(RespVo::fail_msg(
                err.get_msg()
                    .as_ref()
                    .unwrap_or(&"".to_string())
                    .to_string(),
            ));
        }
    }
}

#[handler]
pub async fn query_app_menu_tree(
    _req: &mut Request,
    _resp: &mut Response,
    _depot: &mut Depot,
) -> BmbpResp<RespVo<Vec<BmbpMenu>>> {
    let menu_rs = BmbpAuthUtil::get_menus_by_app_code("".to_string()).await;
    match menu_rs {
        Ok(data) => {
            return Ok(RespVo::ok_data_msg(data, "查询成功！".to_string()));
        }
        Err(err) => {
            return Ok(RespVo::fail_msg(
                err.get_msg()
                    .as_ref()
                    .unwrap_or(&"".to_string())
                    .to_string(),
            ));
        }
    }
}
