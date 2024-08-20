import Head from 'next/head';

const PintarCasaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta pintar una casa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la pintura de casas y cómo planificar tu presupuesto para este tipo de proyecto de renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-pintar-casa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta pintar una casa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pintura Estándar: 800€ - 1,500€</p>
            <p>Incluye mano de obra y materiales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Pintura de Alta Calidad: 1,500€ - 3,000€</p>
            <p>Incluye pinturas premium y acabados especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Casa: Área total a pintar y número de habitaciones.</li>
          <li>Calidad de la Pintura: Diferencias en el precio según la calidad y tipo de pintura elegida.</li>
          <li>Preparación de Superficie: Necesidad de reparaciones o preparación especial antes de pintar.</li>
          <li>Ubicación y Accesibilidad: Costos pueden variar según la ubicación geográfica y la accesibilidad del lugar.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Pintar una Casa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Pintura Estándar</strong>: 800€ - 1,500€, incluyendo mano de obra y materiales básicos.
          </li>
          <li>
            <strong>Pintura de Alta Calidad</strong>: 1,500€ - 3,000€, incluyendo pinturas premium y acabados especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Superficie</strong>: Determina el área exacta a pintar y las condiciones de las paredes.</p>
        <p>2. <strong>Selección de Pintura</strong>: Elige entre opciones estándar o de alta calidad según tus preferencias y presupuesto.</p>
        <p>3. <strong>Presupuesto Detallado</strong>: Solicita presupuestos detallados de varios pintores para comparar costos y servicios.</p>
        <p>4. <strong>Programación del Trabajo</strong>: Coordina con el profesional para establecer fechas y tiempos de trabajo.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la pintura de tu casa, podrás mejorar su apariencia y funcionalidad mientras te ajustas a tus límites de gasto.
        </p>
      </section>
    </div>
  );
};

export default PintarCasaCoste;