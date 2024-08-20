import Head from 'next/head';

const LicenciasAperturaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan las licencias de apertura? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con las licencias de apertura para negocios y cómo gestionar el presupuesto para cumplir con los requisitos legales."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-licencias-apertura`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan las licencias de apertura?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Básico: €100 - €500</p>
            <p>Incluye tarifas administrativas y procesamiento.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Avanzado: €500 - €2000</p>
            <p>Incluye inspecciones y requisitos adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de negocio: Requisitos específicos para diferentes tipos de establecimientos.</li>
          <li>Tamaño del local: Área a cubrir y capacidad de personas.</li>
          <li>Ubicación: Tarifas pueden variar según la ubicación geográfica.</li>
          <li>Requisitos adicionales: Inspecciones de seguridad y cumplimiento normativo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para licencias de apertura</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo Básico</strong>: €100 - €500, incluyendo tarifas administrativas y procesamiento.
          </li>
          <li>
            <strong>Costo Avanzado</strong>: €500 - €2000, incluyendo inspecciones y requisitos adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de requisitos legales</strong>: Determinar las licencias específicas necesarias para tu negocio.</p>
        <p>2. <strong>Consultar con autoridades locales</strong>: Obtener información actualizada sobre tarifas y procedimientos.</p>
        <p>3. <strong>Establecer un presupuesto holístico</strong>: Incluir costos de cumplimiento normativo en el presupuesto inicial de apertura de negocio.</p>
        <p>4. <strong>Considerar asistencia profesional</strong>: Contratar servicios legales o consultoría para asegurar cumplimiento normativo correcto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y comprender los factores que afectan los costos de licencias de apertura, puedes iniciar tu negocio de manera legal y efectiva dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default LicenciasAperturaCoste;
