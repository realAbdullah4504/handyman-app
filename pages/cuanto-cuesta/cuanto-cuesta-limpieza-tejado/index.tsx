import Head from 'next/head';

const LimpiezaTejadoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta realizar la limpieza de un tejado? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de tejados y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-tejado`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta realizar la limpieza de un tejado?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 100€ - 200€</p>
            <p>Incluye eliminación de escombros y limpieza superficial del tejado.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Profunda: 300€ - 500€</p>
            <p>Incluye limpieza a presión, tratamiento antimoho y reparaciones menores.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Accesibilidad del Tejado: Área total y facilidad para llegar al tejado.</li>
          <li>Estado del Tejado: Nivel de suciedad, presencia de moho u otros daños.</li>
          <li>Materiales del Tejado: Tipo de material del tejado que puede influir en los métodos de limpieza.</li>
          <li>Servicios Adicionales: Necesidad de reparaciones o tratamientos especiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Limpieza de Tejados</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 100€ - 200€, incluyendo eliminación de escombros y limpieza superficial.
          </li>
          <li>
            <strong>Limpieza Profunda</strong>: 300€ - 500€, incluyendo limpieza a presión y tratamiento antimoho.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Tejado</strong>: Determinar el estado actual y las necesidades de limpieza del tejado.</p>
        <p>2. <strong>Solicitar Cotizaciones</strong>: Obtener estimaciones detalladas de varios servicios de limpieza de tejados.</p>
        <p>3. <strong>Considerar Mantenimiento Regular</strong>: Programar limpiezas periódicas para mantener el tejado en buen estado.</p>
        <p>4. <strong>Seguridad y Garantías</strong>: Asegurarse de contratar servicios que garanticen la seguridad y la calidad del trabajo.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener limpio tu tejado no solo mejora la estética de tu hogar, sino que también prolonga su vida útil y evita costosas reparaciones.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaTejadoCosto;