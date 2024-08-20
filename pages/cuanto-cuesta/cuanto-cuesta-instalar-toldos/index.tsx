import Head from 'next/head';

const ToldosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar toldos? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la instalación de toldos y cómo presupuestar para mejorar la protección solar y estética de tu hogar."
        />
        <link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-toldos`}
				/>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar toldos?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €500 - €1,500</p>
            <p>Incluye toldos estándar y configuración básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Premium: €1,500 - €3,000</p>
            <p>Incluye toldos de alta calidad y configuración avanzada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y tipo de toldo: Toldos retráctiles, fijos, motorizados, etc.</li>
          <li>Materiales y calidad: Tela, estructura metálica, sistemas de apertura.</li>
          <li>Ubicación y condiciones climáticas: Afecta la resistencia y durabilidad del toldo.</li>
          <li>Instalación y accesorios adicionales: Costos de montaje y añadidos como iluminación integrada o sensores.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalación de toldos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €500 - €1,500, incluyendo toldos estándar y configuración básica.
          </li>
          <li>
            <strong>Instalación Premium</strong>: €1,500 - €3,000, incluyendo toldos de alta calidad y configuración avanzada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar necesidades de protección solar</strong>: Determinar áreas que requieren cobertura y tipo de toldo adecuado.</p>
        <p>2. <strong>Consultar con instaladores de toldos</strong>: Obtener varios presupuestos y opciones de diseño según el espacio disponible.</p>
        <p>3. <strong>Considerar mantenimiento y garantía</strong>: Revisar las condiciones de garantía y costos de mantenimiento para asegurar la durabilidad del toldo.</p>
        <p>4. <strong>Personalización y estética</strong>: Explorar opciones de personalización como colores y estilos que se ajusten al diseño de tu hogar.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar la instalación de toldos, ten en cuenta los factores que influyen en los costos y busca opciones que proporcionen confort y estética a largo plazo.
        </p>
      </section>
    </div>
  );
};

export default ToldosCoste;