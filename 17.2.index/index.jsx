// Context  给整个组件树共享全局的数据

const CityContxt = React.createContext({
    name: 'chengdu',
    text: '成都'
})

class App extends React.Component {

    state = {
        cityInfo: {
            name: 'chnegdu',
            text: '成都'
        }
    }

    changeCity (cityInfo) {
        this.setState ({
            cityInfo
        })
    }
    render () {
        return (
           <CityContxt.Provider value={ this.state.cityInfo }>
               <Header changeCity={ this.changeCity.bind(this) } />
               <span>{ this.state.cityInfo.text }</span>
           </CityContxt.Provider>
        )
    }
}


class Header extends React.Component {
    render () {
        return (
            <Selector changeCity={ this.props.changeCity } />
        )
    }
}

class Selector extends React.Component {


    /**
     *  将上下文的类型指定为CityContext
     *  this.context -> cityInfo
     *  想上找最近的CityContext的Provider, 并且取值 cityInfo
     */

    /**
     *  contextType 
     *  class的静态属性
     *  Selector.contextType
     *  contextType -> React.createContext() -> Context对象
     *  static contextType = CityContxt;
     *  给当前环境下的context重新指定引用
     *  this-> context -> CityContext
     *  在生命周期函数和render函数中都可以访问
     */

    static contextType = CityContxt;

    componentDidMount(){
        console.log(this.context)
    }

    render () {
        console.log(this.context)
        return (
              <select 
                value={ this.context.name }
                onChange= {
                   (e) => this.props.changeCity({
                       name: e.target.value,
                       text: e.target[e.target.selectedIndex].text
                   })
                }
              >
                 <option value="">请选择</option>
                 <option value="chengdu">成都</option>
                 <option value="beijing">北京</option>
                 <option value="hangzhou">杭州</option>
                 <option value="shenzhen">深圳</option>
              </select>
        )
    }
}

// class App extends React.Component {

//     constructor (props) {
//         super(props);

//         this.CitySelector = <Selector 
//             cityData= { this.state.cityData }
//             cityInfo= { this.state.cityInfo }
//             changeCity= { this.changeCity.bind(this) }
//         />
//     }
//     state = {
//         headerTitle : '这是标题',
//         cityInfo: {
//             name: 'chengdu',
//             text: '成都'
//         },
//         cityData: [
//             {
//                 name: 'beijing',
//                 text: '北京'
//             },
//             {
//                 name: 'chengdu',
//                 text: '成都'
//             },
//             {
//                 name: 'shenzhen',
//                 text: '深圳'
//             },
//             {
//                 name: 'hangzhou',
//                 text: '杭州'
//             }
//         ]
//     }
    
//     changeCity (cityInfo) {
//         this.setState ({
//            cityInfo
//         })
//     }
//     render () {
//         return (
//             <>
//               <Header 
//                 text = { this.state.headerTitle }
//                 citySelect = { this.CitySelector }
//               />
//               <span>{ this.state.cityInfo.text }</span>
//             </>
//         )
//     }
// }

// class Header extends React.Component {
//     render () {
//         return (
//             <header>
//                 <h1>{ this.props.text }</h1>
//                 <div>{ this.props.citySelect }</div>
//             </header>
//         )
//     }
// }

// class Selector extends React.Component {
//     render () {
//         return (
//             <select
//                defaultValue={ this.props.cityInfo.name }  // 写成value选择时option的只会不变所以defaultValue
//                onChange = {
//                  (e) => this.props.changeCity({
//                     name: e.target.value,
//                     text: e.target[e.target.selectedIndex].text
//                  })
//                }
//             >
//               {
//                 this.props.cityData.map((item, index) => {
//                      return <option value={ item.name } key={ index } >{ item.text }</option>
//                 })
//               }
//             </select>
//         )
//     }
// }

/**
 *  最适合的场景：杂乱无章的组件都需要同一些数据
 *  单纯为了步层层传递属性的话，Context实际上是不合适的
 *  Context弱点：会弱化及污染组件的纯度，导致组件复用性降低
 */

// import App from "./1.jsx";

ReactDOM.render (
    <App />,
    document.getElementById('app')
)

