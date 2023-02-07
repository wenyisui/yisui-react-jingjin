import { BtnStyleContext } from "../../context";



class StButton extends React.Component {
    render () {
        return (
           <BtnStyleContext.Consumer>
               {
                 ({style,doClick})=>(
                    <button 
                      style={ style }
                      onClick = { doClick }
                      { ...this.props }
                    ></button>
                 )
               }
           </BtnStyleContext.Consumer>
        )
    }
}

export default StButton;