import {
  FindACTechnicianNearby,
  FindAssemblyServiceNearby,
  FindBuildingCleaningServiceNearby,
  FindCarpentersNearby,
  FindCarWorkshopsNearby,
  FindChimneyBuildersNearby,
  FindClimateTechniciansNearby,
  FindConcreteDrillersNearby,
  FindConstructionCompaniesNearby,
  FindConstructionPlansNearby,
  FindDemolitionAndDisposalServicesNearby,
  FindDrywallersNearby,
  FindEarthmovingCompaniesNearby,
  FindElectriciansNearby,
  FindFenceBuildersNearby,
  FindFlooringInstallersNearby,
  FindGlaziersNearby,
  FindHeatingInstallersNearby,
  FindInteriorDecoratorsNearby,
  FindInteriorDesignersNearby,
  FindKitchenFittersNearby,
  FindLandscapeBuildersNearby,
  FindMetalFabricatorsNearby,
  FindMovingCompaniesNearby,
  FindPaintersAndDecoratorsNearby,
  FindPavingBuildersNearby,
  FindPlasterersNearby,
  FindPlumbingInstallersNearby,
  FindPoolBuildersNearby,
  FindRoofersNearby,
  FindSaddlersAndUpholsterersNearby,
  FindScaffoldingBuildersNearby,
  FindStaircaseBuildersNearby,
  FindTilersNearby,
  FindTransportCompaniesNearby,
  FindWellBuildersNearby,
  FindWindowBuildersNearby,
  FindWoodPreservationServicesNearby,
} from "@/components/craftsman-near-me";

interface CraftsmanComponentProps {
  searchDefaultField: string;
}

type ComponentType = React.FC<CraftsmanComponentProps>;

type ComponentMap = {
  [key: string]: {
    Component: ComponentType;
    title: string;
  };
}

