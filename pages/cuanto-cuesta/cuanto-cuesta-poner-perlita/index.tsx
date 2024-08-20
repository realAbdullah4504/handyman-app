
import Head from 'next/head';

const PerlitaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta poner perlita? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la aplicación de perlita y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-poner-perlita`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta poner perlita?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Aplicación Básica: 10€ - 15€ por metro cuadrado</p>
            <p>Incluye perlita estándar y aplicación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Aplicación Premium: 15€ - 20€ por metro cuadrado</p>
            <p>Incluye perlita de alta calidad y aplicación avanzada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Área: Superficie total a cubrir con perlita.</li>
          <li>Calidad de la Perlita: Desde estándar hasta premium con diferentes características de acabado y durabilidad.</li>
          <li>Preparación de la Superficie: Necesidad de preparación previa del sustrato antes de la aplicación.</li>
          <li>Accesibilidad: Dificultad para acceder al área de trabajo, que puede afectar los costos de mano de obra y equipo.</li>
          <li>Ubicación: Influencia de los precios según la ubicación geográfica y las condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Aplicación de Perlita</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Aplicación Básica</strong>: 10€ - 15€ por metro cuadrado, incluyendo perlita estándar y aplicación básica.
          </li>
          <li>
            <strong>Aplicación Premium</strong>: 15€ - 20€ por metro cuadrado, incluyendo perlita de alta calidad y aplicación avanzada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Área</strong>: Determina el tamaño y las necesidades específicas para la aplicación de perlita.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicita presupuestos detallados de varios proveedores para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Selección de Material</strong>: Considera la calidad y el acabado de la perlita para garantizar el resultado deseado.</p>
        <p>4. <strong>Logística y Planificación</strong>: Coordina el calendario de trabajo y la logística para una aplicación eficiente y de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la aplicación de perlita, puedes mejorar la estética y la funcionalidad de tus espacios mientras te mantienes dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default PerlitaCoste;