import { HomeAction, HomeState } from "./action";

window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<BmbpHomeLayout />);
};
/// 主页
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
            <BmbpSideNavMenu />
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

/// 应用标题
const BmbpHeaderTitle = () => {
  return (
    <div className="bmbp-layout-header-title">
      <img className="bmbp-logo" src={AppIcon}></img>
      <span className="bmbp-title">{AppTitle}</span>
    </div>
  );
};
/// 应用导航
const BmbpHeaderNav = () => {
  return <div className="bmbp-layout-header-center"></div>;
};
/// 右侧用户相关操作
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
/// 左则目录
const BmbpSideNavMenu = () => {
  const menuData = [
    {
      id: "1",
      name: "首页",
      namePath: "/首页",
    },
    {
      id: "2",
      name: "系统管理",
      namePath: "/",
      children: [
        {
          id: "3",
          name: "角色管理",
          namePath: "/系统管理/角色管理",
        },
        {
          id: "5",
          name: "用户管理",
          namePath: "/系统管理/角色管理",
        },
      ],
    },
  ];
  HomeState.setSiderMenuData(menuData);
  const genrateMenu = (menuArray: any[]) => {
    return menuArray.map((item: any) => {
      if (item.children && item.children.length > 0) {
        return (
          <arco.Menu.SubMenu
            key={item.id}
            title={item.name}
            onClick={() => {
              HomeAction.onClickSiderMenu(item);
            }}
          >
            {genrateMenu(item.children)}
          </arco.Menu.SubMenu>
        );
      } else {
        return (
          <arco.Menu.Item
            key={item.id}
            onClick={() => {
              HomeAction.onClickSiderMenu(item);
            }}
          >
            {item.name}
          </arco.Menu.Item>
        );
      }
    });
  };

  return (
    <arco.Menu className="bmbp-layout-sider-menu">
      {genrateMenu(HomeState.siderMenuData)}
    </arco.Menu>
  );
};

/// 面包屑
const BmbpCenterTitle = () => {
  return (
    <div className="bmbp-layout-center-title">
      <arco.Breadcrumb>
        {HomeState.breadcrumbData.map((item: any) => {
          return <arco.Breadcrumb.Item>{item}</arco.Breadcrumb.Item>;
        })}
      </arco.Breadcrumb>
    </div>
  );
};
/// 中间嵌套页面
const BmbpCenterIFrame = () => {
  return (
    <iframe
      src={HomeState.contentSrc}
      className="bmbp-layout-center-iframe"
    ></iframe>
  );
};
