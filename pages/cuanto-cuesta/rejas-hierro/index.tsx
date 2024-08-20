import Head from 'next/head';

const RejasHierroPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar rejas de hierro? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de rejas de hierro y cómo planificar tu presupuesto para este tipo de servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/rejas-hierro`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar rejas de hierro?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Estándar: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye materiales y mano de obra para rejas estándar de hierro.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Personalizadas: 100€ - 200€ por metro cuadrado</p>
            <p>Incluye materiales y mano de obra para rejas personalizadas y diseños complejos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Diseño: Rejas estándar vs. personalizadas con diseños complejos.</li>
          <li>Materiales Utilizados: Hierro forjado, acero galvanizado, etc.</li>
          <li>Ubicación y Accesibilidad: Precios pueden variar según la ubicación geográfica y accesibilidad al sitio de instalación.</li>
          <li>Altura y Complejidad del Diseño: Rejas simples vs. rejas con diseños ornamentales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Rejas de Hierro</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rejas Estándar</strong>: 50€ - 100€ por metro cuadrado, incluyendo materiales y mano de obra para rejas estándar de hierro.
          </li>
          <li>
            <strong>Rejas Personalizadas</strong>: 100€ - 200€ por metro cuadrado, incluyendo materiales y mano de obra para rejas personalizadas y diseños complejos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición y Diseño</strong>: Determina las dimensiones y el diseño de las rejas de hierro necesarias.</p>
        <p>2. <strong>Cotización y Comparación</strong>: Solicita varias cotizaciones de herreros para comparar precios y calidad de materiales.</p>
        <p>3. <strong>Considera la Seguridad</strong>: Asegúrate de que las rejas instaladas cumplan con los estándares de seguridad necesarios.</p>
        <p>4. <strong>Mantenimiento y Durabilidad</strong>: Planifica el mantenimiento regular para asegurar la durabilidad de las rejas de hierro.</p>
      </section>

      <section>
        <p className="text-lg">
          La instalación de rejas de hierro puede mejorar la seguridad y estética de tu propiedad. Planifica cuidadosamente para obtener resultados satisfactorios y duraderos.
        </p>
      </section>
    </div>
  );
};

export default RejasHierroPage;