export const components: ComponentMap = {
  //"encontrar-albañiles-de-azulejos-cerca-de-ti": FindTilersNearby,
  "albañiles-constructores": {
    Component: FindTilersNearby,
    title: "Encuentra Albañiles de Azulejos Cerca de Ti"
  },
  "carpinteras": {
    Component: FindCarpentersNearby,
    title: "Encuentra Carpinteros Cerca de Ti",
  },
  "constructores-de-andamios":
  {
    Component: FindScaffoldingBuildersNearby,
    title: "Encuentra Constructores de Andamios Cerca de Ti",
  },
  "construcción-de-escaleras":
  {
    Component: FindStaircaseBuildersNearby,
    title: "Encuentra Constructores de Escaleras Cerca de Ti",
  },
  "constructores-de-paisajes":
  {
    Component: FindLandscapeBuildersNearby,
    title: "Encuentra Constructores de Paisajes Cerca de Ti",
  },
  "constructores-de-pavimentos": {
    Component: FindPavingBuildersNearby,
    title: "Encuentra Constructores de Pavimento Cerca de Ti",
  },
  "constructores-de-piscinas": {
    Component: FindPoolBuildersNearby,
    title: "Encuentra Constructores de Piscinas Cerca de Ti",
  },
  "constructores-de-pozos": {
    Component: FindWellBuildersNearby,
    title: "Encuentra Constructores de Pozos Cerca de Ti",
  },
  "constructores-de-valores": {
    Component: FindFenceBuildersNearby,
    title: "Encuentra Constructores de Vallas Cerca de Ti",
  },
  "construcción-de-ventanas": {
    Component: FindWindowBuildersNearby,
    title: "Encuentra Constructores de Ventanas Cerca de Ti",
  },
  "vidriera": {
    Component: FindGlaziersNearby,
    title: "Encuentra Cristaleros Cerca de Ti",
  },
  "decoradores-de-interiores":
  {
    Component: FindInteriorDecoratorsNearby,
    title: "Encuentra Decoradores de Interiores Cerca de Ti",
  },
  "azulejeros":
  {
    Component: FindInteriorDesignersNearby,
    title: "Encuentra Diseñadores de Interiores Cerca de Ti",
  },
  "instaladores-de-paneles-de-yeso": {
    Component: FindDrywallersNearby,
    title: "Encuentra Drywallers Cerca de Ti",
  },
  "electricista": {
    Component: FindElectriciansNearby,
    title: "Encuentra Electricistas Cerca de Ti",
  },
  "empresas-de-construcción":
  {
    Component: FindConstructionCompaniesNearby,
    title: "Encuentra Empresas de Construcción Cerca de Ti",
  },
  "empresas-de-movimiento-de-tierras":
  {
    Component: FindEarthmovingCompaniesNearby,
    title: "Encuentra Empresas de Movimiento de Tierra Cerca de Ti",
  },
  "empresas-de-mudanzas": {
    Component: FindMovingCompaniesNearby,
    title: "Encuentra Empresas de Mudanzas Cerca de Ti",
  },
  "empresas-de-transporte": {
    Component: FindTransportCompaniesNearby,
    title: "Encuentra Empresas de Transporte Cerca de Ti",
  },
  "fabricantes-de-metal": {
    Component: FindMetalFabricatorsNearby,
    title: "Encuentra Fabricantes de Metal Cerca de Ti",
  },
  "instaladoras-de-calefacción":
  {
    Component: FindHeatingInstallersNearby,
    title: "Encuentra Instaladores de Calefacción Cerca de Ti",
  },
  "instaladores-de-fontanería":
  {
    Component: FindPlumbingInstallersNearby,
    title: "Encuentra Instaladores de Fontanería Cerca de Ti",
  },
  "instalador-de-pisos": {
    Component: FindFlooringInstallersNearby,
    title: "Encuentra Instaladores de Pisos Cerca de Ti",
  },
  "instaladores-de-cocinas": {
    Component: FindKitchenFittersNearby,
    title: "Encuentra Montadores de Cocinas Cerca de Ti",
  },
  "perforadores-de-hormigón": {
    Component: FindConcreteDrillersNearby,
    title: "Encuentra Perforadores de Concreto Cerca de Ti",
  },
  "pintores-y-decoradores":
  {
    Component: FindPaintersAndDecoratorsNearby,
    title: "Encuentra Pintores y Decoradores Cerca de Ti",
  },
  "planificadora-de-construcción": {
    Component: FindConstructionPlansNearby,
    title: "Encuentra Planos de Construcción Cerca de Ti",
  },
  "constructores-de-chimenea": {
    Component: FindChimneyBuildersNearby,
    title: "Encuentra Reparadores de Chimeneas Cerca de Ti",
  },
  "limpieza-de-edificios":
  {
    Component: FindBuildingCleaningServiceNearby,
    title: "Encuentra Servicio de Limpieza de Edificios Cerca de Ti",
  },
  "servicio-de-ensamblaje": {
    Component: FindAssemblyServiceNearby,
    title: "Encuentra Servicio de Montaje Cerca de Ti",
  },
  "demolición-y-eliminación":
  {
    Component: FindDemolitionAndDisposalServicesNearby,
    title: "Encuentra Servicios de Demolición y Disposición Cerca de Ti",
  },
  "preservación-de-la-madera":
  {
    Component: FindWoodPreservationServicesNearby,
    title: "Encuentra Servicios de Preservación de Madera Cerca de Ti",
  },
  "talleres-de-automóviles":
  {
    Component: FindCarWorkshopsNearby,
    title: "Encuentra Talleres de Reparación de Coches Cerca de Ti",
  },
  "tapiceros-y-guarnicioneros":
  {
    Component: FindSaddlersAndUpholsterersNearby,
    title: "Encuentra Tapiceros y Sastres Cerca de Ti",
  },
  "tejadores": {
    Component: FindRoofersNearby,
    title: "Encuentra Techos Cerca de Ti",
  },
  "técnica-de-aire-acondicionado": {
    Component: FindACTechnicianNearby,
    title: "Encuentra Técnico de Aire Acondicionado Cerca de Ti",
  },
  "técnico-climático":
  {
    Component: FindClimateTechniciansNearby,
    title: "Encuentra Técnicos de Climatización Cerca de Ti",
  },
  "enyesadores": {
    Component: FindPlasterersNearby,
    title: "Encuentra Yeseros Cerca de Ti",
  },
};

