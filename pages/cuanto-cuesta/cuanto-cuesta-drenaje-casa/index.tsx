import Head from 'next/head';

const DrenajeCasaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el drenaje de una casa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el drenaje de una casa y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-drenaje-casa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el drenaje de una casa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Drenaje Básico: 500€ - 1,000€</p>
            <p>Incluye instalación de sistemas básicos de drenaje para la casa.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Drenaje Completo: 1,000€ - 3,000€</p>
            <p>Incluye instalación de sistemas avanzados de drenaje con mayor capacidad y durabilidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Casa: Área total que necesita ser drenada.</li>
          <li>Tipo de Suelo: Influencia en la dificultad de la instalación del drenaje.</li>
          <li>Profundidad del Drenaje: Necesidades específicas del proyecto de drenaje.</li>
          <li>Regulaciones Locales: Normativas que puedan afectar el costo y la instalación del drenaje.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para el Drenaje de una Casa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Drenaje Básico</strong>: 500€ - 1,000€, incluyendo instalación de sistemas básicos.
          </li>
          <li>
            <strong>Drenaje Completo</strong>: 1,000€ - 3,000€, incluyendo sistemas avanzados de drenaje.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Proyecto</strong>: Determina las necesidades específicas de drenaje para tu casa.</p>
        <p>2. <strong>Comparación de Precios</strong>: Obtén varios presupuestos de profesionales para comparar servicios y costos.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Factores como la durabilidad de los materiales y la garantía de instalación.</p>
        <p>4. <strong>Profesionales Calificados</strong>: Contrata solo a técnicos calificados y con experiencia en instalaciones de drenaje.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente el drenaje de tu casa, puedes asegurar una gestión efectiva y sostenible del agua en tu propiedad.
        </p>
      </section>
    </div>
  );
};

export default DrenajeCasaCoste;