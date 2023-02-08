// Fragment -> React -> Fragment
// document.creaateDocumentFragment()
// 创建文档碎片

/**
 * table tr
 * 多个td -> 节点
 * createElement div <- tds
 * 
 * div -> append -> tr
 * 
 * React -> 组件 -> 原则上 -> 根节点 -> React.Fragment   
 */

import Table from './Table.jsx';
import SaffList from './SaffList.jsx';

class App extends React.Component {
    render () {
        return (
            <SaffList />
        )
    }
}


ReactDOM.render (
    <App />,
    document.getElementById('app')
)