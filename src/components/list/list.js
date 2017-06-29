import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';
import {setSelectedRepresentative} from '../../redux/mainActions';

class List extends Component {

    selectRepresentative = (representative) => {
        const {dispatch} = this.props;
        dispatch(setSelectedRepresentative(representative))
    }

    render() {
        const {searchBy, representatives} = this.props;
        return (
            <Col md={6}>
                <div> 
                    List / {searchBy}
                </div>
                <Grid>
                    <Row>
                        <Col sm={6}>
                        Name
                        </Col>
                        <Col sm={6}>
                        Party
                        </Col>
                    </Row>
                    {representatives.map((representative) => {
                        return (
                            <Row key={representative.name} onClick={() => this.selectRepresentative(representative)}>
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
    loading: PropTypes.bool,
    searchBy: PropTypes.string,
    representatives: PropTypes.array
};

function mapStateToProps(state) {
    return {
        loading: state.main.loading,
        searchBy: state.main.searchBy,
        representatives: state.main.representatives
    };
}
export default connect(mapStateToProps)(List);