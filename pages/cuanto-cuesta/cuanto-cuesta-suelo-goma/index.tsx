import Head from 'next/head';

const SueloGomaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el suelo de goma? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el suelo de goma y cómo planificar tu presupuesto para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-suelo-goma`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el suelo de goma?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rollos de Goma: 10€ - 20€ por m²</p>
            <p>Incluye rollos de goma estándar para suelos comerciales o industriales.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Losas de Goma: 20€ - 30€ por m²</p>
            <p>Incluye losas de goma para suelos deportivos o áreas de juego.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Goma: Desde rollos estándar para comercios hasta losas especializadas para deportes.</li>
          <li>Área de Instalación: Tamaño total del área a cubrir con el suelo de goma.</li>
          <li>Preparación del Terreno: Necesidad de nivelación, drenaje o tratamiento previo del suelo.</li>
          <li>Costos de Instalación: Incluye mano de obra y herramientas necesarias para la instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Suelo de Goma</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rollos de Goma</strong>: 10€ - 20€ por m², incluyendo rollos de goma estándar para suelos comerciales o industriales.
          </li>
          <li>
            <strong>Losas de Goma</strong>: 20€ - 30€ por m², incluyendo losas de goma para suelos deportivos o áreas de juego.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de Material</strong>: Elija entre opciones de rollos o losas de goma según el uso previsto del espacio.</p>
        <p>2. <strong>Medición y Evaluación</strong>: Determine el área exacta y condiciones del terreno para calcular costos precisos.</p>
        <p>3. <strong>Obtención de Presupuestos</strong>: Solicite cotizaciones detalladas de varios proveedores para comparar precios y servicios.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Considere costos de instalación, mantenimiento y garantía al tomar decisiones finales.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el presupuesto para el suelo de goma, puede asegurar que el espacio esté adecuadamente equipado dentro de un rango de costos definido.
        </p>
      </section>
    </div>
  );
};

export default SueloGomaCoste;