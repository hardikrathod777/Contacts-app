import logo from '../../assets/contacts_2022_48dp.png'
import { IoSearch } from "react-icons/io5";
import userimg from '../../assets/unnamed.jpg'
import './Header.css'
function Header() {
    return (
    <>
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-12 d-flex p-2 justify-content-between">
                        <div>
                            <div className='d-flex align-items-center'>
                                <img src={logo} style={{width:'44px',height:'44px'}}/>
                                <span className='logo-text F'>
                                    Contacts
                                </span>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='search-area d-flex align-items-center'>
                                <IoSearch className='lr'/>
                                <input placeholder='search'/>
                            </div>
                            <div >
                                <img src={userimg} className='log-in-user'/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}

export default Header