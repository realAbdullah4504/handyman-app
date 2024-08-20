import Head from 'next/head';

const InstalacionPuntoRecarga = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar un punto de recarga para coche eléctrico? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de puntos de recarga para coches eléctricos y cómo presupuestar para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-punto-recarga`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar un punto de recarga para coche eléctrico?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €500 - €1,000 por punto</p>
            <p>Incluye instalación estándar de un punto de recarga en garaje accesible.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Compleja: €1,000 - €2,000 por punto</p>
            <p>Incluye instalación en lugares de difícil acceso o con requerimientos eléctricos especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de punto de recarga (normal, semi-rápido, rápido).</li>
          <li>Capacidad eléctrica disponible y necesaria.</li>
          <li>Necesidad de obras civiles adicionales.</li>
          <li>Normativas locales y requisitos de seguridad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalar puntos de recarga</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €500 - €1,000 por punto, incluyendo instalación estándar en garaje accesible.
          </li>
          <li>
            <strong>Instalación Compleja</strong>: €1,000 - €2,000 por punto, incluyendo instalación en lugares de difícil acceso o con requerimientos especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar la cantidad y tipo de puntos de recarga necesarios.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener cotizaciones detalladas de empresas instaladoras de puntos de recarga.</p>
        <p>3. <strong>Considerar requisitos legales</strong>: Asegurarse de cumplir con las normativas locales y requisitos eléctricos para puntos de recarga.</p>
        <p>4. <strong>Calidad del servicio</strong>: Elegir un proveedor con experiencia y referencias sólidas para garantizar una instalación segura y eficiente del punto de recarga.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que influyen en los costos y planificar adecuadamente, puedes gestionar eficazmente la instalación de puntos de recarga para coches eléctricos dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalacionPuntoRecarga;