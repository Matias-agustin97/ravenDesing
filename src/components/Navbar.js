import { Link } from 'gatsby'
import React,{useState} from 'react'

export default function Navbar() {

        const [navlinks,setNavlinks]=useState(false)



    return (
        <header>
   
    <ul className={`${navlinks ? 'navlinks navlink-active':'navlinks'}`} >
        <li><Link to='/'className={`${navlinks ? 'anchor-active':'s'}`}>Home</Link></li>
        <li><Link to="/blog"className={`${navlinks ? 'anchor-active':'s'}`}>Blog</Link></li>
        <li><Link to="/Portfolio"className={`${navlinks ? 'anchor-active':'s'}`}>Porfolio</Link></li>
        <li><Link to="/contact"className={`${navlinks ? 'anchor-active':'s'}`}>Contact</Link></li>
    </ul>
    <Link to="/" className="logo">
        <h1>
            RAVEN DESIGN
        </h1>
    </Link>
    <div className="burger-menu" onClick={()=> setNavlinks(!navlinks)}>
        <div className={`${navlinks ? 'bar bar1 bar1-active':'bar bar1'}`}></div>
        <div className={`${navlinks ? 'bar bar2 bar2-active':'bar bar2'}`}></div>
        <div className={`${navlinks ? 'bar bar3 bar3-active':'bar bar3'}`}></div>
    </div>  
</header>
    )
}
