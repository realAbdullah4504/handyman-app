import Head from 'next/head';

const SaneamientoDeAgua = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el saneamiento de agua? - Handyman</title>
        <meta
          name="description"
          content="Descubre cuánto cuesta el saneamiento de agua, con información detallada sobre los precios y factores que influyen en el costo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/saneamiento-de-agua`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el saneamiento de agua?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio Promedio en España: 200€ - 500€</p>
            <p>Precio estimado para el saneamiento de agua en España.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Durchschnittlicher Preis in Deutschland: 300€ - 700€</p>
            <p>Geschätzter Preis für das Wasserentsorgungssystem in Deutschland.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión del sistema a sanear.</li>
          <li>Estado actual del sistema de saneamiento.</li>
          <li>Accesibilidad y ubicación geográfica.</li>
          <li>Profesional contratado y métodos utilizados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Saneamiento de Agua</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio en España</strong>: 200€ - 500€, precio estimado para el saneamiento de agua en España.
          </li>
          <li>
            <strong>Preis in Deutschland</strong>: 300€ - 700€, geschätzter Preis für das Wasserentsorgungssystem in Deutschland.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para el Saneamiento de Agua</h2>
        <p>1. <strong>Mantenimiento Preventivo</strong>: Realiza inspecciones regulares para prevenir problemas graves.</p>
        <p>2. <strong>Comparar Presupuestos</strong>: Solicita varios presupuestos y compara precios y servicios.</p>
        <p>3. <strong>Contratar Profesionales Calificados</strong>: Asegúrate de contratar a un profesional con experiencia y certificaciones necesarias.</p>
      </section>

      <section>
        <p className="text-lg">
          El saneamiento de agua es crucial para la salud pública y el medio ambiente. Considera todos los factores antes de tomar una decisión.
        </p>
      </section>
    </div>
  );
};

export default SaneamientoDeAgua;