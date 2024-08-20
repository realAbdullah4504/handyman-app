import Head from "next/head";

const InstalarAscensorUnifamiliarPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta instalar un ascensor en unifamiliar? -
					Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de un ascensor en una vivienda unifamiliar y cómo planificar tu presupuesto para este servicio."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-ascensor-unifamiliar`}

				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar un ascensor en unifamiliar?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación Básica: €20,000 - €30,000
						</p>
						<p>
							Incluye ascensor estándar y trabajos de instalación
							básicos.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación Compleja: €30,000 - €50,000
						</p>
						<p>
							Incluye ascensor de lujo y trabajos de instalación
							complejos.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>
						Modelo y tamaño del ascensor: Ascensores estándar vs.
						ascensores personalizados.
					</li>
					<li>
						Características adicionales: Opciones como puertas
						automáticas, sistema de seguridad, etc.
					</li>
					<li>
						Requisitos de obra civil: Necesidad de adaptaciones
						estructurales en la vivienda.
					</li>
					<li>
						Ubicación: Costos pueden variar según la accesibilidad y
						normativas locales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalación de Ascensor en Unifamiliar
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación Básica</strong>: €20,000 - €30,000,
						incluye ascensor estándar y trabajos de instalación
						básicos.
					</li>
					<li>
						<strong>Instalación Compleja</strong>: €30,000 -
						€50,000, incluye ascensor de lujo y trabajos de
						instalación complejos.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Evaluación de Necesidades</strong>: Determina el
					tamaño y las características requeridas del ascensor.
				</p>
				<p>
					2. <strong>Obtención de Cotizaciones</strong>: Solicita
					presupuestos detallados de varias empresas especializadas en
					ascensores.
				</p>
				<p>
					3. <strong>Consideración de Adicionales</strong>: Asegúrate
					de incluir costos como mantenimiento y seguro del ascensor.
				</p>
				<p>
					4. <strong>Legalidad y Normativas</strong>: Verifica los
					permisos necesarios y cumplimiento de normativas locales.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una adecuada planificación y entendimiento de los
					costos, puedes instalar un ascensor en tu vivienda
					unifamiliar dentro de tu presupuesto establecido.
				</p>
			</section>
		</div>
	);
};

export default InstalarAscensorUnifamiliarPage;
