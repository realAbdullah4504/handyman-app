import Head from 'next/head';

const AlicatarCocinaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta alicatar una cocina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con el alicatado de una cocina y cómo presupuestar para esta renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-alicatar-cocina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta alicatar una cocina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Alicatado estándar: €800 - €1,500+</p>
            <p>Incluye el coste de los azulejos estándar y la mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Alicatado premium: €1,500 - €3,000+</p>
            <p>Incluye azulejos de alta gama y trabajos especializados de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y calidad de los azulejos seleccionados.</li>
          <li>Complejidad del diseño y patrón de alicatado.</li>
          <li>Preparación del área de trabajo y eliminación del alicatado anterior.</li>
          <li>Accesorios y detalles adicionales, como perfiles de acabado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Medición y evaluación</strong>: Determina la cantidad de azulejos necesarios y evalúa el estado de las superficies existentes.</p>
        <p>2. <strong>Selección de materiales</strong>: Elige azulejos que se ajusten a tu presupuesto y diseño deseado.</p>
        <p>3. <strong>Solicitud de presupuestos</strong>: Solicita varios presupuestos detallados de contratistas o tiendas de materiales.</p>
        <p>4. <strong>Planificación de detalles</strong>: Incluye costos adicionales como la preparación del área y los acabados finales.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la elección adecuada de materiales y servicios, puedes alicatar tu cocina dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default AlicatarCocinaCosto;