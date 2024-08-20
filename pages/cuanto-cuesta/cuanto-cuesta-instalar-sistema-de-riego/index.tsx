import Head from 'next/head';

const SistemaRiegoCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar un sistema de riego? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la instalación de sistemas de riego para jardines y cómo planificar tu presupuesto adecuadamente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-sistema-de-riego`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar un sistema de riego?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sistema de Riego Básico: 500€ - 1500€</p>
            <p>Incluye instalación de rociadores y programación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Sistema de Riego Avanzado: 1500€ - 5000€</p>
            <p>Incluye sistemas de goteo, sensores de humedad y programación avanzada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad del área de riego.</li>
          <li>Tipo de sistema de riego seleccionado (rociadores, goteo, etc.).</li>
          <li>Necesidad de excavación y preparación del terreno.</li>
          <li>Calidad y marca de los componentes del sistema de riego.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Instalación de Sistemas de Riego</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Sistema de Riego Básico</strong>: 500€ - 1500€, incluye instalación de rociadores y programación básica.
          </li>
          <li>
            <strong>Sistema de Riego Avanzado</strong>: 1500€ - 5000€, incluye sistemas de goteo, sensores de humedad y programación avanzada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Instalar un Sistema de Riego</h2>
        <p>1. <strong>Planificación Detallada</strong>: Evalúa tus necesidades de riego y diseña un sistema adecuado.</p>
        <p>2. <strong>Comparación de Presupuestos</strong>: Solicita múltiples presupuestos y compara precios y servicios.</p>
        <p>3. <strong>Calidad de Componentes</strong>: Elige componentes de alta calidad para garantizar la durabilidad y eficiencia.</p>
        <p>4. <strong>Profesionalización</strong>: Considera contratar a profesionales con experiencia en instalación de sistemas de riego.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para instalar un sistema de riego según tus necesidades específicas y asegúrate de considerar todos los factores relevantes para una instalación exitosa.
        </p>
      </section>
    </div>
  );
};

export default SistemaRiegoCost;