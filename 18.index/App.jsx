import { BtnStyleContext, LoginStatusContext } from "./context";
import Home from "./views/Home";

import { btnStyle } from "./config";

class App extends React.Component {

    state = {
        style: btnStyle.sucess,
        loginStatus: false
    }
    doClick (e) {
        console.log(e.target.textContent)
    }
    login () {
        this.setState ({
            loginStatus: !this.state.loginStatus
        })
    }
    render() {
        return (
            <div className="app">
               <BtnStyleContext.Provider value = {{
                  style: this.state.style,
                  doClick: this.doClick
               }}>
                <LoginStatusContext.Provider value = {{
                    status: this.state.loginStatus,
                    login: this.login.bind(this)
                }}>
                    <Home />
                </LoginStatusContext.Provider>
               </BtnStyleContext.Provider>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)