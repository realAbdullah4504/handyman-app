import Head from 'next/head';

const CambiarVentanasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar ventanas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con cambiar ventanas y cómo planificar tu presupuesto para esta mejora del hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-ventanas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar ventanas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ventanas Básicas: 150€ - 300€ por ventana</p>
            <p>Incluye ventanas de vidrio simple y marco de PVC.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ventanas Premium: 300€ - 600€ por ventana</p>
            <p>Incluye ventanas de doble o triple acristalamiento y marcos de aluminio o madera.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y Calidad de las Ventanas: Vidrio simple vs. doble o triple acristalamiento; marcos de PVC, aluminio o madera.</li>
          <li>Tamaño y Cantidad de Ventanas: Número total y dimensiones de las ventanas a cambiar.</li>
          <li>Instalación y Mano de Obra: Complejidad de la instalación y tarifas del instalador.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambiar Ventanas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Ventanas Básicas</strong>: 150€ - 300€ por ventana, incluyendo vidrio simple y marcos de PVC.
          </li>
          <li>
            <strong>Ventanas Premium</strong>: 300€ - 600€ por ventana, incluyendo doble o triple acristalamiento y marcos de aluminio o madera.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades de Ventanas</strong>: Determina el número y tamaño de las ventanas que necesitas cambiar.</p>
        <p>2. <strong>Investigación y Comparación</strong>: Obtén cotizaciones de varios proveedores para comparar precios, tipos de ventanas ofrecidas y métodos de instalación.</p>
        <p>3. <strong>Considerar Beneficios a Largo Plazo</strong>: Aunque el costo es importante, considera el ahorro energético y la durabilidad de las ventanas para un valor sostenible.</p>
        <p>4. <strong>Calidad y Fiabilidad</strong>: Elige un proveedor y un instalador de confianza con experiencia en la instalación de ventanas para asegurar una aplicación adecuada y una larga duración.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente el cambio de tus ventanas, puedes mejorar la eficiencia energética y el confort de tu hogar, manteniéndote dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default CambiarVentanasCoste;