import Head from 'next/head';

const CocinaMedidaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una cocina a medida? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la construcción de una cocina a medida y cómo presupuestar para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cocina-medida`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una cocina a medida?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cocina básica a medida: €3,000 - €7,000</p>
            <p>Incluye gabinetes personalizados y encimera de calidad media.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cocina premium a medida: €8,000 - €15,000+</p>
            <p>Incluye materiales de alta gama, diseño personalizado y electrodomésticos integrados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Calidad de los materiales y acabados.</li>
          <li>Complejidad del diseño y tamaño de la cocina.</li>
          <li>Accesorios y electrodomésticos seleccionados.</li>
          <li>Necesidades específicas de instalación y acabados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Diseño y planificación</strong>: Define tus necesidades y preferencias.</p>
        <p>2. <strong>Consulta con diseñadores y contratistas</strong>: Obtén presupuestos detallados.</p>
        <p>3. <strong>Selección de materiales y acabados</strong>: Elige opciones que se ajusten a tu presupuesto.</p>
        <p>4. <strong>Instalación y acabados finales</strong>: Coordina la instalación y finaliza los detalles.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la selección adecuada de materiales y diseño, puedes tener una cocina a medida que se ajuste a tu estilo y presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CocinaMedidaCosto;
