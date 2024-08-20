import Head from 'next/head';

const ArreglarSofaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta arreglar un sofá? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el servicio de reparación de sofás y cómo planificar tu presupuesto para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-arreglar-sofa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta arreglar un sofá?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 50€ - 150€</p>
            <p>Costo aproximado por reparaciones menores como cambio de patas o ajuste de estructura.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Completa: 150€ - 500€</p>
            <p>Precio más alto por reparaciones que incluyen cambio de tela, relleno o estructura interna.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión del Daño: Desde reparaciones simples hasta reconstrucciones completas.</li>
          <li>Material y Tamaño del Sofá: Tipos de tela, dimensiones y diseño del sofá.</li>
          <li>Tiempo y Mano de Obra: Costos adicionales por horas de trabajo y experiencia del tapicero.</li>
          <li>Piezas y Materiales Necesarios: Costos de materiales como tela, relleno o piezas de repuesto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Arreglar un Sofá</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 50€ - 150€, incluyendo mano de obra y materiales estándar.
          </li>
          <li>
            <strong>Reparación Completa</strong>: 150€ - 500€, dependiendo de la extensión del daño y los materiales utilizados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Daño</strong>: Determina la extensión del daño y las partes del sofá que necesitan reparación.</p>
        <p>2. <strong>Consulta con Tapiceros</strong>: Obtén múltiples presupuestos detallados para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Considera la Calidad</strong>: Prioriza la calidad de los materiales y la experiencia del tapicero para asegurar resultados duraderos.</p>
        <p>4. <strong>Plazos de Entrega</strong>: Asegúrate de entender los tiempos estimados para la reparación y cualquier requisito especial antes de comenzar.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar el presupuesto para arreglar un sofá, es esencial considerar la calidad de los materiales y la habilidad del profesional para asegurar un resultado satisfactorio y duradero.
        </p>
      </section>
    </div>
  );
};

export default ArreglarSofaCoste;