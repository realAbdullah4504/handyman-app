import { NextPage } from "next";
import { Footer, Header } from "@/components";

const CondicionesDeUso: NextPage = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto pt-16 px-6">
      <h1 className="text-2xl font-bold">Condiciones de Uso</h1>
      {/* <p>Última actualización: [Fecha]</p> */}
      <p>El uso de Oficios24.es implica la aceptación de los siguientes términos y condiciones.</p>
      <p>1. Oficios24.es es una plataforma que conecta a usuarios con profesionales del sector de la construcción y servicios.</p>
      <p>2. Los usuarios deben registrarse proporcionando información veraz y mantener la confidencialidad de sus credenciales de acceso.</p>
      <p>3. Está prohibido utilizar la plataforma para actividades ilegales o fraudulentas.</p>
      <p>4. Nos reservamos el derecho de modificar estos términos en cualquier momento con previo aviso en la plataforma.</p>
      <p>5. Oficios24.es no se hace responsable de daños derivados de la contratación de servicios a través de la plataforma.</p>
      <p>Para cualquier consulta, puede contactarnos en info@oficios24.es o al teléfono +49 174 899-9213.</p>
    </div>
    <Footer/>
    </>
  );
};

export default CondicionesDeUso;
