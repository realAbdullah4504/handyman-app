import Head from 'next/head';

const RepararCerraduraCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar una cerradura? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de una cerradura y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-cerradura`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar una cerradura?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 30€ - 80€</p>
            <p>Incluye reparaciones menores como ajustes y lubricación.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Avanzada: 80€ - 150€</p>
            <p>Incluye reparaciones mayores o el reemplazo de partes dañadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Grado de Daño: Reparaciones simples vs. reparaciones complejas debido a daños significativos.</li>
          <li>Piezas Requeridas: Necesidad de reemplazar partes específicas de la cerradura.</li>
          <li>Profesionalismo: Experiencia y reputación del cerrajero o técnico.</li>
          <li>Urgencia: Tarifas adicionales para reparaciones urgentes o fuera de horario laboral.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparación de Cerradura</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 30€ - 80€, incluyendo ajustes y lubricación de cerraduras simples.
          </li>
          <li>
            <strong>Reparación Avanzada</strong>: 80€ - 150€, incluyendo reparaciones mayores o el reemplazo de partes dañadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de los Daños</strong>: Determina el nivel de daño y las partes afectadas de la cerradura.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Solicita varios presupuestos de cerrajeros para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Considerar la Calidad</strong>: Asegúrate de que se utilicen piezas de calidad para garantizar una reparación duradera.</p>
        <p>4. <strong>Garantía y Soporte</strong>: Busca garantías en el trabajo realizado y asegúrate de tener soporte post-reparación si es necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la reparación de una cerradura, puedes asegurar el buen funcionamiento de tus cerraduras mientras te ajustas a tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default RepararCerraduraCoste;