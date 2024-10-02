use init::build_bmbp_static_router;
use salvo::prelude::*;
use view::home_view;
mod action;
mod ctx;
mod init;
mod view;
pub fn build_bmbp_home_router() -> Router {
    let mut router = Router::new();
    router = router.push(build_bmbp_static_router());

    // action router
    let action_router = Router::new();
    router = router.push(action_router);

    // view router
    let view_router = Router::new().push(Router::with_path("home.view").get(home_view));
    router = router.push(view_router);
    return router;
}
