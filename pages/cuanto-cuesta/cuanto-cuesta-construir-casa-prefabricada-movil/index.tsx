import Head from 'next/head';

const ConstruirCasaPrefabricadaMovilCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una casa prefabricada móvil? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de casas prefabricadas móviles y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-casa-prefabricada-movil`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una casa prefabricada móvil?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo base: €20,000 - €50,000</p>
            <p>Costo promedio para la construcción básica de una casa prefabricada móvil.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo personalizado: €50,000 - €100,000</p>
            <p>Costo más alto para construcciones con diseños personalizados o materiales premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la casa prefabricada móvil.</li>
          <li>Calidad de los materiales utilizados.</li>
          <li>Ubicación del sitio de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir casas prefabricadas móviles</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo base</strong>: €20,000 - €50,000, para construcciones básicas de casas prefabricadas móviles.
          </li>
          <li>
            <strong>Costo personalizado</strong>: €50,000 - €100,000, para construcciones con diseños personalizados o materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Selección del diseño</strong>: Elegir el diseño y características de la casa prefabricada móvil.</p>
        <p>2. <strong>Selección de materiales</strong>: Decidir los materiales y acabados a utilizar.</p>
        <p>3. <strong>Presupuesto para la construcción</strong>: Obtener cotizaciones detalladas de constructores y proveedores.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto considerando los factores que afectan los costos y selecciona constructores de casas prefabricadas móviles con experiencia para asegurar una construcción adecuada y de calidad.
        </p>
      </section>
    </div>
  );
};

export default ConstruirCasaPrefabricadaMovilCoste;