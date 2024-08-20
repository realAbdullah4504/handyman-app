import Head from 'next/head';

const ConstruccionPiscinaObraCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una piscina mediante obra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una piscina mediante obra y cómo presupuestar para proyectos de construcción de piscinas."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-piscina-obra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una piscina mediante obra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Piscina estándar: €15,000 - €30,000</p>
            <p>Construcción de una piscina básica con acabados estándar y dimensiones comunes.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Piscina premium: €30,000 - €100,000</p>
            <p>Construcción de una piscina con diseño personalizado, características avanzadas y alta calidad en materiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la piscina: La forma, profundidad y características personalizadas influirán en el costo.</li>
          <li>Materiales y acabados: Uso de materiales como el hormigón armado, azulejos, sistemas de filtrado y revestimientos.</li>
          <li>Equipamiento adicional: Instalación de iluminación, sistemas de calefacción, cubiertas automáticas, entre otros.</li>
          <li>Accesibilidad y excavación: La facilidad de acceso al lugar y el trabajo de excavación necesario.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir una piscina mediante obra</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Piscina estándar</strong>: €15,000 - €30,000, construcción de una piscina básica con acabados estándar y dimensiones comunes.
          </li>
          <li>
            <strong>Piscina premium</strong>: €30,000 - €100,000, construcción de una piscina con diseño personalizado, características avanzadas y alta calidad en materiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos y diseño</strong>: Determinar el tamaño, forma y características específicas de la piscina.</p>
        <p>2. <strong>Selección de materiales y acabados</strong>: Escoger los materiales adecuados y los acabados deseados para la piscina.</p>
        <p>3. <strong>Considerar el mantenimiento</strong>: Estimar los costos de mantenimiento a largo plazo y la eficiencia energética.</p>
        <p>4. <strong>Contratar profesionales</strong>: Contratar a contratistas con experiencia en construcción de piscinas para un resultado óptimo.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y considerando los factores que afectan los costos, puedes construir una piscina que se ajuste a tus necesidades y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruccionPiscinaObraCoste;
