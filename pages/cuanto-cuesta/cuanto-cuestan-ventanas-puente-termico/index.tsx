import Head from 'next/head';

const VentanasPuenteTermicoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan las ventanas de puente térmico? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de ventanas de puente térmico y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuestan-ventanas-puente-termico`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan las ventanas de puente térmico?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Modelo Básico: 300€ - 500€ por ventana</p>
            <p>Incluye ventana estándar con doble acristalamiento.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Modelo Premium: 600€ - 1000€ por ventana</p>
            <p>Incluye ventana con triple acristalamiento y alta eficiencia energética.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Material de la Ventana: Dimensiones y tipo de material (aluminio, PVC, madera).</li>
          <li>Tipo de Vidrio: Doble o triple acristalamiento, vidrio térmico.</li>
          <li>Características de Aislamiento: Eficiencia energética y resistencia al frío/calor.</li>
          <li>Ubicación de Instalación: Piso, altura del edificio y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Ventanas de Puente Térmico</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Modelo Básico</strong>: 300€ - 500€ por ventana, incluye ventana estándar con doble acristalamiento.
          </li>
          <li>
            <strong>Modelo Premium</strong>: 600€ - 1000€ por ventana, incluye ventana con triple acristalamiento y alta eficiencia energética.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medir el Espacio</strong>: Determina las dimensiones exactas de las ventanas requeridas.</p>
        <p>2. <strong>Solicitar Varios Presupuestos</strong>: Obtén estimaciones detalladas de múltiples proveedores.</p>
        <p>3. <strong>Elegir el Material y Estilo</strong>: Considera opciones que se ajusten al diseño y necesidades de tu espacio.</p>
        <p>4. <strong>Instalación y Mantenimiento</strong>: Coordina con instaladores experimentados para garantizar una instalación adecuada y duradera.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar adecuadamente la instalación de ventanas de puente térmico puede mejorar la eficiencia energética y el confort de tu hogar, mientras optimizas tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default VentanasPuenteTermicoCoste;