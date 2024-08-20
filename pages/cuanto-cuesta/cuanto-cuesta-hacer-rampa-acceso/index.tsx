import Head from 'next/head';

const HacerRampaAccesoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer una rampa de acceso en un local comercial? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una rampa de acceso en un local comercial y cómo planificar tu presupuesto para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-rampa-acceso`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer una rampa de acceso en un local comercial?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rampa Básica: 5,000€ - 15,000€</p>
            <p>Incluye construcción básica de rampa con materiales estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rampa Avanzada: 15,000€ - 50,000€</p>
            <p>Incluye diseño y construcción personalizados, accesibilidad mejorada y materiales de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Longitud de la Rampa: Área total a cubrir y pendiente requerida para accesibilidad.</li>
          <li>Materiales Utilizados: Desde hormigón estándar hasta materiales especiales para accesibilidad.</li>
          <li>Diseño y Personalización: Adaptación a normativas locales y requisitos específicos del local.</li>
          <li>Accesibilidad y Seguridad: Cumplimiento de normativas de accesibilidad y seguridad para usuarios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Hacer una Rampa de Acceso</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rampa Básica</strong>: 5,000€ - 15,000€, incluyendo construcción básica de rampa con materiales estándar.
          </li>
          <li>
            <strong>Rampa Avanzada</strong>: 15,000€ - 50,000€, incluyendo diseño y construcción personalizados, accesibilidad mejorada y materiales de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades de Accesibilidad</strong>: Determina las necesidades específicas de accesibilidad para el local comercial.</p>
        <p>2. <strong>Consultar a Profesionales</strong>: Obtén varias cotizaciones de contratistas especializados en construcción de rampas de acceso.</p>
        <p>3. <strong>Considerar la Seguridad y Normativas</strong>: Asegúrate de cumplir con las normativas locales de accesibilidad y seguridad.</p>
        <p>4. <strong>Calidad y Durabilidad</strong>: Elige materiales duraderos y adecuados para garantizar la funcionalidad a largo plazo.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la construcción de una rampa de acceso en un local comercial, puedes mejorar la accesibilidad y cumplir con las normativas locales, mejorando así la experiencia para tus clientes y empleados.
        </p>
      </section>
    </div>
  );
};

export default HacerRampaAccesoCoste;