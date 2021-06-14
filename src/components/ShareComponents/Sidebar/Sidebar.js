import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookDead, faCameraRetro, faComment, faEdit, faShoppingCart, faSignOutAlt, faUser, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
import { faFirstOrder, faServicestack } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div class='sidebarColor'>
            <div className="side-bar d-flex flex-column justify-content-between col-md-2 py-2 px-4">
        <img className='logo' src="https://ld-prestashop.template-help.com/prestashop_eze_256/img/remodia-logo-1596624527.jpg" alt="" />
     <div className="side-bar-list  ">
         <ul>
         <li>  <span className='mr-3'><FontAwesomeIcon icon= {faShoppingCart} /> </span> <Link to='/dashboard'>Dashboard</Link></li>
                 <li>   <span className='mr-3'> <FontAwesomeIcon icon={faEdit}/>    </span>   <Link to='/manageService'>Home</Link></li>
               <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUser}/>    </span>     <Link to='/admin'>Booking List</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUser}/>    </span>     <Link to='/addBlog'>All Review</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUserPlus}/>    </span>     <Link to='/makeAdmin'>All Booking</Link></li>
                 <li>  <span className='mr-3'> <FontAwesomeIcon icon={faComment} /></span>  <Link  to='/reviews'>Add Service</Link></li>
                 <li>  <span className='mr-3'> <FontAwesomeIcon icon={faBookDead} /></span>  <Link to='/userOrder'>Make Admin</Link></li>
                 <li >  <span className='mr-3'><FontAwesomeIcon icon= {faSignOutAlt} /> </span> <Link to='/home'>Make Service</Link></li>
                 <li >  <span className='mr-3'><FontAwesomeIcon icon= {faSignOutAlt} /> </span> <Link to='/home'>Setting</Link></li>
                 <li >  <span className='mr-3'><FontAwesomeIcon icon= {faSignOutAlt} /> </span> <Link to='/home'>Logout</Link></li>
         </ul>
     </div>
    </div>
            </div>

    )
}

export default Sidebar;
