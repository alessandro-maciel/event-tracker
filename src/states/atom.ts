import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventoAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
  key: "eventosState",
  default: eventoAsync,
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: 'filtroDeEventos',
  default: {}
});