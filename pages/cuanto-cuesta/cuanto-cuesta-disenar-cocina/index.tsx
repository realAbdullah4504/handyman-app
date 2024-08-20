import Head from 'next/head';

const DisenarCocinaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta diseñar una cocina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con el diseño de cocinas y cómo presupuestar para esta fase de renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-disenar-cocina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta diseñar una cocina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño básico: €500 - €1,000+</p>
            <p>Incluye planos básicos y selección de disposición general y materiales.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño completo: €1,000 - €3,000+</p>
            <p>Incluye diseño detallado, planos específicos, asistencia en la selección de materiales y supervisión inicial.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad de la cocina.</li>
          <li>Nivel de personalización y diseño.</li>
          <li>Uso de materiales premium o estándar.</li>
          <li>Costos del diseñador o arquitecto involucrado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Consulta inicial</strong>: Discute tus necesidades y expectativas con un diseñador de interiores o arquitecto.</p>
        <p>2. <strong>Diseño conceptual</strong>: Revisa los bocetos y conceptos preliminares para ajustar el diseño según tu feedback.</p>
        <p>3. <strong>Selección de materiales</strong>: Elige materiales que complementen tu estilo y se ajusten al presupuesto establecido.</p>
        <p>4. <strong>Presupuesto detallado</strong>: Obtén un presupuesto detallado que incluya todos los costos asociados con el diseño de la cocina.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la ayuda de profesionales, puedes diseñar una cocina funcional y estéticamente agradable dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default DisenarCocinaCosto;
