import { Usuarios } from "./Usuarios";

export class Proyectos{
    idPj?: number | undefined;
    proyecto: string | undefined;
    enlace: string | undefined;
    fechaI: number | undefined;
    fechaF: number | undefined;
    descripcion: string | undefined;
    iconoPj: string | undefined;
    dirIconoPj: string | undefined;
    user: Usuarios | undefined;
}
