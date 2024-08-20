import Head from 'next/head';

const AcometidaDeGasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer una acometida de gas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con hacer una acometida de gas y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-acometida-de-gas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer una acometida de gas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 500€ - 1500€</p>
            <p>Incluye la conexión básica a la red de gas y la instalación inicial de la acometida.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Compleja: 1500€ - 5000€</p>
            <p>Incluye la instalación de una acometida de gas más compleja, como en áreas urbanas densas o con dificultades de acceso.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Acometida: Simple para viviendas unifamiliares o compleja para edificios o áreas urbanas.</li>
          <li>Longitud y Profundidad: Extensión de la conexión y dificultad del terreno para la excavación.</li>
          <li>Normativas Locales: Cumplimiento de regulaciones y requisitos específicos del municipio o región.</li>
          <li>Accesibilidad: Dificultades de acceso al sitio de instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Acometida de Gas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 500€ - 1500€, incluyendo la conexión básica a la red de gas y la instalación inicial de la acometida.
          </li>
          <li>
            <strong>Instalación Compleja</strong>: 1500€ - 5000€, incluyendo la instalación de una acometida de gas más compleja.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades de Gas</strong>: Determina el tipo de acometida necesaria según el tipo de propiedad y el uso esperado.</p>
        <p>2. <strong>Consulta con Profesionales</strong>: Contacta con empresas especializadas en instalaciones de gas para obtener presupuestos detallados y comparar servicios.</p>
        <p>3. <strong>Considera Requisitos Legales</strong>: Asegúrate de cumplir con todas las normativas y permisos necesarios antes de iniciar la instalación.</p>
        <p>4. <strong>Accesibilidad y Seguridad</strong>: Prioriza la accesibilidad y la seguridad durante la instalación para garantizar un servicio seguro y eficiente.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la acometida de gas, puedes asegurar una conexión segura y eficiente a la red de gas natural, manteniéndote dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default AcometidaDeGasCoste;