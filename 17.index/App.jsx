// content 上下文 容器 -> 数据
// -> 程序的多个地方传递数据
// 容器 -> 上下文 -> 程序在执行的时候可访问的容器


/**
 *  ThemeContext 
 *  Provider  供应方
 *  Consumer   消费方 使用方
 */

import { ThemeContext } from './context'

import Main from './Main';

class App extends React.Component {

    state = {
        theme: 'orange'
    }

    themeChange (theme) {
        this.setState({
            theme 
        })
    }
    render () {
        return (
            <ThemeContext.Provider value={ this.state.theme }>
              <Main themeChange={ this.themeChange.bind(this) } />
            </ThemeContext.Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)