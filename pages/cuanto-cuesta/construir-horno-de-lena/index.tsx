import Head from 'next/head';

const ConstruirHornoDeLena = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un horno de leña? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de un horno de leña, incluyendo materiales, mano de obra y factores que afectan los costos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-horno-de-lena`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un horno de leña?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Horno de Leña Básico: 500€ - 1,000€</p>
            <p>Incluye materiales básicos y mano de obra estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Horno de Leña de Diseño: 2,000€ - 5,000€</p>
            <p>Incluye materiales de alta calidad y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Material del Horno: Diferencias en costos entre ladrillo, piedra, adobe, etc.</li>
          <li>Complejidad del Diseño: Número de cámaras, tamaño y características adicionales.</li>
          <li>Ubicación: Variaciones regionales en costos de mano de obra y materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir un Horno de Leña</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Horno de Leña Básico</strong>: 500€ - 1,000€, incluyendo materiales básicos y mano de obra estándar.
          </li>
          <li>
            <strong>Horno de Leña de Diseño</strong>: 2,000€ - 5,000€, incluyendo materiales de alta calidad y diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selecciona el Material y Diseño</strong>: Decide qué tipo de horno de leña deseas construir.</p>
        <p>2. <strong>Solicita Presupuestos</strong>: Obtén cotizaciones detalladas de varios contratistas.</p>
        <p>3. <strong>Considera los Costos Adicionales</strong>: Incluye gastos como permisos y preparación del sitio.</p>
      </section>

      <section>
        <p className="text-lg">
          Construir un horno de leña puede ser una excelente adición a tu hogar o jardín. Asegúrate de considerar todos los factores antes de comenzar el proyecto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirHornoDeLena;
