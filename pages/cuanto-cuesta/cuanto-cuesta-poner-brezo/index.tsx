import Head from 'next/head';

const PonerBrezoCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta poner brezo? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la instalación de brezo para cercados y jardines."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-poner-brezo`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta poner brezo?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio por Metro Cuadrado: 5€ - 15€</p>
            <p>El costo varía según la calidad y la densidad del brezo.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación: 10€ - 20€ por metro lineal</p>
            <p>El costo depende de la mano de obra y la dificultad del terreno.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Calidad y densidad del brezo.</li>
          <li>Cantidad de metros cuadrados a cubrir.</li>
          <li>Dificultad del terreno y accesibilidad.</li>
          <li>Costo de la mano de obra local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Poner Brezo</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio por Metro Cuadrado</strong>: 5€ - 15€, dependiendo de la calidad.
          </li>
          <li>
            <strong>Instalación</strong>: 10€ - 20€ por metro lineal, dependiendo de la dificultad del terreno.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para la Instalación de Brezo</h2>
        <p>1. <strong>Calidad</strong>: Opta por brezo de alta densidad para mayor durabilidad y apariencia.</p>
        <p>2. <strong>Cantidad</strong>: Mide correctamente la superficie a cubrir para evitar compras innecesarias.</p>
        <p>3. <strong>Proveedores Locales</strong>: Considera proveedores locales para reducir costos de transporte.</p>
        <p>4. <strong>Preparación del Terreno</strong>: Asegúrate de que el terreno esté preparado adecuadamente antes de la instalación.</p>
        <p>5. <strong>Presupuesto</strong>: Define un presupuesto claro y considera todos los factores, incluidos los costos de instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para la instalación de brezo según tus necesidades específicas y asegúrate de considerar todos los factores relevantes para mantener un cercado atractivo y duradero.
        </p>
      </section>
    </div>
  );
};

export default PonerBrezoCost;
