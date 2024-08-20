import Head from 'next/head';

const ObraCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una obra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la realización de una obra y cómo presupuestar para proyectos de construcción en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-una-obra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una obra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Obra Básica: €10,000 - €50,000</p>
            <p>Incluye trabajos de construcción estándar como reformas simples.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Obra Compleja: €50,000 - €200,000+</p>
            <p>Proyectos grandes como construcción de nueva vivienda o remodelación extensiva.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y alcance del proyecto: Proyectos más grandes y complejos implican costos más altos.</li>
          <li>Tipo de construcción: Nueva construcción, remodelación o reparaciones tienen costos variables.</li>
          <li>Materiales y acabados: Selección de materiales y calidad de acabados puede influir significativamente en el presupuesto.</li>
          <li>Ubicación geográfica: Costos laborales y de materiales pueden variar según la ubicación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para obras de construcción</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Obra Básica</strong>: €10,000 - €50,000, incluyendo trabajos estándar como reformas simples.
          </li>
          <li>
            <strong>Obra Compleja</strong>: €50,000 - €200,000+, proyectos grandes como construcción de nueva vivienda o remodelación extensiva.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir objetivos y alcance del proyecto</strong>: Establecer claramente qué incluirá la obra y los resultados esperados.</p>
        <p>2. <strong>Solicitar presupuestos detallados</strong>: Obtener estimaciones de varios contratistas y empresas de construcción.</p>
        <p>3. <strong>Considerar materiales y acabados</strong>: Elegir opciones que se ajusten al presupuesto y al estilo deseado.</p>
        <p>4. <strong>Revisar regulaciones y permisos</strong>: Asegurar que todos los permisos necesarios estén en orden antes de comenzar la obra.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes llevar a cabo una obra exitosa y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ObraCoste;
