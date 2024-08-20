import Head from "next/head";

const ElectricalInstallation = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta hacer una instalación eléctrica en obra
					nueva? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con hacer una instalación eléctrica en obra nueva y cómo planificar tu proyecto."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/hacer-instalacion-electrica-obra-nueva`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta hacer una instalación eléctrica en obra nueva?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación Básica: €3,000 - €6,000
						</p>
						<p>
							Instalación eléctrica estándar para una vivienda
							básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación Completa: €6,000 - €10,000+
						</p>
						<p>
							Instalación eléctrica con características avanzadas
							y personalizadas.
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
						Tamaño de la Propiedad: Metros cuadrados y número de
						habitaciones.
					</li>
					<li>
						Comodidades Eléctricas: Número de enchufes,
						interruptores y puntos de luz.
					</li>
					<li>
						Normativas Locales: Cumplimiento de códigos eléctricos y
						permisos.
					</li>
					<li>
						Personalización: Opciones adicionales como sistemas
						domóticos o iluminación especial.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalación Eléctrica en Obra Nueva
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación Básica</strong>: €3,000 - €6,000,
						instalación estándar para una vivienda básica.
					</li>
					<li>
						<strong>Instalación Completa</strong>: €6,000 -
						€10,000+, instalación con características avanzadas y
						personalizadas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Diseño y Planificación</strong>: Trabaja con un
					electricista para diseñar un plano eléctrico detallado.
				</p>
				<p>
					2. <strong>Selección de Materiales</strong>: Elige
					materiales eléctricos de calidad que cumplan con las
					normativas locales.
				</p>
				<p>
					3. <strong>Obtención de Permisos</strong>: Asegúrate de
					obtener todos los permisos necesarios antes de comenzar la
					instalación.
				</p>
				<p>
					4. <strong>Instalación Profesional</strong>: Contrata a
					electricistas con experiencia en instalaciones eléctricas
					residenciales.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al presupuestar la instalación eléctrica en obra nueva,
					puedes garantizar la seguridad y funcionalidad de tu hogar
					dentro de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default ElectricalInstallation;
