import React from "react";
import {connect} from "react-redux";
import buttonClicked from "../redux/actions/dashboard/buttonClicked";
import sagaButtonClicked from "../redux/actions/dashboard/sagaButtonClicked";

const Dashboard = ({clicked, sagaClicked, onClick, sagaOnClick}) => (
    <div>
        <div>
            HELLO WORLD
            <button onClick={onClick}>Click me!</button>
            {clicked ? " Button Clicked " : ""}
        </div>
        <div>
            <button onClick={sagaOnClick}>Test saga!</button>
            {sagaClicked ? " Saga Clicked " : ""}
        </div>
    </div>
);

Dashboard.propTypes = {
    clicked: React.PropTypes.bool.isRequired,
    sagaClicked: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
    sagaOnClick: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    clicked: state.dashboard.clicked,
    sagaClicked: state.dashboard.sagaClicked
});

const mapDispatchToProps = {
    onClick: buttonClicked,
    sagaOnClick: sagaButtonClicked
};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);