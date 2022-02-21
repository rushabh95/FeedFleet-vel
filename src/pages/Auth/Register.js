import React, { Component, useEffect } from 'react';
import { Alert, Button, Card, Row, Col } from 'reactstrap';
import { Link,useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, emptyError } from '../../store/actions';
import logowhite from '../../images/logo-white.png';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useState } from 'react';




const Pagesregister = () => {

        const history = useHistory()
        
        const [user,setuser] = useState( {
            fullname:"",
            email:"",
            companyname:"",
            password: "" ,
            confirmpassword:""       
        })
        let name , value
        const handleinputs = (e)=>{
            name = e.target.name
            value=e.target.value
            setuser({...user,[name]:value})
        }
        
        const postdata= async(e)=>{
            e.preventDefault()
            const {fullname,email,companyname,password,confirmpassword} =user
            const res = await fetch("http://localhost:5000/api/v1/signup",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    fullname,
                    email,
                    companyname,
                    password,
                    confirmpassword
                })
            })
            const data = await res.json()
            if(data.status=== 422||!data){
                console.log('invelid registration')
            }else{
                console.log('registration successfull')
                const his=history.push('/login')
                console.log(his)
            }
        }
    
    

    

   

   
        return (
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                    <Link to="/" className="text-dark"><i className="fas fa-home h2"></i></Link>
                </div>

                <div className="wrapper-page">

                    <Card className="overflow-hidden account-card mx-3">

                        <div className="bg-primary p-4 text-white text-center position-relative">
                            <h4 className="font-20 m-b-5">Free Register</h4>
                            <p className="text-white-50 mb-4">Get your free FeedFleet account now.</p>
                            <Link to="/" className="logo"><img src={logowhite} height="24" alt="logo" /></Link>
                        </div>
                        <div className="account-card-content">

                            {user && <Alert color="success">
                                Registration Done Successfully.</Alert>}

                            

                            <AvForm  className="form-horizontal m-t-30" onValidSubmit={handleinputs} >
                                <AvField name="fullname" label="Fullname" value={user.fullname} onChange={handleinputs} placeholder="Enter Fullname" type="text" required />
                                <AvField name="email" label="Email" value={user.email} onChange={handleinputs} placeholder="Enter Email" type="email" required />
                                <AvField name="companyname" label="Company name" value={user.companyname} onChange={handleinputs} placeholder="Enter company name" type="text" required />
                                <AvField name="password" label="Password" value={user.password} onChange={handleinputs} placeholder="Enter Password" type="password" required />
                                <AvField name="confirmpassword" label="Confirm Password" value={user.confirmpassword} onChange={handleinputs} placeholder="Enter Password" type="password" required />
                               
                                <Row className="form-group m-t-20">
                                    <Col md="12" className="text-right">
                                         
                                            <Button color="primary" className="w-md waves-effect waves-light" type="submit" onClick={postdata}>Register</Button>
                                    </Col>
                                </Row>

                                <Row className="form-group m-t-10 mb-0">
                                    <Col md="12" className="m-t-20">
                                        <p className="mb-0">By registering you agree to the FeedFleet <Link to="#" className="text-primary">Terms of Use</Link></p>
                                    </Col>
                                </Row>

                            </AvForm>

                        </div>
                    </Card>

                    <div className="m-t-40 text-center">
                        <p>Already have an account ? <Link to="/login" className="font-500 text-primary"> Login </Link> </p>
                        <p>© {new Date().getFullYear()} FeedFleet.</p>
                    </div>

                </div>
            </React.Fragment>
        )
    
}



export default Pagesregister;

