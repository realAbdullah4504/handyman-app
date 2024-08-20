import Head from 'next/head';

const HacerPuertasAMedidaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer puertas a medida? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la fabricación de puertas a medida y cómo planificar tu presupuesto para obtener puertas personalizadas para tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-puertas-a-medida`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer puertas a medida?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puerta de Madera Maciza: 300€ - 800€ por puerta</p>
            <p>Incluye diseño personalizado y materiales de alta calidad.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puerta de MDF: 150€ - 400€ por puerta</p>
            <p>Incluye diseño a medida y acabado de pintura.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Material: Madera maciza, MDF, aluminio, etc.</li>
          <li>Diseño y Acabado: Puertas estándar vs. diseños personalizados con acabados especiales.</li>
          <li>Tamaño y Espesor: Puertas de dimensiones especiales pueden incrementar el costo.</li>
          <li>Instalación: Costos adicionales por la instalación profesional.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Hacer Puertas a Medida</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Puerta de Madera Maciza</strong>: 300€ - 800€ por puerta, incluyendo diseño personalizado y materiales de alta calidad.
          </li>
          <li>
            <strong>Puerta de MDF</strong>: 150€ - 400€ por puerta, incluyendo diseño a medida y acabado de pintura.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección del Material</strong>: Elige el material adecuado según tus necesidades y presupuesto.</p>
        <p>2. <strong>Diseño y Medición</strong>: Define el diseño y toma medidas precisas para la fabricación de la puerta.</p>
        <p>3. <strong>Solicitud de Cotizaciones</strong>: Obtén múltiples cotizaciones de diferentes proveedores para comparar precios y servicios ofrecidos.</p>
        <p>4. <strong>Consideración de Calidad y Garantía</strong>: Elige un proveedor que ofrezca productos de calidad y garantía adecuada.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar adecuadamente la fabricación de puertas a medida, puedes asegurarte de obtener puertas personalizadas que se ajusten a tus necesidades y estilo, manteniéndote dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default HacerPuertasAMedidaCosto;