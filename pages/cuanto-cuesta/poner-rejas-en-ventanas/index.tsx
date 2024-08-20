import Head from 'next/head';

const PonerRejasEnVentanas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta poner rejas en ventanas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de rejas en ventanas y cómo planificar tu presupuesto para este proyecto de seguridad."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/poner-rejas-en-ventanas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta poner rejas en ventanas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Básicas: 50€ - 100€ por ventana</p>
            <p>Incluye rejas estándar y materiales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Decorativas: 100€ - 200€ por ventana</p>
            <p>Incluye rejas con diseños decorativos y opciones personalizadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y Diseño de las Rejas: Estándar, decorativas, con acabados especiales, etc.</li>
          <li>Materiales y Acabados: Hierro, aluminio, opciones de pintura, etc.</li>
          <li>Número de Ventanas: Cantidad de ventanas a proteger con rejas.</li>
          <li>Ubicación y Accesibilidad: Precios pueden variar según la ubicación geográfica y accesibilidad de las ventanas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Rejas en Ventanas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rejas Básicas</strong>: 50€ - 100€ por ventana, incluyendo rejas estándar y materiales básicos.
          </li>
          <li>
            <strong>Rejas Decorativas</strong>: 100€ - 200€ por ventana, incluyendo rejas con diseños decorativos y opciones personalizadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de Rejas</strong>: Escoge entre opciones estándar y decorativas según tus necesidades de seguridad y estéticas.</p>
        <p>2. <strong>Consulta con Profesionales</strong>: Obtén cotizaciones detalladas de instaladores de rejas para comparar precios y servicios.</p>
        <p>3. <strong>Considera la Seguridad y Estética</strong>: Evalúa la resistencia y el diseño de las rejas para proteger tus ventanas de manera efectiva y estética.</p>
        <p>4. <strong>Instalación y Mantenimiento</strong>: Coordinar la instalación adecuada y planificar el mantenimiento regular para asegurar la durabilidad de las rejas.</p>
      </section>

      <section>
        <p className="text-lg">
          La instalación de rejas en ventanas es crucial para la seguridad del hogar. Planifica cuidadosamente para garantizar una instalación segura y efectiva.
        </p>
      </section>
    </div>
  );
};

export default PonerRejasEnVentanas;