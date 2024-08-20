import Head from 'next/head';

const ExcavacionesCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer excavaciones? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con hacer excavaciones y cómo presupuestar para proyectos de movimiento de tierras."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-excavaciones`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer excavaciones?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Excavación Básica: €50 - €100 por metro cúbico</p>
            <p>Incluye excavación de zanjas y movimiento de tierras estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Excavación Profunda: €100 - €200 por metro cúbico</p>
            <p>Incluye excavaciones especializadas y profundas con maquinaria pesada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de terreno: Costos pueden variar según la dureza y accesibilidad del terreno.</li>
          <li>Profundidad y tamaño de la excavación: Proyectos más grandes o profundos pueden tener costos adicionales.</li>
          <li>Equipo y maquinaria: Uso de maquinaria especializada puede influir en el costo total.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para excavaciones</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Excavación Básica</strong>: €50 - €100 por metro cúbico, incluyendo excavación de zanjas y movimiento de tierras estándar.
          </li>
          <li>
            <strong>Excavación Profunda</strong>: €100 - €200 por metro cúbico, incluyendo excavaciones especializadas y profundas con maquinaria pesada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación del sitio</strong>: Determinar el tipo y tamaño de excavación requerida.</p>
        <p>2. <strong>Solicitar múltiples presupuestos</strong>: Obtener estimaciones detalladas de diferentes empresas de excavación.</p>
        <p>3. <strong>Considerar equipo y experiencia</strong>: Elegir una empresa con equipo adecuado y experiencia en el tipo de excavación necesaria.</p>
        <p>4. <strong>Negociar términos claros</strong>: Establecer un contrato detallado que especifique alcance, costos y plazos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y entender los factores que afectan los costos de hacer excavaciones, puedes garantizar un proyecto exitoso dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default ExcavacionesCoste;
