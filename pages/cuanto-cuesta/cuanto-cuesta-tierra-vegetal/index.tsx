import Head from 'next/head';

const TierraVegetalCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la tierra vegetal? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la compra y transporte de tierra vegetal para tu jardín o proyecto de paisajismo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-tierra-vegetal`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la tierra vegetal?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio por Metro Cúbico: 15€ - 30€</p>
            <p>El costo varía según la calidad y la región.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Transporte: 50€ - 150€</p>
            <p>El costo depende de la distancia y el volumen.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Calidad de la tierra vegetal.</li>
          <li>Cantidad requerida.</li>
          <li>Distancia de transporte.</li>
          <li>Preparación y nivelación del terreno.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Tierra Vegetal</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio por Metro Cúbico</strong>: 15€ - 30€, dependiendo de la calidad.
          </li>
          <li>
            <strong>Transporte</strong>: 50€ - 150€, dependiendo de la distancia y el volumen.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Comprar Tierra Vegetal</h2>
        <p>1. <strong>Calidad</strong>: Asegúrate de comprar tierra de buena calidad, libre de piedras y otros contaminantes.</p>
        <p>2. <strong>Cantidad</strong>: Calcula correctamente la cantidad de tierra que necesitas para evitar compras innecesarias.</p>
        <p>3. <strong>Proveedores Locales</strong>: Considera comprar a proveedores locales para reducir costos de transporte.</p>
        <p>4. <strong>Preparación del Terreno</strong>: Prepara el terreno adecuadamente antes de añadir la tierra vegetal.</p>
        <p>5. <strong>Presupuesto</strong>: Define un presupuesto claro y considera todos los factores, incluidos los costos de transporte.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para la compra y transporte de tierra vegetal según tus necesidades específicas y asegúrate de considerar todos los factores relevantes para mantener un jardín saludable y productivo.
        </p>
      </section>
    </div>
  );
};

export default TierraVegetalCost;
