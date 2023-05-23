import { useRecoilValue } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { eventosFiltradosState } from "../seletores";

export default function useListaDeEventos(){
  return useRecoilValue<IEvento[]>(eventosFiltradosState);
}