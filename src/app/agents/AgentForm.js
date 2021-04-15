import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import { createAgent } from '../redux/actions/agent';

import identificationMethods from '../data/identification-methods'
import banks from '../data/banks'
import { generatePassword } from '../helpers/functions';

// function formatDate(input) {
//     if (!input) {
//         return;
//     }
//     let date = new Date(input);
//     let output = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
//     return output;
// }

export function AgentForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        birth_date: "",
        address_1: "",
        phone_number: "",
        city: "",
        state: "",
        post_code: "",
        country: "",
        bank_name: "",
        account_name: "",
        account_number: "",
        id_method: identificationMethods[2].value,
        id_image_url: "",
        issue_date: "",
        expire_date: "",
        role: "DELIVERY AGENT",
        // photo_url: "",
    });

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        console.log(formData)
        const criteria = Object.values(formData).filter(x => !x).length === 0;
        if (criteria) {
            props.registerAgent({
                ...formData,
                password: generatePassword()
            });
            console.log(formData);
        } else {
            console.log("nah")
        }
    }

    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Add New Agent </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Agent Management</a></li>
                        {/* <li className="breadcrumb-item active" aria-current="page">Form elements</li> */}
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Personal Information</h4>
                            <p className="card-description">Bio</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Full Name</label>
                                        <div className="col-sm-9">
                                            <Form.Control name="name" value={formData.name} onChange={handleInput} type="text" />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Phone Number</label>
                                        <div className="col-sm-9">
                                            <Form.Control name="phone_number" value={formData.phone_number} onChange={handleInput} type="tel" placeholder="+234" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Email</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="email" value={formData.email} name="email" onChange={handleInput} />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Date of Birth</label>
                                        <div className="col-sm-9">
                                            <Form.Control
                                                name="birth_date" value={formData.birth_date} onChange={handleInput} type="date" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>

                            <p className="card-description"> Address </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Address 1</label>
                                        <div className="col-sm-9">
                                            <Form.Control name="address_1" value={formData.address_1} onChange={handleInput} type="text" />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">State</label>
                                        <div className="col-sm-9">
                                            <Form.Control name="state" value={formData.state} onChange={handleInput} type="text" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Address 2</label>
                                        <div className="col-sm-9">
                                            <Form.Control name="address_2" value={formData.address_2} onChange={handleInput} type="text" />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Postcode</label>
                                        <div className="col-sm-9">
                                            <Form.Control name="post_code" value={formData.post_code} onChange={handleInput} type="text" />
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">City</label>
                                        <div className="col-sm-9">
                                            <Form.Control name="city" value={formData.city} onChange={handleInput} type="text" />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="row">
                                        <label className="col-sm-3 col-form-label">Country</label>
                                        <div className="col-sm-9">
                                            <select name="country" value={formData.country} onChange={handleInput} className="form-control">
                                                <option value="">Select</option>
                                                <option>Nigeria</option>
                                            </select>
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <br />
                            <h4 className="card-title">Means of Identification</h4>
                            <p className="card-description"> Show us some ID </p>
                            <div>
                                <Form.Group>
                                    <label htmlFor="selectIDMethod">Means of Identification</label>
                                    <select key={`id-method-${formData.id_method}`} name="id_method" value={formData.id_method} onChange={handleInput} className="form-control" id="selectIDMethod">
                                        <option value={identificationMethods[2].value}>{identificationMethods[2].label}</option>
                                        {/* {identificationMethods.map((option) => (
                                            <option key={`id-method-${option.value}`} value={option.value}>{option.label}</option>
                                        ))} */}
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label>Identification Number</label>
                                    <Form.Control name="id_image_url" value={formData.id_image_url} onChange={handleInput} type="text" className="form-control" />
                                </Form.Group>
                                {/* <Form.Group>
                                    <label>Upload an image of your ID</label>
                                    <div className="custom-file">
                                        <Form.Control name="id_image_url" value={formData.managerDetails.id_image_url} onChange={handleInput} type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" />
                                        <label className="custom-file-label" htmlFor="customFileLang">Upload ID</label>
                                    </div>
                                </Form.Group> */}
                                <Form.Group>
                                    <label>Issue Date</label>
                                    <Form.Control name="issue_date" value={formData.issue_date} onChange={handleInput} type="date" className="form-control" />
                                </Form.Group>
                                <Form.Group>
                                    <label>Expire Date</label>
                                    <Form.Control name="expire_date" value={formData.expire_date} onChange={handleInput} type="date" className="form-control" />
                                </Form.Group>
                            </div>

                            <br />
                            <h4 className="card-title">Bank Details</h4>
                            <p className="card-description">Please ensure the information you provide is accurate.</p>
                            <form className="forms-sample">
                                <Form.Group>
                                    <label htmlFor="selectBank">Bank Name</label>
                                    <select key={`bank-name-${formData.bank_name}`} name="bank_name" value={formData.bank_name} onChange={handleInput} className="form-control" id="selectBank">
                                        {/* <option value="">None</option> */}
                                        {banks.map((option) => (
                                            <option key={`bank-name-${option.value}`} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label className="col-form-label">Account Name</label>
                                    <Form.Control name="account_name" value={formData.account_name} onChange={handleInput} type="text" />
                                </Form.Group>
                                <Form.Group>
                                    <label className="col-form-label">Account Number</label>
                                    <Form.Control name="account_number" value={formData.account_number} onChange={handleInput} type="text" />
                                </Form.Group>
                                <br />
                                <div>
                                    <button type="button"
                                        onClick={handleSubmit}
                                        className="btn btn-primary btn-lg btn-block">
                                        Submit Registration
                                    </button>
                                    {/* <button onClick={() => null} type="button" className="btn btn-primary mr-2">Submit</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

// const mapStateToProps = (state) => ({
// user: state.authReducer.user,
// companyDetails: state.profileReducer.companyDetails,
// managerDetails: state.profileReducer.managerDetails,
// fetchingProfile: state.profileReducer.fetchingProfile,
// });

function mapDispatchToProps(dispatch) {
    return {
        registerAgent: (data) => dispatch(createAgent(data)),
    }
}

export default connect(null, mapDispatchToProps)(AgentForm);