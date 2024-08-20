import Head from 'next/head';

const ConstruirHornacinaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una hornacina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una hornacina y cómo planificar tu presupuesto para este proyecto de carpintería."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-hornacina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una hornacina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Hornacina Básica: 200€ - 400€</p>
            <p>Incluye construcción estándar de una hornacina con acabado simple.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Hornacina Personalizada: 400€ - 800€ o más</p>
            <p>Incluye diseño personalizado, integración de iluminación y acabados decorativos especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Dimensiones de la Hornacina: El tamaño influirá en los materiales necesarios y la complejidad del diseño.</li>
          <li>Estilo y Acabados: Hornacina estándar vs. hornacina personalizada con detalles adicionales afectarán el costo final.</li>
          <li>Mano de Obra Especializada: Incluye el costo de la construcción por parte de un carpintero o albañil especializado.</li>
          <li>Ubicación y Accesibilidad: Dificultades de acceso al área de construcción pueden aumentar los costos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construir una Hornacina</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Hornacina Básica</strong>: 200€ - 400€, incluyendo construcción estándar de una hornacina con acabado simple.
          </li>
          <li>
            <strong>Hornacina Personalizada</strong>: 400€ - 800€ o más, incluyendo diseño personalizado, integración de iluminación y acabados decorativos especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definición de Necesidades</strong>: Determina el tipo de hornacina que deseas construir y sus especificaciones.</p>
        <p>2. <strong>Consulta Profesional</strong>: Obtén varias cotizaciones de carpinteros o albañiles especializados en la construcción de hornacinas para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Selección de Materiales y Diseño</strong>: Elige materiales y diseño que se ajusten a tu presupuesto y requisitos estéticos.</p>
        <p>4. <strong>Planificación de la Construcción</strong>: Coordina la fecha y el tiempo estimado para la construcción de la hornacina con el profesional seleccionado.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el presupuesto para construir una hornacina, puedes agregar un elemento distintivo y funcional a tu espacio habitable.
        </p>
      </section>
    </div>
  );
};

export default ConstruirHornacinaCoste;