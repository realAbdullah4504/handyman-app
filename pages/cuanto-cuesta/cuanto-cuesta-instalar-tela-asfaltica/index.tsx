import Head from 'next/head';

const InstalarTelaAsfalticaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar tela asfáltica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de tela asfáltica y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-tela-asfaltica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar tela asfáltica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 20€ - 30€ por metro cuadrado</p>
            <p>Incluye material estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Compleja: 30€ - 50€ por metro cuadrado</p>
            <p>Incluye material premium y técnicas de instalación avanzadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Calidad de la Tela Asfáltica: Tipo y durabilidad del material.</li>
          <li>Tamaño de la Superficie: Área total a cubrir con la tela asfáltica.</li>
          <li>Accesibilidad: Complejidad para acceder a la superficie del techo.</li>
          <li>Preparación del Techo: Necesidad de reparaciones o preparación del sustrato.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalar Tela Asfáltica</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 20€ - 30€ por metro cuadrado, incluyendo material estándar y mano de obra básica.
          </li>
          <li>
            <strong>Instalación Compleja</strong>: 30€ - 50€ por metro cuadrado, incluyendo material premium y técnicas de instalación avanzadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Techo</strong>: Determinar el estado actual y las necesidades de reparación.</p>
        <p>2. <strong>Solicitar Presupuestos</strong>: Obtener cotizaciones detalladas de varios contratistas.</p>
        <p>3. <strong>Considerar la Durabilidad</strong>: Evaluar la vida útil y el mantenimiento requerido del material.</p>
        <p>4. <strong>Seguridad y Normativas</strong>: Cumplir con los códigos y regulaciones locales durante la instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Planificar cuidadosamente la instalación de tela asfáltica asegurará que tu techo esté protegido y mantenga su integridad estructural a largo plazo.
        </p>
      </section>
    </div>
  );
};

export default InstalarTelaAsfalticaCosto;