// state -> React核心 -> 状态 -> 数据池 -> 组件数据池 -> 状态(池 pool)

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

// class DateTime extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     state = {
//         dateTime: new Date().toString()
//     }
//     // 组件已经被渲染到DOM中，以后运行
//     // 组件已经被挂载到了真实DOM中后，运行的函数
//     componentDidMount() {
//         this.t=setInterval(()=>{
//             this.setState({
//                 dataTime: new Date().toString()
//             })
//         }, 1000)
//     }
//     // 组件即将被卸载时
//     componentWillUnmount(){
//         clearInterval(this.t);
//         this.t=null;
//     }
//     render() {
//         return (
//             <h2 id="dateTime">It's NOW { this.state.dateTime }</h2>
//         )
//     }

// }

// class Board extends React.Component {
//     render () {
//         return (
//             <div>
//                 <Title title='Welcome to my Board'/>
//                 <DateTime />
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Board />,
//     document.getElementById('app')
// )

// // ReactDOM.unmountComponentAtNode卸载组件
// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(
//         document.getElementById('app')
//     )
// }, 5000);

/**
 * 总结
 * 1. 如果想使用组件的时候，传入数据 -> props 组件配置
 * 2. 如果是组件内部使用数据 - state 私有数据(状态)
 */

/**
 * state使用注意事项
 * 1. 必须使用setState方法来更改state
 * 2. 多个setState是会合并调用的
 * 3. props和state更新数据要谨慎，尽量避免直接依赖他们
 *      很有可能是在异步程序中更新的
 *      this.setState({
 *        result: this.state.result + this.props.content
 *      })
 *     this.setState((state,props)=> {
 *        // state 上一个state
 *        // props 此次更新时被使用的props
 *       result: state.result + this.props.content
 *     })
 * 4. setState操作合并的原理 - 浅合并
 * 
 *   state= {
 *     obj: {},
 *     arr: []
 *   }
 * 
 *  $.ajax().then(res) =>{
 *     this.setState({
 *        obj: res.obj
 *    })
 *  }
 * $.ajax().then(res) =>{
 *     this.setState({
 *        arr: res.arr
 *    })
 *  }
 * 完全替换arr, obj还是原来的引用
 * 
 * this.state= {
 *    arr: [1,2,3]
 * }
 * 
 * var newArr= this.state.arr.concaat(4)
 *   this.setState({
 *     arr: newArr // 新的引用，
 *   })
 * this.setState({
 *    arr: [...this.state.arr, 4]  // 新的引用es6
 * })
 */


/**
 * 组件无论如何都是不知道其他组件是否是有状态的
 * 组件也并不关心其他组件是函数组件还是类组件
 * 
 * state是组件内部特有的数据封装
 * 其他组件是无法读写修改该组件的state的
 * 组件可以通过其他组件调用的时候传入属性来传递state的值
 * props虽然是响应式的，但是在组件内部是只读的
 * 所以你仍然是无法修改其他组件的state
 */

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <h1>{ this.props.title }</h1>
        )
    }
}

class App extends React.Component {
    state= {
        title: 'This is a title'
    }
    render () {
       return (
          <Title title={ this.state.title} />
       )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

/**
 * 这种数据(状态)从父到子，由上而下传递的这种方式叫做单向数据流
 * 
 * 
 * state 只能传递给自己的子组件
 * state 只能影响当前组件的UI的内部的UI
 * state的安全影响范围
 * 
 * render() {
 *  return (
 *     <div>
 *       <A a={ this.state.a } />
 *       <B b={ this.state.b } />
 *       <span>{ this.state.a }<span />
 *     <div/>
 *   )
 * }
 * 
 * 组件 可以没有状态
 * 有没有状态  组件间都不受嵌套影响
 * 有无状态是可以切换的
 * 
 * handleBtnCliak() {
 *   this.state= {
 * 
 *  }
 * }
 */