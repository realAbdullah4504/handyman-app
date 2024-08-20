import Head from 'next/head';

const InstalacionSalidaHumos = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar una salida de humos en la cocina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de una salida de humos en la cocina y cómo presupuestar para este tipo de servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-salida-de-humos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar una salida de humos en la cocina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €500 - €1,000</p>
            <p>Incluye instalación estándar para salidas de humos en cocinas residenciales.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Compleja: €1,000 - €2,000</p>
            <p>Incluye instalación en cocinas comerciales o con requerimientos especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de cocina: residencial, comercial, industrial, etc.</li>
          <li>Longitud y complejidad del conducto de humos.</li>
          <li>Necesidad de adaptaciones estructurales o eléctricas.</li>
          <li>Normativas locales y requisitos de seguridad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalación de salida de humos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €500 - €1,000, incluyendo instalación estándar en cocinas residenciales.
          </li>
          <li>
            <strong>Instalación Compleja</strong>: €1,000 - €2,000, incluyendo instalación en cocinas comerciales o con requerimientos especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar el tipo de cocina y los requisitos específicos para la salida de humos.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener cotizaciones detalladas de empresas especializadas en instalación de salidas de humos.</p>
        <p>3. <strong>Considerar requisitos legales</strong>: Asegurarse de cumplir con las normativas locales y requisitos de seguridad relacionados.</p>
        <p>4. <strong>Calidad del servicio</strong>: Elegir proveedores con experiencia y referencias sólidas para garantizar una instalación segura y eficiente.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que influyen en los costos y planificar adecuadamente, puedes gestionar eficazmente la instalación de una salida de humos en la cocina dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalacionSalidaHumos;
