// 组件 props


// 前端，组件是视图的片段
// 包含：视图标记. 事件. 数据. 逻辑. 外部的配置
/**
 * 组件一般是内部管理数据集合(state)
 * 外部传入配置集合(props)
 */

// 组件类 -> 类组件
// class Test extends React.Component {
//     // 属性 ->配置 -> props保存
//     constructor(props) {
//         super(props);

//         // console.log(props)

//         // this.state = {
//         //     title: this.props.title
//         // }
//     }
//     // 数据 -> 内部数据 -> state
//     state = {
//         title: this.props.title
//     }
//     // 事件处理函数
//     handleBtnClick() {
//         // 逻辑
//         this.setState({
//             title: 'This is a My Component'
//         })
//     }
//     render() {
//         // 视图标记
//         return (
//             <div>
//                 <h1>{ this.state.title }</h1>
//                          {/* 事件 */}
//                 <button onClick={ this.handleBtnClick.bind(this) }>click</button>
//             </div>
//         )
//     }
// }

// HOOKS来做这个程序

// function Test (props) {
//     const [title, setTitle] = React.useState(props.title);

//         return (
//             <div>
//                 <h1>{ title }</h1>
//                          {/* 事件 */}
//                 <button onClick={ () =>setTitle('This is my Component') }>click</button>
//             </div>
//         )
// }

// ReactDOM.render(
//     <Test title="This is a Class Component" />,
//     document.getElementById('app')
// )


/**
 * 组件渲染的过程
 * 
 * 1. React 主动调用Test组件
 * 2. 将属性集合转换成对象 props => { title: 'This is a Class Component'}
 * 3. 将对象作为props传入组件
 * 4. 替换JSX中的props或者state中的变量
 * 5. ReactDOM将最终的React元素通过一系列操作转换成真实DOM进行渲染
 */

/**
 * 组件调用规范
 * 
 * 1. 视图标记时HTML标签 <div><div/>
 * 2. 大驼峰写法作为一个React元素 <Test /> 组件 -> JSX -> React元素
 * 3. 组件转换React元素
 *    React.createElement(Test, {
 *       title: 'This is a Class Component'
 *    })
 */

/**
 * 组合组件
 * 
 * title
 * 
 * 
 * author
 * 
 * 
 * paragraph
 * 
 * APP
 */

// class Title extends React.Component {
//     constructor(props) {
//         super(props);

//     }
//     render() {
//         return (
//             <h1>{ this.props.title }</h1>
//         )
//     }
// }

// class Author extends React.Component {
//     constructor (props) {
//         super (props);
//     }

//     render () {
//         return (
//             <span>{ this.props.author }</span>
//         )
//     }
// }

// class Para extends React.Component {
//     constructor (props) {
//         super(props);
//     }

//     render () {
//         return (
//             <p>{ this.props.para }</p>
//         )
//     }
// }

// class App extends React.Component {
//     constructor (props) {
//         super(props);
//     }
//     state= {
//         title: 'This is a title',
//         author: 'wenyisui',
//         para: 'This is a Paragraph'
//     }

//     render () {
//         return (
//             <div>
//                 <Title title={ this.state.title } />
//                 <Author author={ this.state.author } />
//                 <Para  para={ this.state.para }/>
//             </div>
//         )
//     }
// }


// ReactDOM.render (
//     <App />,
//     document.getElementById('app')
// )

/**
 * 嵌套组件
 * 
 * title
 *     author
 * 
 * paragraph
 * 
 * APP
 */

// class Title extends React.Component {
//     constructor(props) {
//         super(props);

//     }
//     render() {
//         const {title, author} = this.props;
//         return (
//             <div>
//                <h1>{ title }</h1>
//                <Author author={author} />
//             </div>
            
//         )
//     }
// }

// class Author extends React.Component {
//     constructor (props) {
//         super (props);
//     }

//     render () {
//         return (
//             <span>{ this.props.author }</span>
//         )
//     }
// }

// class Para extends React.Component {
//     constructor (props) {
//         super(props);
//     }

//     render () {
//         return (
//             <p>{ this.props.para }</p>
//         )
//     }
// }

// class App extends React.Component {
//     constructor (props) {
//         super(props);
//     }
//     state= {
//         title: 'This is a title',
//         author: 'wenyisui',
//         para: 'This is a Paragraph'
//     }

//     render () {
//         return (
//             <div>
//                 <Title 
//                   title={ this.state.title } 
//                   author={ this.state.author }
//                 />
//                 <Para  para={ this.state.para }/>
//             </div>
//         )
//     }
// }


// ReactDOM.render (
//     <App />,
//     document.getElementById('app')
// )


/**
 * 属性props和数据/状态state区别
 * 
 * 1. state => 数据池 {} 组件内部管理数据的容器
 *            组件内部可读可写
 * 2. props => 属性池 {} 外部调用属性时传入的属性集合
 *            组件内部可读不可写
 * 
 *          组件外部的数据 -> 组件内部是不应该有权限修改的
 */


/**
 * state与props的结合,  完成组件内部的逻辑改变
 * 
 * content => props => outer =>外部配置
 * state => content => default => props.content
 */

// props的只读性
class App extends React.Component {
    constructor (props) {
        super(props);
        console.log(this.props);
    }
    state={
        content: this.props.content
    }
    handleBtnClick () {
        this.setState ({
            content: '123'
        })
    }
    render () {
        return (
            <div>
                <h1>{ this.state.content }</h1>
                <button onClick={this.handleBtnClick.bind(this)}>click</button>
            </div>
        )
    }
}

ReactDOM.render (
    <App content= 'This is a Content' />,
    document.getElementById('app')
)


// 函数组件一定要是一个纯函数
// 纯函数能保证绝对的复用性
// 相同的入参保证返回相同的结果
// 纯函数不可以修改入参

function test (a,b) {
    return a + b
}
/**
 * 从设计上讲，在函数内部更改入参
 * 其实是在组件运行时更改了外部的配置
 * 配置的意义就丧失了
 * 该配置是使用组件者希望通过该配置达到对应的结果
 */