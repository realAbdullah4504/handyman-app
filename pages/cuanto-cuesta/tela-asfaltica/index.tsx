import Head from "next/head";

const TelaAsfalticaPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta instalar tela asfáltica? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de tela asfáltica y cómo planificar este proyecto para tu hogar."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/tela-asfaltica`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar tela asfáltica?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación básica: €20 - €30 por m²
						</p>
						<p>
							Incluye tela asfáltica estándar y mano de obra
							básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación premium: €30 - €50 por m²
						</p>
						<p>
							Incluye tela asfáltica de alta calidad y técnicas
							avanzadas de instalación.
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
						Tipo y calidad de la tela asfáltica: Estándar vs.
						premium con diferentes niveles de durabilidad.
					</li>
					<li>
						Área a cubrir: Tamaño total del área del techo que se va
						a impermeabilizar.
					</li>
					<li>
						Complejidad de la instalación: Costos adicionales para
						techos con pendientes pronunciadas o diseños complejos.
					</li>
					<li>
						Ubicación geográfica: Variación de precios según la
						región y condiciones del mercado local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalar Tela Asfáltica
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación básica</strong>: €20 - €30 por m²,
						incluyendo tela asfáltica estándar y mano de obra
						básica.
					</li>
					<li>
						<strong>Instalación premium</strong>: €30 - €50 por m²,
						incluyendo tela asfáltica de alta calidad y técnicas
						avanzadas de instalación.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para la Instalación de Tela Asfáltica
				</h2>
				<p>
					1. <strong>Evaluación del Proyecto</strong>: Determinar el
					tipo de tela asfáltica y los requisitos del techo.
				</p>
				<p>
					2. <strong>Obtención de Presupuestos</strong>: Solicitar
					presupuestos detallados a contratistas especializados.
				</p>
				<p>
					3. <strong>Selección de Materiales</strong>: Comparar
					opciones de tela asfáltica en términos de costo y calidad.
				</p>
				<p>
					4. <strong>Contratación de Profesionales</strong>:
					Seleccionar contratistas con experiencia en la instalación
					de tela asfáltica.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una planificación cuidadosa y la elección adecuada de
					materiales y contratistas, puedes mejorar la
					impermeabilización de tu techo de manera efectiva.
				</p>
			</section>
		</div>
	);
};

export default TelaAsfalticaPage;
