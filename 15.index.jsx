// 错误边界 -> React 16增加

/**
 *  防止某个组件的UI渲染错误导致整个应用崩溃
 *  子组件发生JS的错误，有备用的渲染UI
 *  错误边界 -> 组件 -> 只能用class组件来写
 */

/**
 *  static getDerivedStateFromError(error)  生命周期函数
 *  参数：子组件抛出的错误
 *  返回值就是新的state
 *  获取捕获错误  修改错误状态
 *  作用：渲染备用的UI
 *  渲染阶段调用，不允许出现副作用
 * 
 *  无法捕获的场景
 *  异步代码
 */

class ErrorBoundary extends React.Component {
    constructor (props) {
        super(props);
    }
    state = {
        hasError: false
    }

    static getDerivedStateFromError () {
        return { hasError: true }
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

class Test extends React.Component {
    render () {
        return (
          <div>{ data.title }</div>
        )
    }
}

class Sub extends React.Component {
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
                <Sub />
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