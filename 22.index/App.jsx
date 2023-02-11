// JSX深度刨析与使用技巧

import Http from './Http/index'

class MyButton extends React.Component {
    render() {
        return (
            <button>Click</button>
        )
    }
}

const colorSystem = {
    'primary': 'blue',
    'success': 'green',
    'warning': 'orange',
    'danger': 'red'
}
const MyUI = {
    Button: class extends React.Component {
        render() {
            const { type, children } = this.props;
            return (
                <button
                    style={{
                        color: '#fff',
                        backgroundColor: colorSystem[type]
                    }}
                >{children}</button>
            )
        }
    },
    Input: function(props) {
        const {placeholder, onValueInput} = props;
        return (
            <input
             type='text'
             placeholder={ placeholder }
             onChange = {(e)=>onValueInput(e)}
             />
        )
    }
}

class LoginBtnGroup extends React.Component {
    render () {
        return (
            <div>
                <button>登录</button>
                <button>注册</button>
            </div>
        )
    }
}

class WelcomeInfo extends React.Component {
    render () {
        return (
            <div>
                <h1>欢迎您，{ this.props.username }</h1>
            </div>
        )
    }
}

class Header extends React.Component {
    // 运行时选择类型
    static components = {
        'login': LoginBtnGroup,
        'welcome': WelcomeInfo
    }

    render () {
        const HeaderUser = Header.components[this.props.type];
        return (
            <HeaderUser {...this.props}  />
        )
    }
}

class App extends React.Component {
    valueInput=(e)=>{
        console.log(e.target.value)
    }
    render() {
        return (
            // <div className="box" id="J_box">
            //     <h1 className="title">
            //         This is a <span>TITLE</span>
            //     </h1>
            // </div>


            /**
             *  JSX其实是React.createElement函数调用的语法糖
             *  JSx -> 编译 -> React.createElement调用形式
             */

            /**
             *  React的元素类型 
             *  MyBUtton -> React元素 -> React元素类型
             *  组件 -> JSX -> 这个组件必须存在在当前模块的作用域中
             *  React -> 编译 -> JSX => React.createElement调用形式
             *    React -> createElement -> 让React库粗存在当前的模块作用域中
             * 
             *   import React from 'react;
             * 
             *   index.html -> script -> src -> React cdn
             *   不需要import React
             *   这种情况下React是挂载到全局的
             */
            // <div>
            //     {
            //       console.log(window.React)
            //     }
            //     <MyButton />
            // </div>
            


            /**
             *  如何在JSX中使用.语法
             */

            // <div>
            //     <MyUI.Button type='success'>Click</MyUI.Button>
            //     <MyUI.Input placeholder='请填写' onValueInput={ this.valueInput.bind(this) }></MyUI.Input>
            // </div>

            /**
             *  书写规范
             *  小写字母开头代表HTML的内置组件
             *  <div><h1>
             *  标签转换为'div'/'h1' -> 作为React.createElement的第一个参数
             * 
             *  大写字母开头的自定义组件 <MyButton />
             *  编译成 React.createElement(MyButton)
             */

            // <div>
              
            // </div>

            // 运行时选择React类型
            <div>
                <Header 
                  type={'welcome'}
                  username ='小温'
                />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    // React.createElement(App),
    document.getElementById('app')
)