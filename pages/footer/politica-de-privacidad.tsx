import { NextPage } from "next";

const PoliticaDePrivacidad: NextPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Política de Privacidad</h1>
      <p>Última actualización: [Fecha]</p>
      <p>En Oficios24.es respetamos su privacidad y garantizamos la protección de sus datos personales.</p>
      <p>Recopilamos información personal como nombre, número de teléfono y datos de pago cuando los usuarios se registran o contratan un servicio.</p>
      <p>Usamos estos datos para gestionar su cuenta, facilitar la contratación de servicios y mejorar la experiencia del usuario.</p>
      <p>Sus datos no se venden a terceros, pero pueden ser compartidos con proveedores de confianza para mejorar la experiencia en la plataforma.</p>
      <p>Puede acceder, corregir o eliminar sus datos personales en cualquier momento contactando a info@oficios24.es.</p>
    </div>
  );
};

export default PoliticaDePrivacidad;
