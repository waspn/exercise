import React, {Component} from 'react'
import NewsList from './NewsList'
import NewsInput from './NewsInput'

class Feed extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newsfeed: []
        }
        this.addNews = this.addNews.bind(this)
        this.editNews = this.editNews.bind(this)
        this.deleteNews = this.deleteNews.bind(this)
    }

    addNews(feed) {
        console.log(feed)
        this.setState({
            newsfeed: this.state.newsfeed.concat(feed)
        })
    }

    editNews(feed,key) {
        console.log(feed)
        console.log(key)
        let update = this.state.newsfeed
        update.forEach((obj,newsid) => {
            if(obj.newsid === key) {
                obj.topic = feed.topic
                obj.description = feed.description
            }
        })
        this.setState({
            newsfeed: update
        })
        console.log(this.state.newsfeed)
    }

    deleteNews(key) {
        console.log(key)
        this.setState({
            newsfeed: this.state.newsfeed.filter((el) => {
                return el.newsid !== key
            })
        })
    }

    render() {
        let {newsfeed} = this.state
        console.log(newsfeed)
        return(
            <div className='col-xs-12'>
                <div className='page-header'><h2>News Feed</h2></div>
                <NewsInput onOperation={this.addNews}/>
                <NewsList items={newsfeed} onEdit={this.editNews} onDelete={this.deleteNews} />

            </div>
        )
    }
}

export default Feed
