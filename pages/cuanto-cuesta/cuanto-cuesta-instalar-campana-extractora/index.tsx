import Head from 'next/head';

const InstalacionCampanaExtractor = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar o cambiar una campana extractora? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación o cambio de campanas extractoras y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-campana-extractora`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar o cambiar una campana extractora?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €100 - €200</p>
            <p>Incluye instalación de campana extractora estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: €200 - €400</p>
            <p>Incluye instalación de campana extractora con ventilación externa o funciones especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de campana extractora: estándar, con ventilación externa, con funciones adicionales, etc.</li>
          <li>Complejidad de la instalación: acceso al conducto de ventilación, configuraciones eléctricas necesarias, etc.</li>
          <li>Normativas locales y requisitos de instalación.</li>
          <li>Costo de la campana extractora en sí misma.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalación de campana extractora</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €100 - €200, incluyendo instalación de campana extractora estándar.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: €200 - €400, incluyendo instalación de campana extractora con ventilación externa o funciones especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el tipo de campana extractora requerida y las características del espacio.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener cotizaciones detalladas de instaladores de campanas extractoras.</p>
        <p>3. <strong>Considerar opciones de diseño</strong>: Evaluar las necesidades de ventilación y las funciones deseadas.</p>
        <p>4. <strong>Cumplimiento normativo</strong>: Asegurarse de cumplir con las regulaciones locales y contratar profesionales cualificados.</p>
      </section>

      <section>
        <p className="text-lg">
          Al comprender los factores que influyen en los costos y planificar adecuadamente, puedes realizar una instalación o cambio de campana extractora efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalacionCampanaExtractor;
