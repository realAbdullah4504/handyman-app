import Head from 'next/head';

const RejasPuertasPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar rejas y puertas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de rejas y puertas de seguridad y cómo planificar tu presupuesto para este tipo de servicios."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/rejas-puertas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar rejas y puertas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Estándar: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye materiales y mano de obra para rejas estándar de hierro.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puertas de Seguridad: 300€ - 600€ por unidad</p>
            <p>Incluye materiales y mano de obra para la instalación de puertas de seguridad.</p>
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
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Rejas y Puertas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rejas Estándar</strong>: 50€ - 100€ por metro cuadrado, incluyendo materiales y mano de obra para rejas estándar de hierro.
          </li>
          <li>
            <strong>Puertas de Seguridad</strong>: 300€ - 600€ por unidad, incluyendo materiales y mano de obra para la instalación de puertas de seguridad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición y Diseño</strong>: Determina las dimensiones y el diseño de las rejas y puertas necesarias.</p>
        <p>2. <strong>Cotización y Comparación</strong>: Solicita varias cotizaciones de proveedores para comparar precios y calidad de materiales.</p>
        <p>3. <strong>Considera la Seguridad</strong>: Asegúrate de que las rejas y puertas instaladas cumplan con los estándares de seguridad necesarios.</p>
        <p>4. <strong>Mantenimiento y Durabilidad</strong>: Planifica el mantenimiento regular para asegurar la durabilidad de las rejas y puertas.</p>
      </section>

      <section>
        <p className="text-lg">
          La instalación de rejas y puertas de seguridad puede mejorar significativamente la protección de tu propiedad. Planifica cuidadosamente para obtener resultados satisfactorios y duraderos.
        </p>
      </section>
    </div>
  );
};

export default RejasPuertasPage;