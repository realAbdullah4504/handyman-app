import Head from 'next/head';

const InstalarVallaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar una valla? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de vallas y cómo planificar tu presupuesto para mejorar la seguridad y privacidad de tu propiedad."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-valla`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar una valla?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Valla Básica: 30€ - 50€ por metro lineal</p>
            <p>Incluye vallas de madera o metálicas estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Valla Decorativa: 50€ - 100€ por metro lineal</p>
            <p>Incluye vallas decorativas o de diseño especial.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Madera, metal, PVC, etc.</li>
          <li>Altura y Longitud de la Valla: Dimensiones de la valla a instalar.</li>
          <li>Estilo y Diseño: Vallas estándar vs. vallas decorativas o personalizadas.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalar Vallas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Valla Básica</strong>: 30€ - 50€ por metro lineal, incluyendo vallas de madera o metálicas estándar.
          </li>
          <li>
            <strong>Valla Decorativa</strong>: 50€ - 100€ por metro lineal, incluyendo vallas decorativas o de diseño especial.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección del Tipo de Valla</strong>: Decide el tipo y material de valla que mejor se adapte a tus necesidades y estilo.</p>
        <p>2. <strong>Medición y Evaluación del Sitio</strong>: Mide la longitud y altura requeridas para obtener un presupuesto preciso.</p>
        <p>3. <strong>Solicitud de Presupuestos</strong>: Obtén cotizaciones detalladas de varios proveedores para comparar precios y servicios.</p>
        <p>4. <strong>Consideración de Seguridad y Estética</strong>: Evalúa las características de seguridad y el impacto estético de la valla en tu propiedad.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar y presupuestar adecuadamente la instalación de una valla puede mejorar la seguridad y privacidad de tu propiedad, mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalarVallaCosto;