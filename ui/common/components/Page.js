import React from 'react'
import { connect } from 'react-redux'
import { API_ROOT } from '../endpoints'
import { loadPage } from '../actions'

class Page extends React.Component {
    constructor(props, context) {
		super(props,context)
        this.props = props
    }

    shouldComponentUpdate(nextProps) {
        return this.props.page !== nextProps.page
    }

    onReloadPage(id) {
       this.props.onLoadPage(id)
    }

    componentDidMount() {
        let page = this.props.params

        this.onReloadPage(page)
    }
    
    render() {
        return (
            <div id="page" className="content">
                <h1>{ this.props.page.title }</h1>
                <div className="content-body">{ this.props.page.description }</div>
            </div>
        )
    }
}

 Page.needs = [ loadPage ]

const mapStateToProps = (state) => ({
    page: state.page
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPage: (pageID) => dispatch(loadPage(pageID))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page) 