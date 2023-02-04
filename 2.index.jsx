// JSX深度学习

/**
 * JSX是什么?
 * 1. 一种标签语法，对js进行的拓展语法
 * 2. 不是字符串. 不是html标签
 * 3. 描述UI呈现与交互的直观表现形式
 * 4. 生成React元素
 */

/**
 * createElement与JSX对比
 */

// const rEl= React.createElement('h1', {
//     className: 'title',
//     key: 1
// },
//   '第一种方式创建React元素'
// )

// const rEl= <h1 className="title">第二种方式创建React元素</h1>

class MyButton extends React.Component {
    constructor(props) {
       super(props);
       this.state= {
         openStatus: false,
       }
    }
    statusChange() {
        this.setState({
            openStatus: !this.state.openStatus
        })
    }
    render() {
        // JSX 遵循JS的命名规范，一般使用camelCase小驼峰
        // class => className tabindex => tabIndex
        return (
           <div className="wrapper">
               <p className="text">
                  {/**插值表达式 */
                    this.state.openStatus ? '打开状态' : '关闭状态'
                  }
               </p>
               <button onClick={ this.statusChange.bind(this) }
               >
                  {this.state.openStatus ? '关闭' : '打开'}
               </button>
           </div>
        );

        // const oP=React.createElement(
        //     'p',
        //     {
        //         className: 'text',
        //         key:1
        //     },
        //     this.state.openStatus ? '打开状态' : '关闭状态'
        // );

        // const oBtn=React.createElement(
        //     'button',
        //     {
        //         key:2,
        //         onClick: () => this.setState({
        //             openStatus: !this.state.openStatus
        //         })
        //     },
        //     this.state.openStatus ? '关闭' : '打开'
        // )

        // const wrapper= React.createElement(
        //     'div',
        //     {
        //         className: 'wrapper',
        //         key:3
        //     },
        //     [oP, oBtn]
        // )
        // return wrapper;
    }
}


ReactDOM.render(
    React.createElement(MyButton),
    document.getElementById('app')
)

/**
 * 为什么React不把视图标记和逻辑分开呢?
 * 1. 渲染和UI标记是有逻辑耦合
 * 2. 即使是这样的耦合也能实现关注点分离
 */

//-----

/**
 * JSX的插值表达式
 * 
 * 表达式：一切有效的(符合JS逻辑编程逻辑的)表达式 {}
 * JSX被编译以后 -> React元素 -> 普通对象
 */


// 判断案例
// var mark= 'title';

// function selectText (mark) {
//     switch (mark) {
//         case 'title': 
//          return 'This is a title';
//         default:
//             return 'This is a paragraph'
//     }
// }

// function getText (mark) {
//     if(mark==='title') {
//         return <h1 className={ mark }>
//             { selectText(mark)}
//         </h1>
//     }

//     return <p>{ selectText(mark) }</p>
// }

// console.log(getText('p'));


var arr= [
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
];

function setList() {
    return (
        <ul>
            {
                arr.map((item) => {
                    return (
                        <li key={ item.id }>
                            <span>{ item.id }</span>
                            <p>{ item.name }</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const rEl= setList();
ReactDOM.render(
    rEl,
    document.getElementById('app')
)


// render之前
/**
 * 所有的JSX都会转成字符串
 * 所有输入的内容都会进行转译
 * 
 * */ 
