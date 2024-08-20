import Head from 'next/head';

const ColchonCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un colchón? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la compra de colchones y cómo seleccionar el colchón adecuado para tus necesidades."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-colchon`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un colchón?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Colchón Económico: 200€ - 500€</p>
            <p>Incluye colchones de espuma o muelles estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Colchón Premium: 500€ - 1500€</p>
            <p>Incluye colchones de látex o viscoelásticos de alta gama.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Espuma, muelles, látex, viscoelástico, etc.</li>
          <li>Tamaño del Colchón: Individual, matrimonial, queen, king, etc.</li>
          <li>Calidad y Marca: Marcas reconocidas o colchones de fabricación especializada.</li>
          <li>Características Adicionales: Firmeza, tecnología de refrigeración, antiácaros, etc.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Colchones</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Colchón Económico</strong>: 200€ - 500€, incluyendo colchones estándar de espuma o muelles.
          </li>
          <li>
            <strong>Colchón Premium</strong>: 500€ - 1500€, incluyendo colchones de alta gama como látex o viscoelásticos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para la Compra</h2>
        <p>1. <strong>Prueba en Tienda</strong>: Probar varios colchones para determinar el nivel de confort.</p>
        <p>2. <strong>Investigación en Línea</strong>: Leer reseñas y comparar precios y características.</p>
        <p>3. <strong>Política de Devolución</strong>: Verificar la política de devolución y garantía del colchón.</p>
        <p>4. <strong>Presupuesto</strong>: Asegurarse de incluir el costo de envío y montaje en el presupuesto total.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la compra de un colchón, puedes mejorar tu calidad de sueño y bienestar general mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ColchonCosto;