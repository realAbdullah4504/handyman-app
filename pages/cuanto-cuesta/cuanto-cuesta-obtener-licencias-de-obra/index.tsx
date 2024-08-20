import Head from 'next/head';

const LicenciasObraCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta obtener licencias de obra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con obtener licencias de obra y cómo planificar tu presupuesto para este proceso."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-obtener-licencias-de-obra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta obtener licencias de obra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 200€ - 500€</p>
            <p>Incluye las tarifas de solicitud estándar y los costos administrativos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 500€ - 1000€ o más</p>
            <p>Incluye costos adicionales para proyectos grandes, revisiones de planos, etc.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Proyecto: Proyectos más grandes pueden requerir licencias más costosas.</li>
          <li>Complejidad del Proyecto: Proyectos con requisitos especiales pueden implicar costos adicionales.</li>
          <li>Ubicación: Las tarifas pueden variar según la ubicación geográfica y las normativas locales.</li>
          <li>Requisitos Especiales: Algunos proyectos pueden requerir estudios ambientales u otras aprobaciones.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Obtener Licencias de Obra</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 200€ - 500€, incluyendo tarifas estándar de solicitud y costos administrativos.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 500€ - 1000€ o más, incluyendo costos adicionales para proyectos grandes y revisiones de planos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina los requisitos específicos de licencia para tu proyecto de obra.</p>
        <p>2. <strong>Investigación y Comparación</strong>: Solicita presupuestos detallados y compara tarifas entre diferentes entidades.</p>
        <p>3. <strong>Considerar Costos Adicionales</strong>: Prevé fondos para posibles costos extras, como revisiones de planos o permisos especiales.</p>
        <p>4. <strong>Seguimiento de Normativas</strong>: Asegúrate de cumplir con todas las normativas locales y requisitos legales durante el proceso de obtención de licencias.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la obtención de licencias de obra, puedes asegurar que tu proyecto cumpla con los requisitos legales y financieros necesarios.
        </p>
      </section>
    </div>
  );
};

export default LicenciasObraCoste;