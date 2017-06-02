import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Page from './Page'
import { API_ROOT } from './endpoints'

class Pages extends Component {
    constructor(props, context) {
		super(props,context);
		this.props = props;
		this.state = {
			pages: []
		}
	}

    onReloadPages(id) {
        console.log('Edit ID:'+id);
        return true;
    }

    componentDidMount() {
        fetch(`${API_ROOT}/pages`)
        .then((response) => response.json())
        .then((res) => this.setState({ pages: res }))
    }

    render() {
        return (
            <div>
               
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
                        this.state.pages.map(
                            (page) => <Page key={page.id} page={page} onPageEdit={this.onReloadPages} />
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Pages