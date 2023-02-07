//  组合  继承

// 包含组合
// children

// CSS MODULE  CSS模块化

import styles from './12.index.module.css';


// class Container extends React.Component {
//     render () {
//         //console.log(this.props)

//         /**
//          * 1. 如果Container内部有内容，React会在props内部增加children
//          * 2. 如果Container内部有非元素内容 children: 非元素内容
//          * 3. 如果Container内部有单个元素内容，children: React元素对象
//          * 4. 如果Container内部有多个元素内容，children: [...(React元素对象)]
//          */
//         // return (
//         //     <div className="container">
//         //         { this.props.children }
//         //     </div>
//         // )

//         return (
//             <div className={ styles.container }>
//                 <div className={ styles.header}>
//                    { this.props.header }
//                 </div>
//                 <div className={ styles.sidebar }>
//                    { this.props.sidebar }
//                 </div>
//                 <div className={ styles.main }>
//                    { this.props.main }
//                 </div>
//             </div>
//         )
//     }
// }

// class Header extends React.Component {
//     render () {
//         return (
//             <p>HEADER</p>
//         )
//     }
// }
// class Sidebar extends React.Component {
//     render () {
//         return (
//             <p>SIDEBAR</p>
//         )
//     }
// }
// class Main extends React.Component {
//     render () {
//         return (
//             <p>MAIN</p>
//         )
//     }
// }
// class App extends React.Component {
//     render () {
//         // return (
//         //     < Container>
//         //       123
//         //       <p>Title</p>
//         //       <p>Content</p>
//         //     </Container>
//         // )
        

//         /**
//          *  为什么JSX还可以通过props传递视图元素 React元素?
//          *  JSX本质上都会转成React元素 (对象 Object)
//          *  视图通过props传递的机制比较像vue的插槽
//          *  React没有slot的概念定义
//          *  React本身就允许你通过props传递任何类型的数据到组件
//          */
//         return (
//             <Container 
//              header= { <Header /> }
//              sidebar= { <Sidebar /> }
//              main= { <Main /> }
//              />
//         )
//     }
// }


// 多层组合

function Modal (props) {
    return (
        <div className={ styles.modal }>
            <header className={ styles.modalHeader }>
                <h1>{ props.headerTitle }</h1>
            </header>
            <div className={ styles.modalContent }>
                { props.children }
            </div>
        </div>
    )
}

function Alert (props) {
    return (
        <Modal headerTitle= { props.headerTitle }>
            <p>{ props.alertText }</p>
        </Modal>
    )
}

function LoginModal (props) {
    return (
        <Modal headerTitle= '登录'>
            <form action="">
                <p>
                    <input type="text" placeholder='用户名' />
                </p>
                <p>
                    <input type="password" placeholder='密码' />
                </p>
                <p>
                   <button>登录</button>
                </p>
            </form>
        </Modal>
    )
}

function WelcomeAlert () {
    return (
        <Alert
          headerTitle="欢迎您，亲爱的用户"
          alertText="您是我们最尊贵的用户，您将会体验到不一样的服务"
        />
    )
}

function App () {
    return (
        <div>
            {/* <WelcomeAlert /> */}
            <LoginModal />
        </div>
    )
}

ReactDOM.render (
    <App />,
    document.getElementById('app')
)

/**
 *  React目前还没有发现有需要组件继承的需求
 * 
 *  因为通过children或者是传递视图React元素的方式完全可以解决组件组合的问题
 *  props可以传递任何类型的数据，所以组合的方式完全可以替代继承方案
 * 
 *  逻辑部分需要继承或者共用：
 *  这个需要你自己去写逻辑抽离的模块. 函数. 类. 单独进行模块导入
 */