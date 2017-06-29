import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';
import * as _ from 'lodash';
import '../list/list.css';
import './info.css';

class Info extends Component {
    render() {
        let {selectedRepresentative} = this.props;
        let names = _.split(selectedRepresentative.name, ' ');
        let firstName = names[0];
        let lastName = names[names.length - 1];
        return (
            <Col md={6}>
                <div className="rep-app-list-header">Info</div>
                <div className="rep-app-info-row">{firstName || 'First Name'}</div>
                <div className="rep-app-info-row">{lastName || 'Last Name'}</div>
                <div className="rep-app-info-row">{selectedRepresentative.district || 'District'}</div>
                <div className="rep-app-info-row">{selectedRepresentative.phone || 'Phone'}</div>
                <div className="rep-app-info-row">{selectedRepresentative.office || 'Office'}</div>
            </Col>
        );
    }
}

Info.propTypes = {
    selectedRepresentative: PropTypes.object
};

function mapStateToProps(state) {
    return {
        selectedRepresentative: state.main.selectedRepresentative
    };
}
export default connect(mapStateToProps)(Info);