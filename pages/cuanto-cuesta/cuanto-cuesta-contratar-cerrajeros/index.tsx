import Head from 'next/head';

const CerrajerosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a cerrajeros? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con contratar a cerrajeros y cómo presupuestar para proyectos de cerrajería y seguridad."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-contratar-cerrajeros`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a cerrajeros?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicios Básicos: €50 - €100 por hora</p>
            <p>Incluye servicios como aperturas de puertas o cambios de cerraduras simples.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicios Avanzados: €100 - €200+ por hora</p>
            <p>Incluye servicios avanzados como instalaciones de sistemas de seguridad o reparaciones complejas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de servicio: El costo varía según si son servicios básicos de cerrajería o servicios más avanzados.</li>
          <li>Equipo y materiales: Utilizar cerraduras estándar o sistemas de seguridad avanzados afectará el costo total del proyecto.</li>
          <li>Urgencia del servicio: Servicios fuera de horas laborales o de emergencia pueden tener costos adicionales.</li>
          <li>Ubicación del proyecto: Los costos pueden variar según la ubicación geográfica y la disponibilidad de cerrajeros locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para contratar a cerrajeros</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Servicios Básicos</strong>: €50 - €100 por hora, incluyendo servicios simples como aperturas de puertas o cambios de cerraduras.
          </li>
          <li>
            <strong>Servicios Avanzados</strong>: €100 - €200+ por hora, incluyendo servicios avanzados como instalaciones de sistemas de seguridad o reparaciones complejas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación del servicio</strong>: Determinar el tipo y alcance del servicio de cerrajería necesario.</p>
        <p>2. <strong>Solicitar cotizaciones</strong>: Obtener presupuestos detallados de varios cerrajeros o empresas de cerrajería.</p>
        <p>3. <strong>Gestión de urgencias</strong>: Planificar para emergencias y servicios fuera de horas laborales si es necesario.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Incluir costos extras como materiales adicionales o servicios de seguridad.</p>
      </section>

      <section>
        <p className="text-lg">
          Al contratar cerrajeros, considera estos factores para garantizar que el servicio se realice dentro del presupuesto y cumpla con tus necesidades de seguridad y comodidad.
        </p>
      </section>
    </div>
  );
};

export default CerrajerosCoste;