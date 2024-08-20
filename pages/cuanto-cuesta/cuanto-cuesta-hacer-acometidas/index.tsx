import Head from 'next/head';

const AcometidasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer acometidas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con hacer acometidas para servicios como electricidad, agua o gas, y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-acometidas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer acometidas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Acometidas Eléctricas: 1000€ - 5000€</p>
            <p>Incluye la conexión inicial desde el poste o la red eléctrica hasta la propiedad.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Acometidas de Agua: 500€ - 3000€</p>
            <p>Incluye la conexión desde la red de agua municipal hasta la propiedad.</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Acometidas de Gas: 1500€ - 8000€</p>
            <p>Incluye la conexión desde la red de gas hasta la propiedad, incluyendo la instalación de contadores si es necesario.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Acometida: Electricidad, agua o gas, cada uno tiene costos variables según la infraestructura necesaria.</li>
          <li>Distancia y Accesibilidad: La distancia desde la red principal y la accesibilidad al sitio de instalación pueden influir en los costos.</li>
          <li>Normativas Locales: Cumplimiento de regulaciones y permisos locales para realizar las conexiones.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Acometidas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Acometidas Eléctricas</strong>: 1000€ - 5000€, incluyendo la conexión inicial desde el poste o la red eléctrica hasta la propiedad.
          </li>
          <li>
            <strong>Acometidas de Agua</strong>: 500€ - 3000€, incluyendo la conexión desde la red de agua municipal hasta la propiedad.
          </li>
          <li>
            <strong>Acometidas de Gas</strong>: 1500€ - 8000€, incluyendo la conexión desde la red de gas hasta la propiedad, incluyendo la instalación de contadores si es necesario.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades de Acometida</strong>: Determina los servicios necesarios (electricidad, agua, gas) y las distancias involucradas.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Consulta con empresas especializadas para obtener presupuestos detallados y comparar costos y servicios.</p>
        <p>3. <strong>Permiso y Regulaciones</strong>: Asegúrate de cumplir con todos los permisos y regulaciones locales antes de iniciar cualquier trabajo de acometida.</p>
        <p>4. <strong>Calidad y Seguridad</strong>: Prioriza la calidad de los materiales y la seguridad en la instalación para evitar problemas futuros.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente las acometidas, puedes garantizar conexiones seguras y eficientes para tu propiedad, cumpliendo con todas las normativas y requisitos locales.
        </p>
      </section>
    </div>
  );
};

export default AcometidasCoste;