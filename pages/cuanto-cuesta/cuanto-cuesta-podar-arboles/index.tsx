import Head from 'next/head';

const PodarArbolesCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta podar árboles? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la poda de árboles y cómo planificar tu presupuesto adecuadamente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-podar-arboles`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta podar árboles?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Poda Básica: 50€ - 150€ por árbol</p>
            <p>Incluye poda ligera de mantenimiento y eliminación de ramas pequeñas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Poda Completa: 200€ - 500€ por árbol</p>
            <p>Costo aproximado para poda extensa, incluyendo la eliminación de ramas grandes y peligrosas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y tipo de árbol a podar.</li>
          <li>Accesibilidad y ubicación del árbol.</li>
          <li>Estado y salud del árbol.</li>
          <li>Costos laborales y tarifas del podador de árboles.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Poda de Árboles</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Poda Básica</strong>: 50€ - 150€ por árbol, incluye poda ligera de mantenimiento y eliminación de ramas pequeñas.
          </li>
          <li>
            <strong>Poda Completa</strong>: 200€ - 500€ por árbol, costo aproximado para poda extensa, incluyendo la eliminación de ramas grandes y peligrosas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Podar Árboles</h2>
        <p>1. <strong>Selección de Herramientas</strong>: Utiliza herramientas adecuadas y afiladas para evitar dañar el árbol.</p>
        <p>2. <strong>Temporada de Poda</strong>: Realiza la poda en la temporada adecuada para minimizar el estrés del árbol.</p>
        <p>3. <strong>Profesionales Calificados</strong>: Consulta con podadores de árboles profesionales para garantizar un trabajo seguro y efectivo.</p>
        <p>4. <strong>Presupuesto Realista</strong>: Considera todos los costos involucrados, incluyendo la eliminación de residuos.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para podar tus árboles según tus necesidades específicas y asegúrate de considerar todos los factores relevantes para mantener tus árboles saludables y seguros.
        </p>
      </section>
    </div>
  );
};

export default PodarArbolesCost;