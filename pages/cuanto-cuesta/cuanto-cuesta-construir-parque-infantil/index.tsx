import Head from 'next/head';

const ConstruccionParqueInfantilCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir un parque infantil? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de un parque infantil y cómo presupuestar para proyectos de construcción de parques infantiles."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-parque-infantil`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir un parque infantil?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Parque infantil estándar: €10,000 - €20,000</p>
            <p>Construcción de un parque infantil básico con juegos estándar y superficie de seguridad.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Parque infantil premium: €20,000 - €50,000</p>
            <p>Construcción de un parque infantil con diseño avanzado, juegos personalizados y alta calidad en superficie de seguridad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del parque: Área total y número de juegos influyen en el costo.</li>
          <li>Materiales y diseño: Variedad en los costos según los materiales utilizados y el diseño del parque.</li>
          <li>Accesibilidad y seguridad: Cumplir con estándares de seguridad y accesibilidad puede aumentar costos.</li>
          <li>Personalización: Juegos personalizados y características adicionales incrementan el presupuesto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir un parque infantil</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Parque infantil estándar</strong>: €10,000 - €20,000, construcción de un parque con juegos básicos y superficie de seguridad.
          </li>
          <li>
            <strong>Parque infantil premium</strong>: €20,000 - €50,000, construcción de un parque con diseño avanzado, juegos personalizados y alta calidad en superficie de seguridad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos y diseño</strong>: Establecer las necesidades específicas y el diseño deseado para el parque infantil.</p>
        <p>2. <strong>Seleccionar juegos y materiales</strong>: Elegir juegos y materiales que se ajusten al diseño y presupuesto del proyecto.</p>
        <p>3. <strong>Seguridad y cumplimiento normativo</strong>: Asegurarse de cumplir con las normativas de seguridad y accesibilidad locales.</p>
        <p>4. <strong>Contratar profesionales</strong>: Contratar equipos profesionales para la construcción y supervisión del parque infantil.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación detallada y considerando los factores que afectan los costos, puedes construir un parque infantil seguro y divertido dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruccionParqueInfantilCoste;
