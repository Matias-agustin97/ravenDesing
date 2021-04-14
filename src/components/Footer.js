import { Link } from 'gatsby'
import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
    <div className="footer-text">
        <h5>Raven Design</h5>
    </div>
    <div className="footer-social">
        <div><Link to="#"><i className="far fa-paper-plane"></i></Link></div>
        <div><Link to='#'><i className="fab fa-github"></i></Link></div>
    
    </div>
        </footer>
    )
}
