import Head from 'next/head';

const CosteSellarJuntas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta sellar juntas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el sellado de juntas y cómo planificar tu presupuesto para mantener tus superficies protegidas y estéticamente agradables."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-sellar-juntas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta sellar juntas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Estimado: 10€ - 20€ por metro lineal</p>
            <p>Incluye materiales y mano de obra para sellado básico de juntas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Detallado: 20€ - 30€ por metro lineal</p>
            <p>Incluye materiales premium y técnicas avanzadas de sellado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Sellador: Costo y calidad del sellador utilizado para el sellado de juntas.</li>
          <li>Longitud de las Juntas: Extensión total de las juntas a ser selladas.</li>
          <li>Complejidad del Trabajo: Accesibilidad y preparación de las superficies antes del sellado.</li>
          <li>Profesionalismo del Servicio: Experiencia del contratista y garantías ofrecidas por el trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Sellar Juntas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo Estimado</strong>: 10€ - 20€ por metro lineal, incluyendo materiales y mano de obra para sellado básico de juntas.
          </li>
          <li>
            <strong>Costo Detallado</strong>: 20€ - 30€ por metro lineal, incluyendo materiales premium y técnicas avanzadas de sellado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina el tipo de sellado necesario para tus juntas.</p>
        <p>2. <strong>Comparación de Precios</strong>: Obtén presupuestos detallados de varios contratistas para comparar costos y servicios.</p>
        <p>3. <strong>Consideración de Calidad</strong>: Prioriza la calidad del sellador y la experiencia del contratista para resultados duraderos.</p>
        <p>4. <strong>Presupuesto Adicional</strong>: Reserva un margen para ajustes o reparaciones adicionales según sea necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente el sellado de juntas, puedes mantener tus superficies protegidas y mejorar su estética de manera efectiva.
        </p>
      </section>
    </div>
  );
};

export default CosteSellarJuntas;