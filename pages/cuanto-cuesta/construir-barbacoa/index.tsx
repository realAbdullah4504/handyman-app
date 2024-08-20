import Head from 'next/head';

const ConstruirBarbacoa = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una barbacoa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una barbacoa y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-barbacoa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una barbacoa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Barbacoa Básica: 500€ - 1000€</p>
            <p>Incluye construcción de estructura básica y parrilla estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Barbacoa Personalizada: 1000€ - 3000€</p>
            <p>Incluye diseño personalizado, materiales de alta calidad y accesorios adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Diseño: Dimensiones y complejidad del diseño de la barbacoa.</li>
          <li>Materiales Utilizados: Costo de los materiales como ladrillos, piedras, o acero inoxidable.</li>
          <li>Accesorios: Parrillas, encimeras, fregaderos, y otros accesorios adicionales.</li>
          <li>Mano de Obra: Costos laborales dependiendo de la ubicación y el contratista.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir una Barbacoa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Barbacoa Básica</strong>: 500€ - 1000€, incluyendo construcción de estructura básica y parrilla estándar.
          </li>
          <li>
            <strong>Barbacoa Personalizada</strong>: 1000€ - 3000€, incluyendo diseño personalizado, materiales de alta calidad y accesorios adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diseño y Especificaciones</strong>: Decide el tamaño y diseño de la barbacoa.</p>
        <p>2. <strong>Selección de Materiales</strong>: Elige los materiales adecuados según tu presupuesto y preferencias estéticas.</p>
        <p>3. <strong>Obtención de Cotizaciones</strong>: Solicita presupuestos detallados a varios contratistas para comparar precios y servicios.</p>
        <p>4. <strong>Consideración de Mano de Obra</strong>: Asegúrate de incluir los costos laborales en tu presupuesto final.</p>
      </section>

      <section>
        <p className="text-lg">
          Construir una barbacoa puede ser una excelente adición a tu hogar, asegúrate de planificar y presupuestar adecuadamente para obtener los resultados deseados dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirBarbacoa;
