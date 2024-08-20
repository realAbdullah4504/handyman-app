import Head from 'next/head';

const ConstruirCasaPrefabricadaMaderaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una casa prefabricada de madera? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de casas prefabricadas de madera y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-casa-prefabricada-madera`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una casa prefabricada de madera?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo inicial: €100,000 - €200,000</p>
            <p>Costo base para una casa prefabricada de madera estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo personalizado: €200,000 - €500,000</p>
            <p>Costo más alto para una casa prefabricada de madera con características personalizadas o diseño complejo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño: Área total construida y características personalizadas.</li>
          <li>Calidad de la madera: Madera estándar vs. madera premium.</li>
          <li>Ubicación del sitio: Costos adicionales según la accesibilidad y los códigos de construcción locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construcción de casas prefabricadas de madera</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo inicial</strong>: €100,000 - €200,000, para una casa prefabricada de madera estándar.
          </li>
          <li>
            <strong>Costo personalizado</strong>: €200,000 - €500,000, para una casa prefabricada de madera con características personalizadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir necesidades</strong>: Determinar el tamaño y diseño específicos.</p>
        <p>2. <strong>Obtener cotizaciones</strong>: Solicitar presupuestos detallados de constructores de casas prefabricadas de madera.</p>
        <p>3. <strong>Evaluación de calidad</strong>: Considerar la calidad de la madera y las opciones de diseño ofrecidas.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto considerando los factores que afectan los costos y selecciona un constructor de casas prefabricadas de madera que se ajuste a tus necesidades y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirCasaPrefabricadaMaderaCoste;
