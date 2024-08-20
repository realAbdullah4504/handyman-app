import Head from 'next/head';

const InstalarDuchaExteriorCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar una ducha exterior? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de una ducha exterior y cómo presupuestar para esta adición en tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-ducha-exterior`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar una ducha exterior?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €500 - €1,500</p>
            <p>Incluye ducha estándar y conexión básica a la red de agua.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Completa: €1,500 - €3,000</p>
            <p>Incluye diseño personalizado, selección de materiales de calidad y conexión a sistema de agua caliente.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la ducha.</li>
          <li>Selección de materiales (por ejemplo, acero inoxidable, piedra natural).</li>
          <li>Necesidad de instalación de sistema de agua caliente.</li>
          <li>Costos laborales y tarifas de contratistas en tu ubicación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes de la instalación de ducha exterior</h2>
        <ul className="list-disc list-inside">
          <li>Consultas y diseño inicial con el cliente.</li>
          <li>Preparación del área y excavación si es necesario.</li>
          <li>Instalación de tuberías y conexiones de agua.</li>
          <li>Montaje de la estructura de la ducha y acabados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Consulta inicial</strong>: Define tus necesidades y preferencias para la ducha exterior.</p>
        <p>2. <strong>Obtención de cotizaciones</strong>: Solicita estimaciones detalladas de contratistas y compara precios y servicios ofrecidos.</p>
        <p>3. <strong>Selección de diseño y materiales</strong>: Elige opciones que se ajusten a tu estilo y presupuesto.</p>
        <p>4. <strong>Seguimiento del proceso</strong>: Supervisa la instalación para asegurar que se cumplan los plazos y estándares de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y ajuste a tu presupuesto, puedes disfrutar de una ducha exterior que complemente tu espacio exterior y mejore tu experiencia en casa.
        </p>
      </section>
    </div>
  );
};

export default InstalarDuchaExteriorCosto;
