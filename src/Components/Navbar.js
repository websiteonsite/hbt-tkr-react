import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar mb-4">
    <nav className="navbar navbar-light justify-content-between" style={{backgroundColor: "#bacee3"}}>
    <Link to="/" className='navbar-brand m-2 ms-5' > <h2>Habit-Tracker</h2></Link>

    <form action="" className="form-inline">
    <Link to="/add-habit" className="btn btn-outline-warning me-5 my-sm-0 m-2 " style={{backgroundColor: "#3187b5"}} type="submit" >Add Habits</Link>
    </form>
    </nav>
    </div>
  )
}

export default Navbar