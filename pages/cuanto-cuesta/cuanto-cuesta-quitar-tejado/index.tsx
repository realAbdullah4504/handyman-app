import Head from 'next/head';

const QuitarTejadoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta quitar un tejado? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la demolición y eliminación de tejados y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-quitar-tejado`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta quitar un tejado?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Demolición Básica: 20€ - 50€ por metro cuadrado</p>
            <p>Incluye mano de obra y eliminación de materiales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Demolición Compleja: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye eliminación de materiales difíciles de manejar o estructuras complicadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Tejado: Tejas, pizarra, fibrocemento, etc.</li>
          <li>Tamaño del Tejado: Superficie total a demoler.</li>
          <li>Accesibilidad: Complejidad para acceder al tejado y espacio para equipos.</li>
          <li>Estado Estructural: Necesidad de manejo de residuos peligrosos como fibrocemento.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Quitar un Tejado</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Demolición Básica</strong>: 20€ - 50€ por metro cuadrado, incluyendo mano de obra y eliminación de materiales básicos.
          </li>
          <li>
            <strong>Demolición Compleja</strong>: 50€ - 100€ por metro cuadrado, incluyendo eliminación de materiales difíciles o estructuras complicadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Tejado</strong>: Determinar el tipo y estado actual del tejado.</p>
        <p>2. <strong>Solicitar Presupuestos</strong>: Obtener estimaciones detalladas de contratistas especializados.</p>
        <p>3. <strong>Manejo de Residuos</strong>: Coordinar la eliminación adecuada de materiales de demolición.</p>
        <p>4. <strong>Seguridad y Normativas</strong>: Cumplir con las normativas locales sobre manejo de materiales peligrosos si es necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la demolición de un tejado, puedes asegurar que el proceso sea seguro y respete el medio ambiente, además de mantener la inversión a largo plazo.
        </p>
      </section>
    </div>
  );
};

export default QuitarTejadoCosto;