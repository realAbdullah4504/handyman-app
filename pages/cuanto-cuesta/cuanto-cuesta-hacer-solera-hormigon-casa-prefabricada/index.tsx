import Head from 'next/head';

const HacerSoleraHormigonCasaPrefabricadaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer una solera de hormigón para una casa prefabricada? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de la solera de hormigón para casas prefabricadas y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-solera-hormigon-casa-prefabricada`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer una solera de hormigón para una casa prefabricada?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo base: €10,000 - €20,000</p>
            <p>Costo para la construcción estándar de la solera de hormigón.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo personalizado: €20,000 - €30,000</p>
            <p>Costo más alto para una solera de hormigón con características personalizadas o diseño complejo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y espesor: Área total y grosor de la solera de hormigón.</li>
          <li>Calidad del hormigón: Tipo de hormigón utilizado y métodos de colado.</li>
          <li>Preparación del sitio: Costos adicionales según la preparación del terreno y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construcción de solera de hormigón</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo base</strong>: €10,000 - €20,000, para una solera de hormigón estándar.
          </li>
          <li>
            <strong>Costo personalizado</strong>: €20,000 - €30,000, para una solera de hormigón con características personalizadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir necesidades</strong>: Determinar el tamaño, espesor y especificaciones requeridas.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener presupuestos detallados de contratistas de construcción.</p>
        <p>3. <strong>Considerar calidad y preparación</strong>: Evaluar la calidad del hormigón y la preparación del sitio.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto considerando los factores que afectan los costos y selecciona un contratista de construcción que se ajuste a tus necesidades y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default HacerSoleraHormigonCasaPrefabricadaCoste;
