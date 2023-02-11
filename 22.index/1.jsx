// jsx属性

/**
 *  JSX的props
 *  
 *  JSX 大括号 {} 里面可以传入任何JavaScript表达式 (if, for, switch, function这些是语句不能用)
 *  非表达式 可以在JSX外面使用
 */

function MyTitle(props) {
    const { title, author } = props;

    return (
        <div>
            <h1>{title}</h1>
            <p>{author}</p>
        </div>
    )
}


function MyTitle2(props) {
    const { children, author,authorShow } = props;

    return (
        <div>
            <h1>{ children}</h1>
            {  
            // 真假 Boolean
               authorShow
               ? <p>{ author }</p>
               : ''
            }
        </div>
    )
}
class App extends React.Component {
    state = {
        mainTitle: 'This is a MAINTITLE',
        subTitle: 'This is a SUBTITLE',
        titleShow: 'main' // sub
    }
    render() {

        // let title = '';
        // if(this.state.titleShow==='sub'){
        //     title = <h2>{ this.state.subTitle}</h2>
        // }else{
        //     title = <h2>{ this.state.mainTitle}</h2>
        // }

        // switch (this.state.titleShow) {
        //     case 'sub':
        //         title = <h2>{ this.state.subTitle}</h2>
        //         break;
        //     case 'main':
        //         title = <h2>{ this.state.mainTitle}</h2>
        //         break
        //     default:
        //         title = <h3>Three is no Title</h3>
        // }

        // const {titleShow, mainTitle,subTitle} = this.state;

        // const { title, author, authorShow } = this.props;
        // console.log(title, author, authorShow)

        const { abc, ...others } = this.props; // 排除不需要的，剩下都放在others里
        console.log(others);
        return (
            // <MyTitle 
            //   title="主题" 
            //   author="小温"
            //  />

            // <MyTitle 
            //   title={ `${this.state.mainTitle}(${ this.state.subTitle })` }
            //   author="xiaowen"
            // />
            // <div>{
            //    titleShow ==='sub'
            //    ?<h2>{ subTitle }</h2>    
            //    :<h1>{ mainTitle }</h1>
            // }</div>

            /**
             *  字符串字面量
             *  
             */
            // <div>
            //     <MyTitle
            //         title='这是一个标题'
            //         author='小温'
            //     />
            //     <MyTitle 
            //         title={ '这是一个标题' }
            //         author= { '小温' }
            //     />
            //     <MyTitle 
            //         title="这是一个<标题>"
            //         // js表达式方式传入props，HTML实体字符会转义为普通字符
            //         author={ '&lt;小温&gt;' }
            //     />
            //     <MyTitle 
            //       // 字符串字面量传入props的方式不会对HTML实体转义
            //       title="这是一个&lt;标题&gt;"
            //       author= { 'xiaowen' }
            //     />
            // </div>

            <div>
                <MyTitle2 
                //   title="This is a TITLE"
                //   author= 'xiaowen'
                //   // 字符串传入的意义是字符串的意思，不代表Bool真假
                //   // 逻辑：字符串true是逻辑真
                //   //authorShow='true'

                //   // 语义和逻辑：Bool true的意义代表Bool真假
                //   authorShow = { true }

                //   // 不赋值属性 -> 默认就是Bool 真
                //   // 不推荐这么做，语义不好
                //    //   authorShow

                // 属性展开操作
                // title= { title}
                // author= { author }
                // authorShow= { authorShow }
                { ...others }
                />

            </div>
        )
    }
}

ReactDOM.render(
    <App 
      author="xiaowen"
      authorShow= { true }
    >This is a title</App>,
    document.getElementById('app')
)