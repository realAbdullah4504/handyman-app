import Head from 'next/head';

const FontaneriaCocinaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la fontanería de una cocina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la fontanería de una cocina y cómo presupuestar para esta renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-fontaneria-cocina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la fontanería de una cocina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación básica: €500 - €1,000+</p>
            <p>Incluye tuberías estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación avanzada: €1,000 - €3,000+</p>
            <p>Incluye tuberías de alta calidad y trabajos especializados de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Complejidad de la instalación de tuberías y conexiones.</li>
          <li>Número y tipo de accesorios de fontanería requeridos.</li>
          <li>Costo de materiales como tuberías, grifos y válvulas.</li>
          <li>Accesibilidad y condiciones del espacio de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determina las necesidades específicas de fontanería para tu cocina.</p>
        <p>2. <strong>Selección de materiales</strong>: Elige materiales de calidad que se ajusten a tu presupuesto y requisitos.</p>
        <p>3. <strong>Solicitud de presupuestos</strong>: Obtén múltiples presupuestos detallados de fontaneros con experiencia.</p>
        <p>4. <strong>Considera costos adicionales</strong>: Incluye costos de demolición, remoción de escombros y limpieza final.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación adecuada y la elección correcta de servicios y materiales, puedes realizar la fontanería de tu cocina dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default FontaneriaCocinaCosto;
