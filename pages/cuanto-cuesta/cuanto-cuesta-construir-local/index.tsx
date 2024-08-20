import Head from 'next/head';

const ConstruirLocalCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un local? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la construcción de un local comercial y cómo presupuestar para este tipo de proyectos en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-local`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un local?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Local Básico: €50,000 - €100,000</p>
            <p>Construcción estándar de un local con materiales básicos y diseño simple.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Local de Lujo: €100,000 - €500,000+</p>
            <p>Construcción personalizada de un local con características avanzadas y materiales premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño del local: Dimensiones y complejidad del diseño arquitectónico.</li>
          <li>Calidad de los materiales: Materiales estándar versus materiales de alta gama para la construcción del local.</li>
          <li>Ubicación geográfica: Costos laborales y de materiales según la ubicación del proyecto.</li>
          <li>Normativas y permisos: Costos asociados con cumplir con regulaciones locales y permisos de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir un local</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Local Básico</strong>: €50,000 - €100,000, construcción estándar de un local con materiales básicos y diseño simple.
          </li>
          <li>
            <strong>Local de Lujo</strong>: €100,000 - €500,000+, construcción personalizada de un local con características avanzadas y materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos y diseño</strong>: Especificar el tamaño y características deseadas para el local.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Solicitar estimaciones detalladas de varios constructores y proveedores de materiales.</p>
        <p>3. <strong>Seleccionar materiales y acabados</strong>: Elegir opciones que se ajusten al presupuesto y al diseño deseado.</p>
        <p>4. <strong>Considerar permisos y regulaciones</strong>: Asegurarse de cumplir con todos los requisitos legales y de construcción locales para proyectos de construcción de locales comerciales.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes construir un local que cumpla con tus necesidades y expectativas dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirLocalCoste;
