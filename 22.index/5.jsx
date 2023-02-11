// JSX 函数子元素案例  使用了子元素是函数 以及.语法


import Http from "./Http";
class App extends React.Component {
    render () {
        return (
           <table>
             <thead>
                <tr>
                   <th>ID</th>
                   <th>姓名</th>
                   <th>年级</th>
                </tr>
             </thead>
             <tbody>
                <Http.Get
                  url="http://localhost:8080/getStudents"
                  loading= {
                    <tr>
                        <td colSpan="3">正在加载中...</td>
                    </tr>
                  }
                >
                  {
                    (data) => {
                        return data.map(item =>(
                            <tr key={ item.id }>
                               <td>{ item.id }</td>
                               <td>{ item.name }</td>
                               <td>{ item.grade }</td>
                            </tr>
                        ))
                    }
                  }
                </Http.Get>
             </tbody>
           </table>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)