import Head from 'next/head';

const ColocarPiedra = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta colocar piedra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la colocación de piedra y cómo planificar tu presupuesto para este proyecto de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/colocar-piedra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta colocar piedra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Colocación Básica: 30€ - 50€ por metro cuadrado</p>
            <p>Incluye mano de obra y materiales estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Colocación Personalizada: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye piedras personalizadas y técnicas especiales de colocación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Piedra: Natural, artificial, tamaño y calidad.</li>
          <li>Área de Cobertura: Tamaño del área a cubrir con piedra.</li>
          <li>Preparación del Sitio: Nivelación del terreno y preparación de la superficie.</li>
          <li>Ubicación: Accesibilidad y condiciones del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Colocar Piedra</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Colocación Básica</strong>: 30€ - 50€ por metro cuadrado, incluyendo mano de obra y materiales estándar.
          </li>
          <li>
            <strong>Colocación Personalizada</strong>: 50€ - 100€ por metro cuadrado, incluyendo piedras personalizadas y técnicas especiales de colocación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diseño y Selección de Piedras</strong>: Elige el tipo y diseño de piedras que deseas utilizar.</p>
        <p>2. <strong>Medición y Cálculo de Materiales</strong>: Determina la cantidad necesaria de piedras y materiales.</p>
        <p>3. <strong>Obtención de Cotizaciones</strong>: Solicita presupuestos detallados a varios contratistas.</p>
        <p>4. <strong>Consideración de Tiempo y Mano de Obra</strong>: Calcula el tiempo estimado y costos de mano de obra.</p>
      </section>

      <section>
        <p className="text-lg">
          La colocación de piedra puede mejorar significativamente la estética y durabilidad de tu espacio exterior o interior. Planifica cuidadosamente para asegurar que el proyecto se ajuste a tu presupuesto y expectativas.
        </p>
      </section>
    </div>
  );
};

export default ColocarPiedra;