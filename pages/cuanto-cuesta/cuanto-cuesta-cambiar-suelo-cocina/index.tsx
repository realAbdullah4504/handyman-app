import Head from 'next/head';

const CambiarSueloCocinaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar el suelo de una cocina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con cambiar el suelo de una cocina y cómo presupuestar para la renovación del suelo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-suelo-cocina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar el suelo de una cocina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Suelo Estándar: €20 - €50 por metro cuadrado</p>
            <p>Incluye materiales como azulejos cerámicos o vinilo.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Suelo Premium: €50 - €100+ por metro cuadrado</p>
            <p>Materiales como porcelanato o suelos laminados de alta gama.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de material seleccionado y calidad.</li>
          <li>Dimensiones de la cocina y área a cubrir.</li>
          <li>Costos adicionales como la preparación del suelo y la instalación.</li>
          <li>Ubicación geográfica y precios del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determina el tipo de suelo adecuado para tu cocina.</p>
        <p>2. <strong>Comparación de precios</strong>: Obtén cotizaciones detalladas de varios proveedores.</p>
        <p>3. <strong>Consideraciones adicionales</strong>: Planifica para imprevistos y costos de instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la selección adecuada de materiales, puedes renovar el suelo de tu cocina dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CambiarSueloCocinaCosto;