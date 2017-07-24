import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as feedActions from '../../../redux/feed/feedActions'
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
        this.fetchFeed = this.fetchFeed.bind(this)
    }

    componentDidMount() {
        this.fetchFeed()
    }

    addNews(feed) {
        console.log(feed)
        this.props.feedActions.addFeed(feed)

    }

    editNews(feed,key) {
        console.log(feed)
        console.log(key)
        //let {remove} = this.props
        this.props.feedActions.editFeed(feed,key)
        /*
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
        console.log(this.state.newsfeed)*/
    }

    deleteNews(key) {
        console.log(key)
        this.props.feedActions.deleteFeed(key)
        // this.setState({
        //     newsfeed: this.state.newsfeed.filter((el) => {
        //         return el.newsid !== key
        //     })
        //})
    }

    fetchFeed() {
        this.props.feedActions.fetchFeed()
        console.log('afawfawf')
    }

    render() {
        //let {newsfeed} = this.state
        

        const {feed} = this.props
        console.log(feed)
        return(
            <div className='col-xs-12'>
                <div className='page-header'><h2>News Feed</h2></div>
                
                <NewsInput onOperation={this.addNews}/>
                {
                    feed.error === 'Failed' ? <b>Cannot Fetch News Feed</b> : ''
                }

                { 
                    feed.isFetching ? <h2>Loading</h2> : 
                    <NewsList items={feed.data} onEdit={this.editNews} onDelete={this.deleteNews} />
                }
                

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        feed: state.feed
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        feedActions: bindActionCreators(feedActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed)
