import Head from 'next/head';

const LimpiezaComunidadesCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de comunidades? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de comunidades y cómo mantener las áreas comunes en condiciones óptimas para todos los residentes."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-comunidades`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de comunidades?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 100€ - 200€</p>
            <p>Incluye limpieza de áreas comunes y espacios exteriores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Completa: 200€ - 400€</p>
            <p>Incluye limpieza detallada de áreas sensibles y mantenimiento especializado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Comunidad: Número de unidades y áreas comunes.</li>
          <li>Estado de las Áreas Comunes: Nivel de suciedad y mantenimiento necesario.</li>
          <li>Frecuencia de la Limpieza: Limpieza semanal, mensual o limpieza ocasional.</li>
          <li>Servicios Adicionales: Limpieza de garajes, áreas de recreo, etc.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza de Comunidades</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 100€ - 200€, incluyendo limpieza de áreas comunes y espacios exteriores.
          </li>
          <li>
            <strong>Limpieza Completa</strong>: 200€ - 400€, incluyendo limpieza detallada de áreas sensibles y mantenimiento especializado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina las áreas y la frecuencia de limpieza necesarias para la comunidad.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Consulta con varias empresas de limpieza para comparar precios y servicios.</p>
        <p>3. <strong>Servicios Especiales</strong>: Considera la necesidad de servicios adicionales como limpieza de garajes o áreas de recreo.</p>
        <p>4. <strong>Mantenimiento Regular</strong>: Establece un plan de limpieza regular para mantener las áreas comunes en buenas condiciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener las áreas comunes limpias y bien mantenidas es fundamental para la comodidad y satisfacción de todos los residentes de la comunidad.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaComunidadesCoste;