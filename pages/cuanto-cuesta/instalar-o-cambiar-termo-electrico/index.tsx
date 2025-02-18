import Head from "next/head";

const TermoElectricoPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta instalar o cambiar un termo eléctrico? -
					Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación o cambio de un termo eléctrico y cómo planificar este servicio."
				/>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-o-cambiar-termo-electrico`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar o cambiar un termo eléctrico?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación básica: €200 - €400
						</p>
						<p>
							Incluye el termo eléctrico estándar y la instalación
							básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación avanzada: €400 - €800
						</p>
						<p>
							Incluye termos eléctricos de mayor capacidad o
							instalaciones más complejas.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>Tipo y capacidad del termo eléctrico.</li>
					<li>
						Complejidad de la instalación, como cambios en la
						ubicación o conexión eléctrica.
					</li>
					<li>
						Necesidad de adaptaciones adicionales, como modificación
						de la instalación eléctrica.
					</li>
					<li>Costo de la mano de obra y tarifas locales.</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalar o Cambiar Termo Eléctrico
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación básica</strong>: €200 - €400,
						incluyendo el termo eléctrico estándar y la instalación
						básica.
					</li>
					<li>
						<strong>Instalación avanzada</strong>: €400 - €800,
						incluyendo termos eléctricos de mayor capacidad o
						instalaciones más complejas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para Instalar o Cambiar Termo Eléctrico
				</h2>
				<p>
					1. <strong>Evaluación de Necesidades</strong>: Determinar la
					capacidad y ubicación ideal para el termo eléctrico.
				</p>
				<p>
					2. <strong>Pedir Presupuestos</strong>: Obtener varias
					cotizaciones detalladas de profesionales locales.
				</p>
				<p>
					3. <strong>Considerar Opciones</strong>: Comparar
					características del termo eléctrico, como eficiencia
					energética y capacidad.
				</p>
				<p>
					4. <strong>Elegir Profesionales</strong>: Seleccionar un
					instalador con experiencia y buenas referencias.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar la instalación o cambio de un termo eléctrico,
					estos pasos te ayudarán a garantizar que obtengas el mejor
					servicio y resultados para tu hogar.
				</p>
			</section>
		</div>
	);
};

export default TermoElectricoPage;
