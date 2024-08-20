import Head from 'next/head';

const MantenimientoComunidadesCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Mantenimiento de Comunidades: ¿Cuánto cuesta? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el mantenimiento de comunidades y cómo planificar el presupuesto para servicios de limpieza, reparaciones y gestión de residuos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mantenimiento-comunidades`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">Mantenimiento de Comunidades: ¿Cuánto cuesta?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio Mensual: 200€ - 500€</p>
            <p>Servicios básicos como limpieza y mantenimiento general.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio Anual: 2,000€ - 5,000€</p>
            <p>Reparaciones y servicios adicionales como gestión de residuos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Comunidad: Número de unidades y áreas comunes.</li>
          <li>Servicios Requeridos: Limpieza, jardinería, mantenimiento de piscinas, etc.</li>
          <li>Ubicación: Variaciones en costos basadas en la región y accesibilidad.</li>
          <li>Estado de las Instalaciones: Necesidad de reparaciones y renovaciones.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Mantenimiento de Comunidades</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio Mensual</strong>: 200€ - 500€, para servicios básicos de limpieza y mantenimiento.
          </li>
          <li>
            <strong>Precio Anual</strong>: 2,000€ - 5,000€, incluyendo reparaciones y servicios adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Identificar las necesidades de mantenimiento y las prioridades.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Comparar precios y servicios ofrecidos por diferentes empresas de mantenimiento.</p>
        <p>3. <strong>Acuerdo de Contrato</strong>: Detallar los servicios incluidos y las expectativas mutuas en el contrato.</p>
        <p>4. <strong>Monitoreo Continuo</strong>: Revisar la calidad del servicio y hacer ajustes según sea necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          El mantenimiento regular de comunidades asegura el bienestar y la estética de las áreas comunes, mejorando la calidad de vida de los residentes.
        </p>
      </section>
    </div>
  );
};

export default MantenimientoComunidadesCoste;
