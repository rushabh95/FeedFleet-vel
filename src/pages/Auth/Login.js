import React, { Component, useState } from 'react';
import { Alert, Button, Col, Row, Card } from 'reactstrap';
import { Link, Redirect, useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkLogin } from '../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import logowhite from '../../images/logo-white.png';
import { useDispatch } from 'react-redux';


const Pageslogin = (props) => {
const dispatch = useDispatch()
const history = useHistory()

const [email,setemail] = useState('')
const [password,setpassword] = useState('')


const loginuser = async(e) =>{
   
    const token = localStorage.getItem('jwtoken')
    console.log('jwtoken', token);
    const res = await fetch('http://127.0.0.1:5000/api/v1/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        redirect: "follow",
        body:JSON.stringify({
            
            email,
            password
        })
      
    }
    ).then((res)=>{
        const data = res.json()
       localStorage.setItem('jwtoken',data.token)
      
        dispatch(checkLogin(email,password,history))

         if(data){
         
            history.push('/dashboard')
        }
        //     history.push('/dashboard')
        //     window.location.href='/dashboard'
       
    })
  
    // const data = await res.json()

// console.log('data', data);
//     if(res.status==200){
//         console.log('ddd',res)
//         history.push('/dashboard')
//     }else{
       
//        alert('wrong ')
//     }
console.log(res,'loginform')
}
    


   

    

        return (
            <React.Fragment>
                <div className="img-container text-center p-5 " >
                   
                </div>
                 
                <div className="home-btn d-none d-sm-block ">
                    <Link to="/" className="text-dark"><i className="fas fa-home h2 mt-3"></i></Link>
                </div>
               
                <div className="wrapper-page ">
               
                    <Card className="overflow-hidden account-card ">

                        <div className="bg-primary p-4 text-white text-center position-relative">
                            <h4 className="font-30 m-b-5">Login</h4>
                            <p className="text-white-50 m-b-4">Sign in to continue to FeedFleet.</p>
                            <Link to="/"><img src={logowhite} height="24" alt="logo" /></Link>
                            
                        </div>
                        <div className="account-card-content">

                        {/*this.state.user && <Alert color="success">
                                    Your Login is successfull.</Alert>*/}

                            {/*this.state.loginError && <Alert color="danger">
                                {this.state.loginError}</Alert>*/}

                            

                            <AvForm className="form-horizontal m-t-30" onSubmit={loginuser}>
                                <AvField name="email" label="Email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email" type="text" required />
                                <AvField name="password" label="Password" onChange={(e)=>setpassword(e.target.value)} value={password} placeholder="Enter Password" type="password" required />
                                <div className="form-check-inline">
                                <label className='form-check-label'>
                                    <input className='form-check-input' type="checkbox" />
                                    Remember Me
                                </label>
                                </div>
                                <Row className="form-group m-t-20">
                                    <Col sm="6">

                                    </Col>
                                    <Col sm="6" className="text-right">
                                        
                                        <Button color="primary" className="w-md waves-effect waves-light" type="submit" >Log In</Button>
                                        
                                    </Col>
                                </Row>

                                <Row className="form-group m-t-10 mb-0">
                                    <Col md="12" className="m-t-20">
                                        <Link to="/forget-password"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                                    </Col>
                                </Row>
                            </AvForm>
                            
                        </div>
                        
                    </Card>
                    

                    <div className="m-t-40 text-center">
                        <p>Don't have an account ? <Link to="/register" className="font-500 text-primary"> Signup now </Link> </p>
                        <p>© {new Date().getFullYear()} FeedFleet.</p>
                    </div>

                </div>
              
                
            </React.Fragment>
        );
    }


    const mapStatetoProps = state => {
        const { user, loginError, loading } = state.Login;
        return { user, loginError, loading };
    }

    export default withRouter(connect(mapStatetoProps, { checkLogin })(Pageslogin));