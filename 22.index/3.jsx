// JSX 函数子元素
/**
 *  JSX的props.children跟props本身是有一致的特性的
 *  props.children就可以传递任何类型的子元素
 */

class Repeat extends React.Component {
    render () {
        const jsxArr = [];
        for(let i = 0; i< this.props.num; i++) {
            jsxArr.push(this.props.children(i))
        }
        return jsxArr;
        /**
         *  [
         *     <p>This is item 1.</p>
         *     <p>This is item 2.</p>
         *     <p>This is item 3.</p>
         *   ...
         *  ]
         */
    }
}

class App extends React.Component {
    render () {
        return (
            <div>
                <Repeat num={ 10 }>
                  {
                    (index) => <p>This is item { index + 1 }.</p>
                  }
                </Repeat>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)