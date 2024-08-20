import Head from 'next/head';

const ColumnasDePiedra = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir columnas de piedra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de columnas de piedra y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/columnas-piedra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir columnas de piedra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Columna Básica: 200€ - 500€ por columna</p>
            <p>Incluye materiales estándar y mano de obra.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Columna Decorativa: 500€ - 1500€ por columna</p>
            <p>Incluye piedras especiales y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Altura de las Columnas: Dimensiones de las columnas de piedra a construir.</li>
          <li>Tipo de Piedra: Piedra natural vs. piedra artificial.</li>
          <li>Diseño y Decoración: Columnas simples vs. decorativas con detalles adicionales.</li>
          <li>Ubicación: Acceso y dificultad para la instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir Columnas de Piedra</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Columna Básica</strong>: 200€ - 500€ por columna, incluyendo materiales estándar y mano de obra.
          </li>
          <li>
            <strong>Columna Decorativa</strong>: 500€ - 1500€ por columna, incluyendo piedras especiales y diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Mediciones y Diseño</strong>: Determina las dimensiones y el diseño deseado de las columnas de piedra.</p>
        <p>2. <strong>Selección de Materiales</strong>: Elige entre piedras naturales o artificiales según tu presupuesto y preferencias estéticas.</p>
        <p>3. <strong>Cotizaciones y Comparaciones</strong>: Solicita varios presupuestos detallados para comparar precios y servicios ofrecidos.</p>
        <p>4. <strong>Consideración de Mano de Obra</strong>: Asegúrate de incluir costos laborales en tu presupuesto final.</p>
      </section>

      <section>
        <p className="text-lg">
          Construir columnas de piedra puede agregar un toque estético y estructural a tu propiedad, asegúrate de planificar adecuadamente para obtener resultados satisfactorios dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ColumnasDePiedra;