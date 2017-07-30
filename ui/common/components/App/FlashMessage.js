import React from 'react'
import { connect } from 'react-redux'

const FlashMessage = (props) => {
    if (props.status.state == 0)
        return null
    else if (props.status.state == 1)
        return(
            <div className="flash-message loading">
                <span>loading...</span>
            </div>
        )
    else if (props.status.state == 2)
        return(
            <div className="flash-message load-fail">
                <span>{ props.status.message }</span>
            </div>
        )
};

FlashMessage.shouldComponentUpdate = (nextProps) => {
    return this.props.status !== nextProps.status
}

const mapStateToProps = (state) => ({
    status: state.status
})

export default connect(
  mapStateToProps
)(FlashMessage)
