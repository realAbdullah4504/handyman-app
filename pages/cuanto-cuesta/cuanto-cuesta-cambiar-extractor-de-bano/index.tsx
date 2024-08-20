
import Head from 'next/head';

const CambiarExtractorDeBanoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar un extractor de baño? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con cambiar un extractor de baño y cómo presupuestar para esta renovación en tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-extractor-de-bano`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar un extractor de baño?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Extractor Básico: €50 - €150</p>
            <p>Incluye extractor estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Extractor Avanzado: €150 - €300</p>
            <p>Incluye extractor de alta capacidad y instalación técnica.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y calidad del extractor (básico vs. avanzado).</li>
          <li>Mano de obra y tarifas de instalación.</li>
          <li>Necesidad de ajustes o modificaciones adicionales en la instalación.</li>
          <li>Ubicación geográfica y acceso al lugar de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes de la renovación</h2>
        <ul className="list-disc list-inside">
          <li>Selección y compra del extractor adecuado.</li>
          <li>Instalación del extractor, incluyendo cableado y conexiones eléctricas.</li>
          <li>Pruebas y ajustes finales para asegurar el funcionamiento correcto.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el tipo y capacidad necesarios del extractor.</p>
        <p>2. <strong>Compra y comparación</strong>: Comparar precios y características entre extractores disponibles.</p>
        <p>3. <strong>Presupuesto de materiales y mano de obra</strong>: Incluir costos de compra y servicios profesionales.</p>
        <p>4. <strong>Instalación y garantía</strong>: Contratar servicios de instalación con garantía y experiencia.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y ajuste a tu presupuesto, puedes cambiar el extractor de baño sin problemas y mejorar la ventilación de tu hogar.
        </p>
      </section>
    </div>
  );
};

export default CambiarExtractorDeBanoCosto;
