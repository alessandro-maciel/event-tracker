import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";
import { obterId } from "../../utils";

export default function useAdicionarEvento(){
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);  
  
  return (evento: IEvento) => {
    const hoje = new Date();

    if (evento.inicio < hoje) {
      throw new Error("Eventos não podem ser cadastrados com a data menor que a data atual");
    }

    evento.id = obterId();

    return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
  };

}