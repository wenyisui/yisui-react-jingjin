import StButton from '../Button';

import { LoginStatusContext } from '../../context';


class Footer extends React.Component {
    render() {
        return (
            <LoginStatusContext.Consumer>
                {
                    ({status, login}) => (
                        <div className="footer">
                            <h1>Footer</h1>
                            <StButton>Footer({
                                status ? '已登录' : '未登录'
                            })</StButton>
                        </div>
                    )
                }
            </LoginStatusContext.Consumer>
        )
    }
}

export default Footer;