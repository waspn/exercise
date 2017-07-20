import React, {Component}  from 'react'

class NewsInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            news: {
                newsid: 0,
                topic: '',
                description: '',
            }
        }
        this.clear = this.clear.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addFeed = this.addFeed.bind(this)
    }

    clear() {
        this.setState({
            news: {
                topic: '',
                description: ''
            }
        })
    }

    handleChange = (propertyName, e) => {
        const {news} = this.state
        news[propertyName] = e.target.value
        
        this.setState({
            news: news
        })
    }

    addFeed() {
        let {onOperation} = this.props
        onOperation(this.state.news)
        this.setState({
            news: {
                newsid: this.state.news.newsid + 1,
                topic: '',
                description: ''
            }
        })
    }
    
    render() {
        let {topic, description} = this.state.news
        return(
            <div className='col-xs-12'>
                <b>Add 'News feed'</b>
                <input type='text' className='form-control' onChange={this.handleChange.bind(this,'topic')} value={topic} placeholder='Topic' />
                <textarea className='form-control' onChange={this.handleChange.bind(this,'description')} value={description} placeholder='Description' rows='4'></textarea>
                <br/>
                <div className='right'>
                    <button onClick={this.clear} className='btn btn-warning'> Clear </button>
                    <button onClick={this.addFeed} className='btn btn-success'> Add </button>
                </div>
            </div>
        )
    }
}

export default NewsInput