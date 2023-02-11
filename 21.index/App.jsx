/**
 * 
 *  Refs
 *  允许我们访问真实DOM
 * 
 *  React数据流 -> 通过props来实现父子组件的交互
 *  Refs允许我们用于强制修改子组件
 */

/**
 *  管理input的焦点
 *  
 *  通过一个按钮，清空input value, input聚焦
 */

// class MyInput extends React.Component {

//     constructor (props) {
//         super(props);

//         this.inputRef = React.createRef();
//     }

//     inputOperating(){
//     //   console.log(this.inputRef)
//      const oInput = this.inputRef.current;

//      oInput.value = '';
//      oInput.focus();
//     }
//     render () {
//         return (
//             <div>
//                 <input type="text" ref={ this.inputRef } />
//                 <button onClick={ this.inputOperating.bind(this) }>操作Input</button>
//             </div>
//         )
//     }
// }

// class MyVideo extends React.Component {
//     render () {
//         return (
//             <div>
//                 <video>

//                 </video>
//             </div>
//         )
//     }
// }
// class App extends React.Component {
//     render () {
//         return (
//             <MyInput />
//         )
//     }
// }


/**
 *  createRef -> React => React.createRef();
 * 
 *  通过createRef -> ref对象
 *  通过元素的ref属性可以附加到React元素上
 *  一般通过构造器给this上的熟悉感赋值一个ref，方便整个组件使用
 *  ref只要传递React元素中，就可以利用ref的current属性访问到该真实DOM节点
 *  ref是在componentDidMount和componentDidUpdated触发前更新
 *  
 */

/**
 *  ref有不同的只用方式
 *  
 *  1. ref -> html元素 -> current -> 真实DOM节点
 *  2. ref -> class组件 -> current -> 组件的实例
 *  3. ref -> 函数组件(没有实例) -> createRef -> 附加不到组件上 -> x
 */

// class Test extends React.Component {
//     constructor(props) {
//         super(props);

//         this.divRef=React.createRef();
//     }

//     render () {
//         return (
//             <div ref={ this.divRef }>{ this.props.children }</div>
//         )
//     }
// }

// function Test2 () {

//     const divRef = React.useRef(null);

//     React.useEffect(()=>{
//         console.log(divRef);
//     },[])
//     return (
//         <div ref={ divRef  }>hellow, Function Ref!!!</div>
//     )
// }

// class App extends React.Component {

//     constructor (props) {
//         super(props);

//         this.testRef = React.createRef();
//     }

//     state = {
//         text: 'Hello, Ref'
//     }

//     componentDidMount(){

//         console.log(this.testRef)
//         // setTimeout(() => {
//         //   this.setState({
//         //      text: 'wenyisui'
//         //   })
//         // }, 1000);
//      }
//     render () {
//         return (
//             <div>
//                 <Test ref={ this.testRef }>{ this.state.text }</Test>
//                 <Test2 />
//             </div>
//         )
//     }
// }


/**
 *  如何将子节点的ref暴露给父组件
 * 
 *  16.3以上  Refs转发
 *  将ref自动的通过组件传递给子组件
 */

// class MyInput extends React.Component {
//     render () {
//         return (
//             <input type="text" placeholder="请填写..." />
//         )
//     }
// }

// React.forwardRef((props, ref)=>( return React元素 )) 注意返回的是一个react元素


// forwardRef转发步骤
// // 3. 通过forwardRef向input转发ref属性
// const MyInput = React.forwardRef((props, ref)=>(
//     // 5. ref参数只能用forwardRef定义的组件内可接收
//     <input type="text" placeholder={ props.placeholder } ref = { ref }/>
// ))

// class App extends React.Component {

//     constructor (props) {
//         super(props);
//         // 1. 创建ref对象
//         this.myInputRef = React.createRef();
//     }

//     componentDidMount () {
//         // 4. myInputRef.current指向input DOM节点
//         console.log(this.myInputRef)
//     }
//     inputOperate() {
//         const oInput = this.myInputRef.current;

