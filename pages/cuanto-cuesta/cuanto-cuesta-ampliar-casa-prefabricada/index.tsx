import Head from 'next/head';

const AmpliarCasaPrefabricadaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta ampliar una casa prefabricada? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la ampliación de una casa prefabricada y cómo presupuestar para expandir tu vivienda."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-ampliar-casa-prefabricada`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta ampliar una casa prefabricada?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo base: €10,000 - €30,000</p>
            <p>Costo promedio para la ampliación de una casa prefabricada estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo personalizado: €30,000 - €50,000</p>
            <p>Costo más alto para ampliaciones con diseños especiales o materiales premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad de la ampliación.</li>
          <li>Calidad de los materiales utilizados.</li>
          <li>Ubicación geográfica y acceso al sitio de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para ampliar una casa prefabricada</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo base</strong>: €10,000 - €30,000, para ampliaciones estándar de casa prefabricada.
          </li>
          <li>
            <strong>Costo personalizado</strong>: €30,000 - €50,000, para ampliaciones con diseños especiales o materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar los espacios adicionales requeridos y los detalles del diseño.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Solicitar presupuestos detallados a contratistas y proveedores de materiales.</p>
        <p>3. <strong>Selección de materiales y diseño</strong>: Considerar la calidad y estética de los materiales para la ampliación.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto cuidadosamente considerando los factores que afectan los costos y selecciona contratistas y proveedores de materiales confiables para garantizar la calidad de la ampliación de tu casa prefabricada.
        </p>
      </section>
    </div>
  );
};

export default AmpliarCasaPrefabricadaCoste;