// JSX子元素


// class MyTitle extends React.Component {
//     render() {
//         const { children,title, author } = this.props;
//         return (
//           <div>
//              <h1>{ children }</h1>
//              <h1>{ title }</h1>
//              <h2>{ author }</h2>
//           </div>
//         )
//     }
// }

class MyList extends React.Component {
    render() {
        return (
            <div className={ this.props.listClassName }>
                <h1>{ this.props.title }</h1>
                <ul className="my-list">{ this.props.children }</ul>
            </div>
        )
    }
}

// class ListItem extends React.Component {
//     render () {
//         return (
//             <li>{ this.props.children }</li>
//         )
//     }
// }

// class ListItems extends React.Component {
//     render () {
//         return [
//             <li>This is content 1.</li>,
//             <li>This is content 2.</li>,
//             <li>This is content 3.</li>
//         ]
//     }
// }

// 想返回数组也可以
class ListItems extends React.Component {
    render () {
        return (
            this.props.listData.map((item, index)=>(
                <li key={ index }>{ item }</li>
            ))
        )
    }
}

class App extends React.Component {

    state = {
        listData: [
            'This is content 1',
            'This is content 2',
            'This is content 3'
        ],
        show: true,
        data: []
    }
    render() {
        return (
           <div>
              {/*
                  JSX子元素

                  字符串字面量 不转义
                  1. 去掉首尾空格换行
                  2. 字符串中间的多个空格压缩为一个空格(&nbsp;)
                  3. 字符串之间的换行压缩为一个空格(<br />)
                
              */}
            {/* <MyTitle>This is a TITLE</MyTitle>
            <MyTitle>{ 'This is a TITLE' }</MyTitle> */}

            {/*
              JSX作为JSX子元素
            */}

            <MyList
              listClassName= "my-list-container"
              title= "This is my list"
            >
              {/* <ListItem>This is my content 1.</ListItem>
              <ListItem>This is my content 1.</ListItem>
              <ListItem>This is my content 1.</ListItem> */}

              {/* {
                this.state.listData.map((item, index) =>(
                    <ListItem key={ index }>Hello, { item }</ListItem>
                ))
              } */}

              <ListItems listData= { this.state.listData } />
            </MyList>

            {/* 
                null, undefined, bool 都是可以作为JSX的子元素的
                这些子元素是会被忽略不会渲染的，为解决条件渲染的问题
                标签是会渲染的
            */}
            <div>{ true }</div>
            <div>{ false }</div>
            <div>{ undefined }</div>
            <div>{ null }</div>
            <div>
                {
                    this.state.show ? 'OK' : '不OK'
                }
            </div>
            <div>
                {
                    this.state.show && 'OK'
                }
            </div>
            <div>
                {
                    this.state.data.length ? '有数据' : '暂无数据'
                }
            </div>
            <div>
                {   
                   // JSX 中0是会渲染的，这个条件
                    //this.state.data.length && '有数据'
                   this.state.data.length > 0 && '有数据'
                }
            </div>
           </div>
        )
    }
}

ReactDOM.render(
    <App
        title="This is a Title"
        author="xiaowen"
    />,
    document.getElementById('app')
)