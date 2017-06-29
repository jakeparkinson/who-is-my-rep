import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { states } from '../../util/states';
import { getRepresentatives } from '../../redux/mainActions';

class Selectors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedState: states[0].abbreviation,
            selectedType: 'senators'
        };
    }

    handleStateChange = (event) => {
        this.setState({selectedState: event.target.value});
    }

    handleTypeChange = (event) => {
        this.setState({selectedType: event.target.value});
    }

    handleSubmit = (event) => {
        const {dispatch} = this.props;
        let {selectedType, selectedState} = this.state;
        event.preventDefault();
        dispatch(getRepresentatives(selectedType, selectedState))
    }

    getStateOptions = () => {
        return states.map(function (state, i) {
            return <option
                key={state.name}
                value={state.abbreviation}>
                {state.abbreviation}
            </option>
        });
    }

    render() {
        let {loading} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Search By
                        <select className="form-control" value={this.state.value} onChange={this.handleTypeChange}>
                            <option value="senators">Senators</option>
                            <option value="representatives">Representatives</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        State
                        <select className="form-control" value={this.state.value} onChange={this.handleStateChange}>
                            {this.getStateOptions()}
                        </select>
                    </label>
                </div>
                <input className="btn btn-primary" type="submit" disabled={loading} value={!loading ? 'Submit' : 'Loading...'} />
            </form>
        );
    }
}

Selectors.propTypes = {
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    return {
        loading: state.main.loading
    };
}
export default connect(mapStateToProps)(Selectors);