import Head from 'next/head';

const RepararFugaDeAgua = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reparar una fuga de agua? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos para reparar una fuga de agua en diferentes áreas de la casa, incluyendo tuberías, grifos y sistemas de drenaje."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/reparar-fuga-de-agua`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reparar una fuga de agua?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: 100€ - 200€</p>
            <p>Incluye la reparación de una fuga menor en una tubería visible.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Compleja: 300€ - 800€</p>
            <p>Incluye la localización y reparación de fugas ocultas o en tuberías de difícil acceso.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Fuga: Puede ser desde una tubería visible hasta una fuga oculta.</li>
          <li>Ubicación: Las fugas en áreas de difícil acceso pueden requerir más trabajo.</li>
          <li>Materiales: El costo puede variar según los materiales necesarios para la reparación.</li>
          <li>Tiempo: El tiempo necesario para la localización y reparación de la fuga.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reparar una Fuga de Agua</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparación Básica</strong>: 100€ - 200€, incluyendo la reparación de una fuga menor en una tubería visible.
          </li>
          <li>
            <strong>Reparación Compleja</strong>: 300€ - 800€, incluyendo la localización y reparación de fugas ocultas o en tuberías de difícil acceso.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para la Reparación de Fugas</h2>
        <p>1. <strong>Identifica la Fuente</strong>: Localiza la fuga y apaga el suministro de agua si es necesario.</p>
        <p>2. <strong>Solicita Evaluaciones</strong>: Obtén estimaciones de varios profesionales para comparar costos.</p>
        <p>3. <strong>Considera la Prevención</strong>: Mantén un mantenimiento regular para evitar futuras fugas.</p>
      </section>

      <section>
        <p className="text-lg">
          Reparar una fuga de agua a tiempo puede ayudarte a evitar daños mayores y costosos. Asegúrate de evaluar todos los factores antes de comenzar la reparación.
        </p>
      </section>
    </div>
  );
};

export default RepararFugaDeAgua;
