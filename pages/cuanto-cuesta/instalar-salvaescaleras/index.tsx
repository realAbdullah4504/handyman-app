import Head from "next/head";

const StairliftInstallation = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta instalar un salvaescaleras? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de salvaescaleras y cómo presupuestar para mejorar la accesibilidad en tu hogar."
				/>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-salvaescaleras`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar un salvaescaleras?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Modelo Estándar: €2,000 - €5,000
						</p>
						<p>Salvaescaleras básico para tramos rectos.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Modelo Curvo o Personalizado: €5,000 - €10,000 o más
						</p>
						<p>
							Salvaescaleras para tramos curvos o configuraciones
							personalizadas.
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
						Tipo de Salvaescaleras: Recto, curvo, con plataforma,
						etc.
					</li>
					<li>
						Configuración de Escaleras: Longitud, curvatura y diseño
						de las escaleras.
					</li>
					<li>
						Opciones Adicionales: Características como control
						remoto, ajustes automáticos, etc.
					</li>
					<li>
						Instalación: Costos asociados con la instalación
						profesional y ajustes necesarios.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalar Salvaescaleras
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Modelo Estándar</strong>: €2,000 - €5,000,
						salvaescaleras básico para tramos rectos.
					</li>
					<li>
						<strong>Modelo Curvo o Personalizado</strong>: €5,000 -
						€10,000 o más, salvaescaleras para tramos curvos o
						configuraciones personalizadas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Inspección del Lugar</strong>: Evalúa el tipo y
					diseño de las escaleras para determinar la mejor opción de
					salvaescaleras.
				</p>
				<p>
					2. <strong>Consultas y Comparaciones</strong>: Obtén
					múltiples presupuestos de proveedores de salvaescaleras para
					comparar precios y características.
				</p>
				<p>
					3. <strong>Consideraciones Adicionales</strong>: Planifica
					para posibles costos de mantenimiento y garantía a largo
					plazo.
				</p>
				<p>
					4. <strong>Instalación Profesional</strong>: Elige
					instaladores con experiencia en salvaescaleras para
					garantizar una instalación segura y eficiente.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al presupuestar la instalación de un salvaescaleras, puedes
					mejorar la accesibilidad y la seguridad en tu hogar de
					manera efectiva y dentro de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default StairliftInstallation;
