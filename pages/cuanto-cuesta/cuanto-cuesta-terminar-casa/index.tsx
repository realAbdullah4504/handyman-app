import Head from 'next/head';

const TerminarCasaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta terminar una casa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la finalización de una casa y cómo presupuestar para completar tu proyecto de vivienda."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-terminar-casa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta terminar una casa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo base: €20,000 - €50,000</p>
            <p>Costo promedio para finalizar una casa estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo personalizado: €50,000 - €100,000</p>
            <p>Costo más alto para terminaciones de alta calidad o diseños especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Calidad y tipo de materiales utilizados para acabados.</li>
          <li>Complejidad del diseño interior y exterior.</li>
          <li>Ubicación geográfica y accesibilidad al sitio de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para terminar una casa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo base</strong>: €20,000 - €50,000, para finalizar una casa estándar.
          </li>
          <li>
            <strong>Costo personalizado</strong>: €50,000 - €100,000, para terminaciones de alta calidad o diseños especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar los acabados y ajustes necesarios para completar la casa.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Solicitar presupuestos detallados a contratistas y proveedores de materiales.</p>
        <p>3. <strong>Consideración de detalles</strong>: Evaluar la calidad de los materiales y la estética de los acabados.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto cuidadosamente considerando los factores que afectan los costos y selecciona contratistas y proveedores de materiales confiables para garantizar la calidad de las terminaciones de tu casa.
        </p>
      </section>
    </div>
  );
};

export default TerminarCasaCoste;