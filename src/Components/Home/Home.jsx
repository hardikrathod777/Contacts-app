import './Home.css'
import { FiPlus } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import tuser from '../../assets/unnamed.jpg'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getcontactAsyc } from "../../service/Actions/Contactsaction";
import { LiaPenSolid } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";


function Home() {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate('/Addcontact');
  }
  const handlecrc = () => {
    navigate('/');
  }
  const handleedit = (contact) => {
    navigate('/Editcontact', { state: { contact } });
};
  const dispatch = useDispatch();
  const {contacts, isLoading}= useSelector(state => state.ContactsReducer);

  console.log("Contacts", contacts)
  

    useEffect(() => {
        dispatch(getcontactAsyc());
    }, [dispatch]);
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
                      <div>
                        <h3 className='F h3-title'>Contacts</h3>
                      </div>
                      <div>
                      {isLoading ? (
                        <p>Loading...</p>
                        ) : (
                          <Table hover>
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Phone number</th>
                                <th>Job title & Company</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                            {contacts.map((contact, index) => (
                              <tr className='table-row' key={index}>
                                <td><img src={tuser} className='t-user-img'/>{contact.fname}{contact.lname}</td>
                                <td >{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.company}</td>
                                <td><button className='liapen-s' onClick={() => handleedit(contact)}><LiaPenSolid/></button><button className='aiout-delete'><AiOutlineDelete/></button></td>
                              </tr>
                            ))}
                            </tbody>
                          </Table>
                        )}
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home