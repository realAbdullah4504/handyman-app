import Head from 'next/head';

const RestaurarMueblesCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta restaurar muebles? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con restaurar muebles y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-restaurar-muebles`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta restaurar muebles?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Restauración Básica: 50€ - 150€ por mueble</p>
            <p>Incluye reparaciones menores y retoques básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Restauración Completa: 200€ - 500€ por mueble</p>
            <p>Incluye reparaciones mayores, pintura y restauración detallada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Mueble: Mesas, sillas, armarios, etc.</li>
          <li>Grado de Daño: Reparaciones menores vs. reparaciones mayores.</li>
          <li>Material del Mueble: Madera, metal, plástico, etc.</li>
          <li>Detalles del Diseño: Muebles con diseños simples vs. muebles con detalles intricados.</li>
          <li>Mano de Obra: Costos de la restauración profesional.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Restaurar Muebles</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Restauración Básica</strong>: 50€ - 150€ por mueble, incluyendo reparaciones menores y retoques básicos.
          </li>
          <li>
            <strong>Restauración Completa</strong>: 200€ - 500€ por mueble, incluyendo reparaciones mayores, pintura y restauración detallada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Mueble</strong>: Determina el tipo y el grado de daño del mueble a restaurar.</p>
        <p>2. <strong>Selección del Tipo de Restauración</strong>: Decide si necesitas una restauración básica o completa.</p>
        <p>3. <strong>Solicitud de Cotizaciones</strong>: Obtén múltiples cotizaciones de diferentes restauradores para comparar precios y servicios ofrecidos.</p>
        <p>4. <strong>Consideración de Calidad y Experiencia</strong>: Elige un restaurador con experiencia y buenas referencias para asegurar un buen resultado.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar adecuadamente la restauración de muebles, puedes dar una nueva vida a tus piezas favoritas mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default RestaurarMueblesCosto;