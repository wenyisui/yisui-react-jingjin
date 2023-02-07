import StButton from '../Button';

import { LoginStatusContext } from '../../context';


class Main extends React.Component {
    render() {
        return (
            <LoginStatusContext.Consumer>
                {
                    ({status, login}) => (
                        <div className="main">
                            <h1>Main</h1>
                            <StButton>Main({
                                status ? '已登录' : '未登录'
                            })</StButton>
                        </div>
                    )
                }
            </LoginStatusContext.Consumer>
        )
    }
}

export default Main;