//         oInput.value = "";
//         oInput.focus();
//     }
//     render () {
//         return (
//             <div>
//                 {/* 2. 给组件赋值ref */}
//                 <MyInput ref={ this.myInputRef } placeholder="请填写" />
//                 <button onClick={ this.inputOperate.bind(this) }>Click</button>
//             </div>
//         )
//     }
// }



// 高阶钻进ref转发
// class MyInput extends React.Component {
//     render () {
//         return (
//             <input type="text" placeholder={ this.props.placeholder } />
//         )
//     }
// }

// function InputHoc (WrapperComponent) {
//     class Input extends React.Component {
//         render () {
            

//             // 容器组件内部获取ref属性
//             const { forwardRef, ...props } = this.props; 
//             return (
//                 // 将forwardRef传递给参数组件
//                 <WrapperComponent ref={ forwardRef } {...props} />
//             )
//         }
//     }
//     // 向子组件传递ref
//     function forWardRef(props, ref) {
//             return <Input {...props} forwardRef={ ref } />
//     }
//     forWardRef.displayName = 'Input -' + WrapperComponent.name;
//     return React.forwardRef(forWardRef)
// }

// const MyInputHoc = InputHoc(MyInput)

// class App extends React.Component {

//     constructor (props) {
//         super(props);

//         this.inputRef = React.createRef();
//     }

//     componentDidMount() {
//         console.log(this.inputRef)
//     }
//     render () {
//         return (
//             // 用ref接收我们的转发的ref
//            <MyInputHoc ref = { this.inputRef } placeholder="请填写" />
//         )
//     }
// }


// 16.2及以下 Refs转发

// class MyInput extends React.Component {
//     render () {
//         return (
//             <input type="text" ref={ this.props.inputRef } />
//         )
//     }
// }

// class App extends React.Component {

//     constructor (props) {
//         super(props);

//         this.inputRef = React.createRef();
//     }
//     componentDidMount() {
//         console.log(this.inputRef)
//     }
//     render () {
//         return (
//             <MyInput inputRef= { this.inputRef } />
//         )
//     }
// }

// 回调 Refs

// class MyInput extends React.Component {

//     constructor (props) {
//         super(props);

//         this.myInput = null;
//     }
    
//     setMyInput(el) {
//        this.myInput = el;
//     }
//     focusInput () {
//        this.myInput.value = '';
//        this.myInput.focus();
//     }
//     render () {
//         return (
//             <div>
//               <input type="text" ref={ this.setMyInput.bind(this) } />
//               <button onClick={ this.focusInput.bind(this) }>Click!</button>
//             </div>
//         )
//     }
// }

// 通过父组件传入回调

class MyInput extends React.Component {

    constructor (props) {
        super(props);

        this.myInput = null;
    }
    
    // setMyInput(el) {
    //    this.myInput = el;
    // }
    // focusInput () {
    //    this.myInput.value = '';
    //    this.myInput.focus();
    // }

    componentDidMount() {
        console.log(this.refs.inputRef)
    }
    render () {
        return (
            <div>
              {/* <input type="text" ref={ this.props.inputRef } /> */}
              {/* <button onClick={ this.focusInput.bind(this) }>Click!</button> */}
              <input type="text" ref="inputRef" />
            </div>
        )
    }
}


class App extends React.Component {

    // componentDidMount() {
    //     console.log(this.oInput)
    // }
    render () {
        return (
            <MyInput inputRef={ el => this.oInput= el} />
        )
    }
}
ReactDOM.render (
    <App />,
    document.getElementById('app')
)


/**
 *  做架子升级的时候考虑的问题；
 *  1. 这个项目是不是有重构的必要性
 *  2. 小版本升级会不会对当前项目中的一些逻辑，模块造成影响
 *  3. 总管整个项目有没有改成另外一个版本的必要性
 */