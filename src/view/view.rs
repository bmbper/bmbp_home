use crate::ctx::ctx_init;
use crate::init::CTX_TERA;
use salvo::prelude::Text;
use salvo::{handler, Depot, Request, Response};

use super::vars::{APP_COPY_RIGHT, APP_ICON, APP_TITLE};

#[handler]
pub async fn home_view(_: &mut Request, resp: &mut Response) {
    let mut ctx = ctx_init();
    ctx.insert(APP_TITLE, "Bmbp");
    ctx.insert(APP_ICON, "/bmbp/ui/home/image/app.png");
    ctx.insert(APP_COPY_RIGHT, "Copyright © 2022-2023 bmbp");
    let view_html = "home/bmbp.html";
    resp.render(Text::Html((*CTX_TERA).render(view_html, &ctx).unwrap()));
}

#[handler]
pub async fn welcome_view(_: &mut Request, depot: &mut Depot, resp: &mut Response) {
    let ctx = ctx_init();
    let view_html = "home/welcome.html";
    resp.render(Text::Html((*CTX_TERA).render(view_html, &ctx).unwrap()));
}

#[handler]
pub async fn login_view(_: &mut Request, resp: &mut Response) {
    let ctx = ctx_init();
    let view_html = "login/bmbp.html";
    resp.render(Text::Html((*CTX_TERA).render(view_html, &ctx).unwrap()));
}

#[handler]
pub async fn root_view(_: &mut Request, depot: &mut Depot, resp: &mut Response) {
    let ctx = ctx_init();
    let view_html = "login/bmbp.html";
    resp.render(Text::Html((*CTX_TERA).render(view_html, &ctx).unwrap()));
}
