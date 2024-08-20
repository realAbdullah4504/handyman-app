import Head from 'next/head';

const ConfeccionCortinasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la confección de cortinas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la confección de cortinas y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-confeccion-cortinas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la confección de cortinas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cortinas Estándar: 100€ - 300€ por juego</p>
            <p>Incluye materiales básicos y confección estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cortinas Personalizadas: 300€ - 1,000€ por juego</p>
            <p>Incluye materiales de alta calidad y confección personalizada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Tela: Tela estándar vs. telas de alta gama o especiales.</li>
          <li>Dimensiones y Diseño: Costos por juego o por metro cuadrado.</li>
          <li>Estilo y Acabados: Costos adicionales por detalles como forros, bordados, o accesorios.</li>
          <li>Ubicación Geográfica: Variación de precios según la ubicación y condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Confección de Cortinas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cortinas Estándar</strong>: 100€ - 300€ por juego, incluyendo materiales básicos y confección estándar.
          </li>
          <li>
            <strong>Cortinas Personalizadas</strong>: 300€ - 1,000€ por juego, incluyendo materiales de alta calidad y confección personalizada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades del Proyecto</strong>: Determina el tipo de cortinas requeridas y las especificaciones exactas.</p>
        <p>2. <strong>Selección de Materiales y Diseño</strong>: Escoge la tela y los acabados que se ajusten a tus preferencias y presupuesto.</p>
        <p>3. <strong>Solicitar Múltiples Presupuestos</strong>: Obtén cotizaciones detalladas de varios proveedores para comparar precios y servicios ofrecidos.</p>
        <p>4. <strong>Calidad y Garantía</strong>: Asegúrate de seleccionar un proveedor con experiencia y garantía en la confección de cortinas para resultados satisfactorios.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la confección de cortinas, puedes mejorar la estética y funcionalidad de tus espacios mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConfeccionCortinasCoste;