import React from 'react'
import BadgeList from './BadgeList.js'
import { Container, Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';


class FormBadge extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            birthPlace: '',
            phoneNbr: '',
            faveFood: '',
            about: '',
            bgcolor: '',
            nameBadges: []
        }
    }
    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({ [name] : value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newUserData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            birthPlace: this.state.birthPlace,
            phoneNbr: this.state.phoneNbr,
            faveFood: this.state.faveFood,
            about: this.state.about,
            bgcolor: this.state.bgcolor
        }
        this.setState({
            nameBadges : [ newUserData, ...this.state.namebadges],
            firstName: '',
            lastName: '',
            email: '',
            birthPlace: '',
            phoneNbr: '',
            faveFood: '',
            about: ''
        })
        if(this.state.bgcolor === 'red') {
            this.setState({bgcolor: 'blue'})
        }else {
            this.setState({bgcolor: 'red'})
        }
    }
    render() {
        return (
            <div>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <Container style={{borderStyle: "solid", borderColor:"black", borderWidth:"1px", borderRadius:"5px"}}>
                        <Row style={{padding:"10px"}}>
                            <Col sm={6}>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                    required={true}
                                    minLength="3"
                                    style={{width:"90%"}}
                                    />
                            </Col>
                            <Col sm={6}>
                                <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={this.handleChange}
                                value={this.state.lastName}
                                required={true}
                                minLength="3"
                                style={{width:"100px"}}
                                />
                            </Col>
                        </Row>
                        <Row style={{padding:"10px"}}>
                            <Col sm={6}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email address"
                                    onChange={this.handleChange}
                                value={this.state.email}
                                required={true}
                                style={{width:"90%"}}
                                />
                            </Col>
                            <Col sm={6}>
                                <input
                                type="text"
                                name="birthPlace"
                                placeholder="Place of Birth"
                                onChange={this.handleChange}
                                value={this.state.birthPlace}
                                required={true}
                                minLength="3"
                                style={{width:"100%"}}
                                />
                            </Col>
                        </Row>
                         <Row style={{padding:"10px"}}>
                             <Col sm={6}>
                                 <input
                                 type="text"
                                 name="phoneNbr"
                                 placeholder="Phone Number"
                                 onChange={this.handleChange}
                                value={this.state.phoneNbr}
                                required={true}
                                minLength="10"
                                style={{width:"90%"}}
                                patterm="[0-9]"
                                />
                             </Col>
                             <Col sm={6}>
                                 <input
                                    type="text"
                                    name="faveFood"
                                    placeholder="favorite food"
                                    onChange={this.handleChange}
                                value={this.state.favefood}
                                required={true}
                                minLength="3"
                                style={{width:"100%"}}
                                />
                             </Col>
                         </Row>
                         <Row style={{padding:"10px"}}>
                             <Col sm={12}>
                                 <textarea
                                 name="about"
                                 placeholder="Tell us about yourself"
                                 onChange={this.handleChange}
                                value={this.state.about}
                                required={true}
                                minLength="3"
                                style={{width:"100%"}}
                                />
                             </Col>
                         </Row>
                         <Row style={{padding:"10px", textAlign:"right"}}>
                             <Col sm={12}>
                                 <button>Submit</button>
                             </Col>
                         </Row>
                    </Container>
                </form>
                <br />
                <BadgeList namebadges={this.state.nameBadges} />
            </div>
        )
    }
}
export default FormBadge