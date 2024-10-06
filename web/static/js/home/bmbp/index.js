// web/tsx/home/bmbp/action.tsx
var HomeState = {};
var HomeAction = {
  init: () => {
    const [contentSrc, setContentSrc] = React.useState("");
    HomeState.contentSrc = contentSrc;
    HomeState.setContentSrc = setContentSrc;
  }
};

// web/tsx/home/bmbp/index.tsx
window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(BmbpHomeLayout, null));
};
var BmbpHomeLayout = () => {
  HomeAction.init();
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-page"
  }, /* @__PURE__ */ React.createElement(arco.Layout, {
    className: "bmbp-page"
  }, /* @__PURE__ */ React.createElement(arco.Layout.Header, {
    className: "bmbp-layout-header"
  }, /* @__PURE__ */ React.createElement(BmbpHeaderTitle, null), /* @__PURE__ */ React.createElement(BmbpHeaderNav, null), /* @__PURE__ */ React.createElement(BmbpHeaderUser, null)), /* @__PURE__ */ React.createElement(arco.Layout, null, /* @__PURE__ */ React.createElement(arco.Layout.Sider, {
    className: "bmbp-layout-sider"
  }, /* @__PURE__ */ React.createElement(BmbpSideNavMenu, null)), /* @__PURE__ */ React.createElement(arco.Layout, null, /* @__PURE__ */ React.createElement(arco.Layout.Content, {
    className: "bmbp-layout-center"
  }, /* @__PURE__ */ React.createElement(BmbpCenterTitle, null), /* @__PURE__ */ React.createElement(BmbpCenterIFrame, null)), /* @__PURE__ */ React.createElement(arco.Layout.Footer, {
    className: "bmbp-layout-copy-right"
  }, AppCopyRight)))));
};
var BmbpHeaderTitle = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-layout-header-title"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "bmbp-logo",
    src: AppIcon
  }), /* @__PURE__ */ React.createElement("span", {
    className: "bmbp-title"
  }, AppTitle));
};
var BmbpHeaderNav = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-layout-header-center"
  });
};
var BmbpHeaderUser = () => {
  const userDropList = /* @__PURE__ */ React.createElement(arco.Menu, null, /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "1"
  }, "\u4E2A\u4EBA\u4E2D\u5FC3"), /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "2"
  }, "\u4FEE\u6539\u5BC6\u7801"), /* @__PURE__ */ React.createElement(arco.Divider, {
    style: { margin: "2px 0" }
  }), /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "3"
  }, "\u9000\u51FA\u767B\u5F55"));
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-layout-header-right"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(arcoicon.IconQuestionCircle, {
    style: { fontSize: 20 }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(arcoicon.IconLanguage, {
    style: { fontSize: 20 }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(arcoicon.IconFullscreen, {
    style: { fontSize: 20 }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(arco.Badge, {
    count: 9,
    dot: true,
    offset: [2, -2]
  }, /* @__PURE__ */ React.createElement(arcoicon.IconNotification, {
    style: {
      fontSize: 20,
      verticalAlign: -3
    }
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(arco.Dropdown, {
    droplist: userDropList,
    position: "br"
  }, /* @__PURE__ */ React.createElement(arco.Avatar, {
    size: 32
  }, "A"))));
};
var BmbpSideNavMenu = () => {
  return /* @__PURE__ */ React.createElement(arco.Menu, {
    className: "bmbp-layout-sider-menu"
  }, /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "1",
    disabled: true
  }, /* @__PURE__ */ React.createElement(arcoicon.IconHome, null), "\u8BBE\u8BA1\u6307\u5357"), /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "2"
  }, /* @__PURE__ */ React.createElement(arcoicon.IconCalendar, null), "\u533A\u5757"), /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "3"
  }, /* @__PURE__ */ React.createElement(arcoicon.IconCalendar, null), "\u6A21\u5757"), /* @__PURE__ */ React.createElement(arco.Menu.SubMenu, {
    key: "layout",
    title: /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(arcoicon.IconCalendar, null), " \u5E03\u5C40\u7EC4\u4EF6")
  }, /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "11"
  }, "\u6805\u683C"), /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "12"
  }, "\u5206\u9694\u7B26"), /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "13"
  }, "\u5E03\u5C40")));
};
var BmbpCenterTitle = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-layout-center-title"
  }, /* @__PURE__ */ React.createElement(arco.Breadcrumb, null, /* @__PURE__ */ React.createElement(arco.Breadcrumb.Item, null, "\u9996\u9875"), /* @__PURE__ */ React.createElement(arco.Breadcrumb.Item, null, "\u7CFB\u7EDF\u7BA1\u7406"), /* @__PURE__ */ React.createElement(arco.Breadcrumb.Item, null, "\u7528\u6237\u7BA1\u7406")));
};
var BmbpCenterIFrame = () => {
  HomeState.setContentSrc("/login.view");
  return /* @__PURE__ */ React.createElement("iframe", {
    src: HomeState.contentSrc,
    className: "bmbp-layout-center-iframe"
  });
};
