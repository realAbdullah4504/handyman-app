import Head from "next/head";

const CooktopInstallationCost = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta instalar una vitrocerámica? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de una vitrocerámica y cómo planificar este tipo de proyecto."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-vitroceramica`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar una vitrocerámica?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación Básica: €50 - €100
						</p>
						<p>Instalación estándar sin modificaciones mayores.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación Compleja: €100 - €200+
						</p>
						<p>
							Instalación con ajustes especiales o modificaciones
							eléctricas.
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
						Tipo de Vitrocerámica: Modelo estándar versus modelo de
						inducción.
					</li>
					<li>
						Modificaciones Necesarias: Cambios en la instalación
						eléctrica o de gas.
					</li>
					<li>
						Costos de Mano de Obra: Tarifas de instaladores
						profesionales.
					</li>
					<li>
						Ubicación del Proyecto: Acceso al sitio y costos
						laborales locales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalación de Vitrocerámica
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación Básica</strong>: €50 - €100,
						instalación estándar sin modificaciones mayores.
					</li>
					<li>
						<strong>Instalación Compleja</strong>: €100 - €200+,
						ajustes especiales o modificaciones eléctricas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Instalación de una Vitrocerámica
				</h2>
				<p>
					1. <strong>Evaluación del Espacio</strong>: Determina el
					espacio disponible y los requisitos eléctricos.
				</p>
				<p>
					2. <strong>Selección de la Vitrocerámica</strong>: Elige un
					modelo que se ajuste al espacio y necesidades de cocción.
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
					Al planificar la instalación de una vitrocerámica, considera
					todos los factores para asegurar un proyecto exitoso y
					dentro del presupuesto.
				</p>
			</section>
		</div>
	);
};

export default CooktopInstallationCost;
