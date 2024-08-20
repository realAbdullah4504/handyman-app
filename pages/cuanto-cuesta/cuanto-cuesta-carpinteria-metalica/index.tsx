import Head from 'next/head';

const CuantoCuestaCarpinteriaMetalica = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta carpintería metálica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con carpintería metálica y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-carpinteria-metalica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta carpintería metálica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puertas metálicas: €300 - €800</p>
            <p>Precio promedio para puertas estándar de acero o aluminio.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ventanas metálicas: €150 - €500</p>
            <p>Precio promedio para ventanas estándar de acero galvanizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Materiales utilizados: Acero, aluminio u otros metales.</li>
          <li>Tamaño y diseño: Dimensiones y complejidad del trabajo.</li>
          <li>Instalación: Dificultad de instalación y acabados adicionales.</li>
          <li>Ubicación geográfica: Variaciones de costos según la región.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Definir requisitos</strong>: Especificar el tipo y tamaño de las estructuras metálicas necesarias.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener varias cotizaciones de carpinteros metálicos y comparar precios y servicios.</p>
        <p>3. <strong>Considerar calidad</strong>: Evaluar la durabilidad y garantías ofrecidas por los materiales y trabajos.</p>
        <p>4. <strong>Planificación de tiempo</strong>: Asegurar la disponibilidad del proveedor y tiempos de entrega.</p>
      </section>

      <section>
        <p className="text-lg">
          La carpintería metálica ofrece soluciones duraderas y estéticamente atractivas para estructuras en acero y aluminio.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaCarpinteriaMetalica;