import Head from 'next/head';

const ManitasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Servicios de Manitas: ¿Cuánto cuesta contratar a un manitas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con los servicios de manitas y cómo contratar un manitas para tareas domésticas y reparaciones pequeñas."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-manitas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">Servicios de Manitas: ¿Cuánto cuesta contratar a un manitas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio por Hora: 20€ - 40€</p>
            <p>Servicios básicos como reparaciones menores y tareas domésticas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio por Proyecto: 50€ - 150€</p>
            <p>Reparaciones más complejas o proyectos específicos de bricolaje.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Tarea: Reparaciones eléctricas, fontanería, pintura, etc.</li>
          <li>Complejidad: Dificultad y tiempo estimado para completar la tarea.</li>
          <li>Materiales Necesarios: Costo adicional de materiales y herramientas.</li>
          <li>Ubicación: Variaciones en tarifas basadas en la región y el mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Servicios de Manitas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio por Hora</strong>: 20€ - 40€, para reparaciones menores y tareas domésticas.
          </li>
          <li>
            <strong>Precio por Proyecto</strong>: 50€ - 150€, para reparaciones más complejas o proyectos específicos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Identificar las tareas que necesitan atención y su prioridad.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Comparar precios y servicios ofrecidos por diferentes manitas.</p>
        <p>3. <strong>Discusión de Detalles</strong>: Aclarar expectativas y costo final antes de proceder con el trabajo.</p>
        <p>4. <strong>Revisión de Calidad</strong>: Verificar la calidad del trabajo realizado y asegurar la satisfacción.</p>
      </section>

      <section>
        <p className="text-lg">
          Contratar a un manitas puede facilitar la realización de tareas domésticas y reparaciones menores de manera eficiente y profesional.
        </p>
      </section>
    </div>
  );
};

export default ManitasCoste;
