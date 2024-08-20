import Head from 'next/head';

const InstalarCalefaccionInfrarrojosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar calefacción por infrarrojos? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de calefacción por infrarrojos y cómo mejorar eficientemente la temperatura de tus espacios."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-calefaccion-infrarrojos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar calefacción por infrarrojos?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 100€ - 150€ por panel</p>
            <p>Incluye la instalación estándar de paneles de calefacción por infrarrojos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Completa: 150€ - 250€ por panel</p>
            <p>Incluye instalación de paneles de alta eficiencia y ajustes adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Potencia del Panel: Paneles más grandes o de mayor potencia pueden tener costos más altos.</li>
          <li>Cantidad de Paneles: El costo total dependerá de cuántos paneles necesites para cubrir el área deseada.</li>
          <li>Instalación: Dificultad de instalación según el diseño y estructura de la habitación.</li>
          <li>Materiales Utilizados: Calidad de los paneles y su impacto en la eficiencia energética.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para Instalar Calefacción por Infrarrojos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 100€ - 150€ por panel, incluyendo instalación estándar de paneles de calefacción por infrarrojos.
          </li>
          <li>
            <strong>Instalación Completa</strong>: 150€ - 250€ por panel, incluyendo paneles de alta eficiencia y ajustes adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de Paneles</strong>: Escoge paneles que se ajusten a tus necesidades de calefacción y diseño estético.</p>
        <p>2. <strong>Calculo de Área</strong>: Determina el tamaño de la habitación y la distribución de los paneles para una cobertura efectiva.</p>
        <p>3. <strong>Consultas Profesionales</strong>: Contacta con instaladores especializados para obtener presupuestos detallados y recomendaciones técnicas.</p>
        <p>4. <strong>Mantenimiento y Eficiencia</strong>: Considera el mantenimiento regular para asegurar la eficiencia y durabilidad de los paneles de calefacción por infrarrojos.</p>
      </section>

      <section>
        <p className="text-lg">
          La calefacción por infrarrojos puede proporcionar una forma eficiente y cómoda de calentar tus espacios sin ocupar mucho espacio ni consumir demasiada energía.
        </p>
      </section>
    </div>
  );
};

export default InstalarCalefaccionInfrarrojosCoste;