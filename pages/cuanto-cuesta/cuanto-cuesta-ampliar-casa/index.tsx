import Head from 'next/head';

const AmpliacionCasaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta ampliar una casa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la ampliación de una casa y cómo presupuestar para este tipo de proyectos de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-ampliar-casa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta ampliar una casa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ampliación Básica: €10,000 - €30,000</p>
            <p>Incluye ampliación de una habitación o extensión de áreas comunes.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ampliación Compleja: €30,000 - €100,000+</p>
            <p>Incluye proyectos más grandes como añadir un piso adicional o remodelación extensiva.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y alcance del proyecto: Proyectos más grandes y complejos implican costos más altos.</li>
          <li>Materiales y acabados: Selección de materiales y acabados puede afectar significativamente el presupuesto.</li>
          <li>Mano de obra: Costos laborales pueden variar según la ubicación y la experiencia del contratista.</li>
          <li>Regulaciones locales: Normativas y permisos pueden agregar costos adicionales al proyecto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para ampliaciones de casa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Ampliación Básica</strong>: €10,000 - €30,000, incluyendo la ampliación de una habitación o áreas comunes.
          </li>
          <li>
            <strong>Ampliación Compleja</strong>: €30,000 - €100,000+, proyectos más grandes como añadir un piso adicional o remodelación extensiva.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir objetivos y alcance</strong>: Determinar claramente qué áreas se ampliarán y qué características incluirá el proyecto.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Solicitar estimaciones detalladas de varios contratistas y empresas de construcción.</p>
        <p>3. <strong>Considerar materiales y acabados</strong>: Elegir materiales que se ajusten al presupuesto y estilo deseado.</p>
        <p>4. <strong>Revisar regulaciones locales</strong>: Asegurar que todos los permisos necesarios estén en orden antes de iniciar la construcción.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar adecuadamente y entender los factores que afectan los costos, puedes llevar a cabo una ampliación de casa exitosa y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default AmpliacionCasaCoste;