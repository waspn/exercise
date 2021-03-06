import React, {Component} from 'react'
const imgurl = 'https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067'

class NewsList extends Component {

    constructor(props) {
        super(props)
        let {content} = this.props
        this.state = {
            isEditing: false,
            modified: {
                newsid: content.newsid,
                topic: '',
                description: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.toggleEditFeed = this.toggleEditFeed.bind(this)
        this.editFeed = this.editFeed.bind(this)
        this.deleteFeed = this.deleteFeed.bind(this)
    }

    toggleEditFeed()  {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange = (propertyName, e) => {
        const {modified} = this.state
        modified[propertyName] = e.target.value
        
        this.setState({
            modified: modified
        })
    }

    editFeed() {
        let {edit} = this.props
        edit(this.state.modified)
        this.setState({
            isEditing: false
        })
    }

    deleteFeed() {
        let {remove,content} = this.props
        remove(content.newsid)
    }
    
    render() {
        let {content} = this.props
        //console.log(content)
        return(
            <div>
                <div className='well col-xs-12 space'>
                {
                    this.state.isEditing ? 
                    <div className='col-xs-9'>
                        <input className='form-control' onChange={this.handleChange.bind(this,'topic')} defaultValue={content.topic} type='text' />
                        <textarea className='form-control' onChange={this.handleChange.bind(this,'description')} defaultValue={content.description} type='text' rows='4'></textarea>
                    </div>
                    :
                    <div className='col-xs-9'>
                        <h4>{content.topic}</h4>
                        <p>{content.description}</p>
                    </div>
                }
                    <div className='thumbnail col-xs-3'>
                        <img src={imgurl} alt='sample' width='100%' height='100%' />
                    </div>
                {
                    this.state.isEditing ?
                    <div className='col-xs-3'>
                        <button onClick={this.toggleEditFeed} className='btn btn-default'><span className='glyphicon glyphicon-repeat'></span></button>
                        <button onClick={this.editFeed} className='btn btn-success'><span className='glyphicon glyphicon-ok'></span></button>
                    </div>
                    :
                    <div className='col-xs-3'>
                        <button onClick={this.toggleEditFeed} className='btn btn-warning'><span className='glyphicon glyphicon-wrench'></span></button>
                        <button onClick={this.deleteFeed} className='btn btn-danger'><span className='glyphicon glyphicon-remove'></span></button>
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default NewsList