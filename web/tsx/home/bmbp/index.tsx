window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<BmbpHomeLayout />);
};

const BmbpHomeLayout = () => {
  return (
    <div className="bmbp-page">
      <arco.Layout style={{ height: "100vh", width: "100vw" }}>
        <arco.Layout.Header style={{ height: "48px", width: "100vw" }}>
          Header
        </arco.Layout.Header>
        <arco.Layout>
          <arco.Layout.Sider style={{ width: "240px" }}>
            Sider
          </arco.Layout.Sider>
          <arco.Layout.Content>Content</arco.Layout.Content>
        </arco.Layout>
        <arco.Layout.Footer style={{ height: "24px" }}>
          Footer
        </arco.Layout.Footer>
      </arco.Layout>
    </div>
  );
};
