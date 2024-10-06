import { HomeAction, HomeState } from "./action";

window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<BmbpHomeLayout />);
};

const BmbpHomeLayout = () => {
  HomeAction.init();
  return (
    <div className="bmbp-page">
      <arco.Layout className="bmbp-page">
        <arco.Layout.Header className="bmbp-layout-header">
          <BmbpHeaderTitle />
          <BmbpHeaderNav />
          <BmbpHeaderUser />
        </arco.Layout.Header>
        <arco.Layout>
          <arco.Layout.Sider className="bmbp-layout-sider">
            <BmbpSideNavMenu></BmbpSideNavMenu>
          </arco.Layout.Sider>
          <arco.Layout>
            <arco.Layout.Content className="bmbp-layout-center">
              <BmbpCenterTitle />
              <BmbpCenterIFrame />
            </arco.Layout.Content>
            <arco.Layout.Footer className="bmbp-layout-copy-right">
              {AppCopyRight}
            </arco.Layout.Footer>
          </arco.Layout>
        </arco.Layout>
      </arco.Layout>
    </div>
  );
};

const BmbpHeaderTitle = () => {
  return (
    <div className="bmbp-layout-header-title">
      <img className="bmbp-logo" src={AppIcon}></img>
      <span className="bmbp-title">{AppTitle}</span>
    </div>
  );
};
const BmbpHeaderNav = () => {
  return <div className="bmbp-layout-header-center"></div>;
};
const BmbpHeaderUser = () => {
  const userDropList = (
    <arco.Menu>
      <arco.Menu.Item key="1">个人中心</arco.Menu.Item>
      <arco.Menu.Item key="2">修改密码</arco.Menu.Item>
      <arco.Divider style={{ margin: "2px 0" }} />
      <arco.Menu.Item key="3">退出登录</arco.Menu.Item>
    </arco.Menu>
  );
  return (
    <div className="bmbp-layout-header-right">
      <div>
        <arcoicon.IconQuestionCircle style={{ fontSize: 20 }} />
      </div>
      <div>
        <arcoicon.IconLanguage style={{ fontSize: 20 }} />
      </div>
      <div>
        <arcoicon.IconFullscreen style={{ fontSize: 20 }} />
      </div>
      <div>
        <arco.Badge count={9} dot offset={[2, -2]}>
          <arcoicon.IconNotification
            style={{
              fontSize: 20,
              verticalAlign: -3,
            }}
          />
        </arco.Badge>
      </div>
      <div>
        <arco.Dropdown droplist={userDropList} position="br">
          <arco.Avatar size={32}>A</arco.Avatar>
        </arco.Dropdown>
      </div>
    </div>
  );
};
const BmbpSideNavMenu = () => {
  return (
    <arco.Menu className="bmbp-layout-sider-menu">
      <arco.Menu.Item key="1" disabled>
        <arcoicon.IconHome />
        设计指南
      </arco.Menu.Item>
      <arco.Menu.Item key="2">
        <arcoicon.IconCalendar />
        区块
      </arco.Menu.Item>
      <arco.Menu.Item key="3">
        <arcoicon.IconCalendar />
        模块
      </arco.Menu.Item>
      <arco.Menu.SubMenu
        key="layout"
        title={
          <span>
            <arcoicon.IconCalendar /> 布局组件
          </span>
        }
      >
        <arco.Menu.Item key="11">栅格</arco.Menu.Item>
        <arco.Menu.Item key="12">分隔符</arco.Menu.Item>
        <arco.Menu.Item key="13">布局</arco.Menu.Item>
      </arco.Menu.SubMenu>
    </arco.Menu>
  );
};

const BmbpCenterTitle = () => {
  return (
    <div className="bmbp-layout-center-title">
      <arco.Breadcrumb>
        <arco.Breadcrumb.Item>首页</arco.Breadcrumb.Item>
        <arco.Breadcrumb.Item>系统管理</arco.Breadcrumb.Item>
        <arco.Breadcrumb.Item>用户管理</arco.Breadcrumb.Item>
      </arco.Breadcrumb>
    </div>
  );
};
const BmbpCenterIFrame = () => {
  HomeState.setContentSrc("/login.view");
  return (
    <iframe
      src={HomeState.contentSrc}
      className="bmbp-layout-center-iframe"
    ></iframe>
  );
};
