import Head from 'next/head';

const RepararFontaneria = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar fontanería? - Handyman</title>
        <meta
          name="description"
          content="Descubre cuánto cuesta reparar fontanería en tu hogar o negocio, con información detallada sobre los precios y factores que influyen en el costo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/reparar-fontaneria`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta reparar fontanería?
      </h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio Promedio en España: 100€ - 500€</p>
            <p>Precio estimado para reparar fontanería en el territorio español.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Durchschnittlicher Preis in Deutschland: 150€ - 600€</p>
            <p>Geschätzter Preis für die Reparatur der Sanitäranlagen in Deutschland.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Reparación: El costo varía según la complejidad de la reparación, ya sea una simple fuga o la sustitución de tuberías.</li>
          <li>Materiales Utilizados: La calidad y el tipo de materiales utilizados pueden influir en el precio.</li>
          <li>Ubicación: Las reparaciones en áreas de difícil acceso pueden ser más costosas.</li>
          <li>Urgencia del Servicio: Los servicios de emergencia o fuera de horario laboral suelen ser más caros.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparar Fontanería</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio en España</strong>: 100€ - 500€, precio estimado para reparar fontanería en España.
          </li>
          <li>
            <strong>Preis in Deutschland</strong>: 150€ - 600€, geschätzter Preis für die Reparatur der Sanitäranlagen in Deutschland.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Reparar Fontanería</h2>
        <p>1. <strong>Inspecciona Regularmente</strong>: Realiza inspecciones periódicas para identificar problemas antes de que se agraven.</p>
        <p>2. <strong>Utiliza Materiales de Calidad</strong>: Al reparar o reemplazar componentes de fontanería, asegúrate de utilizar materiales de alta calidad para prolongar su vida útil.</p>
        <p>3. <strong>Contrata a Profesionales</strong>: Siempre es recomendable contratar a profesionales certificados para asegurar una reparación adecuada y evitar problemas futuros.</p>
      </section>

      <section>
        <p className="text-lg">
          Reparar fontanería es esencial para el buen funcionamiento del sistema de agua de tu hogar o negocio. Considera los factores y precios antes de decidir la mejor opción para tu situación.
        </p>
      </section>
    </div>
  );
};

export default RepararFontaneria;
