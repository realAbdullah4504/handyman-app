import Head from 'next/head';

const ReformarCocinasPequenasCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar cocinas pequeñas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la reforma de cocinas pequeñas y cómo presupuestar para esta renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reformar-cocinas-pequenas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar cocinas pequeñas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma básica: €2,000 - €5,000+</p>
            <p>Incluye cambios de gabinetes y actualización de electrodomésticos básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma completa: €5,000 - €10,000+</p>
            <p>Incluye rediseño completo, nuevos gabinetes, electrodomésticos de alta gama y acabados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y distribución de la cocina.</li>
          <li>Calidad y tipo de materiales utilizados (gabinetes, encimeras, pisos).</li>
          <li>Electrodomésticos seleccionados y su eficiencia energética.</li>
          <li>Costos laborales y de instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determina los cambios específicos que deseas realizar en la cocina.</p>
        <p>2. <strong>Planificación del diseño</strong>: Diseña el diseño y el estilo de la cocina dentro de tu presupuesto.</p>
        <p>3. <strong>Selección de materiales y electrodomésticos</strong>: Elige productos que se adapten a tu estilo y necesidades.</p>
        <p>4. <strong>Obtención de presupuestos</strong>: Solicita presupuestos detallados de varios contratistas y proveedores.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la selección adecuada de productos, puedes tener la cocina pequeña de tus sueños dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ReformarCocinasPequenasCosto;
