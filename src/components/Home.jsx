import React from 'react';
import {AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineMail} from 'react-icons/ai'

const Home = () => {
  return (
<div className="container main">

    <div className="main-item">
      <h1>Sur Construcciones</h1><br/>
      <h2>Soluciones integrales para la construcci&oacute;n</h2>
    </div>
    <div className="main-item">
      <div className='main-cards'>
        <div className="main-card">
          <img src="./resources/request.png" alt=""/>
          <div className="card-body">
            <h3>Quienes Somos</h3>
            <p>Somos una empresa Familiar con amplia experiencia, orientada a la construcci&oacute;n</p>
            <p>realizamos obras basadas en construcci&oacute;n tanto tradicional como en seco</p>
          </div>
        </div>
        <div className="main-card">
          <img src="./resources/worker.png" alt="" srcset="" />
            <div className="card-body">
            <h3>Que Hacemos</h3>
            <p>Ejecutamos obras desde cero hasta las terminacions "llave en mano"</p>
            <p>a cargo de profesionales ampliamente calificados, desde el replanteo de obra, hasta los revestimientos para las terminaciones</p>
          </div>
        </div>
        <div className="main-card">
          <img src="./resources/communicate.png" alt="" srcset="" />
            <div className="card-body">
              <h3>Como encontrarnos</h3>
              <p>Pueden encontrarnos en nuestras redes sociales</p>
              <div className='contact-icons'>
                <AiOutlineWhatsApp/><AiOutlineFacebook/><AiOutlineMail/>
              </div>
            </div>
        </div>
      </div>
    </div>

</div>
  )
}

export default Home