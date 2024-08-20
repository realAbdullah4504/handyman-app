import Head from 'next/head';

const RepararParquetCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar parquet? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de parquet y cómo planificar tu presupuesto para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-parquet`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar parquet?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 200€ - 500€</p>
            <p>Incluye reparación de grietas y pequeñas áreas dañadas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Avanzada: 500€ - 1,500€</p>
            <p>Incluye reparación de áreas extensas, cambio de tablillas y acabados detallados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión del Daño: Desde pequeñas grietas hasta áreas extensas de daño.</li>
          <li>Tipo de Parquet: Diferencias en el costo según el tipo y la calidad del parquet a reparar.</li>
          <li>Acabados Especiales: Costos adicionales por acabados especiales o personalizados.</li>
          <li>Localización y Accesibilidad: Impacto en el costo según la ubicación y accesibilidad del área a reparar.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparar Parquet</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 200€ - 500€, incluyendo reparación de grietas y pequeñas áreas dañadas.
          </li>
          <li>
            <strong>Reparación Avanzada</strong>: 500€ - 1,500€, incluyendo reparación de áreas extensas, cambio de tablillas y acabados detallados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Daño</strong>: Determina la extensión y tipo de daño en el parquet.</p>
        <p>2. <strong>Solicitud de Cotizaciones</strong>: Obtén presupuestos detallados de contratistas especializados en reparación de parquet.</p>
        <p>3. <strong>Selección de Materiales y Acabados</strong>: Elige materiales y acabados que se ajusten a tu presupuesto y necesidades.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Incluye costos de mano de obra y cualquier preparación necesaria del área a reparar.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la reparación de parquet, puedes restaurar el aspecto y la funcionalidad de tus pisos de madera mientras te mantienes dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default RepararParquetCoste;
