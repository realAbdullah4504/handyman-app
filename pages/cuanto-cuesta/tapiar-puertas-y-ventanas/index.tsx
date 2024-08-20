import Head from 'next/head';

const TapiarPuertasYVentanas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta tapiar puertas y ventanas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con tapiar puertas y ventanas, incluyendo materiales, mano de obra y factores que afectan los costos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/tapiar-puertas-y-ventanas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta tapiar puertas y ventanas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tapiado Básico: 100€ - 300€ por ventana/puerta</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tapiado Complejo: 300€ - 600€ por ventana/puerta</p>
            <p>Incluye materiales especiales y trabajos complejos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Ventana/Puerta: Dimensiones y materiales de la estructura a tapiar.</li>
          <li>Materiales Utilizados: Costo y tipo de materiales de construcción utilizados.</li>
          <li>Accesibilidad: Facilidad de acceso al sitio y complicaciones logísticas.</li>
          <li>Ubicación: Variaciones regionales en costos de mano de obra y materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Tapiar Puertas y Ventanas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Tapiado Básico</strong>: 100€ - 300€ por ventana/puerta, incluyendo materiales estándar y mano de obra básica.
          </li>
          <li>
            <strong>Tapiado Complejo</strong>: 300€ - 600€ por ventana/puerta, incluyendo materiales especiales y trabajos complejos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de Materiales</strong>: Decide sobre los materiales según el tipo y ubicación de la ventana/puerta.</p>
        <p>2. <strong>Cotización Detallada</strong>: Obtén presupuestos precisos de varios contratistas para comparar precios.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Planifica para posibles modificaciones estructurales y permisos necesarios.</p>
      </section>

      <section>
        <p className="text-lg">
          El tapiado de puertas y ventanas puede mejorar la seguridad y eficiencia energética. Asegúrate de presupuestar adecuadamente para cumplir con tus necesidades y expectativas.
        </p>
      </section>
    </div>
  );
};

export default TapiarPuertasYVentanas;
