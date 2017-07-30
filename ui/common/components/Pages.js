import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageItem from './PageItem'
import { API_ROOT } from '../endpoints'
import { loadPages } from '../actions'

class Pages extends Component {
    constructor(props, context) {
		super(props,context)
		this.props = props
	}

    shouldComponentUpdate(nextProps) {
        return this.props.pages !== nextProps.pages
    }

    onReloadPages() {
       this.props.onLoadPages()
    }

    componentDidMount() {
        this.onReloadPages()
    }

    render() {
        return (
            <div id="pages" className="content">
                <h1>Pages</h1>

                <div className="tools">
                    <button className='button' onClick={() => this.onReloadPages(1)}>Reload Pages</button>
                </div>

                <table>
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
                            (page) => <PageItem key={page.id} page={page} />
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
    pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages: () => dispatch(loadPages())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages)