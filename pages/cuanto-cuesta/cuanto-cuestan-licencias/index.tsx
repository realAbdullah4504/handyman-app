import Head from 'next/head';

const CuantoCuestanLicencias = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan las licencias de construcción? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con las licencias de construcción y cómo gestionar los permisos necesarios para proyectos de construcción o renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuestan-licencias`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan las licencias de construcción?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Licencia de obra menor: €100 - €500</p>
            <p>Para proyectos pequeños como reformas interiores o exteriores simples.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Licencia de obra mayor: €500 - €2000+</p>
            <p>Para proyectos grandes como nuevas construcciones o remodelaciones importantes.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de licencia: Obra menor vs. obra mayor.</li>
          <li>Área y ubicación del proyecto: Dependiendo de la normativa local y municipalidad.</li>
          <li>Complejidad del proyecto: Impacto ambiental, zonificación, etc.</li>
          <li>Regulaciones locales: Tarifas y requisitos específicos de cada municipio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Investigación inicial</strong>: Determinar qué licencias son necesarias para tu proyecto.</p>
        <p>2. <strong>Solicitar información</strong>: Consultar con el ayuntamiento o municipio sobre los costos exactos.</p>
        <p>3. <strong>Preparación de documentos</strong>: Reunir la documentación necesaria para la solicitud de licencias.</p>
        <p>4. <strong>Seguimiento de aprobaciones</strong>: Monitorear el estado de las solicitudes y permisos.</p>
      </section>

      <section>
        <p className="text-lg">
          Obtener las licencias adecuadas es crucial para asegurar la legalidad y cumplimiento de normativas en proyectos de construcción.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestanLicencias;