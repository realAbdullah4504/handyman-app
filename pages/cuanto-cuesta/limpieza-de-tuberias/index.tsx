import Head from 'next/head';

const LimpiezaDeTuberias = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de tuberías? - Handyman</title>
        <meta
          name="description"
          content="Descubre cuánto cuesta la limpieza de tuberías, con información detallada sobre los precios y factores que influyen en el costo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/limpieza-de-tuberias`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de tuberías?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio Promedio en España: 80€ - 250€</p>
            <p>Precio estimado para la limpieza de tuberías en España.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Durchschnittlicher Preis in Deutschland: 100€ - 300€</p>
            <p>Geschätzter Preis für die Rohrreinigung in Deutschland.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Longitud y diámetro de las tuberías a limpiar.</li>
          <li>Grado de obstrucción o suciedad acumulada.</li>
          <li>Accesibilidad de las tuberías.</li>
          <li>Ubicación geográfica.</li>
          <li>Profesional contratado y métodos utilizados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Limpieza de Tuberías</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio en España</strong>: 80€ - 250€, precio estimado para la limpieza de tuberías en España.
          </li>
          <li>
            <strong>Preis in Deutschland</strong>: 100€ - 300€, geschätzter Preis für die Rohrreinigung in Deutschland.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para la Limpieza de Tuberías</h2>
        <p>1. <strong>Mantenimiento Regular</strong>: Programa limpiezas preventivas para evitar obstrucciones.</p>
        <p>2. <strong>Comparar Presupuestos</strong>: Solicita varios presupuestos y compara precios y servicios.</p>
        <p>3. <strong>Elegir Profesionales Calificados</strong>: Asegúrate de contratar a un profesional con experiencia y equipos adecuados.</p>
      </section>

      <section>
        <p className="text-lg">
          La limpieza de tuberías es crucial para mantener un sistema de plomería eficiente y prevenir problemas mayores. Evalúa todos los factores antes de tomar una decisión.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaDeTuberias;