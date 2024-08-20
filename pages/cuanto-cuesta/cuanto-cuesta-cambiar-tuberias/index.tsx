import Head from 'next/head';

const CambiarTuberiasCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar tuberías? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio de tuberías en una vivienda o local y cómo presupuestar para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-tuberias`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar tuberías?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Básico: €1,000 - €3,000</p>
            <p>Incluye cambio de tuberías estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Complejo: €3,000 - €8,000+</p>
            <p>Para proyectos con tuberías complejas o en edificios antiguos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Extensión y tipo de tuberías a cambiar (agua fría, caliente, desagües).</li>
          <li>Condición actual de las tuberías y necesidad de reemplazo completo.</li>
          <li>Costos adicionales como permisos, materiales especiales o reparaciones estructurales.</li>
          <li>Ubicación geográfica y tarifas locales de mano de obra.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes típicos del cambio de tuberías</h2>
        <ul className="list-disc list-inside">
          <li>Materiales como tuberías de cobre, PVC, o PEX.</li>
          <li>Costos de demolición y remoción de tuberías viejas.</li>
          <li>Instalación de nuevas conexiones y accesorios.</li>
          <li>Pruebas de presión y garantía de sellado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determina el alcance total del proyecto y las áreas afectadas.</p>
        <p>2. <strong>Selección de materiales</strong>: Elige materiales duraderos y adecuados para tu sistema de tuberías.</p>
        <p>3. <strong>Presupuestos detallados</strong>: Solicita múltiples presupuestos de contratistas con experiencia en plomería.</p>
        <p>4. <strong>Consideraciones adicionales</strong>: Incluye contingencias para imprevistos y ajustes necesarios durante la instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la selección adecuada de materiales, puedes realizar un cambio de tuberías que mejore la funcionalidad y fiabilidad de la fontanería en tu hogar o local.
        </p>
      </section>
    </div>
  );
};

export default CambiarTuberiasCosto;