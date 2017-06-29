import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';
import {setSelectedRepresentative} from '../../redux/mainActions';
import './list.css';

class List extends Component {

    selectRepresentative = (representative) => {
        const {dispatch} = this.props;
        dispatch(setSelectedRepresentative(representative))
    }

    render() {
        const {searchBy, representatives} = this.props;
        return (
            <Col md={6}>
                <div className="rep-app-list-header"> 
                    List / <span>{searchBy}</span>
                </div>
                <Grid fluid={true}>
                    <Row className="rep-app-list-row-header">
                        <Col sm={6}>
                        Name
                        </Col>
                        <Col sm={6}>
                        Party
                        </Col>
                    </Row>
                    {representatives.map((representative) => {
                        return (
                            <Row className="rep-app-list-row" key={representative.name} onClick={() => this.selectRepresentative(representative)}>
                                <Col sm={6}>
                                {representative.name}
                                </Col>
                                <Col sm={6}>
                                {representative.party.charAt(0)}
                                </Col>
                            </Row>
                        );
                    })}
                </Grid>
            </Col>
        );
    }
}

List.propTypes = {
    dispatch: PropTypes.func,
    searchBy: PropTypes.string,
    representatives: PropTypes.array
};

function mapStateToProps(state) {
    return {
        searchBy: state.main.searchBy,
        representatives: state.main.representatives
    };
}
export default connect(mapStateToProps)(List);