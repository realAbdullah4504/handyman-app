import Head from 'next/head';

const ConstruccionCasaRuralCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una casa rural? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la construcción de una casa rural y cómo presupuestar para proyectos de construcción en zonas rurales en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-casa-rural`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una casa rural?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Casa rural estándar: €900 - €1,500 por metro cuadrado</p>
            <p>Construcción de una casa con materiales locales y diseño rural básico.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Casa rural premium: €1,500 - €2,500 por metro cuadrado</p>
            <p>Construcción de una casa con diseño avanzado y materiales de alta calidad adaptados al entorno rural.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Ubicación y acceso: Costos adicionales por transporte de materiales y mano de obra en zonas rurales.</li>
          <li>Materiales locales: Uso de materiales que se ajusten al entorno rural y disponibilidad en la región.</li>
          <li>Diseño arquitectónico: Complejidad del diseño y tamaño de la casa rural.</li>
          <li>Normativas locales: Cumplimiento de normativas específicas para construcciones en áreas rurales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir una casa rural</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Casa rural estándar</strong>: €900 - €1,500 por metro cuadrado, construcción de una casa con materiales locales y diseño rural básico.
          </li>
          <li>
            <strong>Casa rural premium</strong>: €1,500 - €2,500 por metro cuadrado, construcción de una casa con diseño avanzado y materiales de alta calidad adaptados al entorno rural.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación del terreno y permisos</strong>: Investigar la viabilidad del terreno y obtener los permisos necesarios para construir en zonas rurales.</p>
        <p>2. <strong>Selección de materiales</strong>: Optar por materiales sostenibles y locales que respeten el entorno natural.</p>
        <p>3. <strong>Consideración del diseño y tamaño</strong>: Definir el tamaño y las características del diseño para adaptarse al entorno rural y las necesidades del proyecto.</p>
        <p>4. <strong>Contratación de mano de obra especializada</strong>: Asegurar la contratación de constructores con experiencia en proyectos de construcción rural.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación detallada y considerando los factores que afectan los costos, puedes construir una casa rural que combine confort y armonía con el entorno natural, dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruccionCasaRuralCoste;
