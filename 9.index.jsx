// 受控组件: 使用1/2的控制表单输入行文取值的方式的组件

const hobbiesData=[
  {
    name: '钢琴',
    value: 'piano'
  },
  {
    name: '旅行',
    value: 'travel'
  },
  {
    name: '跑步',
    value: 'running'
  },
  {
    name: '唱歌',
    value: 'singing'
  }
]
import { nanoid } from "nanoid"

class App extends React.Component {
    
    // 1. state就是表单里面的唯一数据源
    state = {
        username:'',
        password:'',
        intro: '',
        gender: 'male',
        isStudent: true,
        hobbies:['piano']
    }
    // handleUsernameChange (e) {
    //   // 2. 控制表单操作并且同步state
    //   // e -> target -> value
    //   this.setState({
    //     username: e.target.value
    //   }, () =>{
    //     console.log(this.state.username)
    //   })
    // }

    // handlePasswordChange(e) {
    //    this.setState({
    //      password: e.target.value
    //    }, () =>{
    //      console.log(this.state.password)
    //    })
    // }
    // handleIntroChange(e) {
    //    this.setState({
    //      intro: e.target.value
    //    })
    // }
    
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    // handleGenderChange(e) {
    //   this.setState ({
    //     gender: e.target.value
    //   })
    // }

    handleStudentChange(isStudent) {
       this.setState({
         isStudent
       })
    }

    // 多选
    handleHobbiesChange(e) {
      if(e.target.checked) {
        this.setState({
           hobbies: [...this.state.hobbies, e.target.value]
        })
      }else{
        this.setState({
          hobbies: this.state.hobbies.filter(item => item !== e.target.value)
        })
      }
    }
    handleSubmitClick(e) {
      e.preventDefault();

      const {
        username,
        password,
        intro,
        gender,
        isStudent,
        hobbies,
      } =this.state;

      console.log(
        username,
        password,
        intro,
        gender,
        isStudent,
        hobbies
      )
    }
    handleResetClick(e){
        e.preventDefault();
        this.setState({
          username: '',
          password: '',
          intro: '',
          gender: 'male',
          isStudent: true,
          hobbies: []
        })
    }
    render () {
        const { 
          username,
          password,
          intro,
          gender,
          isStudent,
          hobbies
          } = this.state;
        return (
           <form>
             <p>
                用户名：
                <input 
                type="text"
                placeholder="用户名"
                value={ username }
                name="username"
                onChange={ this.handleChange.bind(this) }
                />
             </p>
             <p>
                密码：
                <input 
                type="password" 
                placeholder="密码"
                value={ password }
                name="password"
                onChange={ this.handleChange.bind(this) }
                />
             </p>
             <p>
              <textarea 
                placeholder="自我介绍"
                value={ intro }
                name="intro"
                onChange={ this.handleChange.bind(this) }
              />
             </p>
             <p>
                <select
                  value={ gender }
                  name="gender"
                  onChange={ this.handleChange.bind(this) }
                >
                  <option value="male">男</option>
                  <option value="female">女</option>
                </select>
             </p>
             <p>
                是否是学生：
                是<input 
                     type="radio" 
                     name="isStudent"
                     checked={ isStudent }
                     onChange={ this.handleStudentChange.bind(this,true) }
                  />
                |
                否<input 
                   type="radio" 
                   name="isStudent"
                   onChange={ this.handleStudentChange.bind(this,false) }
                  />
             </p>
             {
               hobbiesData.map(item => {
                //  const sid=nanoid()  //注意这里不能使用nanoid
                 return (
                   <span key={ item.value }>
                     <span>{ item.name }:</span>
                     <input 
                       type="checkbox"
                       name="hobbies" 
                       value={ item.value }
                       checked={ hobbies.includes(item.value) }
                       onChange={ this.handleHobbiesChange.bind(this) }
                     />
                   </span>
                 )
               })
             }
             {/* <p>
               钢琴：<input 
                         type="checkbox" 
                         name="hobbies"
                         value="piano"
                         onChange={ this.handleHobbiesChange.bind(this) }
                    />|
               旅行：<input 
                         type="checkbox" 
                         name="hobbies"
                         value="travel"
                         onChange={ this.handleHobbiesChange.bind(this) }
                    />|
               跑步：<input 
                         type="checkbox" 
                         name="hobbies"
                         value="runing"
                         onChange={ this.handleHobbiesChange.bind(this) }
                    />|
               唱歌：<input 
                         type="checkbox" 
                         name="hobbies"
                         value="singing"
                         onChange={ this.handleHobbiesChange.bind(this) }
                    />|
             </p> */}
             <p>
              <button onClick={ this.handleSubmitClick.bind(this) }>登录</button>
              <button onClick={ this.handleResetClick.bind(this) }>重置</button>
             </p>
           </form>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)