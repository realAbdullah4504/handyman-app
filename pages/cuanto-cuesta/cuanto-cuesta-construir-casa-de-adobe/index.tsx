import Head from 'next/head';

const ConstruirCasaAdobeCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una casa de adobe? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una casa de adobe y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-casa-de-adobe`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una casa de adobe?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Construcción Básica: 500€ - 800€ por metro cuadrado</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Construcción Premium: 800€ - 1200€ por metro cuadrado</p>
            <p>Incluye materiales de alta calidad y técnicas de construcción avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Diseño de la Casa: Dimensiones y complejidad arquitectónica de la casa de adobe.</li>
          <li>Materiales Utilizados: Calidad de los ladrillos de adobe, acabados y otros materiales complementarios.</li>
          <li>Ubicación Geográfica: Costos variables según la región y acceso a materiales de construcción.</li>
          <li>Mano de Obra: Experiencia y tarifas de los trabajadores de la construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir una Casa de Adobe</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Construcción Básica</strong>: 500€ - 800€ por metro cuadrado, incluyendo materiales estándar y mano de obra básica.
          </li>
          <li>
            <strong>Construcción Premium</strong>: 800€ - 1200€ por metro cuadrado, incluyendo materiales de alta calidad y técnicas avanzadas de construcción.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diseño y Planificación</strong>: Define el diseño y los requisitos específicos de la casa de adobe.</p>
        <p>2. <strong>Selección de Materiales</strong>: Escoge ladrillos de adobe y otros materiales basado en la durabilidad y estética deseada.</p>
        <p>3. <strong>Obtención de Presupuestos</strong>: Solicita presupuestos detallados de constructores y proveedores de materiales.</p>
        <p>4. <strong>Consideración de Tiempo y Mano de Obra</strong>: Evalúa el tiempo necesario para la construcción y costos asociados a la mano de obra.</p>
      </section>

      <section>
        <p className="text-lg">
          Construir una casa de adobe puede ofrecer beneficios únicos en términos de sostenibilidad y confort, ajustándose al presupuesto y necesidades específicas.
        </p>
      </section>
    </div>
  );
};

export default ConstruirCasaAdobeCoste;