import Head from 'next/head';

const InstalacionLamparas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar lámparas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de lámparas y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-lamparas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar lámparas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €50 - €150</p>
            <p>Incluye instalación de lámparas estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: €150 - €300</p>
            <p>Incluye instalación de lámparas decorativas o técnicas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Cantidad y tipo de lámparas a instalar.</li>
          <li>Complejidad de la instalación eléctrica existente.</li>
          <li>Requisitos adicionales como controladores inteligentes o sistemas de iluminación integrados.</li>
          <li>Normativas locales y requisitos de seguridad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalación de lámparas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €50 - €150, incluyendo instalación de lámparas estándar.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: €150 - €300, incluyendo instalación de lámparas decorativas o técnicas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el tipo y cantidad de lámparas requeridas.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener cotizaciones detalladas de electricistas calificados.</p>
        <p>3. <strong>Considerar tecnología de iluminación</strong>: Valorar opciones como lámparas inteligentes para mayor funcionalidad.</p>
        <p>4. <strong>Seguridad y cumplimiento</strong>: Asegurarse de cumplir con las normativas locales y contratar profesionales certificados.</p>
      </section>

      <section>
        <p className="text-lg">
          Al comprender los factores que influyen en los costos y planificar adecuadamente, puedes realizar una instalación de lámparas efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalacionLamparas;