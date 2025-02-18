import { FC } from 'react';
import Head from 'next/head';

const Contact: FC = () => {
  return (
    <>
      <Head>
        <title>Contáctanos | Oficios24</title>
        <meta
          name="description"
          content="Ponte en contacto con Oficios24 para preguntas, sugerencias o asistencia. Estamos aquí para ayudarte."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Contáctanos en Oficios24</h1>
          <p className="mb-4">¿Tienes preguntas, sugerencias o necesitas ayuda? ¡En Oficios24 estamos aquí para ayudarte!</p>
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>También puedes contactarnos por correo electrónico, teléfono o visitar nuestra dirección:</p>
            <p className="mt-2">
              Email:{' '}
              <a
                href="mailto:info@oficios24.es"
                className="text-indigo-600"
                aria-label="Send an email to info@oficios24.es"
              >
                info@oficios24.es
              </a>
            </p>
            <p className="mt-2">
              Teléfono:{' '}
              <a
                href="tel:+491748999213"
                className="text-indigo-600"
                aria-label="Call +49174 899-9213"
              >
                +49174 899-9213
              </a>
            </p>
            <p className="mt-2">Dirección: Giuseppe Licopoli, Neuenkamperstr 32, 42657 Solingen, Alemania</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
