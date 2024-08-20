import Head from 'next/head';

const ProyectoConstruccionCasaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un proyecto y construcción de casa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con el proyecto y construcción de una casa y cómo presupuestar para este tipo de proyectos de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-proyecto-construccion-casa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un proyecto y construcción de casa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto y Construcción Estándar: €100,000 - €300,000</p>
            <p>Incluye diseño arquitectónico y construcción de una vivienda estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyecto y Construcción Compleja: €300,000 - €1,000,000+</p>
            <p>Proyectos grandes o de lujo con diseño personalizado y materiales premium.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y estilo de la casa: Casas más grandes o con diseños complejos tienen costos más altos.</li>
          <li>Materiales y acabados: Selección de materiales, calidad de acabados y especificaciones influencian el presupuesto.</li>
          <li>Ubicación geográfica: Costos laborales y de materiales pueden variar según la ubicación y acceso al sitio de construcción.</li>
          <li>Regulaciones y permisos: Cumplimiento de normativas locales y costos asociados con permisos de construcción.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para proyecto y construcción de casa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Proyecto y Construcción Estándar</strong>: €100,000 - €300,000, incluyendo diseño arquitectónico y construcción de vivienda estándar.
          </li>
          <li>
            <strong>Proyecto y Construcción Compleja</strong>: €300,000 - €1,000,000+, proyectos grandes o de lujo con diseño personalizado y materiales premium.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos y estilo de la casa</strong>: Determinar claramente las especificaciones y expectativas para el proyecto.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Solicitar estimaciones detalladas de varios arquitectos y contratistas de construcción.</p>
        <p>3. <strong>Seleccionar materiales y acabados</strong>: Elegir opciones que se ajusten al presupuesto y al diseño deseado.</p>
        <p>4. <strong>Gestionar permisos y regulaciones</strong>: Asegurar que todos los permisos necesarios estén en orden antes de iniciar la construcción.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes realizar un proyecto y construcción de casa exitoso y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ProyectoConstruccionCasaCoste;
