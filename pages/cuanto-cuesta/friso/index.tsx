import Head from 'next/head';

const Friso = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta frisar? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el frisado de paredes y cómo planificar tu presupuesto para este proyecto de remodelación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/friso`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta frisar?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Frisado Básico: 10€ - 20€ por metro cuadrado</p>
            <p>Incluye mano de obra y materiales estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Frisado Personalizado: 20€ - 40€ por metro cuadrado</p>
            <p>Incluye frisados especiales y técnicas avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Frisado: Materiales y diseño.</li>
          <li>Área de Cobertura: Tamaño del área a frisar.</li>
          <li>Preparación del Sitio: Estado de las paredes y preparación de superficies.</li>
          <li>Ubicación: Accesibilidad y condiciones del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Frisado</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Frisado Básico</strong>: 10€ - 20€ por metro cuadrado, incluyendo mano de obra y materiales estándar.
          </li>
          <li>
            <strong>Frisado Personalizado</strong>: 20€ - 40€ por metro cuadrado, incluyendo frisados especiales y técnicas avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diseño y Selección de Materiales</strong>: Elige el tipo y diseño de frisado adecuado para tu proyecto.</p>
        <p>2. <strong>Medición y Cálculo de Materiales</strong>: Determina la cantidad necesaria de materiales y costos asociados.</p>
        <p>3. <strong>Obtención de Cotizaciones</strong>: Solicita presupuestos detallados a varios contratistas.</p>
        <p>4. <strong>Consideración de Tiempo y Mano de Obra</strong>: Calcula el tiempo estimado y costos de mano de obra.</p>
      </section>

      <section>
        <p className="text-lg">
          El frisado puede mejorar la apariencia y la textura de tus paredes. Planifica cuidadosamente para asegurar que el proyecto se ajuste a tu presupuesto y necesidades.
        </p>
      </section>
    </div>
  );
};

export default Friso;