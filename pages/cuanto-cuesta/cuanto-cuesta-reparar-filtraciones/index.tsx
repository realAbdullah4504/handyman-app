import Head from 'next/head';

const CosteRepararFiltraciones = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar filtraciones en una vivienda? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de filtraciones en una vivienda y cómo planificar tu presupuesto para resolver eficazmente problemas de humedad."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reparar-filtraciones`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar filtraciones en una vivienda?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Estimado: 300€ - 800€ por reparación</p>
            <p>Incluye detección y solución básica de filtraciones menores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Detallado: 800€ - 2000€ por reparación</p>
            <p>Incluye reparaciones complejas y en múltiples áreas de la vivienda.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Gravedad de las Filtraciones: Extensión y ubicación de las áreas afectadas por la humedad.</li>
          <li>Daños Estructurales: Necesidad de reparaciones adicionales en paredes, techos o suelos.</li>
          <li>Tipo de Reparación: Métodos de impermeabilización utilizados y materiales requeridos.</li>
          <li>Profesionalismo del Servicio: Experiencia del contratista y garantías ofrecidas por el trabajo realizado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparación de Filtraciones</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo Estimado</strong>: 300€ - 800€ por reparación, incluyendo detección y solución básica de filtraciones menores.
          </li>
          <li>
            <strong>Costo Detallado</strong>: 800€ - 2000€ por reparación, incluyendo reparaciones complejas y en múltiples áreas de la vivienda.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Identifica y evalúa las áreas afectadas por filtraciones para determinar la gravedad del problema.</p>
        <p>2. <strong>Selección de Servicio</strong>: Busca recomendaciones y comparaciones de contratistas especializados en reparación de filtraciones.</p>
        <p>3. <strong>Consideración de Calidad</strong>: Prioriza la calidad del trabajo y las garantías ofrecidas para evitar problemas futuros de humedad.</p>
        <p>4. <strong>Presupuesto Adicional</strong>: Prevé un presupuesto adicional para posibles reparaciones estructurales si las filtraciones han causado daños significativos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la reparación de filtraciones en una vivienda, puedes asegurar la integridad estructural y la habitabilidad de tu hogar.
        </p>
      </section>
    </div>
  );
};

export default CosteRepararFiltraciones;