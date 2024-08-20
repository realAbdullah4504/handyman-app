import Head from 'next/head';

const ConstruirJardinCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un jardín? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la construcción de jardines y cómo planificar tu presupuesto adecuadamente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-jardin`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un jardín?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño Básico: 500€ - 1,000€</p>
            <p>Incluye planificación básica y plantación de elementos esenciales.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Diseño Completo: 1,000€ - 5,000€</p>
            <p>Incluye diseño detallado, selección de plantas y elementos decorativos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad del diseño del jardín.</li>
          <li>Tipo de plantas y materiales de construcción.</li>
          <li>Necesidad de instalaciones adicionales como sistemas de riego o iluminación.</li>
          <li>Costos laborales y tarifas del diseñador de jardines.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Construcción de Jardín</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Diseño Básico</strong>: 500€ - 1,000€, incluye planificación básica y plantación de elementos esenciales.
          </li>
          <li>
            <strong>Diseño Completo</strong>: 1,000€ - 5,000€, incluye diseño detallado, selección de plantas y elementos decorativos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Construir un Jardín</h2>
        <p>1. <strong>Planificación Detallada</strong>: Define claramente tus objetivos y requerimientos antes de comenzar la construcción.</p>
        <p>2. <strong>Selección de Plantas</strong>: Elige plantas adecuadas para tu clima y condiciones de suelo.</p>
        <p>3. <strong>Presupuesto Realista</strong>: Considera todos los costos involucrados, incluyendo mantenimiento a largo plazo.</p>
        <p>4. <strong>Contratación de Profesionales</strong>: Consulta con diseñadores de jardines y paisajistas para obtener el mejor resultado.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para construir un jardín según tus necesidades específicas y asegúrate de considerar todos los factores relevantes para un espacio exterior hermoso y funcional.
        </p>
      </section>
    </div>
  );
};

export default ConstruirJardinCost;
