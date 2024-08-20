import Head from 'next/head';

const HacerSotanoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer un sótano? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la construcción de un sótano y cómo presupuestar para este tipo de proyectos en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-sotano`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer un sótano?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sótano Básico: €20,000 - €50,000</p>
            <p>Construcción estándar de un sótano con materiales básicos y diseño simple.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sótano de Alta Gama: €50,000 - €100,000+</p>
            <p>Construcción personalizada de un sótano con características avanzadas y materiales premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y profundidad del sótano: Dimensiones y complejidad del diseño del sótano.</li>
          <li>Calidad de los materiales: Materiales estándar versus materiales de alta gama para la construcción del sótano.</li>
          <li>Ubicación geográfica: Costos laborales y de materiales según la ubicación del proyecto.</li>
          <li>Excavación y preparación del terreno: Costos adicionales asociados con la excavación y preparación del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para hacer un sótano</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Sótano Básico</strong>: €20,000 - €50,000, construcción estándar de un sótano con materiales básicos y diseño simple.
          </li>
          <li>
            <strong>Sótano de Alta Gama</strong>: €50,000 - €100,000+, construcción personalizada de un sótano con características avanzadas y materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos y diseño</strong>: Especificar las necesidades específicas para el sótano, incluyendo usos previstos.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Solicitar estimaciones detalladas de varios constructores y empresas de excavación.</p>
        <p>3. <strong>Seleccionar materiales y acabados</strong>: Elegir opciones que se ajusten al presupuesto y al diseño deseado.</p>
        <p>4. <strong>Considerar permisos y regulaciones</strong>: Asegurarse de cumplir con todos los requisitos legales y de construcción locales.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes construir un sótano que cumpla con tus necesidades y expectativas dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default HacerSotanoCoste;