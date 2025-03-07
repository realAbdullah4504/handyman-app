import Head from 'next/head';

const CerrarFincaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cerrar una finca? - Oficios24</title>
        <meta
          name="description"
          content="Descubre los costos asociados con cerrar una finca y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cerrar-finca`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cerrar una finca?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cerramiento Básico: 20€ - 50€ por metro lineal</p>
            <p>Incluye materiales estándar y una instalación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cerramiento Premium: 50€ - 100€ por metro lineal</p>
            <p>Incluye materiales de alta calidad y diseños personalizados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Madera, aluminio, hierro forjado, etc.</li>
          <li>Diseño y Estilo: Cerramientos estándar vs. diseños personalizados o complejos.</li>
          <li>Longitud del Cerramiento: Longitud total que se necesita para cercar la finca.</li>
          <li>Altura del Cerramiento: Altura específica requerida para la cercanía.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cerrar una Finca</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cerramiento Básico</strong>: 20€ - 50€ por metro lineal, incluyendo materiales estándar y una instalación básica.
          </li>
          <li>
            <strong>Cerramiento Premium</strong>: 50€ - 100€ por metro lineal, incluyendo materiales de alta calidad y diseños personalizados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección del Tipo de Cerramiento</strong>: Elige el material y diseño que mejor se adapte a tus necesidades de seguridad y estéticas.</p>
        <p>2. <strong>Medición de Longitud y Altura</strong>: Calcula con precisión la longitud y altura necesarias para cercar la finca.</p>
        <p>3. <strong>Solicitud de Cotizaciones</strong>: Solicita cotizaciones detalladas de varios proveedores para comparar precios y servicios ofrecidos.</p>
        <p>4. <strong>Consideración de Calidad y Garantía</strong>: Elige un proveedor con experiencia y que ofrezca garantía adecuada para asegurar una instalación duradera y segura.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar adecuadamente el cierre de una finca, puedes mejorar la seguridad y privacidad de tu propiedad mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CerrarFincaCosto;