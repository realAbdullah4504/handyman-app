import Head from 'next/head';

const RetirarEscombrosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta retirar escombros? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la retirada de escombros y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-retirar-escombros`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta retirar escombros?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 100€ - 300€</p>
            <p>Incluye retirada de escombros estándar de una pequeña a mediana obra.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 300€ - 1000€</p>
            <p>Incluye retirada de escombros grandes o complejos, como demolición completa de edificio.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Volumen de Escombros: Cantidad total de escombros a retirar.</li>
          <li>Tipo de Escombros: Material y naturaleza de los escombros (por ejemplo, hormigón, madera, etc.).</li>
          <li>Accesibilidad y Ubicación: Dificultad de acceso al sitio y condiciones locales.</li>
          <li>Costos de Eliminación: Tarifas de vertedero y normativas ambientales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Retirar Escombros</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 100€ - 300€, incluyendo retirada de escombros estándar de una pequeña a mediana obra.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 300€ - 1000€, incluyendo retirada de escombros grandes o complejos, como demolición completa de edificio.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Estimación de Escombros</strong>: Calcular el volumen y tipo de escombros a retirar.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicitar varios presupuestos de empresas de retirada de escombros.</p>
        <p>3. <strong>Consideraciones Ambientales</strong>: Asegurarse de cumplir con las normativas locales y ambientales para la eliminación de escombros.</p>
        <p>4. <strong>Planificación de Logística</strong>: Organizar el transporte y disposición final de los escombros de manera eficiente.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la retirada de escombros, puedes garantizar que el proyecto se realice de manera efectiva y dentro de tus medios financieros.
        </p>
      </section>
    </div>
  );
};

export default RetirarEscombrosCoste;
