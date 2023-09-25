import { Usuarios } from "./Usuarios";

export class Domicilios{
    id_D?: number | undefined;
	pais: string | undefined;
	provincia: string | undefined;
	barrio: string | undefined;
	calle: string | undefined;
	numero: number | undefined;
    usuario: Usuarios | undefined;
}