import React from "react"
import Layout from "../components/Layout"
import '../styles/global.css'
import {AiFillHeart} from '@react-icons/all-files/ai/AiFillHeart';
import {AiOutlineStock} from '@react-icons/all-files/ai/AiOutlineStock'
import {FcMultipleDevices} from '@react-icons/all-files/fc/FcMultipleDevices'
import {IoMdText} from '@react-icons/all-files/io/IoMdText'
import {SiGooglemybusiness} from '@react-icons/all-files/si/SiGooglemybusiness'

export default function Home() {
  return (
    <Layout>
      <div className="page-container">
        <div className="hero-section">
     <div className="hero-section-text">
     <h2>Diseño web personalizado</h2>
      <h2>Hacemos blogs,e-commerce y sitios estaticos para su emprendimiento</h2>
      <h3><i>"cuando hagas algo para otra persona, hace de cuenta que lo haces vos"</i></h3>
     </div>
        </div>
        <div className="home-about">
         <div className="home-about-column">
           <div>
           <AiFillHeart/>
           <p>Atencion personalizada, tu proyecto es el nuestro</p>
           </div>
           <div>
           <AiOutlineStock/>
           <p>Paginas escalables</p>
           </div>        
         </div>
         <div className="home-about-column">
          <div>
          <FcMultipleDevices/>
         <p>Mobile first approuch</p>
          </div>
         <IoMdText/>
          <p>Recibi mails/mensajes de texto cada vez que realizes una venta</p>
          <SiGooglemybusiness/>
          <p>Publica tu propio blog, promove tu negocio</p>
         </div>
        </div>
      </div>
    </Layout>
  )
}
