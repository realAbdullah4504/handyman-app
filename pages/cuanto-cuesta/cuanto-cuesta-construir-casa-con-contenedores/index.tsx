import Head from 'next/head';

const ConstruirCasaConContenedoresCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una casa con contenedores? - Oficios24</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una casa utilizando contenedores marítimos y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-casa-con-contenedores`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una casa con contenedores?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo base: €40,000 - €80,000</p>
            <p>Costo promedio para la construcción básica de una casa con contenedores marítimos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo personalizado: €80,000 - €150,000</p>
            <p>Costo más alto para construcciones con diseños especiales o materiales premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad de la casa con contenedores.</li>
          <li>Calidad de los acabados interiores y exteriores.</li>
          <li>Ubicación geográfica y accesibilidad al sitio de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir una casa con contenedores</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo base</strong>: €40,000 - €80,000, para construcciones básicas con contenedores marítimos.
          </li>
          <li>
            <strong>Costo personalizado</strong>: €80,000 - €150,000, para construcciones con diseños especiales o materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar los requisitos específicos y preferencias de diseño.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Solicitar presupuestos detallados a contratistas y proveedores.</p>
        <p>3. <strong>Selección de materiales y acabados</strong>: Considerar la calidad y estética de los materiales para la construcción con contenedores marítimos.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto cuidadosamente considerando los factores que afectan los costos y selecciona contratistas y proveedores de materiales confiables para garantizar la calidad de la construcción de tu casa con contenedores.
        </p>
      </section>
    </div>
  );
};

export default ConstruirCasaConContenedoresCoste;