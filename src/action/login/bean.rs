use bmbp_marco::bean;
use serde::{Deserialize, Serialize};

#[bean]
pub struct LoginUser {
    pub login_type: Option<String>,
    pub user_name: Option<String>,
    pub password: Option<String>,
    pub valid_code: Option<String>,
}
