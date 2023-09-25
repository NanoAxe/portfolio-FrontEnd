import { Educacion } from '../Models/Educacion';
import { Experiencia } from '../Models/Experiencia';
import { Proyecto } from '../Models/Proyecto';
import { Habilidad } from '../Models/Habilidad';
import { Usuario } from '../Models/Usuario';
import { Persona } from 'src/app/Models/Persona';
import { Domicilio } from '../Models/Domicilio';

export const listaExp: Experiencia[]=[
  {id_X:1, puesto:"cajero", lugar: "panchamama", logo_org: "experiencia.png", periodo_i:2020, periodo_f:2020, descripcion:"realizar el cobro de los pedidos", id_u:1},
  {id_X:2, puesto:"gerente", lugar: "panchamama", logo_org: "experiencia.png", periodo_i:2020, periodo_f:2020, descripcion:"Realizar contabilidad y administrar el local", id_u:1},
  {id_X:3, puesto:"supervisor", lugar: "panchamama", logo_org: "experiencia.png", periodo_i:2020, periodo_f:2020, descripcion:"Supervisar el inventario y el trabajo del personal", id_u:1},
  {id_X:4, puesto:"mesero", lugar: "panchamama", logo_org: "experiencia.png", periodo_i:2020, periodo_f:2020, descripcion:"Recibir a los clientes, presentarles el menu y tomar pedidos", id_u:1}
]

export const listaEdu: Educacion[]=[
  {id_E:1, img_insti:'educacion.png', institucion:'Instituto NOA', periodo_f:2019, periodo_i:2019, titulo: 'Ingles basico/intermedio', id_u:1},
  {id_E:2, img_insti:'educacion.png', institucion:'Instituto Nuevo Horizonte', periodo_f:2020, periodo_i:2022, titulo: 'Tecnicatura en Desarrollo de Software', id_u:1},
]

export const listaPj: Proyecto[]=[
  {id_P:1, nombre:'Portfolio web #YoProgramo', logo_pj:"proyecto.png", descripcion:'Realizacion de un portfolio web', pruebas:'', periodo_i:2022, periodo_f:2022,  id_u:1},
  {id_P:2, nombre:'Proyecto Final ProgramacionIII: Red social', logo_pj:"proyecto.png", descripcion:'Realizacion de una pagina web funcional', pruebas:'', periodo_i:2022, periodo_f:2022, id_u:1}
]

export const listaHab: Habilidad[]=[
  {id_H:1, descripcion:'html/css', nivel:'medio', id_u:1},
  {id_H:2, descripcion:'TypeScrip', nivel:'bajo', id_u:1},
  {id_H:3, descripcion:'Java', nivel:'alto', id_u:1},
  {id_H:4, descripcion:'Springboot', nivel:'bajo', id_u:1},
  {id_H:6, descripcion:'bootstrap', nivel:'medio', id_u:1},
]
export const ListaUsu: Usuario[]=[
  {id_U:1, contraseña:'miguel1223',descripcion:'Estudiante de Instituto Nuevo Horizonte', img_banner:'Banner.png',
   id_p:1, img_perfil:'perfil.jpg', titulo:'Full stack developer Jr',usuario:'Miguelon'}
]
export const ListaPer: Persona[]=[
  {id:1, apellido:'Barconte', nombre1:'Miguel', nombre2:'Alejandro'}
]
export const ListaDom: Domicilio[]=[
  {id_d:1, barrio:'Alto Comedero', calle:'Pje. el cucho', id_p:1, numero:455, pais:'Argentina', provincia:'Jujuy'}
]