import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { registerUser } from '../redux/actions/auth';

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignup = () => {
    if (this.state.name && this.state.email && this.state.password) {
      this.props.registerUser(this.state);
    } else {
      alert("Invalid credentials.")
    }
  }

  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0 h-100">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                    <h4>New here?</h4>
                    <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                    <form className="pt-3">
                      <div className="form-group">
                        <input onChange={this.handleInput} name="name" value={this.state.name} type="text" className="form-control form-control-lg" id="usernameInput" placeholder="Company Name" />
                      </div>
                      <div className="form-group">
                        <input onChange={this.handleInput} name="email" value={this.state.email} type="email" className="form-control form-control-lg" id="emailInput" placeholder="Company Email" />
                      </div>
                      <div className="form-group">
                        <input onChange={this.handleInput} name="password" value={this.state.password} type="password" className="form-control form-control-lg" id="passwordInput" placeholder="Password" />
                      </div>
                      <div className="mb-4">
                        <div className="form-check">
                          <label className="form-check-label text-muted">
                            <input type="checkbox" className="form-check-input" />
                            <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={this.handleSignup} to="#">SIGN UP</Link>
                      </div>
                      <div className="text-center mt-4 font-weight-light">
                        Already have an account? <Link to="/login" className="text-primary">Login</Link>
                      </div>
                    </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (data) => dispatch(registerUser(data))
  }
}

export default connect(null, mapDispatchToProps)(Register);
