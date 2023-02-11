
function InputHoc (WrapperComponent) {

    // 高阶组件是不可以修改参数组件
    // 这样修改可能会导致参数组件内部的逻辑的执行失效
    // WrapperComponent.prototype.componentDidUpdate = function () {
    //     console.log('我是InputHoc')
    // }
    class InputHocComponent extends React.Component {
        state = {
            inputValue: ''
        }
        // 一切的功能都可以在容器组件内实现

        /**
         *  HOC更加关注逻辑与状态的管理，参数组件的逻辑与状态的订阅
         *  参数组件基本只需要关注视图的渲染
         */
        componentDidUpdate() {
            console.log('我是InputHocComponent')
        }
        
        valueInput (e) {
            this.setState({
                inputValue: e.target.value
            })
        }
        render () {
            // 如何排除参数组件不需要的属性
            const { a, ...props} = this.props;  //剩余参数的写法
            return (
                <WrapperComponent 
                  inputValue={ this.state.inputValue }
                  valueInput={ this.valueInput.bind(this) }
                  { ...props }
                />
            )
        }
    }
    
    InputHocComponent.displayName = 'InputHoc';
    return InputHocComponent;
}

export default InputHoc;