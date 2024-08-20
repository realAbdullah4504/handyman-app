import Head from 'next/head';

const CuantoCuestaReformarCasaAntigua = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar una casa antigua? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la reforma de una casa antigua y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reformar-casa-antigua`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar una casa antigua?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma básica: €X - €X por metro cuadrado</p>
            <p>Incluye mano de obra y materiales estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma con acabados de alta calidad: €X - €X por metro cuadrado</p>
            <p>Incluye materiales premium y restauración de elementos antiguos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado actual de la casa y necesidad de restauración de elementos antiguos.</li>
          <li>Tipo de materiales utilizados para la reforma (madera, piedra, etc.).</li>
          <li>Complejidad de la estructura y detalles arquitectónicos.</li>
          <li>Ubicación geográfica y accesibilidad al sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para reformar una casa antigua</h2>
        <p>1. <strong>Evalúa el estado estructural</strong>: Realiza una inspección detallada para identificar problemas como humedad, grietas o daños estructurales.</p>
        <p>2. <strong>Preserva elementos históricos</strong>: Considera restaurar y preservar elementos antiguos como suelos de madera, molduras y carpintería.</p>
        <p>3. <strong>Elige materiales apropiados</strong>: Opta por materiales que respeten el carácter histórico de la casa, pero que también sean duraderos y fáciles de mantener.</p>
        <p>4. <strong>Consulta con expertos</strong>: Trabaja con arquitectos y contratistas con experiencia en rehabilitación de casas antiguas para garantizar un resultado de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Reformar una casa antigua puede ser un proyecto emocionante pero complejo. Los costos pueden variar ampliamente según los factores mencionados anteriormente y es importante planificar cuidadosamente para evitar sorpresas durante el proceso.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaReformarCasaAntigua;