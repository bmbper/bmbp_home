window.onload = () => {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<LoginForm/>);
};
const LoginForm = () => { 
    return (
        <div className="login-container">
            <arco.Form>
                <arco.Form.Item label='用户' field='username' rules={[{ required: true }]}>
                    <arco.Input placeholder='请输入用户名' />
                </arco.Form.Item>
                <arco.Form.Item label='密码' field='password' rules={[{ required: true }]}>
                    <arco.Input placeholder='请输入密码' />
            </arco.Form.Item>
            <arco.Form.Item>
                <arco.Button type='primary'>
                    登录
                </arco.Button>
            </arco.Form.Item>
        </arco.Form>
    </div>
    )
}