use crate::ctx::ctx_init;
use crate::init::CTX_TERA;
use salvo::prelude::Text;
use salvo::{handler, Depot, Request, Response};

#[handler]
pub async fn home_view(_: &mut Request, resp: &mut Response) {
    let ctx = ctx_init();
    let view_html = "home/bmbp.html";
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
