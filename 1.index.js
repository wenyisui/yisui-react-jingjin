/**
 * React - 构建用户界面的JavaScript库
 * 
 * React主观意愿
 * 1. React 仅仅负责View层渲染
 * 2. 我是一个视图渲染的工具库， 我不做框架的事情
 */





/**
 * 简单使用React
 * // 怎么负责视图
 * 
 * 1. 添加根容器    div  id app
 * 2. 引入CDN脚本
 * 3. 创建React组件
 */

/**
 * 一个React组件
 * 1. 继承React.Component 类
 * 2. render函数返回一个视图
 */

class MyButton extends React.Component {
    constructor(props) {
       super(props);
       this.state= {
         openStatus: false,
       }
    }
    render() {

        const oP=React.createElement(
            'p',
            {
                className: 'text',
                key:1
            },
            this.state.openStatus ? '打开状态' : '关闭状态'
        );

        const oBtn=React.createElement(
            'button',
            {
                key:2,
                onClick: () => this.setState({
                    openStatus: !this.state.openStatus
                })
            },
            this.state.openStatus ? '关闭' : '打开'
        )

        const wrapper= React.createElement(
            'div',
            {
                className: 'wrapper',
                key:3
            },
            [oP, oBtn]
        )
        return wrapper;
    }
}

// React -> React API -> 处理视图的API集合
// ReactDOM -> 从render -> 虚拟DOM -> 真实DOM

/**
 * React.createElement() 创建一个React虚拟节点 三个参数  1：标签名或组件
 *                                                     2：属性的集合
 *                                                     3：子组件或者innertext
 * */ 
                                            

// let span= React.createElement('span', {
//     className: 'text',
//     key: 1
// }, 'This is a span')

// ReactDOM.render(
//     React.createElement('div', {   //render会帮助我们创建一个React元素，成为一个虚拟节点
//         'data-tag':'div'
//     },
//       [span]
//     ),
//     document.getElementById('app')     //然后再把虚拟节点转换成真实节点放到我们的app当中去
// )

ReactDOM.render(
    React.createElement(MyButton),
    document.getElementById('app')
)

/**
 * npx npm5.2 以上的包的运行工具
 * create-react-app 内部的工程化：babel/Webpack
 */

/**
 * 1. npx create-react-app my-react-app
 *    构建create工程化项目   babel webpack
 * 2. cd my-react-app
 *    进入工程文件夹
 * 3. yarn start
 *    启动开发运行环境
 * 4. npm run build
 *    打包项目
 */