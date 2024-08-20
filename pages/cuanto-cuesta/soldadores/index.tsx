import Head from 'next/head';

const SoldadoresPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a un soldador? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la contratación de soldadores para diversos proyectos de soldadura, así como cómo planificar tu presupuesto para este tipo de servicios."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/soldadores`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a un soldador?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Soldadura Básica: 30€ - 50€ por hora</p>
            <p>Incluye soldadura estándar con materiales proporcionados por el cliente.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Soldadura Especializada: 50€ - 100€ por hora</p>
            <p>Incluye soldadura con materiales especiales o técnicas avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Proyecto: Soldadura para estructuras metálicas, reparaciones, fabricación, etc.</li>
          <li>Complejidad del Trabajo: Proyectos simples vs. proyectos que requieren habilidades especializadas.</li>
          <li>Materiales y Equipos: Costos adicionales por el uso de materiales especiales y equipos de soldadura avanzados.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y la disponibilidad de soldadores calificados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Servicios de Soldadura</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Soldadura Básica</strong>: 30€ - 50€ por hora, incluyendo materiales proporcionados por el cliente.
          </li>
          <li>
            <strong>Soldadura Especializada</strong>: 50€ - 100€ por hora, incluyendo materiales especiales o técnicas avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Identificación del Proyecto</strong>: Define claramente el tipo y alcance del trabajo de soldadura que necesitas.</p>
        <p>2. <strong>Solicitud de Cotizaciones</strong>: Obtén estimaciones detalladas de varios soldadores para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Evaluación de Experiencia</strong>: Considera la experiencia y la reputación de los soldadores antes de tomar una decisión final.</p>
      </section>

      <section>
        <p className="text-lg">
          Contratar a un soldador calificado garantiza la calidad y seguridad de tus proyectos de soldadura. Asegúrate de planificar adecuadamente tu presupuesto para obtener resultados satisfactorios.
        </p>
      </section>
    </div>
  );
};

export default SoldadoresPage;