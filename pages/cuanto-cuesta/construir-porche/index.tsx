import Head from 'next/head';

const ConstruirPorche = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un porche? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de porches y cómo planificar tu presupuesto para esta obra."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-porche`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un porche?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Porche Estándar: 2000€ - 5000€</p>
            <p>Incluye materiales básicos y mano de obra.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Porche Personalizado: 5000€ - 10000€</p>
            <p>Incluye diseño personalizado y materiales de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Diseño del Porche: El tamaño y la complejidad del diseño influyen en el costo.</li>
          <li>Materiales Utilizados: Materiales estándar vs. materiales de alta gama afectan el precio.</li>
          <li>Ubicación y Accesibilidad: Costos pueden variar dependiendo de la ubicación y accesibilidad del sitio.</li>
          <li>Acabados y Detalles: Detalles adicionales como iluminación o revestimientos especiales pueden aumentar los costos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir Porches</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Porche Estándar</strong>: 2000€ - 5000€, incluyendo materiales básicos y mano de obra.
          </li>
          <li>
            <strong>Porche Personalizado</strong>: 5000€ - 10000€, incluyendo diseño personalizado y materiales de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definir Requisitos</strong>: Determina tus necesidades y preferencias para el porche.</p>
        <p>2. <strong>Consultar Profesionales</strong>: Obtén múltiples presupuestos de contratistas especializados en construcción de porches.</p>
        <p>3. <strong>Considerar Longevidad y Mantenimiento</strong>: Elige materiales que requieran poco mantenimiento y que sean duraderos.</p>
        <p>4. <strong>Reservar un Margen</strong>: Asegúrate de incluir un margen adicional en el presupuesto para imprevistos.</p>
      </section>

      <section>
        <p className="text-lg">
          Construir un porche puede ser una excelente manera de mejorar el espacio exterior de tu hogar. Planifica cuidadosamente y considera todos los factores para asegurar que tu proyecto se ajuste a tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirPorche;
