import Head from 'next/head';

const VaciarPiscinaCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta vaciar una piscina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a vaciar una piscina y los factores que pueden afectar el precio de este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-vaciar-piscina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta vaciar una piscina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Vaciar y Limpiar: 200€ - 500€</p>
            <p>Incluye el drenaje del agua, limpieza de la piscina y desinfección.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Solo Vaciar: 100€ - 300€</p>
            <p>Costo más bajo que incluye solo el drenaje del agua sin limpieza adicional.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Piscina.</li>
          <li>Nivel de Suciedad y Residuos.</li>
          <li>Necesidad de Limpieza y Desinfección.</li>
          <li>Accesibilidad al Sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Vaciar una Piscina</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Vaciar y Limpiar</strong>: 200€ - 500€, incluye drenaje, limpieza y desinfección.
          </li>
          <li>
            <strong>Solo Vaciar</strong>: 100€ - 300€, costo más bajo sin limpieza adicional.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Mantenimiento y Consideraciones</h2>
        <p>1. <strong>Programación de Vaciado</strong>: Considerar el momento adecuado para el vaciado según el mantenimiento de la piscina.</p>
        <p>2. <strong>Limpieza y Desinfección</strong>: Realizar una limpieza completa para mantener la piscina en condiciones óptimas.</p>
        <p>3. <strong>Consultar con Profesionales</strong>: Obtener presupuestos de empresas especializadas en mantenimiento de piscinas.</p>
      </section>

      <section>
        <p className="text-lg">
          Vaciar una piscina correctamente es esencial para mantener la calidad del agua y prolongar la vida útil de la piscina. Planifica y presupuesta para este servicio importante en tu propiedad.
        </p>
      </section>
    </div>
  );
};

export default VaciarPiscinaCost;
