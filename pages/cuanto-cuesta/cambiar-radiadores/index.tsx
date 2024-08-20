import Head from 'next/head';

const CambiarRadiadoresCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar radiadores? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio de radiadores y cómo planificar este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cambiar-radiadores`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar radiadores?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio Estimado: 500€ - 2,000€</p>
            <p>Incluye el cambio estándar de radiadores para una vivienda promedio.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Varía Según el Número y Tamaño de Radiadores</p>
            <p>Costos adicionales pueden aplicarse para radiadores especiales o instalaciones complejas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Número de Radiadores: Cada radiador incrementa el costo total.</li>
          <li>Tamaño y Tipo de Radiador: Radiadores grandes o especiales pueden ser más costosos.</li>
          <li>Complejidad de la Instalación: Requisitos adicionales como modificación de tuberías.</li>
          <li>Ubicación: Variación de precios según la región y el mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambio de Radiadores</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio Estimado</strong>: 500€ - 2,000€, incluyendo cambio estándar de radiadores para una vivienda promedio.
          </li>
          <li>
            <strong>Costos Adicionales</strong>: Pueden aplicarse para radiadores especiales o instalaciones complejas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Cambio de Radiadores</h2>
        <p>1. <strong>Evaluación de Radiadores Actuales</strong>: Determina si todos los radiadores necesitan ser cambiados.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Solicita múltiples presupuestos de profesionales para comparar precios y servicios.</p>
        <p>3. <strong>Consideración de Eficiencia Energética</strong>: Elige radiadores que mejoren la eficiencia energética de tu hogar.</p>
        <p>4. <strong>Instalación Profesional</strong>: Contrata a instaladores con experiencia en cambios de radiadores para asegurar un trabajo de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Cambiando los radiadores adecuadamente, puedes mejorar la eficiencia energética y el confort en tu hogar.
        </p>
      </section>
    </div>
  );
};

export default CambiarRadiadoresCosto;