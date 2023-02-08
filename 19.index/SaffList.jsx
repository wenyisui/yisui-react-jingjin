
class SaffList extends React.Component {
    state = {
        list: [
            {
                id: 1,
                name: '小红',
                desc: '研发'
            },
            {
                id: 2,
                name: '小李',
                desc: '市场'
            },
            {
                id: 3,
                name: '小明',
                desc: '财务'
            }
        ]
    }

    render () {
        return (
            <dl>
                {
                    this.state.list.map(({ id, name, desc })=> (
                        // 短语法不支持key
                        // Fragment除了key属性，不支持其他任何属性
                        <React.Fragment key={ id }>
                          <dt>{ id }: { name }</dt>
                          <dd>{ desc }</dd>
                        </React.Fragment>
                    ))
                }
            </dl>
        )
    }
}

export default SaffList;