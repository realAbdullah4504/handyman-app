import Head from "next/head";

const MotorPuertaGarajePage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta instalar un motor para puerta de garaje? -
					Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de un motor para puerta de garaje y cómo planificar este proyecto para tu hogar."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/motor-puerta-garaje`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar un motor para puerta de garaje?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación básica: €300 - €500
						</p>
						<p>Incluye motor estándar y mano de obra básica.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación avanzada: €500 - €800
						</p>
						<p>
							Incluye motor premium y configuraciones avanzadas.
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
						Tipo de motor: Estándar vs. premium con diferentes
						características y garantías.
					</li>
					<li>
						Tamaño y peso de la puerta: Puede requerir motores más
						potentes para puertas más grandes.
					</li>
					<li>
						Funcionalidades adicionales: Como control remoto,
						sensores de seguridad, etc.
					</li>
					<li>
						Ubicación geográfica: Variación de precios según la
						región y condiciones del mercado local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalar un Motor de Puerta de Garaje
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación básica</strong>: €300 - €500,
						incluyendo motor estándar y mano de obra básica.
					</li>
					<li>
						<strong>Instalación avanzada</strong>: €500 - €800,
						incluyendo motor premium y configuraciones avanzadas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para la Instalación del Motor de Puerta de
					Garaje
				</h2>
				<p>
					1. <strong>Evaluación del Proyecto</strong>: Determinar las
					necesidades específicas de tu puerta de garaje.
				</p>
				<p>
					2. <strong>Obtención de Presupuestos</strong>: Solicitar
					estimaciones detalladas a varios instaladores.
				</p>
				<p>
					3. <strong>Selección del Motor</strong>: Elegir un motor que
					se ajuste a tus requerimientos de funcionamiento y
					seguridad.
				</p>
				<p>
					4. <strong>Contratación del Instalador</strong>: Seleccionar
					un profesional con experiencia en la instalación de motores
					para puertas de garaje.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una planificación adecuada y la selección del motor
					correcto, puedes mejorar la funcionalidad y seguridad de tu
					puerta de garaje de manera efectiva.
				</p>
			</section>
		</div>
	);
};

export default MotorPuertaGarajePage;
