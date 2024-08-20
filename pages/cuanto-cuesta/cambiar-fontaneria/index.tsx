import Head from 'next/head';

const CambiarFontaneria = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar la fontanería? - Handyman</title>
        <meta
          name="description"
          content="Descubre cuánto puede costar cambiar la fontanería en tu hogar, incluyendo la instalación de tuberías nuevas, grifos, y sistemas de drenaje."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cambiar-fontaneria`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar la fontanería?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Básica: 1000€ - 3000€</p>
            <p>Incluye la instalación de nuevas tuberías y grifos en un apartamento pequeño.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Completa: 3000€ - 8000€</p>
            <p>Incluye la renovación completa de la fontanería en una casa unifamiliar.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Hogar: Los costos pueden variar dependiendo del tamaño de la propiedad.</li>
          <li>Material de Tuberías: El tipo de tuberías utilizadas puede influir en el costo total.</li>
          <li>Accesibilidad: Las áreas de difícil acceso pueden aumentar los costos de mano de obra.</li>
          <li>Instalación de Grifos y Accesorios: La elección de grifos y accesorios también impacta en el presupuesto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambiar la Fontanería</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reforma Básica</strong>: 1000€ - 3000€, incluyendo la instalación de nuevas tuberías y grifos en un apartamento pequeño.
          </li>
          <li>
            <strong>Reforma Completa</strong>: 3000€ - 8000€, incluyendo la renovación completa de la fontanería en una casa unifamiliar.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Cambiar la Fontanería</h2>
        <p>1. <strong>Evalúa las Necesidades</strong>: Determina si necesitas una reforma parcial o completa de la fontanería.</p>
        <p>2. <strong>Solicita Varios Presupuestos</strong>: Obtén estimaciones detalladas de varios profesionales para comparar precios.</p>
        <p>3. <strong>Considera la Calidad</strong>: Opta por materiales de alta calidad para asegurar durabilidad y eficiencia.</p>
      </section>

      <section>
        <p className="text-lg">
          Cambiar la fontanería puede mejorar significativamente la eficiencia y funcionalidad de tu hogar. Asegúrate de planificar adecuadamente y considerar todos los factores antes de comenzar la renovación.
        </p>
      </section>
    </div>
  );
};

export default CambiarFontaneria;
