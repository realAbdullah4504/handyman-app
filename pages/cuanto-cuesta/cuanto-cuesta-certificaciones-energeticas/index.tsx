import Head from 'next/head';

const CertificacionesEnergeticasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Certificaciones Energéticas: ¿Cuánto cuesta? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con las certificaciones energéticas y cómo planificar el presupuesto para la evaluación y mejora de la eficiencia energética de tu propiedad."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-certificaciones-energeticas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">Certificaciones Energéticas: ¿Cuánto cuesta?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Certificación Energética: 100€ - 300€</p>
            <p>Evaluación inicial y expedición del certificado energético.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Energética: 1,000€ - 5,000€</p>
            <p>Implementación de mejoras para aumentar la eficiencia energética.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Propiedad: Desde apartamentos hasta edificios comerciales.</li>
          <li>Estado Actual de Eficiencia Energética: Necesidad de mejoras y actualizaciones.</li>
          <li>Profesionalidad del Evaluador: Experiencia y certificaciones del evaluador energético.</li>
          <li>Ubicación Geográfica: Variaciones en costos basadas en la región y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Certificaciones Energéticas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Certificación Energética</strong>: 100€ - 300€, incluyendo evaluación y expedición del certificado.
          </li>
          <li>
            <strong>Reforma Energética</strong>: 1,000€ - 5,000€, dependiendo de las mejoras implementadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Determinar el estado actual de eficiencia energética.</p>
        <p>2. <strong>Implementación de Mejoras</strong>: Realizar mejoras según las recomendaciones del certificador.</p>
        <p>3. <strong>Seguimiento y Mantenimiento</strong>: Monitorear el consumo energético y hacer ajustes si es necesario.</p>
        <p>4. <strong>Incentivos y Subvenciones</strong>: Explorar opciones locales para reducir costos a través de ayudas financieras.</p>
      </section>

      <section>
        <p className="text-lg">
          Las certificaciones energéticas ayudan a mejorar la eficiencia de la energía en las propiedades, reduciendo costos a largo plazo y promoviendo la sostenibilidad ambiental.
        </p>
      </section>
    </div>
  );
};

export default CertificacionesEnergeticasCoste;