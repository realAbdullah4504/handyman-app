import Head from 'next/head';

const InstalarClaraboyaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar una claraboya? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de claraboyas y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-claraboya`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar una claraboya?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 500€ - 1,000€</p>
            <p>Incluye claraboya estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 1,000€ - 2,000€</p>
            <p>Incluye claraboya de mayor tamaño o diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Claraboya: Claraboyas estándar vs. personalizadas.</li>
          <li>Material y Calidad: Diferencias en los materiales de la claraboya y sus características.</li>
          <li>Ubicación de Instalación: Costos adicionales para instalaciones en techos complicados o de difícil acceso.</li>
          <li>Costos de Mano de Obra: Tarifas varían según la experiencia del instalador y la complejidad del trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Claraboyas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 500€ - 1,000€, incluye claraboya estándar y mano de obra básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 1,000€ - 2,000€, incluye claraboya de mayor tamaño o diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evalúa tus Necesidades</strong>: Determina el tipo y tamaño de claraboya que necesitas.</p>
        <p>2. <strong>Solicita Varios Presupuestos</strong>: Obtén estimaciones detalladas de instaladores de claraboyas.</p>
        <p>3. <strong>Selecciona el Instalador</strong>: Elige un instalador con experiencia y referencias sólidas.</p>
        <p>4. <strong>Considera el Mantenimiento</strong>: Incluye costos de mantenimiento a largo plazo en tu presupuesto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la instalación de una claraboya, podrás mejorar la iluminación y ventilación natural de tu espacio dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalarClaraboyaCoste;
