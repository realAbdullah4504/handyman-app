import Head from 'next/head';

const PulirParquetCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta pulir parquet? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el pulido de parquet y cómo planificar tu presupuesto para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-pulir-parquet`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta pulir parquet?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pulido Básico: 15€ - 20€ por metro cuadrado</p>
            <p>Incluye lijado ligero y una capa de barniz estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pulido Avanzado: 20€ - 30€ por metro cuadrado</p>
            <p>Incluye lijado profundo, reparaciones menores y barniz de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado del Parquet: Desde parquet bien conservado hasta áreas dañadas y desgastadas.</li>
          <li>Tipo de Acabado: Diferencias en el costo según el tipo y la calidad del acabado de barniz seleccionado.</li>
          <li>Preparación del Suelo: Necesidad de preparación adicional del suelo antes del pulido.</li>
          <li>Ubicación y Accesibilidad: Costos adicionales según la ubicación y accesibilidad del sitio a pulir.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Pulir Parquet</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Pulido Básico</strong>: 15€ - 20€ por metro cuadrado, incluyendo lijado ligero y una capa de barniz estándar.
          </li>
          <li>
            <strong>Pulido Avanzado</strong>: 20€ - 30€ por metro cuadrado, incluyendo lijado profundo, reparaciones menores y barniz de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Estado del Parquet</strong>: Determina la condición actual del parquet y si necesita reparaciones adicionales.</p>
        <p>2. <strong>Solicitud de Cotizaciones</strong>: Obtén presupuestos detallados de contratistas especializados en pulido de parquet.</p>
        <p>3. <strong>Selección de Materiales y Acabados</strong>: Elige acabados que se ajusten a tu presupuesto y necesidades estéticas.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Incluye costos de mano de obra y cualquier preparación necesaria del área a pulir.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el pulido de parquet, puedes restaurar y mejorar la apariencia de tus pisos de madera mientras te mantienes dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default PulirParquetCoste;
