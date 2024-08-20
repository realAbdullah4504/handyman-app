import Head from 'next/head';

const CuantoCuestaArquitecto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar un arquitecto? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la contratación de un arquitecto para tu proyecto de construcción o remodelación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-arquitecto`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar un arquitecto?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto básico: €1000 - €5000</p>
            <p>Para proyectos pequeños como reformas o ampliaciones simples.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto completo: €5000 - €20000+</p>
            <p>Para proyectos grandes como nuevas construcciones o rehabilitaciones complejas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad del proyecto: Extensión del diseño y detalle requerido.</li>
          <li>Ubicación geográfica: Costos pueden variar según la región y normativas locales.</li>
          <li>Experiencia del arquitecto: Honorarios pueden ajustarse según la reputación y experiencia del profesional.</li>
          <li>Servicios adicionales: Costos adicionales por gestión de obra o supervisión.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Consultar varias opciones</strong>: Obtener presupuestos detallados de diferentes arquitectos.</p>
        <p>2. <strong>Definir expectativas</strong>: Establecer claramente los objetivos y requisitos del proyecto.</p>
        <p>3. <strong>Negociar términos</strong>: Discutir los honorarios y servicios incluidos antes de contratar.</p>
        <p>4. <strong>Seguimiento de avances</strong>: Monitorear el progreso y ajustar el presupuesto según sea necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Contratar un arquitecto calificado es fundamental para asegurar un diseño efectivo y legalmente conforme para tu proyecto.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaArquitecto;