
class Table extends React.Component {

    state = {
        headers : [
            'Name',
            'ID',
            'Age'
        ],
        info: [
            'haha',
            '4354235234',
            '35'
        ]
    }
    render () {
        return (
            <table border="1">
               <caption>Private Infomation</caption>
               <thead>
                  <tr>
                    <TableHeaders headers= { this.state.headers } />
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <TableCells info = { this.state.info } />
                  </tr>
               </tbody>
            </table>
        )
    }
}

class TableHeaders extends React.Component {

    
    render () {
        return (
            
            // 短语法：声明一个React.Fragment
           <>
               {
                this.props.headers.map((item, index) => (
                    <th key={ index }>{ item }</th>
                ))
            }
           </>
        )
    }
}

class TableCells extends React.Component {
    render () {
        return (
            <React.Fragment>
                {
                    this.props.info.map((item, index) => (
                        <td key={ index }>{ item }</td>
                    ))
                }
            </React.Fragment>
        )
    }
}

export default Table;