import Head from 'next/head';

const PurgarRadiadoresCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta purgar radiadores? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el purgado de radiadores y cómo mantener eficientemente tu sistema de calefacción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-purgar-radiadores`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta purgar radiadores?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicio Básico: 50€ - 100€</p>
            <p>Incluye el purgado estándar de radiadores y ajustes menores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicio Avanzado: 100€ - 200€</p>
            <p>Incluye purgado de radiadores con sistemas más complejos o ajustes adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado de los Radiadores: Radiadores más antiguos o mal mantenidos pueden requerir más tiempo y esfuerzo para el purgado.</li>
          <li>Accesibilidad: Ubicación de los radiadores y facilidad de acceso para el técnico.</li>
          <li>Número de Radiadores: Costo total variará según la cantidad de radiadores que necesiten ser purgados.</li>
          <li>Profesionalismo: Experiencia del técnico y calidad del servicio ofrecido.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para Purgar Radiadores</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Servicio Básico</strong>: 50€ - 100€, incluyendo el purgado estándar de radiadores.
          </li>
          <li>
            <strong>Servicio Avanzado</strong>: 100€ - 200€, incluyendo ajustes adicionales o sistemas más complejos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Revisión de Radiadores</strong>: Determina cuántos radiadores necesitan ser purgados y su estado actual.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicita múltiples presupuestos detallados para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Consideraciones de Mantenimiento</strong>: Programa purgados regulares para mantener la eficiencia y durabilidad de tus radiadores.</p>
        <p>4. <strong>Selección del Técnico</strong>: Elige un técnico con experiencia y buenas referencias para garantizar un servicio de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          El purgado regular de radiadores es crucial para mantener la eficiencia de tu sistema de calefacción y evitar problemas futuros.
        </p>
      </section>
    </div>
  );
};

export default PurgarRadiadoresCoste;