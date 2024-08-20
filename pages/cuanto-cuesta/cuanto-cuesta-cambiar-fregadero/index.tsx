import Head from 'next/head';

const CambiarFregaderoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar un fregadero? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con el cambio de un fregadero y cómo presupuestar para esta renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-fregadero`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar un fregadero?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Fregadero estándar: €150 - €300+</p>
            <p>Incluye la instalación de un fregadero de tamaño estándar y conexión básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Fregadero premium: €300 - €600+</p>
            <p>Incluye la instalación de un fregadero de alta calidad con características adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y material del fregadero.</li>
          <li>Complejidad de la instalación, como cambios en la plomería.</li>
          <li>Necesidad de ajustes adicionales en la encimera o armarios.</li>
          <li>Costos adicionales de mano de obra y herramientas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Evaluación del espacio</strong>: Define el tipo de fregadero que se adapta mejor a tus necesidades y espacio disponible.</p>
        <p>2. <strong>Obtención de presupuestos</strong>: Solicita cotizaciones detalladas de varios contratistas o tiendas.</p>
        <p>3. <strong>Planificación de detalles</strong>: Considera los costos totales, incluyendo materiales y servicios adicionales.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación adecuada y la elección correcta de materiales y servicios, puedes cambiar el fregadero de tu cocina dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CambiarFregaderoCosto;