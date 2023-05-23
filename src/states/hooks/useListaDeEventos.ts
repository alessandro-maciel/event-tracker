import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export default function useListaDeEventos(){
  return useRecoilValue<IEvento[]>(listaDeEventosState);
}