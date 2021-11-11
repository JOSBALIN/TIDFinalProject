import * as React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css"

export default function Sidebar() {

    return(
        <div className="sidenav">
        <li>
              <Link to='/'>Bookings</Link>
        </li>
        <li>
              <Link to='/management'>Management</Link>
        </li>
        <li>
              <Link to='/carprem'>CarPrem</Link>
        </li>
      </div>

    );

}