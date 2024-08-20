import Head from 'next/head';

const RejasForjaPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar rejas de forja? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de rejas de forja en ventanas y puertas, y cómo planificar tu presupuesto para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/rejas-forja`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar rejas de forja?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas de Forja Estándar: 150€ - 300€ por metro cuadrado</p>
            <p>Incluye materiales y mano de obra para la instalación de rejas de forja estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas de Forja Personalizadas: 300€ - 600€ por metro cuadrado</p>
            <p>Incluye materiales y mano de obra para la instalación de rejas de forja personalizadas con diseños especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estilo y Diseño: Rejas estándar vs. personalizadas con diseños intrincados.</li>
          <li>Dimensiones: Tamaño de las ventanas o puertas donde se instalarán las rejas de forja.</li>
          <li>Material y Acabado: Hierro forjado, tratamiento anticorrosivo, pintura especial, etc.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y acceso al sitio de instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Rejas de Forja</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rejas de Forja Estándar</strong>: 150€ - 300€ por metro cuadrado, incluyendo materiales y mano de obra para la instalación de rejas de forja estándar.
          </li>
          <li>
            <strong>Rejas de Forja Personalizadas</strong>: 300€ - 600€ por metro cuadrado, incluyendo materiales y mano de obra para la instalación de rejas de forja personalizadas con diseños especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición y Diseño</strong>: Toma medidas precisas y define el estilo de rejas de forja que deseas instalar.</p>
        <p>2. <strong>Cotizaciones</strong>: Solicita cotizaciones detalladas de varios proveedores para comparar precios y opciones de diseño.</p>
        <p>3. <strong>Instalación y Mantenimiento</strong>: Considera los costos adicionales de instalación y el mantenimiento regular para asegurar la durabilidad de las rejas de forja.</p>
      </section>

      <section>
        <p className="text-lg">
          La instalación de rejas de forja no solo mejora la seguridad, sino que también agrega un toque estético a tu hogar o negocio. Asegúrate de planificar adecuadamente para obtener resultados que cumplan con tus expectativas.
        </p>
      </section>
    </div>
  );
};

export default RejasForjaPage;