import Head from 'next/head';

const IslaDeCocinaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una isla de cocina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de una isla de cocina y cómo presupuestar para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-isla-de-cocina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una isla de cocina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Isla Básica: €500 - €1,500</p>
            <p>Incluye materiales económicos y diseño estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Isla Premium: €1,500 - €5,000+</p>
            <p>Utiliza materiales de alta calidad y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la isla de cocina.</li>
          <li>Materiales seleccionados como granito, mármol, o madera.</li>
          <li>Costos de instalación y mano de obra.</li>
          <li>Ubicación geográfica y condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes típicos de una isla de cocina</h2>
        <ul className="list-disc list-inside">
          <li>Materiales de construcción y acabados.</li>
          <li>Superficie de trabajo y almacenamiento.</li>
          <li>Instalación de fregaderos, grifos o electrodomésticos.</li>
          <li>Iluminación integrada o adicional.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Diseño y medidas</strong>: Determina el tamaño y la forma de la isla de cocina necesaria.</p>
        <p>2. <strong>Selección de materiales</strong>: Investiga opciones de materiales que se ajusten a tu presupuesto y preferencias estéticas.</p>
        <p>3. <strong>Cotizaciones detalladas</strong>: Obtén presupuestos de varios proveedores e instaladores para comparar costos y servicios.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Incluye gastos como transporte, instalación y acabados en tu presupuesto final.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación adecuada y la selección cuidadosa de materiales, puedes instalar una isla de cocina que mejore tanto la funcionalidad como la estética de tu espacio.
        </p>
      </section>
    </div>
  );
};

export default IslaDeCocinaCosto;