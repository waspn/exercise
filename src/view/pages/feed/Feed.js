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
        this.props.feedActions.addFeed(feed)

    }

    editNews(feed,key) {
        this.props.feedActions.editFeed(feed,key)
    }

    deleteNews(key) {
        this.props.feedActions.deleteFeed(key)
    }

    fetchFeed() {
        this.props.feedActions.fetchFeed()
    }

    render() {
        const {feed} = this.props
        return(
            <div className='col-xs-12'>
                <div className='page-header'><h2>News Feed</h2></div>
                { feed.adderror }
                <NewsInput onOperation={this.addNews}/>
                {
                    feed.fetcherror === 'faetchfailed' ? <b>Cannot Fetch News Feed</b> : ''
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
