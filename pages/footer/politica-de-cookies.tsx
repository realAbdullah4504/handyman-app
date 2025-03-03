import { NextPage } from "next";
import { Footer, Header } from "@/components";
const PoliticaDeCookies: NextPage = () => {
    return (
      <>
    <Header/>
      <div className="container mx-auto pt-16 px-6">
        <h1 className="text-2xl font-bold">Política de Cookies</h1>
        <p>Última actualización: [Fecha]</p>
        <p>Oficios24.es utiliza cookies para mejorar su experiencia de navegación y personalizar el contenido del sitio web.</p>
        <p>Las cookies son pequeños archivos de texto almacenados en su navegador que permiten recordar sus preferencias y mejorar la navegación.</p>
        <p>Tipos de cookies que utilizamos:</p>
        <ul>
          <li>Cookies técnicas: necesarias para el funcionamiento básico del sitio.</li>
          <li>Cookies analíticas: nos permiten analizar el comportamiento de los usuarios para mejorar nuestros servicios.</li>
          <li>Cookies de terceros: utilizamos cookies de terceros como Google Analytics para recopilar información sobre el uso del sitio.</li>
        </ul>
        <p>Puede configurar su navegador para rechazar o eliminar las cookies almacenadas. Sin embargo, esto puede afectar la funcionalidad del sitio web.</p>
        <p>Al navegar en nuestro sitio web, acepta el uso de cookies según nuestra política.</p>
        <p>Para más información, puede contactarnos en info@oficios24.es.</p>
      </div>
      <Footer/>
    </>
    );
  };
  
  export default PoliticaDeCookies;