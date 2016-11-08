import React from "react";
import {connect} from "react-redux";
import buttonClicked from "../redux/actions/dashboard/buttonClicked";
import sagaButtonClicked from "../redux/actions/dashboard/sagaButtonClicked";
import {Jumbotron, Button, Col, Row, Grid, Carousel} from 'react-bootstrap';
import img1 from '../design/img/img1.jpg';
import img2 from '../design/img/img2.jpg';
import img3 from '../design/img/img3.jpg';

const Dashboard = ({clicked, sagaClicked, onClick, sagaOnClick}) => (
    <div className="content">
        <Grid fluid={true}>
            <Row className="show-grid">
                <Col xs={12} md={12}>
                    <Carousel>
                        <Carousel.Item>
                            <img src={img1}/>
                            <Carousel.Caption>
                                <h3>Pan wiceprezes</h3>
                                <p>Ratownik nad ratownikami</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img2}/>
                            <Carousel.Caption>
                                <h3>Posłusznym mu bądź</h3>
                                <p>Bo cię najebie z ziomkami</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3}/>
                            <Carousel.Caption>
                                <h3>Widzisz jaki jest groźny</h3>
                                <p>Wody roztąpią się przed wszechmocnym irokezem</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col xs={4} md={4}>My, niegodne ciebie robaki, pragniemy ofiarować tobie ten oto defibrylator, cobyś mógł
                    synów swych i córki do życia przywracać
                </Col>
                <Col xs={4} md={4}>My, niegodne ciebie robaki, pragniemy ofiarować tobie ten oto defibrylator, cobyś mógł
                    synów swych i córki do życia przywracać
                </Col>
                <Col xs={4} md={4}>My, niegodne ciebie robaki, pragniemy ofiarować tobie ten oto defibrylator, cobyś mógł
                    synów swych i córki do życia przywracać
                </Col>
            </Row>
        </Grid>
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