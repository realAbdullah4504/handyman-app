import Head from "next/head";

const InstalarPlacaDeGasPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta instalar una placa de gas? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de una placa de gas y cómo planificar el presupuesto para este servicio en tu hogar."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-placa-de-gas`}

				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar una placa de gas?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación estándar: €150 - €300
						</p>
						<p>
							Incluye instalación básica de la placa de gas y
							conexión al suministro de gas existente.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación avanzada: €300 - €500
						</p>
						<p>
							Incluye instalación de placa de gas con requisitos
							especiales o conexión a nueva línea de gas.
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
						Tipo de placa de gas: Varía según la marca, modelo y
						características técnicas.
					</li>
					<li>
						Requisitos de instalación: Depende de la complejidad y
						los requisitos específicos de la instalación.
					</li>
					<li>
						Ubicación: Costos pueden variar según la ubicación
						geográfica y la accesibilidad al suministro de gas.
					</li>
					<li>
						Costos adicionales: Incluyen materiales, permisos y
						posibles modificaciones estructurales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalación de Placa de Gas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación estándar</strong>: €150 - €300,
						incluyendo instalación básica y conexión al suministro
						de gas existente.
					</li>
					<li>
						<strong>Instalación avanzada</strong>: €300 - €500,
						incluyendo instalación con requisitos especiales o nueva
						línea de gas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para Instalación de Placa de Gas
				</h2>
				<p>
					1. <strong>Selecciona la Placa de Gas</strong>: Escoge una
					placa que se ajuste a tus necesidades y presupuesto.
				</p>
				<p>
					2. <strong>Consulta con Profesionales</strong>: Obtén
					cotizaciones y asegúrate de entender los costos adicionales
					y requisitos.
				</p>
				<p>
					3. <strong>Programa la Instalación</strong>: Coordina la
					instalación en un momento conveniente y asegúrate de cumplir
					con los requisitos legales y de seguridad.
				</p>
				<p>
					4. <strong>Inspección y Mantenimiento</strong>: Realiza
					inspecciones periódicas y mantenimiento para garantizar un
					funcionamiento seguro y eficiente.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una adecuada planificación y entendimiento de los
					costos, la instalación de una placa de gas puede ser una
					mejora segura y eficiente para tu hogar.
				</p>
			</section>
		</div>
	);
};

export default InstalarPlacaDeGasPage;
