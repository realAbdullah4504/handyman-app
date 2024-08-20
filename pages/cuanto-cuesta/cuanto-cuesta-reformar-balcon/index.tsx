import Head from 'next/head';

const CuantoCuestaReformarBalcon = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar un balcón? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la reforma de un balcón y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reformar-balcon`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar un balcón?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma básica: €X - €X por metro cuadrado</p>
            <p>Incluye mano de obra y materiales estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma con acabados de alta calidad: €X - €X por metro cuadrado</p>
            <p>Incluye materiales premium y personalización de diseño.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del balcón.</li>
          <li>Tipo de acabados y materiales seleccionados.</li>
          <li>Complejidad de la estructura del balcón.</li>
          <li>Necesidad de trabajos adicionales como impermeabilización, pintura, etc.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para reformar un balcón</h2>
        <p>1. <strong>Inspección inicial</strong>: Evalúa el estado actual del balcón para identificar posibles problemas estructurales.</p>
        <p>2. <strong>Optimización del espacio</strong>: Utiliza soluciones de diseño para maximizar el espacio útil del balcón.</p>
        <p>3. <strong>Selección de materiales</strong>: Elige materiales que sean duraderos y adecuados para exteriores.</p>
        <p>4. <strong>Considera el clima local</strong>: Asegúrate de que los materiales seleccionados puedan resistir las condiciones climáticas locales.</p>
      </section>

      <section>
        <p className="text-lg">
          Reformar un balcón puede transformar completamente tu espacio exterior. Los costos pueden variar significativamente dependiendo de varios factores, por lo que es importante realizar una planificación detallada y consultar con expertos.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaReformarBalcon;
