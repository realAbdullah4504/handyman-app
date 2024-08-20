import Head from 'next/head';

const GestionarObraCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta gestionar una obra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la gestión de una obra y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-gestionar-una-obra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta gestionar una obra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Gestión Básica: 5% - 10% del costo total de la obra</p>
            <p>Incluye planificación básica, supervisión y coordinación de trabajos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Gestión Avanzada: 10% - 20% del costo total de la obra</p>
            <p>Incluye gestión detallada, control de calidad y gestión de cambios.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad de la Obra: Proyectos más grandes y complejos requieren más recursos de gestión.</li>
          <li>Calidad de la Gestión: Experiencia y reputación del equipo de gestión pueden influir en los costos.</li>
          <li>Requisitos Especiales: Proyectos que requieren cumplir normativas específicas pueden tener costos adicionales de gestión.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Gestionar una Obra</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Gestión Básica</strong>: 5% - 10% del costo total de la obra, incluyendo planificación básica, supervisión y coordinación.
          </li>
          <li>
            <strong>Gestión Avanzada</strong>: 10% - 20% del costo total de la obra, incluyendo gestión detallada, control de calidad y gestión de cambios.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades de Gestión</strong>: Determina el tamaño y la complejidad de tu obra para estimar los costos de gestión.</p>
        <p>2. <strong>Investigación y Comparación</strong>: Obtén cotizaciones de varios gestores de obra para comparar precios, servicios ofrecidos y experiencia.</p>
        <p>3. <strong>Considerar Beneficios a Largo Plazo</strong>: La gestión eficiente puede reducir costos de cambios y mejorar la calidad del proyecto.</p>
        <p>4. <strong>Calidad y Fiabilidad</strong>: Elige un equipo de gestión con experiencia y referencias sólidas para asegurar el éxito de tu proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la gestión de tu obra, puedes asegurar que se complete a tiempo, dentro del presupuesto y con la calidad esperada.
        </p>
      </section>
    </div>
  );
};

export default GestionarObraCoste;