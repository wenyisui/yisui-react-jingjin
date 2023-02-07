
/**
 *  React.createContext
 *  
 *  创建一个指定的Context对象
 *  组件会找离自己最近的Provider，获取其value
 * 
 *  没有匹配到Provider就使用default value，其他情况均不使用默认参数
 * 
 *  Context.Provider
 *  通过React.createContext -> 上下文对象里的一个组件
 *  Provider组件可以插入其他组件 -> 订阅这个Context
 *  通过Provider的value属性来将数据传递给Consumer组件
 * 
 *  value变化，插入Provider的组件都会重新渲染
 *  
 *  new and old value -> comparing -> Object.is相同的算法
 */

const AContext = React.createContext('default a');
const BContext = React.createContext('default b');

AContext.displayName = 'MyAContext';  // displayName主要是为了React Tools  DEV调试方便

class App extends React.Component {

    // shouldComponentUpdate () {
    //     console.log('Will repain')
    // }

    state = {
        a: 'a context',
        b: 'b context'
    }

    componentDidMount() {
        setTimeout(() =>{
            this.setState({
                a: 'aa context',
                b: 'bb context'
            })
        },1000)
    }
    render() {
        return (
            <BContext.Provider value={this.state.b}>
                <AContext.Provider value={this.state.a}>
                    <Test />
                </AContext.Provider>
            </BContext.Provider>
        )
    }
}


class Test extends React.Component {
    render() {
        return (
            <> 
                {/* 
                   Consumer -> 使用 -> Provider -> value
                   订阅context的变更
                   Consumer内部使用函数作为子元素 -> function as a child
                   函数接收context最近的Provider提供的value
                   如果没有Provider -> default value
               
               */}
               <BContext.Consumer>
                {
                    (valueB) => (
                        <AContext.Consumer>
                            {
                                (valueA) => (
                                    <div>{ `${valueA}, ${valueB}`}</div>
                                )
                            }
                        </AContext.Consumer>
                    )
                }
               </BContext.Consumer>
            </>
        )
    }
}

export default App;