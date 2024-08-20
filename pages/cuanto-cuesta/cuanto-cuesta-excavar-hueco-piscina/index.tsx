import Head from 'next/head';

const ExcavarHuecoPiscinaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta excavar un hueco para piscina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la excavación del hueco para construir una piscina, incluyendo factores como tamaño, tipo de suelo y accesibilidad."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-excavar-hueco-piscina`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta excavar un hueco para piscina?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Excavación: Variable</p>
          <p>El precio puede variar según el tamaño de la piscina, tipo de suelo y accesibilidad al sitio.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Profundidad de la Piscina</li>
          <li>Tipo de Suelo (ej. tierra, roca, arcilla)</li>
          <li>Accesibilidad al Sitio</li>
          <li>Necesidad de Maquinaria Especializada</li>
          <li>Costos Laborales y de Material</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          La excavación del hueco para una piscina es una tarea fundamental en la construcción de piscinas. Obtener múltiples presupuestos y considerar diferentes factores puede ayudar a planificar y gestionar el costo total del proyecto.
        </p>
      </section>
    </div>
  );
};

export default ExcavarHuecoPiscinaCoste;