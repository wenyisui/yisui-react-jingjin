/**
 * html中的div容器叫根节点
 * 根节点内所有的内容都是由ReactDOM进行管理的
 * 一个React应用只有一个根节点
 * 用ReactDOM.render方法将react元素渲染到根节点中
 */

// const rEl= <h1 className="title">This is a title</h1>


// /**
//  * @param ReactElement - react元素
//  * @param rootNode - 根节点
//  */
// ReactDOM.render (
//     rEl,
//     document.getElementById('app')
// )

/**
 * 基本更新逻辑
 * 1. React元素是不可变的对象
 *     immutable Object
 *     1. 不能添加属性
 *     2. 不能修改属性
 *     3. 不能删除属性
 *     4. 不能修改属性的枚举. 配置. 可写
 *                     enumerable/configurable/writable
 */


//观察element中节点的更新状况 案例
// function update() {
//     const rEl= (
//         <div>
//             <h1 className="title">This is a title</h1>
//             <h2>{ new Date().toString() }</h2>
//         </div>
//     );

//     ReactDOM.render (
//         rEl,
//         document.getElementById('app')
//     )
// };

// setInterval(update, 1000);


/**
 * 观察element中节点的更新状况
 * ReactDOM.render会深度对比新旧元素的状态，只会做必要的真实DOM更新
 * 虚拟节点的对比
 */

/**
 * ReactDOM.render
 * 渲染之前 -> 每个React元素组成一个虚拟DOM的对象结构 ->渲染
 * 更新之前 -> 形成新的虚拟DOM的对象结构 ->对比新的旧的虚拟DOM节点 -> 
 * 分析出两者的不同点 -> 形成一个DOM更新的补丁 -> 操作真实DOM(更新真实DOM)
 */

// React的类组件
// class Title extends React.Component {
//     render () {
//         return <h1>This is a title</h1>
//     }
// }

//React函数组件
function Title() {
    return (
        <h1>This is a title</h1>
    )
}

// 生成React元素的两种方法
/**
 * React.createElement();
 * <Title /> JSX语法
 * */ 

ReactDOM.render(
    <Title />,
    document.getElementById('app')
)
// <Title />写法相当于实例这个类然后执行render函数


/**
 * 如果是组件渲染
 * ReactDOM.render的第一个参数一定要是一个React元素
 *  1. 组件使用JSX语法
 *  2. 使用React.createElement将组件转换成React元素
 * 
 * 
 * 这样才能使组件内部的render函数执行
 * 函数组件才能执行
 */


