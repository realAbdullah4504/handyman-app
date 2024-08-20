import Head from 'next/head';

const ConstruirGarajeCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un garaje? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la construcción de un garaje y cómo presupuestar para este tipo de proyectos de construcción en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-garaje`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un garaje?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Garaje Básico: €5,000 - €15,000</p>
            <p>Construcción estándar con espacio para uno o dos vehículos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Garaje Complejo: €15,000 - €50,000+</p>
            <p>Garajes grandes o personalizados con características adicionales como almacenamiento o taller.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño del garaje: Garajes más grandes o con diseños personalizados tienen costos más altos.</li>
          <li>Materiales y acabados: Selección de materiales, calidad de acabados y especificaciones influyen en el presupuesto.</li>
          <li>Preparación del terreno: Costos asociados con la nivelación y preparación del suelo antes de la construcción.</li>
          <li>Ubicación geográfica: Costos laborales y de materiales pueden variar según la ubicación del garaje.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir un garaje</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Garaje Básico</strong>: €5,000 - €15,000, construcción estándar con espacio para uno o dos vehículos.
          </li>
          <li>
            <strong>Garaje Complejo</strong>: €15,000 - €50,000+, garajes grandes o personalizados con características adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos y tamaño del garaje</strong>: Determinar cuántos vehículos almacenará y si incluirá almacenamiento adicional.</p>
        <p>2. <strong>Solicitar múltiples presupuestos</strong>: Obtener estimaciones detalladas de varios contratistas de construcción.</p>
        <p>3. <strong>Seleccionar materiales y acabados</strong>: Elegir opciones que se ajusten al presupuesto y al diseño deseado.</p>
        <p>4. <strong>Gestionar permisos y regulaciones</strong>: Asegurar que todos los permisos necesarios estén en orden antes de iniciar la construcción.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes construir un garaje exitoso y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirGarajeCoste;