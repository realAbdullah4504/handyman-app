import Head from 'next/head';

const TirarParedMaestra = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta tirar una pared maestra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la demolición de una pared maestra y cómo planificar tu presupuesto para este proyecto de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/tirar-pared-maestra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta tirar una pared maestra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Demolición Básica: 500€ - 1,000€</p>
            <p>Incluye demolición estándar y eliminación de escombros.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Demolición Compleja: 1,000€ - 2,000€</p>
            <p>Incluye estructuras complejas o paredes de mayor tamaño.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Grosor de la Pared: Dimensiones y materiales de la pared a demoler.</li>
          <li>Estado de la Pared: Condición actual y necesidad de reparaciones adicionales.</li>
          <li>Accesibilidad: Facilidad de acceso al sitio de trabajo.</li>
          <li>Ubicación: Costos regionales y variaciones del mercado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Demolición de Pared Maestra</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Demolición Básica</strong>: 500€ - 1,000€, incluyendo demolición estándar y eliminación de escombros.
          </li>
          <li>
            <strong>Demolición Compleja</strong>: 1,000€ - 2,000€, incluyendo estructuras complejas o paredes de mayor tamaño.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Pared</strong>: Inspección para determinar el tipo de demolición requerida.</p>
        <p>2. <strong>Cotización de Materiales</strong>: Obtención de presupuestos detallados para equipos y materiales necesarios.</p>
        <p>3. <strong>Consideración de Tiempo y Mano de Obra</strong>: Estimación del tiempo requerido y costos de mano de obra.</p>
        <p>4. <strong>Reparaciones Adicionales</strong>: Planificación para reparaciones o modificaciones estructurales necesarias.</p>
      </section>

      <section>
        <p className="text-lg">
          La demolición de una pared maestra puede tener un impacto significativo en la distribución de espacios. Asegúrate de planificar cuidadosamente para ajustarte a tu presupuesto y necesidades específicas.
        </p>
      </section>
    </div>
  );
};

export default TirarParedMaestra;