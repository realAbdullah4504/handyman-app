import Head from 'next/head';

const QuitarGraffiti = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta quitar graffiti? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la eliminación de graffiti y cómo planificar tu presupuesto para este tipo de servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/quitar-graffiti`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta quitar graffiti?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estimación Básica: 200€ - 500€</p>
            <p>Incluye limpieza de superficie y métodos básicos de eliminación.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estimación Completa: 500€ - 1,200€</p>
            <p>Incluye métodos avanzados, productos especiales y restauración de superficies.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Superficie: Área afectada por el graffiti y tipo de material (piedra, metal, madera, etc.).</li>
          <li>Ubicación del Graffiti: Altura y accesibilidad para el equipo de limpieza.</li>
          <li>Estado Actual de la Superficie: Necesidad de reparaciones adicionales después de la eliminación del graffiti.</li>
          <li>Técnicas de Eliminación: Métodos específicos utilizados dependiendo del tipo de graffiti y material de la superficie.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Quitar Graffiti</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Estimación Básica</strong>: 200€ - 500€, incluyendo limpieza de superficie y métodos básicos de eliminación.
          </li>
          <li>
            <strong>Estimación Completa</strong>: 500€ - 1,200€, incluyendo métodos avanzados, productos especiales y restauración de superficies.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Inspección y Evaluación</strong>: Determina el tamaño del área afectada y la técnica adecuada para la eliminación.</p>
        <p>2. <strong>Solicitud de Cotizaciones</strong>: Obtén múltiples presupuestos detallados de servicios profesionales de limpieza y restauración.</p>
        <p>3. <strong>Selección de Servicio</strong>: Considera la experiencia, la reputación y las técnicas utilizadas por los contratistas antes de tomar una decisión.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Valora la durabilidad y la protección de la superficie después de la eliminación del graffiti.</p>
      </section>

      <section>
        <p className="text-lg">
          Eliminar graffiti de manera efectiva no solo restaura la apariencia estética, sino que también protege y prolonga la vida útil de las superficies. Planifica tu presupuesto cuidadosamente para garantizar resultados óptimos y duraderos.
        </p>
      </section>
    </div>
  );
};

export default QuitarGraffiti;