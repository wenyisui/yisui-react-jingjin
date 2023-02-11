class Get extends React.Component {

    async componentDidMount() {
        const result = await axios(this.props.url);

        console.log(result);
        this.setState({
            data: result.data
        }, ()=>{
            setTimeout(()=>{  // 异步为了看到加载loading
                this.setState({
                    component: this.props.children(this.state.data)
                })
            }, 1000)
        })
    }
    
    state = {
        data: [],
        component: this.props.loading || 'loading...'
    }
    render () {
        return this.state.component;
    }
}


export default Get;