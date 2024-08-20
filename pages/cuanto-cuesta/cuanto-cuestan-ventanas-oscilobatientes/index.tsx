import Head from 'next/head';

const VentanasOscilobatientesCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan las ventanas oscilobatientes? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de ventanas oscilobatientes y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuestan-ventanas-oscilobatientes`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan las ventanas oscilobatientes?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Modelo Básico: 200€ - 300€ por ventana</p>
            <p>Incluye ventana estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Modelo Premium: 400€ - 600€ por ventana</p>
            <p>Incluye ventana de alta calidad con características adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Material de la Ventana: Dimensiones y tipo de material (aluminio, PVC, madera).</li>
          <li>Tipo de Vidrio: Vidrio estándar vs. vidrio térmico o de seguridad.</li>
          <li>Accesorios y Acabados: Manivelas, herrajes y acabados adicionales.</li>
          <li>Ubicación de Instalación: Piso, altura del edificio y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Ventanas Oscilobatientes</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Modelo Básico</strong>: 200€ - 300€ por ventana, incluye ventana estándar y mano de obra básica.
          </li>
          <li>
            <strong>Modelo Premium</strong>: 400€ - 600€ por ventana, incluye ventana de alta calidad con características adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medir el Espacio</strong>: Determina las dimensiones exactas de las ventanas requeridas.</p>
        <p>2. <strong>Solicitar Varios Presupuestos</strong>: Obtén estimaciones detalladas de múltiples proveedores.</p>
        <p>3. <strong>Considerar la Eficiencia Energética</strong>: Opta por ventanas con buenos valores de aislamiento para reducir costos energéticos.</p>
        <p>4. <strong>Programar la Instalación</strong>: Coordina con los instaladores para evitar inconvenientes mayores y asegurar la fecha de instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar adecuadamente la instalación de ventanas oscilobatientes puede mejorar la eficiencia energética y el confort de tu hogar, mientras optimizas tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default VentanasOscilobatientesCoste;
