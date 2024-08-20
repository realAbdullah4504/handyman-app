import Head from "next/head";

const InstalarCerrojoDeSeguridadPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta instalar un cerrojo de seguridad? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de un cerrojo de seguridad y cómo planificar el presupuesto para este servicio en tu hogar."
				/>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-cerrojo-de-seguridad`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar un cerrojo de seguridad?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación estándar: €50 - €100
						</p>
						<p>
							Incluye la instalación de un cerrojo básico de
							seguridad.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación avanzada: €100 - €200
						</p>
						<p>
							Incluye la instalación de cerrojos más robustos o
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
						Tipo de cerrojo: Varía según la marca, material y nivel
						de seguridad.
					</li>
					<li>
						Requisitos de instalación: Depende de la complejidad y
						los requisitos específicos de la puerta.
					</li>
					<li>
						Ubicación: Costos pueden variar según la ubicación
						geográfica y la accesibilidad.
					</li>
					<li>
						Costos adicionales: Incluyen materiales, mano de obra y
						posibles modificaciones estructurales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalación de Cerrojo de Seguridad
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación estándar</strong>: €50 - €100,
						incluyendo la instalación de un cerrojo básico.
					</li>
					<li>
						<strong>Instalación avanzada</strong>: €100 - €200,
						incluyendo la instalación de cerrojos más robustos o
						complejos.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para Instalación de Cerrojo de Seguridad
				</h2>
				<p>
					1. <strong>Selección del Cerrojo</strong>: Elige un cerrojo
					que se ajuste a tus necesidades de seguridad y presupuesto.
				</p>
				<p>
					2. <strong>Consulta con Profesionales</strong>: Obtén
					cotizaciones detalladas y asegúrate de entender todos los
					costos y requisitos.
				</p>
				<p>
					3. <strong>Programación de la Instalación</strong>: Coordina
					la instalación en un momento conveniente y verifica los
					permisos necesarios.
				</p>
				<p>
					4. <strong>Inspección y Mantenimiento</strong>: Realiza
					inspecciones periódicas y mantenimiento para asegurar el
					buen funcionamiento del cerrojo.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una planificación cuidadosa y entendimiento de los
					costos involucrados, puedes mejorar la seguridad de tu hogar
					con la instalación de un cerrojo de seguridad.
				</p>
			</section>
		</div>
	);
};

export default InstalarCerrojoDeSeguridadPage;
