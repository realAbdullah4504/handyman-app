import Head from 'next/head';

const Enfoscar = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta enfoscar una pared? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el enfoscado de paredes y cómo planificar tu presupuesto para este proyecto de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/enfoscar`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta enfoscar una pared?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Enfoscado Simple: 10€ - 20€ por metro cuadrado</p>
            <p>Incluye aplicación de una capa básica de mortero.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Enfoscado Decorativo: 20€ - 40€ por metro cuadrado</p>
            <p>Incluye aplicación de mortero decorativo y acabados especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Calidad del Mortero: Mortero estándar vs. mortero decorativo.</li>
          <li>Estado de la Pared: Necesidad de preparación previa de la superficie.</li>
          <li>Acabados Especiales: Texturizado, pintura u otros acabados adicionales.</li>
          <li>Ubicación: Costos laborales y de materiales según la región.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Enfoscar una Pared</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Enfoscado Simple</strong>: 10€ - 20€ por metro cuadrado, incluyendo la aplicación de una capa básica de mortero.
          </li>
          <li>
            <strong>Enfoscado Decorativo</strong>: 20€ - 40€ por metro cuadrado, incluyendo la aplicación de mortero decorativo y acabados especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Pared</strong>: Determina si se requiere preparación adicional de la superficie.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicita presupuestos detallados a varios contratistas para comparar precios y servicios.</p>
        <p>3. <strong>Consideración de Acabados</strong>: Decide si deseas agregar acabados especiales o decorativos al enfoscado.</p>
        <p>4. <strong>Factores Regionales</strong>: Ajusta tu presupuesto según los costos laborales y de materiales en tu área.</p>
      </section>

      <section>
        <p className="text-lg">
          El enfoscado es fundamental para preparar paredes antes de aplicar acabados finales. Asegúrate de presupuestar adecuadamente para obtener los resultados deseados dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default Enfoscar;
