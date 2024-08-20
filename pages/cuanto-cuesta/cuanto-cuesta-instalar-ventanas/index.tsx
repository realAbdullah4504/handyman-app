import Head from 'next/head';

const InstalarVentanasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar ventanas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de ventanas y cómo planificar tu presupuesto para este tipo de proyectos de carpintería."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-ventanas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar ventanas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 200€ - 500€ por ventana</p>
            <p>Incluye ventanas estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 500€ - 1000€ por ventana</p>
            <p>Incluye ventanas personalizadas y técnicas de instalación avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Ventana: Ventanas estándar versus ventanas personalizadas con características especiales.</li>
          <li>Materiales Utilizados: Costos basados en la calidad y tipo de materiales de la ventana como vidrio y marcos.</li>
          <li>Complejidad del Trabajo: Impacto en los costos según la dificultad y tiempo necesario para la instalación.</li>
          <li>Ubicación y Logística: Influencia en los costos debido a la accesibilidad y transporte al sitio de instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalar Ventanas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 200€ - 500€ por ventana, incluyendo ventanas estándar y mano de obra básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 500€ - 1000€ por ventana, incluyendo ventanas personalizadas y técnicas de instalación avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Proyecto</strong>: Inspecciona y documenta el número y tipo de ventanas necesarias.</p>
        <p>2. <strong>Solicitud de Cotizaciones</strong>: Obtén estimaciones detalladas de varios instaladores de ventanas para comparar costos y servicios.</p>
        <p>3. <strong>Selección del Instalador</strong>: Considera la experiencia, reputación y portafolio del instalador antes de contratar.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Incluye costos de materiales, acabados y cualquier servicio adicional como transporte e instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica cuidadosamente la instalación de ventanas para asegurar resultados de alta calidad y eficiencia energética dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default InstalarVentanasCoste;
