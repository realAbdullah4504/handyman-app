import Head from 'next/head';

const HacerSpaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer un spa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de un spa en casa y cómo presupuestar para esta adición de lujo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-spa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer un spa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Spa Básico: €10,000 - €20,000</p>
            <p>Incluye elementos esenciales como bañera de hidromasaje y zona de relajación.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Spa de Lujo: €20,000 - €50,000</p>
            <p>Ofrece instalaciones premium como sauna, baño turco y duchas experienciales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad del spa.</li>
          <li>Selección de materiales y acabados (por ejemplo, mármol, madera de teca).</li>
          <li>Necesidad de instalaciones adicionales como sistemas de calefacción y iluminación especializada.</li>
          <li>Costos laborales y tarifas de contratistas en tu ubicación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes de la construcción de un spa</h2>
        <ul className="list-disc list-inside">
          <li>Consulta inicial de diseño y planificación.</li>
          <li>Preparación del sitio y excavación si es necesario.</li>
          <li>Instalación de estructuras y sistemas como jacuzzis y saunas.</li>
          <li>Acabados y decoración interior para crear un ambiente relajante.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Consulta y diseño</strong>: Define tus necesidades y expectativas para el spa.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Solicita estimaciones detalladas de contratistas y compara precios y servicios ofrecidos.</p>
        <p>3. <strong>Selección de materiales y acabados</strong>: Elige opciones que se ajusten a tu estilo y presupuesto.</p>
        <p>4. <strong>Supervisión del proyecto</strong>: Asegúrate de que se cumplan los estándares de calidad y plazos de construcción.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y ajuste a tu presupuesto, puedes disfrutar de un spa personalizado que mejore tu bienestar y calidad de vida en casa.
        </p>
      </section>
    </div>
  );
};

export default HacerSpaCosto;
