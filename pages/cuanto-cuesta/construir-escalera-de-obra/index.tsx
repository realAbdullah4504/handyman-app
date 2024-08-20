import Head from 'next/head';

const ConstruirEscaleraDeObra = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una escalera de obra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una escalera de obra en tu propiedad y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-escalera-de-obra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una escalera de obra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Escalera Básica: 1,000€ - 2,000€</p>
            <p>Incluye diseño y construcción estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Escalera Personalizada: 2,000€ - 5,000€</p>
            <p>Incluye características especiales y personalización.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la escalera.</li>
          <li>Materiales utilizados, como hormigón, madera, etc.</li>
          <li>Accesorios adicionales como barandillas, iluminación, etc.</li>
          <li>Costos de permisos y regulaciones locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Consultar con un Arquitecto o Ingeniero</strong>: Asegúrate de tener un diseño detallado y planos.</p>
        <p>2. <strong>Obtención de Permisos</strong>: Verifica los requisitos locales y obtén los permisos necesarios.</p>
        <p>3. <strong>Selección de Contratistas</strong>: Solicita propuestas de varios contratistas especializados en construcción de escaleras de obra.</p>
        <p>4. <strong>Costos Adicionales</strong>: Considera otros gastos como mano de obra, materiales y acabados.</p>
      </section>

      <section>
        <p className="text-lg">
          Construir una escalera de obra puede ser esencial para mejorar la accesibilidad y la estética de tu propiedad.
        </p>
      </section>
    </div>
  );
};

export default ConstruirEscaleraDeObra;