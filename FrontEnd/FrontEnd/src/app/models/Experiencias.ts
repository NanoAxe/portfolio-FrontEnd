import { Usuarios } from "./Usuarios";

export class Experiencias{
    idExp?: number;
    puesto: string | undefined;
    lugar: string | undefined;
	logo_org: string | undefined;
	dirLogo: string | undefined;
	periodoI: number | undefined;
	periodoF: number | undefined;
	descripcion: string | undefined;
	user: Usuarios | undefined;
}