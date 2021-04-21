import React from 'react'
import Layout from '../components/Layout'
import '../styles/contact.css'
export default function contact() {
    return (
   <Layout>
            <div className="contact-container contact-body">
    <h2>Ingrese sus datos y lo contactare a la brevedad :)</h2>
    <form   className="contact-form">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name='nombre' placeholder="Ingrese su nombre"/>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' placeholder="Ingrese su Email"/>
        <label htmlFor="telefono">Telefono</label>
        <input type="tel" name="telefono" id="telefono" placeholder="Ingrese su Telefono"/>
        <label htmlFor="mensaje">Su mensaje</label>
        <textarea name="mensaje" id="mensaje"  placeholder="Su mensaje porfavor :)">
        </textarea>
        <button type="submit">Enviar</button>
    </form>
</div>
   </Layout>
    )
}
