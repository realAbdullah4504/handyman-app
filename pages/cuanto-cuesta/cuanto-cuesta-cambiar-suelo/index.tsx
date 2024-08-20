import Head from 'next/head';

const CambiarSueloCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar el suelo? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio de suelo y cómo planificar tu presupuesto para renovar los pisos de tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-suelo`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar el suelo?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Suelo Laminado: 20€ - 40€ por m²</p>
            <p>Incluye materiales y mano de obra básica para la instalación de suelo laminado.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Suelo de Parquet: 30€ - 60€ por m²</p>
            <p>Incluye materiales y mano de obra para la instalación de suelo de parquet básico.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Suelo: Desde suelos laminados económicos hasta opciones de parquet más costosas.</li>
          <li>Área a Cubrir: El tamaño del área a renovar con nuevo suelo afectará el costo total.</li>
          <li>Preparación del Subsuelo: Necesidad de nivelación o preparación adicional del subsuelo.</li>
          <li>Ubicación y Accesibilidad: Precios pueden variar según la ubicación geográfica y accesibilidad al sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambiar el Suelo</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Suelo Laminado</strong>: 20€ - 40€ por m², incluyendo materiales y mano de obra básica para la instalación.
          </li>
          <li>
            <strong>Suelo de Parquet</strong>: 30€ - 60€ por m², incluyendo materiales y mano de obra para la instalación básica.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definición de Necesidades</strong>: Determina el tipo de suelo deseado y los requisitos específicos.</p>
        <p>2. <strong>Cotizaciones y Comparaciones</strong>: Obtén varias cotizaciones de proveedores de suelo para comparar precios y servicios.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Incluye costos adicionales como la preparación del subsuelo y acabados especiales.</p>
        <p>4. <strong>Programación del Trabajo</strong>: Coordina con el contratista la fecha y duración estimada para la instalación del nuevo suelo.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el presupuesto para cambiar el suelo, puedes mejorar significativamente la apariencia y funcionalidad de tu espacio.
        </p>
      </section>
    </div>
  );
};

export default CambiarSueloCoste;