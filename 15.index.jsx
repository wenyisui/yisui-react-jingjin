// 错误边界 -> React 16增加

/**
 *  防止某个组件的UI渲染错误导致整个应用崩溃
 *  子组件发生JS的错误，有备用的渲染UI
 *  错误边界 -> 组件 -> 只能用class组件来写
 */

/**
 *  错误边界组件捕获错误的时机：
 *    渲染时，生命周期函数中，组件树的构造函数中
 *    
 *  如果多个嵌套错误边界组件 -> 则从最里层错误出发 向上冒泡触发捕获
 */

/**
 *  static getDerivedStateFromError(error)  生命周期函数
 *  参数：子组件抛出的错误
 *  返回值就是新的state
 *  获取捕获错误  修改错误状态
 *  作用：渲染备用的UI
 *  渲染阶段调用，不允许出现副作用  setTimeout
 * 
 *  无法捕获的场景：
 *     事件处理函数
 *     异步代码 settimeout ajax
 *     服务端渲染
 *     错误边界组件内部有错误
 */

/**
 *  componentDidCatch (error, info) -> 原型上的方法 
 *  边界错误组件捕获异常，并进行后续处理
 *  作用：错误信息获取，运行副作用
 *  在组件抛出错误后调用
 * 
 *  参数：
 *    error：抛出的错误
 *    info：组件引发错误相关的信息  组件栈
 */

class ErrorBoundary extends React.Component {
    constructor (props) {
        super(props);

        window.onerror = function (err) {
            console.log(err);
        }
    }
    state = {
        hasError: false
    }

    static getDerivedStateFromError (error) {
        console.log(error);
        // console.log(1)
        return { hasError: true }
    }

    componentDidCatch (error, info) {
        // console.log(2)
        console.log(error, info)
    }
    render () {
        if(this.state.hasError) {
            return (
                <h1>This is Error UI</h1>
            )
        }

        return this.props.children;
    }
}


class ErrorBoundary2 extends React.Component {
    constructor (props) {
        super(props);
    }
    state = {
        hasError: false
    }

    static getDerivedStateFromError (error) {
        console.log(error);
        // console.log(1)
        return { hasError: true }
    }

    componentDidCatch (error, info) {
        // console.log(2)
        console.log(error, info)
    }
    render () {
        if(this.state.hasError) {
            return (
                <h1>This is Error UI2</h1>
            )
        }

        return this.props.children;
    }
}

class Test extends React.Component {
    render () {
        return (
          <div>{ data.title }</div>
        )
    }
}

class Sub extends React.Component {
    // constructor (props) {
    //     super(props);

    //     setTimeout (()=>{
    //         throw new Error('This is a setTimeout')
    //     },1000)
    // }
    handleClick() {
        throw new Error('This is a btnclick error')
    }
    render () {
        return (
            <p onClick={ this.handleClick.bind(this) }>This is content</p>
        )
    }
}

class App extends React.Component {
    render () {
        return (
            <div>
                <ErrorBoundary>
                    <Sub />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Test />
                </ErrorBoundary>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)