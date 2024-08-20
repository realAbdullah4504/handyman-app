import Head from 'next/head';

const ConstruccionCasaEcologicaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una casa ecológica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la construcción de una casa ecológica y cómo presupuestar para proyectos sostenibles en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-casa-ecologica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una casa ecológica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Casa ecológica estándar: €1,200 - €1,800 por metro cuadrado</p>
            <p>Construcción de una casa con materiales sostenibles y eficiencia energética básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Casa ecológica premium: €1,800 - €2,500 por metro cuadrado</p>
            <p>Construcción de una casa con diseño avanzado, tecnologías verdes y materiales de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la casa: Dimensiones y complejidad del diseño arquitectónico.</li>
          <li>Materiales sostenibles: Costos adicionales por materiales ecológicos certificados y de alta calidad.</li>
          <li>Tecnologías verdes: Incorporación de sistemas de energía renovable y eficiencia energética.</li>
          <li>Ubicación geográfica: Costos laborales y de materiales según la región y disponibilidad de recursos sostenibles.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir una casa ecológica</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Casa ecológica estándar</strong>: €1,200 - €1,800 por metro cuadrado, construcción de una casa con materiales sostenibles y eficiencia energética básica.
          </li>
          <li>
            <strong>Casa ecológica premium</strong>: €1,800 - €2,500 por metro cuadrado, construcción de una casa con diseño avanzado, tecnologías verdes y materiales de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos y diseño</strong>: Especificar las características sostenibles deseadas y el tamaño de la casa ecológica.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Solicitar estimaciones detalladas de constructores especializados en casas ecológicas.</p>
        <p>3. <strong>Seleccionar materiales y tecnologías</strong>: Elegir opciones que se ajusten al presupuesto y a los objetivos de sostenibilidad.</p>
        <p>4. <strong>Considerar permisos y certificaciones</strong>: Asegurarse de cumplir con los estándares ambientales y de construcción locales para proyectos ecológicos.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes construir una casa ecológica que combine eficiencia energética y sostenibilidad dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruccionCasaEcologicaCoste;