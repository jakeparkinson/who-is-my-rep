import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from '../list/list';
import Info from '../info/info';
import {Grid, Row} from 'react-bootstrap';

class Results extends Component {
    render() {
        let {representatives, loading} = this.props;
         return (
            <Grid fluid={true}>
                {representatives.length > 0 && !loading &&
                <Row>
                    <List />
                    <Info />
                </Row>
                }
            </Grid>
        );
    }
}

Results.propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.bool,
    representatives: PropTypes.array
};

function mapStateToProps(state) {
    return {
        loading: state.main.loading,
        representatives: state.main.representatives
    };
}
export default connect(mapStateToProps)(Results);