import React, { useState , useEffect } from 'react';
import { json, useNavigate } from 'react-router-dom';
//import { a, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './main.css';
import Home from './Home';
import { Link } from 'react-router-dom';

//import Login from './Login';

export default function Navbar() {
  const [modal, setModal] = useState(false);
  const [signmodal, setsignmodal] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      // Perform any necessary side effect after a successful login
      console.log("User is logged in. Redirecting...");
      navigate('/home');
    }
  }, [auth, navigate]);
  const toggleModal = () => {
    setModal(!modal)

  }
  const toggleModalsign = () => {
    setsignmodal(!signmodal)

  }
  const logout = () => {
    localStorage.clear();
  }
  const HandleLogin = async () => {
    console.log({ loginEmail, loginPassword });  // Use loginEmail and loginPassword
  
    let result = await fetch("http://localhost:5000/login", {
      method: 'post',
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),  // Use loginEmail and loginPassword
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    result = await result.json();
  
    console.log(result);
  
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/home');
    } else {
      alert("Enter the right details");
    }
  };
  
  const collectDate = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate('/home')
    }

  }
 
  //const auth = localStorage.getItem('user');
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              NexWave
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-a active" to="/">

                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-a" to="#">
                    Pricing
                  </a>
                </li>
              </ul>
              <span className="d-flex">
              {auth ?
  <button
    data-baseweb="button"
    aria-label="Sign up to ride, drive, and get delivery"
    className="css-ljsRJZ"
    onClick={logout}
  >
    <Link to="/" >Log Out</Link>
  </button>
  :
  <>
    <button
      data-baseweb="button"
      aria-label="Sign up to ride, drive, and get delivery"
      className="css-ljsRJZ"
      onClick={toggleModalsign}
    >
      Sign up
    </button>
    <button
      data-baseweb="button"
      aria-label="Sign up to ride, drive, and get delivery"
      className="css-ljsRJZ"
      onClick={toggleModal}
    >
     Log In
    </button>
  </>
}
                
              </span>
            </div>
          </div>
        </nav>

      </div>

      {modal && <div >
        <div className='overlay'>
          <div className="modal-container " >
            <section class="h-100 gradient-form" style={{ color: "#eee" }}>
              <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-xl-10">
                    <div class="card rounded-3 text-black">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="card-body p-md-5 mx-md-4">

                            <div class="text-center">

                              <h4 class="mt-1 mb-5 pb-1">Welcome To NexWave</h4>
                            </div>

                            <form>
                              <p>Please login to your account</p>

                              <div class="form-outline mb-4">
                                <input type="email" id="form2Example11" class="form-control"
                                  placeholder="Phone number or email address" 
                                  value={loginEmail}
                                  onChange={(e)=>setLoginEmail(e.target.value)} />
                                <label class="form-label" for="form2Example11">Email</label>
                              </div>

                              <div class="form-outline mb-4">
                                <input type="password" id="form2Example22" class="form-control" 
                                value={loginPassword}
                                onChange={(e)=>{setLoginPassword(e.target.value)} }/>
                                <label class="form-label" for="form2Example22">Password</label>
                              </div>

                              <div class="text-center pt-1 mb-5 pb-1">
                                <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={HandleLogin}>Log
                                  in</button>

                                <a class="text-muted" href="#!">Forgot password?</a>
                              </div>

                              <div class="d-flex align-items-center justify-content-center pb-4">
                                <p class="mb-0 me-2">Don't have an account?</p>
                                <button type="button" class="btn btn-outline-danger">Create new</button>
                              </div>

                            </form>

                          </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                          <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4">We are more than just a company</h4>
                            <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>}
      {signmodal && <div >
        <div className='overlay'>
          <div className="modal-container " >
            <section class="h-100 gradient-form" style={{ color: "#eee" }}>
              <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-xl-10">
                    <div class="card rounded-3 text-black">
                      <div class="row g-0">
                        <div class="col-lg-6">
                          <div class="card-body p-md-5 mx-md-4">

                            <div class="text-center">

                              <h4 class="mt-1 mb-5 pb-1">Welcome To NexWave</h4>
                            </div>

                            <form>
                              <p>Please signin to create new account</p>

                              <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example11">Enter Full name</label>
                                <input type="email" id="form2Example11" class="form-control"
                                  placeholder="Enter name" value={name} onChange={(e) => setname(e.target.value)} />
                              </div>

                              <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example11">Enter Email</label>
                                <input type="email" id="form2Example11" class="form-control"
                                  placeholder="Phone number or email address" value={email} onChange={(e) => { setemail(e.target.value) }} />
                              </div>

                              <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example22">Set Password</label>
                                <input type="password" id="form2Example22" class="form-control" value={password} 
                                onChange={(e) => { setpassword(e.target.value) }} />
                              </div>

                              <div class="text-center pt-1 mb-5 pb-1">
                                <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={collectDate}>sign in</button>


                              </div>



                            </form>

                          </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                          <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4">We are more than just a company</h4>
                            <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>}

    </>

  );
}
