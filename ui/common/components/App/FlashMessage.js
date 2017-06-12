import React from 'react'
import { connect } from 'react-redux'

const FlashMessage = (props) => {
    if (props.message == '')
        return null
    else
        return(<div className="flash-message">{props.message}</div>)
};

FlashMessage.shouldComponentUpdate = (nextProps) => {
    return this.props.message !== nextProps.message;
}

const mapStateToProps = (state) => ({
    message: state.pages.message
})

export default connect(
  mapStateToProps
)(FlashMessage)
