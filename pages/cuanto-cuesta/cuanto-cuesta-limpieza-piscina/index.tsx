import Head from 'next/head';

const LimpiezaPiscinaCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de una piscina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la limpieza de piscinas y cómo mantener tu piscina en condiciones óptimas."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-piscina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de una piscina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 80€ - 150€</p>
            <p>Incluye limpieza superficial y vaciado de cestas de skimmer.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Completa: 150€ - 300€</p>
            <p>Incluye limpieza de fondo, paredes, tratamiento químico y aspirado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores a Considerar</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Piscina: El costo puede variar según el tamaño y tipo de piscina.</li>
          <li>Estado Actual: Si la piscina está muy sucia, puede requerir tratamientos adicionales.</li>
          <li>Frecuencia de Limpieza: La frecuencia con la que se limpia la piscina puede afectar los costos.</li>
          <li>Productos Químicos: Asegurarse de que se usen los químicos adecuados para mantener el agua limpia y segura.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 80€ - 150€, incluye limpieza superficial y vaciado de cestas.
          </li>
          <li>
            <strong>Limpieza Completa</strong>: 150€ - 300€, incluye limpieza profunda y tratamiento químico.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Mantenimiento Regular</h2>
        <p>1. <strong>Skimmers y Cestas</strong>: Vaciar regularmente las cestas y limpiar los skimmers.</p>
        <p>2. <strong>Limpieza de Filtro</strong>: Limpiar el filtro de la piscina según las recomendaciones del fabricante.</p>
        <p>3. <strong>Control de Químicos</strong>: Monitorear y ajustar los niveles de químicos regularmente.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener la limpieza adecuada de tu piscina no solo mejora su aspecto, sino que también asegura un ambiente seguro para nadar. Planifica y presupuesta para mantener tu piscina en óptimas condiciones.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaPiscinaCost;

