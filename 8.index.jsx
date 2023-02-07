// 列表渲染

// JSX -> map 

import { nanoid } from "nanoid"

// class App extends React.Component {
//     state ={
//         arr : [
//             {
//                 id: 1,
//                 name: '张三'
//             },
//             {
//                 id: 2,
//                 name: '李四'
//             },
//             {
//                 id: 3,
//                 name: '王五'
//             }
//         ]
//     }

//     render () {
//         return (
//             <table border="1">
//                 <thead>
//                    <tr>
//                     <th>ID</th>
//                     <th>名字</th>
//                    </tr> 
//                 </thead>
//                 <tbody>
//                    {
//                      this.state.arr.map(item => {
//                         const key=nanoid()
//                         return (
//                             <tr key={ key }>
//                                 <td>{ item.id }</td>
//                                 <td>{ item.name }</td>
//                             </tr>
//                         )
//                      })
//                    }
//                 </tbody>
//             </table>
//         )
//     }
// }

/**
 * Each child in a list should have a unique "key" 
 * 列表中的每个元素都必需一个唯一的key属性值
 * 
 * key是React查看元素是否改变的一个唯一标识
 * key必须在兄弟节点中唯一，确定的(兄弟节点是一个列表中的兄弟元素)
 * 
 * 不建议使用index作为key值
 * 建立在列表顺序改变，元素增删的情况下
 * 
 * 列表项增删或顺序改变了，index的对应项就会改变
 * key对应的项还是之前列表情况的对应元素的值
 * 导致状态(arr)混乱，查找元素性能就会变差
 * 
 * 好的做法：
 * 如果列表是静态不可操作的，可以选择index作为key值，也不推荐
 * 很有可能这个列表在以后维护扩展的时候，有可能变更为可操作的列表
 * 
 * 1. 尽量避免使用index
 * 2. 可以用数据的ID(有可能ID会变动)
 * 3. 使用动态生成一个静态ID  nanoid库
 */

// key赋值的正确姿势
 
class ItemTitle extends React.Component {
    render () {
        return (
            <thead>
                <tr>
                    <th>KEY</th>
                    <th>ID</th>
                    <th>NAME</th>
                </tr>
            </thead>
        )
    }
}

class ListItem extends React.Component {
    render (){
        const { sid, item }=this.props;
        return (
            <tr>
                <td>{ sid }</td>
                <td>{ item.id }</td>
                <td>{ item.name }</td>
            </tr>
        )
    }
}

class ListTable extends React.Component {
    state ={
        arr : [
            {
                id: 1,
                name: '张三'
            },
            {
                id: 2,
                name: '李四'
            },
            {
                id: 3,
                name: '王五'
            }
        ]
    }

    render () {
        return (
            <table border="1">
                <ItemTitle />
                <tbody>
                    {
                        this.state.arr.map(item =>{
                            const sid=nanoid();
                            /**
                             *  key是不会作为属性传递给子组件的，必须显示传递key值
                             * 
                             *  防止开发者在逻辑中对key值进行操作
                             */
                            return (
                                <ListItem 
                                  item={ item }
                                  sid={ sid }
                                  key={ sid }
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
ReactDOM.render(
    <ListTable />,
    document.getElementById('app')
)

// 多层map的话拆分成组件去做，对性能友好