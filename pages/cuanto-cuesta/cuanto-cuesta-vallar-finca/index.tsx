import Head from 'next/head';

const VallarFincaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta vallar una finca? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con vallar una finca y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-vallar-finca`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta vallar una finca?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Valla Básica: 10€ - 20€ por metro lineal</p>
            <p>Incluye materiales básicos y una instalación estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Valla Premium: 20€ - 50€ por metro lineal</p>
            <p>Incluye materiales de alta calidad y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Alambre, madera, malla metálica, etc.</li>
          <li>Altura y Longitud: Dimensiones de la valla.</li>
          <li>Diseño: Vallas estándar vs. vallas con diseños personalizados.</li>
          <li>Condiciones del Terreno: Terreno plano vs. terreno inclinado o con obstáculos.</li>
          <li>Mano de Obra: Costos de instalación profesional.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Vallar una Finca</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Valla Básica</strong>: 10€ - 20€ por metro lineal, incluyendo materiales básicos y una instalación estándar.
          </li>
          <li>
            <strong>Valla Premium</strong>: 20€ - 50€ por metro lineal, incluyendo materiales de alta calidad y diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección del Tipo de Material</strong>: Elige el tipo de material que mejor se adapte a tus necesidades y presupuesto.</p>
        <p>2. <strong>Medición del Terreno</strong>: Mide con precisión el área donde se instalará la valla.</p>
        <p>3. <strong>Solicitud de Cotizaciones</strong>: Obtén múltiples cotizaciones de diferentes proveedores para comparar precios y servicios ofrecidos.</p>
        <p>4. <strong>Consideración de Calidad y Garantía</strong>: Elige un proveedor que ofrezca productos de calidad y garantía adecuada.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar adecuadamente el vallado de una finca, puedes mejorar la seguridad y estética de tu propiedad mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default VallarFincaCosto;