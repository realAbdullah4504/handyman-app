import Head from 'next/head';

const HacerDespensa = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer una despensa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una despensa, incluyendo materiales, mano de obra y factores que afectan los costos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/hacer-despensa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer una despensa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Despensa Básica: 500€ - 1,000€</p>
            <p>Incluye estanterías básicas y acabados estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Despensa Personalizada: 1,500€ - 3,000€</p>
            <p>Incluye diseño personalizado, materiales de alta calidad y soluciones de almacenamiento especializadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Despensa: Más espacio requerirá más material y trabajo.</li>
          <li>Materiales Utilizados: Diferencias en costos entre madera, metal, y otros materiales.</li>
          <li>Complejidad del Diseño: Diseños personalizados o características adicionales pueden aumentar los costos.</li>
          <li>Ubicación: Variaciones regionales en costos de mano de obra y materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Hacer una Despensa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Despensa Básica</strong>: 500€ - 1,000€, incluyendo estanterías básicas y acabados estándar.
          </li>
          <li>
            <strong>Despensa Personalizada</strong>: 1,500€ - 3,000€, incluyendo diseño personalizado y materiales de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Define el Espacio y Funcionalidad</strong>: Determina las necesidades específicas de almacenamiento.</p>
        <p>2. <strong>Solicita Presupuestos</strong>: Obtén cotizaciones detalladas de varios contratistas.</p>
        <p>3. <strong>Considera los Costos Adicionales</strong>: Incluye gastos como permisos y preparación del sitio.</p>
      </section>

      <section>
        <p className="text-lg">
          Construir una despensa puede mejorar significativamente la organización y eficiencia de tu cocina. Asegúrate de considerar todos los factores antes de comenzar el proyecto.
        </p>
      </section>
    </div>
  );
};

export default HacerDespensa;