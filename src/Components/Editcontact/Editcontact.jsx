import { FiPlus } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import user from '../../assets/photo_silhouette_e02a5f5deb3ffc173119a01bc9575490.png'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa6";
import { RiBuilding2Line } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
// import './Addcontact.css'
// import generateUniqueId from "generate-unique-id";
import { useDispatch, useSelector } from "react-redux";
import { editcontactAsync } from '../../service/Actions/Contactsaction'
import { Spinner } from "react-bootstrap";
import { useLocation } from 'react-router-dom';


function Editcontact() {
    const location = useLocation();
    const { contact } = location.state || {};

    const navigate = useNavigate();
    const { isSubmit, isLoading } = useSelector(state => state.ContactsReducer);
    const dispatch = useDispatch();
    
    const [inputText, setInputText] = useState({
        id: contact?.id || '',
        fname: contact?.fname || '',
        lname: contact?.lname || '',
        email: contact?.email || '',
        phone: contact?.phone || '',
        company: contact?.company || '',
        job: contact?.job || ''
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInputText({ ...inputText, [name]: value });
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.stopPropagation();
    }
    setValidated(true);

    // Ensure that the id property of the obj parameter is set to the correct document ID
    const updatedObj = {
        ...inputText,
        id: contact?.id // Use the id property of the contact object
    };


    console.log("Update", updatedObj);

    dispatch(editcontactAsync(updatedObj));
};

    useEffect(() => {
        if (isSubmit) {
            navigate('/');
        }
    }, [isSubmit, navigate]);
    
    const handlenavigate = () => {
        navigate('/Addcontact');
        }
        const handlecrc = () => {
            navigate('/');
        }
    return (
    <>
        <div className="container-fluid" style={{marginTop:'16px'}}>
            <div className="row">
                <div className="col-xxl-12 d-flex">
                    <div className="menu">
                        <div>
                        <button className='cr-btn F' onClick={handlenavigate}>
                            <FiPlus className='plus-icon'/> Create Contact
                        </button>
                        </div>
                        <div className='mt-3'>
                        <button className='cr-btn-C F' onClick={handlecrc}>
                            <FaUser className='user-i'/> Contact
                        </button>
                        </div>
                    </div>
                    <div className="contact-list">
                        <div className="inner-div">
                            <div className="d-flex justify-content-between">
                                <div className="user-img">
                                    <img src={user}/>
                                </div>
                                <div>
                                </div>  
                            </div>
                            <div>
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3 mt-5">
                                    
                                        <Form.Group as={Col} md="9" controlId="validationCustom01" className="d-flex align-items-center">
                                        <Form.Control type="text" placeholder="Enter ID" name='id' value={inputText.id} hidden />
                                        <FaRegUser className="user-icon-input"/>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            name='fname' value={inputText.fname} onChange={handleInput}
                                        />
                                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-4">
                                        <Form.Group as={Col} md="9" controlId="validationCustom02" style={{paddingLeft:'62px'}}>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            name='lname' value={inputText.lname} onChange={handleInput}
                                        />
                                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="9" controlId="validationCustom02" className="d-flex align-items-center">
                                        <RiBuilding2Line className="user-icon-input"/>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Company"
                                            name='company' value={inputText.company} onChange={handleInput}
                                        />
                                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-4">
                                        <Form.Group as={Col} md="9" controlId="validationCustom02" style={{paddingLeft:'62px'}}>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Job Title"
                                            name='job' value={inputText.job} onChange={handleInput}
                                        />
                                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-4">
                                        <Form.Group as={Col} md="9" controlId="validationCustom02" className="d-flex align-items-center">
                                            <MdOutlineMail className="user-icon-input"/>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Email"
                                            name='email' value={inputText.email} onChange={handleInput}
                                        />
                                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="9" controlId="validationCustom02" className="d-flex align-items-center">
                                            <FaPhoneAlt className="user-icon-input"/>
                                        <Form.Control
                                            required
                                            type="number"
                                            placeholder="Phone"
                                            name='phone' value={inputText.phone} onChange={handleInput}
                                        />
                                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                        </Form.Group>
                                    </Row>
                                    <button className="btn-save-1" type="submit" >
                                    {
                                        isLoading ? <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner> : "Save"
                                    }
                                    </button>
                                    </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default Editcontact