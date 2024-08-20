import Head from 'next/head';

const LimpiezaColegiosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de colegios? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de colegios y cómo mantener un ambiente limpio y seguro para los estudiantes."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-colegios`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de colegios?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 500€ - 1500€ por mes</p>
            <p>Incluye limpieza diaria de áreas comunes y baños.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Profunda: 1000€ - 3000€ por trimestre</p>
            <p>Incluye limpieza exhaustiva de aulas y áreas específicas según necesidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad del Colegio: Número de aulas, áreas exteriores, etc.</li>
          <li>Frecuencia de Limpieza: Diaria, semanal, mensual o por temporada.</li>
          <li>Tipo de Servicio: Básico o profundo, incluyendo desinfección y mantenimiento.</li>
          <li>Ubicación: Variaciones en costos según la región y el mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para Limpieza de Colegios</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 500€ - 1500€ por mes, incluyendo limpieza diaria de áreas comunes y baños.
          </li>
          <li>
            <strong>Limpieza Profunda</strong>: 1000€ - 3000€ por trimestre, incluyendo limpieza exhaustiva de aulas y áreas específicas según necesidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Identificación de Necesidades</strong>: Determinar áreas críticas que requieren limpieza regular y profunda.</p>
        <p>2. <strong>Consulta y Comparación</strong>: Obtener cotizaciones detalladas de proveedores de servicios de limpieza especializados en colegios.</p>
        <p>3. <strong>Selección de Servicios</strong>: Elegir el servicio adecuado basado en presupuesto y requisitos específicos de limpieza.</p>
        <p>4. <strong>Implementación y Evaluación</strong>: Establecer un plan de limpieza programado y evaluar continuamente la calidad del servicio.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener un ambiente limpio en colegios no solo mejora la salud de los estudiantes, sino que también promueve un entorno propicio para el aprendizaje.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaColegiosCoste;