import Head from 'next/head';

const ConstruirTabique = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un tabique? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de tabiques interiores y cómo planificar tu presupuesto para esta obra."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-tabique`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un tabique?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tabique Estándar: 30€ - 50€ por metro cuadrado</p>
            <p>Incluye materiales y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tabique con Aislamiento Acústico: 50€ - 80€ por metro cuadrado</p>
            <p>Incluye materiales especializados y técnicas de construcción para aislamiento acústico.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Tabique: Costo varía según las dimensiones del tabique a construir.</li>
          <li>Tipo de Material: Diferentes tipos de materiales y acabados influyen en el precio final.</li>
          <li>Acabados y Detalles: Detalles decorativos o funcionales adicionales pueden incrementar los costos.</li>
          <li>Ubicación y Accesibilidad: Costos pueden ser afectados por la ubicación del proyecto y la accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir Tabiques</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Tabique Estándar</strong>: 30€ - 50€ por metro cuadrado, incluyendo materiales y mano de obra básica.
          </li>
          <li>
            <strong>Tabique con Aislamiento Acústico</strong>: 50€ - 80€ por metro cuadrado, incluyendo materiales especializados y técnicas de construcción para aislamiento acústico.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Determina las dimensiones y requisitos específicos del tabique a construir.</p>
        <p>2. <strong>Selección de Materiales</strong>: Elige el tipo de tabique según tus necesidades y presupuesto disponible.</p>
        <p>3. <strong>Cotizaciones y Comparaciones</strong>: Solicita presupuestos detallados de contratistas locales para comparar precios y servicios.</p>
        <p>4. <strong>Consideraciones Finales</strong>: Incluye costos adicionales como permisos o ajustes en el diseño durante la planificación del presupuesto.</p>
      </section>

      <section>
        <p className="text-lg">
          El costo de construir un tabique puede variar significativamente dependiendo de varios factores. Planifica cuidadosamente tu presupuesto para asegurar que tu proyecto se realice dentro de tus expectativas.
        </p>
      </section>
    </div>
  );
};

export default ConstruirTabique;