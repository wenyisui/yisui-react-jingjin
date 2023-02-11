
// class MyInput extends React.Component {
//     render () {
//         return (
//           <div>
//             <h1>{ this.props.inputValue }</h1>
//             <p>总计：{ this.props.b + this.props.c }</p>
//             <input 
//                type="text" 
//                placeholder="请填写"
//                value={ this.props.inputValue}
//                onChange={ this.props.valueInput }
//                />
//           </div>
//         )
//     }
// }
// 高阶组件接收的参数组件可以是类组件，也可以是函数组件
function MyInput (props) {

    React.useEffect(() =>{
        console.log('我是MyInput')
    },[props.inputValue])
    return (
        <div>
          <h1>{ props.inputValue }</h1>
          <p>总计：{ props.b + props.c }</p>
          <input 
             type="text" 
             placeholder="请填写"
             value={ props.inputValue}
             onChange={ props.valueInput }
             />
        </div>
      )
}

export default MyInput;