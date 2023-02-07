// 非受控组件：表单数据是不受控于state，使用React ref从DOM节点中获取表单数据的组件

class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);

        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.GenderRef = React.createRef();
        this.fileRef = React.createRef();
    }
    handleSubmitClick(e) {
        e.preventDefault();

        //    console.log(this.refs.username.value)  // refs  ref的集合
        //    console.log(this.refs.password.value)

        console.log(
            this.usernameRef.current.value,
            this.passwordRef.current.value,
            this.GenderRef.current.value,
            this.fileRef.current.files[0]
        )
    }
    handleResetClick(e) {
        e.preventDefault();
        //    this.refs.username.value = '';
        //    this.refs.password.value = '';

    }
    render() {
        return (
            <form onSubmit={this.handleSubmitClick}>
                <p>
                    用户名：
                    <input type="text" placeholder="用户名" ref={this.usernameRef} />
                </p>
                <p>
                    密码：
                    <input type="password" placeholder="密码" ref={this.passwordRef} />
                </p>
                <p>
                    <select
                        // form field 默认值 - 组件挂载完毕后进行更新的，不会导致DOM的任何更新
                        defaultValue="female"
                        ref={this.GenderRef}
                    >
                        <option value="male">男</option>
                        <option value="female">女</option>
                    </select>

                    {/* <input type="radio" defaultChecked={ true } />
                <input type="checkbox" defaultChecked = { true } /> */}
                </p>
                <p>
                    <input type="file" ref={ this.fileRef } />
                </p>
                <p>
                    {/* <button onClick={ this.handleSubmitClick }>登录</button> */}
                    <button type="submit">登录</button>
                    <button onClick={this.handleResetClick}>重置</button>
                </p>
            </form>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)