import type { NextPage } from 'next'
import Head from 'next/head'

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Términos de Uso</title>
        <meta name="description" content="Términos de uso de la plataforma de servicios para profesionales de la construcción" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Términos de Uso</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">1. Introducción</h2>
          <p>
            Bienvenido a Oficios24 (la &quot;Plataforma+&quot;). Estos Términos de Uso (&quot;Términos&quot;) regulan tu acceso y uso de nuestro sitio web y servicios proporcionados por Oficios24. Al acceder o utilizar la Plataforma, aceptas cumplir y estar sujeto a estos Términos, así como a nuestra Política de Privacidad, que se incorpora por referencia. Si no estás de acuerdo con estos Términos, por favor, no utilices la Plataforma.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">2. Definiciones</h2>
          <ul className="list-disc ml-6">
            <li><strong>&quot;Usuario&quot;</strong>: Cualquier individuo o entidad que acceda a la Plataforma, incluidos Clientes y Profesionales.</li>
            <li><strong>&quot;Cliente&quot;</strong>: Un Usuario que publica un trabajo o solicitud de proyecto en la Plataforma.</li>
            <li><strong>&quot;Profesional&quot;</strong>: Un Usuario que ofrece servicios relacionados con la construcción, reformas o reparaciones a través de la Plataforma.</li>
            <li><strong>&quot;Servicios&quot;</strong>: Los servicios proporcionados por la Plataforma para facilitar conexiones entre Clientes y Profesionales, permitiendo a los Profesionales postularse para proyectos y a los Clientes seleccionar al Profesional adecuado para sus necesidades.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">3. Obligaciones de los Usuarios</h2>
          <p>
            Los Usuarios se comprometen a utilizar la Plataforma de manera honesta, respetuosa y en conformidad con las leyes aplicables. Los Clientes deberán proporcionar detalles precisos sobre los trabajos que desean realizar, y los Profesionales deberán cumplir con los estándares de calidad acordados y entregar los proyectos a tiempo.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">4. Registro y Seguridad</h2>
          <p>
            Para acceder a ciertos servicios, los Usuarios deben crear una cuenta en la Plataforma de Oficios24. Al hacerlo, te comprometes a proporcionar información exacta, actualizada y completa. Los Usuarios son responsables de mantener la confidencialidad de su cuenta y contraseña y de todas las actividades que ocurran bajo su cuenta.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">5. Propiedad Intelectual</h2>
          <p>
            Todo el contenido, diseño y software de la Plataforma de Oficios24 están protegidos por derechos de propiedad intelectual y no pueden ser utilizados sin autorización expresa de Oficios24.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">6. Limitación de Responsabilidad</h2>
          <p>
            Oficios24 no será responsable por cualquier daño, pérdida o costo derivado de la interacción entre Clientes y Profesionales en la Plataforma. Los Usuarios son responsables de asegurarse de que los acuerdos sean claros y de gestionar sus expectativas adecuadamente.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">7. Cancelación de Pedidos</h2>
          <p>
            Una vez que un Cliente ha confirmado un pedido o proyecto y un Profesional ha aceptado el trabajo, no será posible cancelar la solicitud. Te recomendamos revisar cuidadosamente los detalles antes de confirmar cualquier pedido. En caso de que existan circunstancias excepcionales, los Usuarios deberán ponerse en contacto con el soporte de la Plataforma de Oficios24 para analizar posibles soluciones.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">8. Información de Contacto</h2>
          <p>
            Si tienes alguna pregunta o inquietud acerca de estos Términos, por favor contacta con nosotros en:
          </p>
          <ul className="list-disc ml-6">
            <li><strong>Correo Electrónico:</strong> info@oficios24.es</li>
            <li><strong>Teléfono:</strong> +49174 899-9213</li>
            <li><strong>Dirección Postal:</strong> Giuseppe Licopoli, Neuenkamperstr 32, 42657 Solingen, Alemania</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default Terms

