import Head from 'next/head';

const ReformarSalonCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar un salón? - Oficios24</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la reforma de un salón para mejorar tu hogar con un presupuesto limitado."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reformar-salon`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar un salón?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma básica: €50 - €100 por metro cuadrado</p>
            <p>Incluye cambios simples como pintura y pequeñas reparaciones.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma completa: €100 - €300 por metro cuadrado</p>
            <p>Incluye renovaciones más profundas como cambio de suelos y mejoras en iluminación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Alcance y complejidad de la reforma.</li>
          <li>Calidad de los materiales y acabados seleccionados.</li>
          <li>Necesidad de mano de obra especializada.</li>
          <li>Ubicación geográfica y disponibilidad de materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para reformar un salón</h2>
        <p>1. <strong>Planificación detallada</strong>: Define claramente tus necesidades y objetivos antes de comenzar.</p>
        <p>2. <strong>Presupuesto realista</strong>: Establece un presupuesto y mantén un seguimiento constante de los gastos.</p>
        <p>3. <strong>Selección cuidadosa de materiales</strong>: Escoge materiales duraderos que se ajusten a tu estilo y presupuesto.</p>
        <p>4. <strong>Profesionales cualificados</strong>: Contrata a profesionales con experiencia para asegurar un trabajo de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la selección inteligente de materiales y servicios, puedes reformar tu salón con éxito dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ReformarSalonCosto;
