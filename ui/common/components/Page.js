import React from 'react'
import { connect } from 'react-redux'
import { API_ROOT } from './endpoints'
import { loadPage } from '../actions/page.js'
import PageContent from './PageContent'

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
        if (this.props.page)
            return(
                <PageContent page={this.props.page}></PageContent>
            )
        else
            return(<div/>)
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