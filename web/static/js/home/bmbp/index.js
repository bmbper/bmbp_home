// web/tsx/home/bmbp/index.tsx
window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(BmbpHomeLayout, null));
};
var BmbpHomeLayout = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-page"
  }, /* @__PURE__ */ React.createElement(arco.Layout, {
    style: { height: "100vh", width: "100vw" }
  }, /* @__PURE__ */ React.createElement(arco.Layout.Header, {
    style: { height: "48px", width: "100vw" }
  }, "Header"), /* @__PURE__ */ React.createElement(arco.Layout, null, /* @__PURE__ */ React.createElement(arco.Layout.Sider, {
    style: { width: "240px" }
  }, "Sider"), /* @__PURE__ */ React.createElement(arco.Layout.Content, null, "Content")), /* @__PURE__ */ React.createElement(arco.Layout.Footer, {
    style: { height: "24px" }
  }, "Footer")));
};
