
import Header from './components/Header';
import BottomNav from './components/BottomNav';

class Main extends React.Component {

     state = {
        navData: [
            '第①',
            '第②',
            '第③',
            '第④'
        ]
     }
     render () {
        return (
            <>
                <Header>这是标题</Header>
                <div style={{marginTop: 88 + 'px'}}>
                    <button onClick={ ()=> this.props.themeChange('black')}>Black</button>
                    <button onClick={ ()=> this.props.themeChange('red')}>Red</button>
                    <button onClick={ ()=> this.props.themeChange('orange')}>Orange</button>
                    <button onClick={ ()=> this.props.themeChange('purple')}>Purple</button>
                </div>
                <BottomNav 
                  data={ this.state.navData }
                />
            </>
        )
     }
}

export default Main;