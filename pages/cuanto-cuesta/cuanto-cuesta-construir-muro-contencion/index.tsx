import Head from 'next/head';

const ConstruirMuroContencionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un muro de contención? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de muros de contención y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-muro-contencion`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un muro de contención?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 80€ - 120€ por metro cuadrado</p>
            <p>Incluye construcción estándar de muros de contención sin elementos decorativos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 120€ - 200€ por metro cuadrado</p>
            <p>Incluye muros con acabados especiales, diseños estructurales complejos o refuerzos adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Hormigón, piedra, madera tratada, etc.</li>
          <li>Altura y Longitud del Muro: Dimensiones y necesidades de cimentación.</li>
          <li>Refuerzos Estructurales: Necesidad de refuerzos adicionales como geotextiles o anclajes.</li>
          <li>Localización y Accesibilidad: Impacto en costos de transporte y logística.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Construcción de Muro de Contención</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 80€ - 120€ por metro cuadrado, incluyendo construcción estándar de muros de contención.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 120€ - 200€ por metro cuadrado, incluyendo muros con acabados especiales o diseños complejos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diseño y Especificaciones</strong>: Definir tipo de material, altura y longitud del muro.</p>
        <p>2. <strong>Obtención de Permisos</strong>: Asegurar cumplimiento de normativas locales y requerimientos legales.</p>
        <p>3. <strong>Comparación de Presupuestos</strong>: Solicitar ofertas de varios constructores especializados en muros de contención.</p>
        <p>4. <strong>Gestión de Materiales</strong>: Coordinar la entrega y almacenamiento de materiales de construcción necesarios.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la construcción de un muro de contención, puedes garantizar que el proyecto se lleve a cabo de manera efectiva y dentro de tus medios financieros.
        </p>
      </section>
    </div>
  );
};

export default ConstruirMuroContencionCoste;
