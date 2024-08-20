import Head from 'next/head';

const PavimentoContinuoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un pavimento continuo? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de pavimentos continuos y cómo planificar tu presupuesto para este tipo de suelos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-pavimento-continuo`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un pavimento continuo?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 20€ - 50€ por metro cuadrado</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye materiales premium y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Pavimento: Selección entre diferentes tipos de pavimentos continuos.</li>
          <li>Materiales Utilizados: Calidad y tipo de materiales seleccionados para el pavimento.</li>
          <li>Tamaño del Área: Dimensiones del espacio a cubrir con pavimento continuo.</li>
          <li>Preparación del Subsuelo: Necesidad de preparación previa del suelo antes de la instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Pavimento Continuo</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 20€ - 50€ por metro cuadrado, incluyendo materiales estándar y mano de obra básica.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 50€ - 100€ por metro cuadrado, incluyendo materiales premium y técnicas avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Consulta Inicial</strong>: Evaluación del espacio y discusión de opciones de pavimento continuo.</p>
        <p>2. <strong>Selección de Material</strong>: Elección de materiales basada en estilo, durabilidad y presupuesto.</p>
        <p>3. <strong>Obtención de Presupuestos Detallados</strong>: Solicitar cotizaciones a varios proveedores y comparar costos y servicios.</p>
        <p>4. <strong>Programación de la Instalación</strong>: Coordinación de fechas de instalación y asegurarse de los detalles del proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la instalación de pavimento continuo, puedes garantizar que el proyecto se realice de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default PavimentoContinuoCoste;