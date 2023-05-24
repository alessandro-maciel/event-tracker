import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
      const filtro = get(filtroDeEventos)
      const todosOsEventos = get(listaDeEventosState)
      
      const eventos = todosOsEventos.filter(evento => {
        if (!filtro.data) {
          return true;
        }
        
        return filtro.data.toISOString().slice(0,10) === evento.inicio.toISOString().slice(0,10);
      })

      return eventos;
    }
})

export const eventoAsync = selector({
  key: 'eventoAsync',
  get: async () => {
    const response = await fetch('http://localhost:8080/eventos')
    const responseJson: IEvento[] = await response.json();

    return responseJson.map(evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
});