// 状态提升 - 两个组件(无父子关系)同享一个数据并且同步数据变化

class Info extends React.Component {
    render() {
        return (
            <div>
           <p>第{ this.props.inputNum }号</p>
           <p>输入长度：{ this.props.username.length }</p>
           <p>提示：{
              this.props.username.length < 6 ?
              '长度必须大于等于6位' :
              (
                this.props.username.length >=6 && (
                    this.props.username.length <=12 ?
                    '长度合法' :
                    '长度必须小于12'
                )
              )
            }</p>

        </div>
        )
    }
}

// 组件嵌套与调用，和类组件还是函数组件没有关系
// function Info(props) {
//     return (
//         <div>
//        <p>第{ props.inputNum }号</p>
//        <p>输入长度：{ props.username.length }</p>
//        <p>提示：{
//           props.username.length < 6 ?
//           '长度必须大于等于6位' :
//           (
//             props.username.length >=6 && (
//                 props.username.length <=12 ?
//                 '长度合法' :
//                 '长度必须小于12'
//             )
//           )
//         }</p>

//     </div>
//     )
// }

// 类组件调用(实例化)的时候，组件内部的状态是唯一且独立的

class UserNameInput extends React.Component {
    // state = {
    //     username: ''
    // }
    
    // changeUserName(e) {
    //     this.setState ({
    //         username: e.target.value
    //     })
    // }
    render () {
        return (
            <div>
                <Info username={ this.props.username } inputNum={ this.props.inputNum } />
                <div>
                    <input type="text" value={ this.props.username } onChange={ (e)=> this.props.usernameChange(e) } />
                </div>
            </div>
        )
    }
}

// function UserNameInput (props) {
//    const [ username, setUsername ]=React.useState('');

//    const changeUserName=(e) =>{
//      setUsername(e.target.value)
//    }

//    return (
//     <div>
//         <Info username={ username } inputNum={ props.inputNum } />
//         <div>
//             <input type="text" onChange={ (e)=> changeUserName(e) } />
//         </div>
//     </div>
// )
// }


// 单向数据流
// 数据的流动 父 -> 子 =>props 向下传递
// props是只读数据 -> props -> 数据操作 -> 父组件来完成 -> 数据由父组件管理
// 状态提升 ->本应该是子组件的状态 -> 父组件来操作 -> 通过props ->子组件

class App extends React.Component {
    state= {
        username: ''
    }

    userNameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    render () {
        return (
            <div>
                <UserNameInput 
                  inputNum={1}  
                  username={ this.state.username }
                  usernameChange={ this.userNameChange.bind(this) }
                />
                <UserNameInput 
                  inputNum={2} 
                  username={ this.state.username }
                  usernameChange={ this.userNameChange.bind(this) }
                /> 
            </div>
        )
    }
}

// 类组件与函数组件是相互可以调用的
// function App () {
//     return (
//         <div>
//             <UserNameInput inputNum={1} />
//             <UserNameInput inputNum={2} /> 
//         </div>
//     )
// }

ReactDOM.render(
    <App />,
    document.getElementById('app')
)