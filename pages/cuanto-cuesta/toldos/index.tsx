import Head from "next/head";

const AwningInstallationCost = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta instalar toldos? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de toldos y cómo planificar este tipo de proyecto."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/toldos`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar toldos?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Toldos Básicos: €300 - €1,000
						</p>
						<p>
							Instalación estándar con materiales básicos y
							estructuras simples.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Toldos de Lujo: €1,000 - €5,000+
						</p>
						<p>
							Instalación personalizada con materiales premium y
							características avanzadas.
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
						Tamaño del Toldo: Dimensiones del área a cubrir y
						extensión del toldo.
					</li>
					<li>
						Material del Toldo: Tela, resistencia UV,
						impermeabilidad y durabilidad.
					</li>
					<li>
						Estilo y Diseño: Diseño retráctil, motorización y
						personalización.
					</li>
					<li>
						Instalación y Mano de Obra: Costos de instalación y
						tarifas del contratista.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalación de Toldos
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Toldos Básicos</strong>: €300 - €1,000,
						instalación estándar con materiales básicos.
					</li>
					<li>
						<strong>Toldos de Lujo</strong>: €1,000 - €5,000+,
						instalación personalizada con materiales premium.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Instalación de Toldos
				</h2>
				<p>
					1. <strong>Evaluación del Espacio</strong>: Determina el
					área a cubrir y la ubicación ideal del toldo.
				</p>
				<p>
					2. <strong>Selección del Toldo</strong>: Elige un estilo y
					material que se adapte al clima y diseño del espacio.
				</p>
				<p>
					3. <strong>Presupuesto y Financiamiento</strong>: Calcula
					los costos totales y asegura el financiamiento adecuado.
				</p>
				<p>
					4. <strong>Contratación de Profesionales</strong>: Trabaja
					con instaladores profesionales para garantizar una
					instalación segura y eficiente.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar la instalación de toldos, considera todos los
					factores para asegurar un proyecto exitoso y dentro del
					presupuesto.
				</p>
			</section>
		</div>
	);
};

export default AwningInstallationCost;
