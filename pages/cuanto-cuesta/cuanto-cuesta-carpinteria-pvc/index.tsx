import Head from 'next/head';

const CarpinteriaPVCCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la carpintería de PVC? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la carpintería de PVC y cómo presupuestar para mejorar la eficiencia energética y estética de tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-carpinteria-pvc`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la carpintería de PVC?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ventanas estándar: €300 - €500 por ventana</p>
            <p>Incluye materiales y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Ventanas premium: €500 - €1,000+ por ventana</p>
            <p>Para ventanas de PVC con características avanzadas y acabados personalizados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y tipo de ventana: Estándar, oscilobatiente, corredera, etc.</li>
          <li>Calidad del PVC: Estándar vs. premium para durabilidad y eficiencia energética.</li>
          <li>Diseño personalizado: Acabados, colores y características adicionales.</li>
          <li>Instalación: Mano de obra y complejidad de la instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Medición y evaluación</strong>: Determinar las dimensiones y tipo de ventanas requeridas.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener cotizaciones detalladas de carpinteros de PVC.</p>
        <p>3. <strong>Selección de ventanas</strong>: Escoger ventanas que se ajusten al presupuesto y estilo del hogar.</p>
        <p>4. <strong>Programación de instalación</strong>: Coordinar con el instalador para realizar el trabajo.</p>
      </section>

      <section>
        <p className="text-lg">
          Optar por carpintería de PVC puede mejorar la eficiencia energética y estética de tu hogar, además de reducir costos a largo plazo.
        </p>
      </section>
    </div>
  );
};

export default CarpinteriaPVCCoste;