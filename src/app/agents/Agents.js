import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, Form } from 'react-bootstrap';

import { fetchFlatRates, deleteFlatRate, createFlatRate, updateFlatRate } from '../redux/actions/profile';
import places from '../data/places';
import { formatMoney } from '../redux/helpers/util';

export class Agents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: "CREATE",
            start: "",
            dest: "",
            small: "",
            partner_small: "",
            medium: "",
            partner_medium: "",
            large: "",
            partner_large: "",
        };

        // preserve the initial state in a new object
        this.baseState = this.state;
    }

    componentDidMount() {
        this.props.fetchFlatRates();
    }

    handleDiscard = () => {
        this.setState(this.baseState);
    }

    handleAddFlatRate = () => {
        const criteria = this.state.start
            && this.state.dest
            && (this.state.small || this.state.medium || this.state.large)

        if (criteria) {
            this.props.createFlatRate(this.state);
            this.handleDiscard();
        }
    }

    allowModification = (id) => {
        const row = this.props.flatRates.find(rate => rate.id === id);
        this.setState({
            ...this.state,
            ...row,
            action: "MODIFY",
        });
        // this
    }

    handleModifyFlatRate = (id) => {
        this.props.updateFlatRate(this.state);
        this.handleDiscard();
    }

    handleDeleteFlatRate = (id) => {
        this.props.deleteFlatRate(id);
        this.handleDiscard();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        let tableRows = [];

        this.props.flatRates.forEach((row, index) => {
            tableRows.push(
                <tr key={`flat-rate-${row.id}`}>
                    <td> {index + 1} </td>
                    <td> {row.start} </td>
                    <td> {row.dest} </td>
                    <td> {formatMoney(row.small, "₦")} {formatMoney(row.partner_small, "/")} </td>
                    <td> {formatMoney(row.medium, "₦")} {formatMoney(row.partner_medium, "/")} </td>
                    <td> {formatMoney(row.large, "₦")} {formatMoney(row.partner_large, "/")} </td>
                    <td>
                        <div className="d-flex justify-content-center">
                            <button onClick={() => this.allowModification(row.id)} className="btn btn-primary mr-2">Modify</button>
                            <button onClick={() => this.handleDeleteFlatRate(row.id)} className="btn btn-danger">Discard</button>
                        </div>
                    </td>
                </tr>
            )
        });

        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Flat Rates </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Flat Rates Listing</h4>
                                <p className="card-description">
                                    Each price pair represents -&gt; normal price / partner price
                                </p>
                                <div className="table-responsive mt-3">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th> # </th>
                                                <th> From </th>
                                                <th> To </th>
                                                <th> Small </th>
                                                <th> Medium </th>
                                                <th> Large </th>
                                                <th> Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableRows}
                                        </tbody>
                                    </table>
                                    {this.props.fetchingFlatRates &&
                                        <Spinner className="d-block mt-5 mx-auto" animation="border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>
                                    }
                                    {this.props.fetchFlatRatesError ?
                                        <p className="mt-5 text-center text-muted">{this.props.fetchFlatRatesError}</p>
                                        :
                                        !this.props.fetchingFlatRates && tableRows.length === 0 && (
                                            <p className="mt-5 text-center text-muted">You currently have no flat rates setup </p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {this.state.action === "CREATE" ? "Create a new flat rate" : "Modify existing flat rate"}
                                </h4>

                                <form className="form-sample">

                                    <div className="row mb-4">
                                        <Form.Group className="col-md-3">
                                            <label className="col-form-label">From</label>
                                            <div>
                                                <select name="start" value={this.state.start} onChange={this.handleChange} className="form-control">
                                                    <option value="" disabled>Choose a location</option>
                                                    {places.map(place =>
                                                        <option key={`${place}`} value={place}>{place}</option>
                                                    )}
                                                </select>
                                            </div>
                                            <label className="col-form-label mt-2">To</label>
                                            <div>
                                                <select name="dest" value={this.state.dest} onChange={this.handleChange} className="form-control">
                                                    <option value="" disabled>Choose a location</option>
                                                    {places.map(place =>
                                                        <option key={`${place}`} value={place}>{place}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="col-md-3">
                                            <label className="col-form-label">Small (₦)</label>
                                            <div>
                                                <Form.Control name="small" value={this.state.small} onChange={this.handleChange} type="number" min="1" step="any" />
                                            </div>
                                            <label className="col-form-label mt-2">Partner Price (₦)</label>
                                            <div>
                                                <Form.Control name="partner_small" value={this.state.partner_small} onChange={this.handleChange} type="number" min="1" step="any" />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="col-md-3">
                                            <label className="col-form-label">Medium (₦)</label>
                                            <div>
                                                <Form.Control name="medium" value={this.state.medium} onChange={this.handleChange} type="number" min="1" step="any" />
                                            </div>
                                            <label className="col-form-label mt-2">Partner Price (₦)</label>
                                            <div>
                                                <Form.Control name="partner_medium" value={this.state.partner_medium} onChange={this.handleChange} type="number" min="1" step="any" />
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="col-md-3">
                                            <label className="col-form-label">Large (₦)</label>
                                            <div>
                                                <Form.Control name="large" value={this.state.large} onChange={this.handleChange} type="number" min="1" step="any" />
                                            </div>
                                            <label className="col-form-label mt-2">Partner Price (₦)</label>
                                            <div>
                                                <Form.Control name="partner_large" value={this.state.partner_large} onChange={this.handleChange} type="number" min="1" step="any" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="mt-4">
                                        {this.state.action === "CREATE" ?
                                            <button onClick={this.handleAddFlatRate} type="button" className="btn btn-primary mr-2">Add New Flat Rate</button>
                                            :
                                            <button onClick={this.handleModifyFlatRate} type="button" className="btn btn-primary mr-2">Modify Flat Rate</button>
                                        }
                                        <button onClick={this.handleDiscard} type="button" className="btn btn-danger">Discard</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    flatRates: state.profileReducer.flatRates,
    fetchFlatRatesError: state.profileReducer.fetchFlatRatesError,
    fetchingFlatRates: state.profileReducer.fetchingFlatRates,
});

function mapDispatchToProps(dispatch) {
    return {
        fetchFlatRates: () => dispatch(fetchFlatRates()),
        createFlatRate: (data) => dispatch(createFlatRate(data)),
        updateFlatRate: (data) => dispatch(updateFlatRate(data)),
        deleteFlatRate: (id) => dispatch(deleteFlatRate(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Agents);
