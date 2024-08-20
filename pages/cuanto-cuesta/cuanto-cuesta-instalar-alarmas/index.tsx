import Head from 'next/head';

const CuantoCuestaInstalarAlarmas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar alarmas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de sistemas de alarmas y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-alarmas`}
        />
        
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta instalar alarmas?
      </h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sistema básico: €300 - €800</p>
            <p>Incluye alarmas para puertas y ventanas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">
              Sistema avanzado: €1,000 - €3,000
            </p>
            <p>Para sistemas con cámaras y monitoreo remoto.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de sistema: Básico, avanzado, con o sin cámaras.</li>
          <li>Tamaño de la propiedad: Número de puertas y ventanas a proteger.</li>
          <li>Funcionalidades adicionales: Monitoreo remoto, respuesta de emergencia, etc.</li>
          <li>Requerimientos específicos: Instalación en propiedad residencial o comercial.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Precios promedio de instalación de alarmas
        </h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Sistema básico</strong>: €300 - €800, incluye alarmas para puertas y ventanas.
          </li>
          <li>
            <strong>Sistema avanzado</strong>: €1,000 - €3,000, para sistemas con cámaras y monitoreo remoto.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de seguridad</strong>: Determinar las necesidades específicas de seguridad.</p>
        <p>2. <strong>Consultas y comparaciones</strong>: Obtener cotizaciones de varias empresas de alarmas.</p>
        <p>3. <strong>Consideraciones adicionales</strong>: Evaluar características como garantía, servicio al cliente y revisiones de usuarios.</p>
        <p>4. <strong>Instalación profesional</strong>: Contratar a instaladores con experiencia en sistemas de alarmas.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y evaluación de opciones, puedes garantizar una instalación efectiva de sistemas de alarmas dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaInstalarAlarmas;