import Head from 'next/head';

const ProyectoReformaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un proyecto de reforma? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la realización de un proyecto de reforma y cómo planificar tu presupuesto para estas obras."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-proyecto-reforma`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un proyecto de reforma?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Básica: 5,000€ - 10,000€</p>
            <p>Incluye cambios mínimos en la estructura y acabados estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Completa: 20,000€ - 50,000€</p>
            <p>Incluye remodelación completa con materiales de alta calidad y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Dimensiones del Proyecto: Tamaño y complejidad de la reforma.</li>
          <li>Materiales Utilizados: Calidad y tipo de materiales seleccionados.</li>
          <li>Mano de Obra: Costos de la contratación de profesionales y trabajadores.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y condiciones locales del mercado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Proyectos de Reforma</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reforma Básica</strong>: 5,000€ - 10,000€, incluyendo cambios mínimos y acabados estándar.
          </li>
          <li>
            <strong>Reforma Completa</strong>: 20,000€ - 50,000€, incluyendo remodelación integral y diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definición de Objetivos</strong>: Determinar los objetivos y alcance del proyecto de reforma.</p>
        <p>2. <strong>Consultar y Comparar</strong>: Obtener múltiples presupuestos de empresas de reformas para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Considerar Detalles</strong>: Evaluar la calidad de los materiales y la experiencia de los profesionales para asegurar resultados satisfactorios.</p>
        <p>4. <strong>Planificación Financiera</strong>: Establecer un presupuesto detallado y contemplar posibles imprevistos durante la ejecución del proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente un proyecto de reforma, puedes transformar tu espacio de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ProyectoReformaCoste;