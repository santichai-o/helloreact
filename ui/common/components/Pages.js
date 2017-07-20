import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import Page from './Page'
import { API_ROOT } from './endpoints'
import { loadPages } from '../actions/page'

class Pages extends Component {
    constructor(props, context) {
		super(props,context)
		this.props = props
	}

    shouldComponentUpdate(nextProps) {
        return this.props.pages !== nextProps.pages
    }

    onReloadPages(a) {
       this.props.onLoadPages()
    }

    componentDidMount() {
        const params = { xxxxx: '' }

        this.onReloadPages(1)
    }

    render() {
        return (
            <div>
                <button className='button' onClick={() => this.onReloadPages(1)}>
                    Reload Pages
                </button>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.pages.map(
                            (page) => <Page key={page.id} page={page} onPageEdit={this.onReloadPages.bind(this)} />
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

Pages.needs = [ loadPages ]

const mapStateToProps = (state) => ({
    pages: state.pages.data
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages: (a) => dispatch(loadPages(a))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages)