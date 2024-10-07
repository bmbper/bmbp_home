use action::{query_app_menu_tree, query_app_page, query_user_info, root_handler};
use init::build_bmbp_static_router;
use salvo::prelude::*;
use view::{home_view, login_view, root_view, welcome_view};
mod action;
mod ctx;
mod init;
mod view;
pub fn build_bmbp_home_router() -> Router {
    let mut router = Router::new();
    router = router.push(build_bmbp_static_router());
    // action router
    let mut action_router = Router::new();
    action_router = action_router.push(
        Router::with_path("home")
            .push(Router::with_path("user").post(query_user_info))
            .push(Router::with_path("app").post(query_app_page))
            .push(Router::with_path("menu").post(query_app_menu_tree)),
    );
    router = router.push(action_router);
    // view router
    let view_router = Router::new()
        .push(Router::new().get(root_view))
        .push(Router::new().post(root_handler))
        .push(Router::with_path("home.view").get(home_view))
        .push(Router::with_path("login.view").get(login_view))
        .push(Router::with_path("home/welcome.view").get(welcome_view));

    router = router.push(view_router);
    return router;
}
