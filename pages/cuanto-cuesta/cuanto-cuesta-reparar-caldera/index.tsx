import Head from 'next/head';

const ReparacionCalderaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar una caldera? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de una caldera y cómo planificar tu presupuesto para esta tarea de mantenimiento."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-caldera`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar una caldera?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 100€ - 500€</p>
            <p>Incluye reparaciones menores y piezas de recambio estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Avanzada: 500€ - 2000€</p>
            <p>Incluye reparaciones importantes o sustitución de componentes críticos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Gravedad del Problema: Desde problemas menores hasta fallos graves que requieren cambios significativos.</li>
          <li>Edad de la Caldera: Costos pueden incrementarse si la caldera es antigua y requiere piezas difíciles de encontrar.</li>
          <li>Marca y Modelo: Variación en los costos dependiendo de la marca y la disponibilidad de repuestos.</li>
          <li>Ubicación: Precios pueden variar según la región y la disponibilidad de técnicos especializados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para Reparar una Caldera</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 100€ - 500€, incluyendo reparaciones menores y piezas de recambio estándar.
          </li>
          <li>
            <strong>Reparación Avanzada</strong>: 500€ - 2000€, incluyendo reparaciones importantes o sustitución de componentes críticos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diagnóstico del Problema</strong>: Identificación precisa de los problemas de la caldera.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Solicita varios presupuestos detallados para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Consideración de Factores Adicionales</strong>: Incluye costos de repuestos y la posibilidad de actualización tecnológica.</p>
        <p>4. <strong>Selección del Técnico</strong>: Elige un técnico con experiencia en reparaciones de calderas para asegurar un trabajo de calidad y duradero.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar y presupuestar cuidadosamente la reparación de una caldera te permitirá mantener un sistema de calefacción eficiente y prolongar la vida útil de tu equipo.
        </p>
      </section>
    </div>
  );
};

export default ReparacionCalderaCoste;
