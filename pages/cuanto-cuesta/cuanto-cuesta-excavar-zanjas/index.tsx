import Head from 'next/head';

const ExcavarZanjasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta excavar zanjas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la excavación de zanjas para diferentes propósitos, como instalación de tuberías, cables, o drenajes."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-excavar-zanjas`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta excavar zanjas?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Excavación: Variable</p>
          <p>El precio puede variar según la profundidad, longitud y tipo de suelo de la zanja.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Propósitos Comunes de Excavación de Zanjas</h2>
        <ul className="list-disc list-inside">
          <li>Instalación de tuberías de agua o gas</li>
          <li>Colocación de cables eléctricos o de telecomunicaciones</li>
          <li>Creación de drenajes o sistemas de riego</li>
          <li>Excavación para cimientos o sistemas de drenaje</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Profundidad y Longitud de la Zanja</li>
          <li>Tipo de Suelo (ej. tierra, roca, arcilla)</li>
          <li>Accesibilidad al Sitio</li>
          <li>Necesidad de Maquinaria Especializada</li>
          <li>Costos Laborales y de Material</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          La excavación de zanjas es esencial para muchos proyectos de construcción e infraestructura. Obtener múltiples presupuestos y considerar diferentes factores puede ayudar a tomar decisiones informadas.
        </p>
      </section>
    </div>
  );
};

export default ExcavarZanjasCoste;