import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import * as _ from 'lodash';

class Info extends Component {
    render() {
        let {selectedRepresentative} = this.props;
        let names = _.split(selectedRepresentative.name, ' ');
        let firstName = names[0];
        let lastName = names[names.length - 1];
        return (
            <Col md={6}>
                Info
                {firstName}
                {lastName}
                {selectedRepresentative.district}
                {selectedRepresentative.phone}
                {selectedRepresentative.office}
            </Col>
        );
    }
}

Info.propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.bool,
    selectedRepresentative: PropTypes.object
};

function mapStateToProps(state) {
    return {
        loading: state.main.loading,
        selectedRepresentative: state.main.selectedRepresentative
    };
}
export default connect(mapStateToProps)(Info);