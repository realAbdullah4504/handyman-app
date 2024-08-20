import Head from 'next/head';

const CambiarBajantesCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar bajantes? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio de bajantes y cómo planificar este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cambiar-bajantes`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar bajantes?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio Estimado: 1,000€ - 3,000€</p>
            <p>Incluye el cambio estándar de bajantes para una vivienda unifamiliar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Varía Según el Tamaño y Material</p>
            <p>Costos adicionales pueden aplicarse para edificios más grandes o con materiales especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Edificio: Influencia significativa en el costo total.</li>
          <li>Material de los Bajantes: PVC, cobre u otros materiales pueden impactar en los precios.</li>
          <li>Complejidad del Proyecto: Requisitos adicionales como accesibilidad y condiciones del terreno.</li>
          <li>Ubicación: Variación de precios según la región y el mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambio de Bajantes</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio Estimado</strong>: 1,000€ - 3,000€, incluyendo cambio estándar de bajantes para una vivienda unifamiliar.
          </li>
          <li>
            <strong>Costos Adicionales</strong>: Pueden aplicarse para edificios más grandes o con materiales especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Cambio de Bajantes</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina los requisitos específicos de tu edificio.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Solicita múltiples presupuestos de empresas especializadas en cambio de bajantes.</p>
        <p>3. <strong>Consideración de Normativas</strong>: Asegúrate de cumplir con todas las normativas locales y requisitos legales.</p>
        <p>4. <strong>Selección de Proveedor</strong>: Elige un proveedor con experiencia y reputación en proyectos similares.</p>
      </section>

      <section>
        <p className="text-lg">
          Cambiando los bajantes de manera adecuada, puedes mejorar la eficiencia y durabilidad de la instalación en tu edificio.
        </p>
      </section>
    </div>
  );
};

export default CambiarBajantesCosto;