const HomeState: any = {};
const HomeAction = {
  init: () => {
    /// 侧边菜单数据
    const [siderMenuData, setSiderMenuData] = React.useState([]);
    HomeState.siderMenuData = siderMenuData;
    HomeState.setSiderMenuData = setSiderMenuData;
    /// 顶部应用导航数据
    const [navMenuData, setNavMenuData] = React.useState([]);
    HomeState.navMenuData = navMenuData;
    HomeState.setNavMenuData = setNavMenuData;
    /// 默认首页
    const [contentSrc, setContentSrc] = React.useState("/home/welcome.view");
    HomeState.contentSrc = contentSrc;
    HomeState.setContentSrc = setContentSrc;
    /// 用户信息
    const [currentUser, setCurrentUser] = React.useState({});
    HomeState.currentUser = currentUser;
    HomeState.setCurrentUser = setCurrentUser;
    /// 选中菜单
    const [selectMenu, setSelectMenu] = React.useState({});
    HomeState.selectMenu = selectMenu;
    HomeState.setSelectMenu = setSelectMenu;
  },
};
export { HomeAction, HomeState };
