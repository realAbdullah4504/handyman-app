import Head from 'next/head';

const DerriboCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un derribo? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con el derribo de estructuras y cómo presupuestar para tu proyecto de demolición."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-derribo`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un derribo?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Derribo Básico: €10 - €20 por metro cuadrado</p>
            <p>Incluye derribo de estructuras simples y pequeñas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Derribo Complejo: €20 - €50+ por metro cuadrado</p>
            <p>Incluye derribo de estructuras grandes, complejas o con materiales especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y tipo de estructura: Estructuras más grandes o complejas aumentan el costo.</li>
          <li>Materiales de construcción: Costos adicionales para derribos que involucren materiales especiales como amianto.</li>
          <li>Accesibilidad y ubicación: Costos pueden variar según la accesibilidad al sitio y la ubicación geográfica.</li>
          <li>Regulaciones locales: Cumplimiento de normativas y permisos necesarios para el derribo.</li>
          <li>Eliminación de residuos: Costos adicionales asociados con la eliminación y gestión de residuos de demolición.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para derribo de estructuras</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Derribo Básico</strong>: €10 - €20 por metro cuadrado, incluyendo derribo de estructuras simples y pequeñas.
          </li>
          <li>
            <strong>Derribo Complejo</strong>: €20 - €50+ por metro cuadrado, incluyendo derribo de estructuras grandes, complejas o con materiales especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el tamaño y tipo de derribo necesario.</p>
        <p>2. <strong>Obtener cotizaciones</strong>: Solicitar presupuestos detallados de empresas de demolición.</p>
        <p>3. <strong>Gestión de residuos</strong>: Planificar la eliminación adecuada de residuos según normativas locales.</p>
        <p>4. <strong>Permisos y regulaciones</strong>: Asegurar el cumplimiento de todas las regulaciones locales y obtener los permisos necesarios.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar un derribo, considera estos factores para garantizar que el proyecto se realice dentro del presupuesto y conforme a las normativas vigentes.
        </p>
      </section>
    </div>
  );
};

export default DerriboCoste;