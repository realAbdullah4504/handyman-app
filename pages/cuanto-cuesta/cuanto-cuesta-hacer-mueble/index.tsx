import Head from 'next/head';

const HacerMuebleCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer un mueble a medida? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con hacer un mueble a medida y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-mueble`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer un mueble a medida?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 300€ - 800€</p>
            <p>Incluye materiales estándar y mano de obra para un mueble de tamaño medio.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 800€ - 2000€</p>
            <p>Incluye materiales premium, diseño personalizado y acabados especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Diseño: Complejidad y tamaño del mueble a medida.</li>
          <li>Materiales Utilizados: Calidad de la madera, metal, vidrio u otros materiales.</li>
          <li>Acabados y Detalles: Acabados personalizados, herrajes y adornos.</li>
          <li>Localización y Logística: Impacto en costos de transporte y entrega.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Hacer un Mueble a Medida</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 300€ - 800€, incluyendo materiales estándar y mano de obra.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 800€ - 2000€, incluyendo materiales premium y diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Consultar Diseños</strong>: Discutir requisitos de diseño y funcionalidad con el carpintero o diseñador.</p>
        <p>2. <strong>Obtener Muestras de Materiales</strong>: Evaluar opciones de materiales y acabados.</p>
        <p>3. <strong>Solicitar Presupuestos Detallados</strong>: Comparar costos entre varios proveedores y considerar garantías.</p>
        <p>4. <strong>Programar Entrega y Montaje</strong>: Coordinar fechas de entrega y montaje con el fabricante.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la fabricación de un mueble a medida, puedes asegurar que el proyecto se realice de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default HacerMuebleCoste;
