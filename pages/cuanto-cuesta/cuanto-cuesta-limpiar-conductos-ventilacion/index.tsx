import Head from 'next/head';

const LimpiezaConductosVentilacionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta limpiar conductos de ventilación? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de conductos de ventilación y cómo mantener un ambiente seguro y saludable."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpiar-conductos-ventilacion`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta limpiar conductos de ventilación?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 150€ - 300€</p>
            <p>Incluye limpieza de conductos estándar y rejillas de ventilación.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Completa: 300€ - 600€</p>
            <p>Incluye limpieza profunda con desinfección y eliminación de residuos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Sistema de Ventilación: Número de conductos y rejillas.</li>
          <li>Accesibilidad: Dificultad para acceder a los conductos en áreas complejas.</li>
          <li>Nivel de Suciedad: Estado actual de los conductos y necesidad de limpieza.</li>
          <li>Ubicación: Variaciones en costos según la región y el mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para Limpieza de Conductos de Ventilación</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 150€ - 300€, incluyendo limpieza de conductos estándar y rejillas de ventilación.
          </li>
          <li>
            <strong>Limpieza Completa</strong>: 300€ - 600€, incluyendo limpieza profunda con desinfección y eliminación de residuos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Inspección Inicial</strong>: Evaluar el estado actual de los conductos y determinar necesidades de limpieza.</p>
        <p>2. <strong>Cotización Detallada</strong>: Obtener varios presupuestos de empresas especializadas en limpieza de conductos.</p>
        <p>3. <strong>Selección de Servicio</strong>: Elegir el servicio adecuado basado en costo, experiencia y recomendaciones.</p>
        <p>4. <strong>Ejecución y Evaluación</strong>: Supervisar la limpieza para asegurar cumplimiento de estándares y eficacia del servicio.</p>
      </section>

      <section>
        <p className="text-lg">
          La limpieza regular de conductos de ventilación mejora la calidad del aire interior y reduce el riesgo de contaminantes en espacios habitables.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaConductosVentilacionCoste;