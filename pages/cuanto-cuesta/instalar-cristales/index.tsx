
import Head from 'next/head';

const InstalarCristalesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar cristales? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de cristales en ventanas, puertas y estructuras de tu hogar o negocio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-cristales`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar cristales?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cristales Básicos: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye cristales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cristales Especiales: 100€ - 200€ por metro cuadrado</p>
            <p>Incluye cristales especiales como acústicos, térmicos o de seguridad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Cristal: Estándar, acústico, térmico, de seguridad, etc.</li>
          <li>Tamaño y Forma: Tamaño de las ventanas o puertas y complejidad de la instalación.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y el acceso al sitio.</li>
          <li>Costos de Mano de Obra: Tarifas de instalación y posibles preparaciones adicionales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Cristales</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cristales Básicos</strong>: 50€ - 100€ por metro cuadrado, incluyendo cristales estándar y mano de obra básica.
          </li>
          <li>
            <strong>Cristales Especiales</strong>: 100€ - 200€ por metro cuadrado, incluyendo cristales especiales y técnicas de instalación avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición y Evaluación</strong>: Determina el tamaño y tipo de cristales necesarios para tu proyecto.</p>
        <p>2. <strong>Comparación de Precios</strong>: Solicita cotizaciones de varios proveedores para obtener la mejor relación calidad-precio.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Incluye costos de instalación, preparación del sitio y cualquier servicio post-instalación necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Instalar cristales puede mejorar la eficiencia energética y la estética de tu hogar o negocio. Planifica adecuadamente tu presupuesto para obtener resultados satisfactorios.
        </p>
      </section>
    </div>
  );
};

export default InstalarCristalesPage;