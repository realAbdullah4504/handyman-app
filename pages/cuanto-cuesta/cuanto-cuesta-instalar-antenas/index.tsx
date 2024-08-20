import Head from 'next/head';

const CuantoCuestaInstalarAntenas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar antenas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de antenas y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-antenas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar antenas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Antena estándar: €100 - €300</p>
            <p>Incluye instalación básica de antena estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Antena parabólica: €200 - €500</p>
            <p>Para antenas parabólicas o de mayor tamaño.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de antena: Estándar, parabólica, interior, exterior, etc.</li>
          <li>Ubicación: Dificultad de acceso al sitio de instalación.</li>
          <li>Equipamiento adicional: Amplificadores, cables, soportes, etc.</li>
          <li>Normativas locales: Requisitos de permisos y cumplimiento de normativas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio de instalación de antenas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Antena estándar</strong>: €100 - €300, incluye instalación básica de antena estándar.
          </li>
          <li>
            <strong>Antena parabólica</strong>: €200 - €500, para antenas parabólicas o de mayor tamaño.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades de antenas</strong>: Determinar el tipo y ubicación de la antena requerida.</p>
        <p>2. <strong>Solicitud de cotizaciones</strong>: Obtener varios presupuestos de instaladores de antenas.</p>
        <p>3. <strong>Consideración de regulaciones</strong>: Asegurar el cumplimiento de las normativas locales para la instalación.</p>
        <p>4. <strong>Instalación profesional</strong>: Contratar a instaladores con experiencia en el tipo de antena necesaria.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación adecuada, puedes asegurar una instalación de antena efectiva y dentro del presupuesto para tu hogar o negocio.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaInstalarAntenas;