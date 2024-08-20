import Head from 'next/head';

const CocinaExteriorCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer una cocina exterior? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la construcción de una cocina exterior y cómo presupuestar para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-cocina-exterior`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer una cocina exterior?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cocina básica: €2,000 - €5,000</p>
            <p>Incluye elementos esenciales como parrilla, encimera y almacenamiento básico.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cocina completa: €5,000 - €10,000+</p>
            <p>Incluye equipamiento adicional como fregadero, refrigerador y área de comedor.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la cocina exterior.</li>
          <li>Materiales seleccionados para encimeras y estructuras.</li>
          <li>Equipamiento y accesorios adicionales como iluminación y sistemas de almacenamiento.</li>
          <li>Necesidad de instalaciones eléctricas, fontanería y gas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Planificación inicial</strong>: Define el diseño y las características deseadas.</p>
        <p>2. <strong>Consulta con profesionales</strong>: Obtén cotizaciones detalladas de contratistas experimentados.</p>
        <p>3. <strong>Selección de materiales y equipamiento</strong>: Elige opciones que se ajusten a tu presupuesto y estilo.</p>
        <p>4. <strong>Instalación y acabados</strong>: Coordina la construcción y asegúrate de incluir todos los acabados necesarios.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la selección adecuada de materiales y equipos, puedes crear una cocina exterior funcional y atractiva dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CocinaExteriorCosto;
