// web/tsx/login/bmbp/index.tsx
window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(LoginForm, null));
};
var LoginForm = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "login-container"
  }, /* @__PURE__ */ React.createElement(arco.Form, null, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u7528\u6237",
    field: "username",
    rules: [{ required: true }]
  }, /* @__PURE__ */ React.createElement(arco.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
  })), /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u5BC6\u7801",
    field: "password",
    rules: [{ required: true }]
  }, /* @__PURE__ */ React.createElement(arco.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
  })), /* @__PURE__ */ React.createElement(arco.Form.Item, null, /* @__PURE__ */ React.createElement(arco.Button, {
    type: "primary"
  }, "\u767B\u5F55"))));
};
