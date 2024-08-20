import Head from "next/head";

const InstalarVentanasClimalitPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta instalar ventanas Climalit? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de ventanas Climalit y cómo planificar este servicio."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-ventanas-climalit`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar ventanas Climalit?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Ventanas estándar: €200 - €400 por ventana
						</p>
						<p>
							Incluye ventanas Climalit estándar y la instalación
							básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Ventanas personalizadas: €400 - €800 por ventana
						</p>
						<p>
							Incluye ventanas Climalit personalizadas y la
							instalación con especificaciones adicionales.
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
						Tamaño y Tipo de Ventana: Estándar vs. personalizada,
						dimensiones específicas.
					</li>
					<li>
						Calidad del Vidrio: Opciones adicionales como vidrio de
						seguridad, anti-ruido, etc.
					</li>
					<li>
						Instalación: Complejidad del trabajo, accesibilidad,
						reemplazo vs. instalación nueva.
					</li>
					<li>
						Ubicación: Precios pueden variar según la región
						geográfica y costes de mano de obra local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalación de Ventanas Climalit
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Ventanas estándar</strong>: €200 - €400 por
						ventana, incluyendo instalación básica de ventanas
						Climalit estándar.
					</li>
					<li>
						<strong>Ventanas personalizadas</strong>: €400 - €800
						por ventana, incluyendo instalación de ventanas Climalit
						personalizadas con especificaciones adicionales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Instalación de Ventanas Climalit
				</h2>
				<p>
					1. <strong>Evaluación de Necesidades</strong>: Determinar el
					número de ventanas a instalar y sus especificaciones
					técnicas.
				</p>
				<p>
					2. <strong>Comparación de Presupuestos</strong>: Obtener
					cotizaciones detalladas de varios proveedores para encontrar
					la mejor opción de costo y calidad.
				</p>
				<p>
					3. <strong>Considerar Opciones Adicionales</strong>: Evaluar
					beneficios adicionales como seguridad, aislamiento acústico
					y eficiencia energética.
				</p>
				<p>
					4. <strong>Seleccionar al Instalador</strong>: Elegir un
					instalador con experiencia y referencias para garantizar un
					trabajo de calidad y duradero.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar la instalación de ventanas Climalit, es
					fundamental considerar estos factores para garantizar que
					las nuevas ventanas satisfagan tus necesidades y sean una
					inversión eficiente.
				</p>
			</section>
		</div>
	);
};

export default InstalarVentanasClimalitPage;
