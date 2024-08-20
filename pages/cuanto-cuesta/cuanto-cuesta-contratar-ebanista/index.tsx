import Head from 'next/head';

const EbanistaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a un ebanista? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la contratación de un ebanista y cómo planificar tu presupuesto para proyectos de carpintería fina."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-contratar-ebanista`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a un ebanista?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Muebles Estándar: 500€ - 1,500€ por proyecto</p>
            <p>Proyectos simples como la fabricación de muebles estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Muebles Personalizados: 1,500€ - 5,000€ por proyecto</p>
            <p>Proyectos que requieren diseño y fabricación de muebles personalizados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Complejidad del Diseño: Impacto en el costo según la complejidad y detalle del diseño requerido.</li>
          <li>Materiales Utilizados: Diferencias en costos basados en la selección de materiales como madera maciza versus contrachapado.</li>
          <li>Tamaño del Proyecto: Extensión y cantidad de muebles o elementos a fabricar.</li>
          <li>Ubicación y Logística: Influencia en los costos de transporte y acceso al sitio de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Contratar a un Ebanista</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Muebles Estándar</strong>: 500€ - 1,500€ por proyecto, incluyendo la fabricación de muebles estándar.
          </li>
          <li>
            <strong>Muebles Personalizados</strong>: 1,500€ - 5,000€ por proyecto, incluyendo diseño y fabricación de muebles personalizados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Proyecto</strong>: Define claramente el diseño y las especificaciones requeridas para los muebles.</p>
        <p>2. <strong>Solicitud de Propuestas</strong>: Obtén presupuestos detallados de varios ebanistas para comparar costos y servicios.</p>
        <p>3. <strong>Selección del Ebanista</strong>: Considera la experiencia, reputación y portfolio del ebanista antes de tomar una decisión final.</p>
        <p>4. <strong>Consideraciones Adicionales</strong>: Incluye costos de materiales, acabados y cualquier servicio adicional como transporte e instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la contratación de un ebanista, puedes asegurarte de obtener muebles de alta calidad que satisfagan tus necesidades estéticas y funcionales dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default EbanistaCoste;
