import Head from 'next/head';

const ConstruirEdificioCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un edificio? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de edificios y cómo planificar financieramente este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-edificio`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un edificio?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Edificio Residencial: €1,000 - €2,000 por metro cuadrado</p>
            <p>Incluye materiales y mano de obra estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Edificio Comercial: €1,500 - €3,000 por metro cuadrado</p>
            <p>Incluye costos adicionales por características comerciales y requisitos específicos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño: Número de pisos, diseño arquitectónico y requisitos estructurales.</li>
          <li>Materiales de construcción: Calidad de materiales y tecnologías de construcción utilizadas.</li>
          <li>Ubicación: Costos de mano de obra y materiales pueden variar según la ubicación geográfica.</li>
          <li>Normativas locales: Costos asociados con permisos y regulaciones locales de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir edificios</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Edificio Residencial</strong>: €1,000 - €2,000 por metro cuadrado, incluyendo materiales y mano de obra estándar.
          </li>
          <li>
            <strong>Edificio Comercial</strong>: €1,500 - €3,000 por metro cuadrado, incluyendo costos adicionales por características comerciales y requisitos específicos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación financiera</h2>
        <p>1. <strong>Evaluación del proyecto</strong>: Determina los requisitos específicos del edificio y define un presupuesto inicial.</p>
        <p>2. <strong>Solicita cotizaciones</strong>: Obtén estimaciones detalladas de contratistas de construcción calificados para comparar costos y servicios.</p>
        <p>3. <strong>Considera costos adicionales</strong>: Incluye contingencias financieras para imprevistos y ajustes durante la construcción.</p>
        <p>4. <strong>Gestión del proyecto</strong>: Asigna un equipo de gestión de proyectos para supervisar la construcción y garantizar la calidad y el cumplimiento de plazos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al considerar estos factores, podrás planificar financieramente la construcción de un edificio que cumpla con tus necesidades y expectativas.
        </p>
      </section>
    </div>
  );
};

export default ConstruirEdificioCosto;
