import React from "react";
import { connect } from "react-redux";
import { Spinner, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"

// MARK: - custom action
import { getQuote } from "../actions";

const Quote = (props) => {
	return (
		<div>
			<div className="quote-container">
				<h1 className="banner">From Donald's Mind</h1>
				{!props.quote && !props.isFetching && <p>Donald said...</p>}
				{props.isFetching && <Spinner className="center" color="light" />}
				{props.quote && <p className="quote">{props.quote}</p>}
				<Button onClick={props.getQuote} color="danger">random thought</Button>{' '}
			</div>
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		quote: state.quote,
		isFetching: state.isFetching,
		error: state.error
	}
}

export default connect(mapStateToProps, { getQuote })(Quote);