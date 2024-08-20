import Head from 'next/head';

const CasetaJardinCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una caseta de jardín? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la instalación de una caseta de jardín, incluyendo materiales, mano de obra y factores adicionales."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-caseta-jardin`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una caseta de jardín?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Materiales: 500€ - 3000€</p>
            <p>Incluye madera, metal o resina, y accesorios adicionales.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mano de Obra: 100€ - 500€</p>
            <p>El costo varía según la complejidad de la instalación y la experiencia del instalador.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la caseta.</li>
          <li>Materiales utilizados (madera, metal, resina).</li>
          <li>Calidad de los acabados y accesorios.</li>
          <li>Complejidad de la instalación.</li>
          <li>Costo de la mano de obra local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Instalar una Caseta de Jardín</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Materiales</strong>: 500€ - 3000€, dependiendo del tamaño y tipo de caseta.
          </li>
          <li>
            <strong>Mano de Obra</strong>: 100€ - 500€, dependiendo de la complejidad de la instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para la Instalación de una Caseta de Jardín</h2>
        <p>1. <strong>Planificación</strong>: Determina el tamaño y la ubicación de la caseta en tu jardín.</p>
        <p>2. <strong>Selección de Materiales</strong>: Elige materiales que sean duraderos y se adapten a tu presupuesto y necesidades.</p>
        <p>3. <strong>Fundación</strong>: Asegúrate de tener una base sólida para la caseta para evitar problemas estructurales.</p>
        <p>4. <strong>Instalación</strong>: Considera contratar a un profesional para asegurar una instalación correcta y segura.</p>
        <p>5. <strong>Mantenimiento</strong>: Realiza mantenimiento regular para prolongar la vida útil de la caseta.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para la instalación de tu caseta de jardín considerando todos los factores relevantes y disfruta de un espacio adicional funcional y estético en tu jardín.
        </p>
      </section>
    </div>
  );
};

export default CasetaJardinCost;