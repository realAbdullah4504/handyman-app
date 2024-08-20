import Head from 'next/head';

const ConstruccionLoftCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un loft? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de un loft y cómo presupuestar para proyectos de construcción de lofts en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-loft`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un loft?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Loft estándar: €1,200 - €2,000 por metro cuadrado</p>
            <p>Construcción de un loft con materiales básicos y diseño estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Loft premium: €2,000 - €3,500 por metro cuadrado</p>
            <p>Construcción de un loft con diseño avanzado y materiales de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Ubicación: Costos adicionales dependiendo de la ubicación del loft.</li>
          <li>Materiales y diseño: Variedad en los costos según los materiales utilizados y el diseño del loft.</li>
          <li>Tamaño del loft: Los metros cuadrados totales influencian el costo final del proyecto.</li>
          <li>Personalización: Opciones personalizadas pueden añadir costos adicionales al proyecto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir un loft</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Loft estándar</strong>: €1,200 - €2,000 por metro cuadrado, construcción de un loft con materiales básicos y diseño estándar.
          </li>
          <li>
            <strong>Loft premium</strong>: €2,000 - €3,500 por metro cuadrado, construcción de un loft con diseño avanzado y materiales de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos y diseño</strong>: Establecer las necesidades específicas y el diseño deseado para el loft.</p>
        <p>2. <strong>Seleccionar materiales</strong>: Elegir materiales que se ajusten al diseño y presupuesto del proyecto.</p>
        <p>3. <strong>Evaluar opciones de personalización</strong>: Considerar opciones de personalización y su impacto en el presupuesto.</p>
        <p>4. <strong>Contratación de profesionales</strong>: Contratar profesionales calificados para asegurar una construcción de calidad y conforme al diseño.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación detallada y considerando los factores que afectan los costos, puedes construir un loft que combine funcionalidad y diseño dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruccionLoftCoste;
