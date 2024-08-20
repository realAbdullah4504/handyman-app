import Head from 'next/head';

const CubrirTerraza = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cubrir una terraza? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con cubrir una terraza y cómo planificar tu presupuesto para esta obra."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cubrir-terraza`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cubrir una terraza?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cubierta Básica: 1000€ - 3000€</p>
            <p>Incluye materiales estándar y mano de obra.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cubierta Premium: 3000€ - 10000€</p>
            <p>Incluye materiales de alta calidad y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Complejidad de la Terraza: El tamaño y la complejidad del diseño influyen en el costo.</li>
          <li>Materiales Utilizados: Materiales estándar vs. materiales de alta gama afectan el precio.</li>
          <li>Diseño y Acabados: Detalles adicionales como iluminación o sistemas de drenaje pueden aumentar los costos.</li>
          <li>Ubicación y Accesibilidad: Costos pueden variar dependiendo de la ubicación y accesibilidad del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cubrir Terrazas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cubierta Básica</strong>: 1000€ - 3000€, incluyendo materiales estándar y mano de obra.
          </li>
          <li>
            <strong>Cubierta Premium</strong>: 3000€ - 10000€, incluyendo materiales de alta calidad y diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definir Requisitos</strong>: Determina tus necesidades y preferencias para la cubierta de la terraza.</p>
        <p>2. <strong>Solicitar Presupuestos</strong>: Obtén múltiples presupuestos de contratistas especializados en cubiertas de terrazas.</p>
        <p>3. <strong>Considerar Longevidad y Mantenimiento</strong>: Elige materiales que requieran poco mantenimiento y que sean duraderos.</p>
        <p>4. <strong>Reservar un Margen</strong>: Asegúrate de incluir un margen adicional en el presupuesto para imprevistos.</p>
      </section>

      <section>
        <p className="text-lg">
          Cubrir una terraza puede mejorar significativamente el uso y la estética de tu espacio exterior. Planifica cuidadosamente y considera todos los factores para asegurar que tu proyecto se ajuste a tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CubrirTerraza;
