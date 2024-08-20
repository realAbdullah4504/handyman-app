import Head from 'next/head';

const ReformarCasaPrefabricadaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar una casa prefabricada? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reforma de casas prefabricadas y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reformar-casa-prefabricada`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar una casa prefabricada?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma básica: €5,000 - €15,000</p>
            <p>Costo promedio para reformas básicas en casas prefabricadas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma completa: €15,000 - €30,000</p>
            <p>Costo más alto para reformas completas con cambios estructurales o acabados premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos de reforma</h2>
        <ul className="list-disc list-inside">
          <li>Extensión y complejidad de la reforma.</li>
          <li>Materiales y acabados seleccionados.</li>
          <li>Costos laborales y de permisos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para reformar casas prefabricadas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reforma básica</strong>: €5,000 - €15,000, para reformas sencillas en casas prefabricadas.
          </li>
          <li>
            <strong>Reforma completa</strong>: €15,000 - €30,000, para reformas que incluyen cambios estructurales o acabados premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar las necesidades de reforma</strong>: Determinar los cambios deseados y necesidades estructurales.</p>
        <p>2. <strong>Obtener múltiples cotizaciones</strong>: Comparar precios y servicios de diferentes contratistas.</p>
        <p>3. <strong>Considerar el tiempo y la logística</strong>: Establecer un cronograma y coordinar con los proveedores de materiales.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto cuidadosamente considerando los factores que afectan los costos y asegurándote de seleccionar contratistas con experiencia en reformas de casas prefabricadas.
        </p>
      </section>
    </div>
  );
};

export default ReformarCasaPrefabricadaCoste;