import React from "react";
import '../Footer/Footer.css';
import { BsWhatsapp, BsInstagram, BsFacebook, BsTelegram, BsYoutube } from "react-icons/bs";

export default function Footer() {
    return (
        <>
  <div className="container-fluid border-top border-2 local2">
  
    <div className="row">
  
      <div className="col">
        <img className="mapa" src="./IMG/Mapa/mapa.jpg" alt="mapa"/>
      </div>
  
      <div className="col mt-5 mb-3">
        <div className="wrapper2">
          <h2>Ubicados en Caballito, Buenos Aires</h2>
          <h2 className="text-primary mb-2" id="typerwiter"></h2>
  
          <p className="fs-5 text-body">Hemos elegido Caballito para nuestra oficina ya que es un punto estratégico tanto para la cercanía de nuestros clientes como también para la rápida distribución de nuestros productos</p>
  
          <section className="d-flex" id="numeros-local">
  
            <div>
              <p className="text-primary fs-5">15'</p>
              <p>Av. General Paz</p>
            </div>
  
            <div>
              <p className="text-primary fs-5">20'</p>
              <p>Av. 25 de Mayo</p>
            </div>
  
            <div>
              <p className="text-primary fs-5">30'</p>
              <p>Microcentro</p>
            </div>
  
          </section>
        </div>
      </div>
  
  <div className="col redes">
    <h2 className="redes fs-2 mt-5 mb-4 mx-3">Nuestras Redes</h2>
    <div className="buttons">
      <a href="https://web.whatsapp.com/" className="fa fa-whatsapp"> <BsWhatsapp/> </a> 
      <a href="https://www.instagram.com/importecharg/" className="fa fa-instagram"> <BsInstagram/> </a>
      <a href="https://www.facebook.com/" className="fa fa-facebook"> <BsFacebook/> </a>
      <a href="https://web.telegram.org/k/" className="fa fa-telegram"> <BsTelegram/> </a>
      <a href="https://www.youtube.com/channel/UC7eOjY7ZZgFCdyUykTjqZdw" className="fa fa-youtube"> <BsYoutube/> </a>
    </div>
  </div>
    </div>
  </div>


    <div className="derechos text-center">
      <small> &copy; 2022 <b>Import Mining</b> - Todos los Derechos Reservados</small>
    </div>



<a href="https://web.whatsapp.com/" className="btn-wsp" target="_blank">
<BsWhatsapp/>
</a>


    </>
    );
}
