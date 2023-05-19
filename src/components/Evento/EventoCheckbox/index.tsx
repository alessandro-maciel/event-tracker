import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../../../states/atom';

const EventoCheckbox: React.FC<{ evento: IEvento}> = ({ evento }) => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  const aoAlterarStatus = () => {
    setListaDeEventos(listaAntiga => listaAntiga.map((event) => {
      if (event.id === evento.id) {
        return {...event, completo: !event.completo}
      }  
      return event;
    }))
  }

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={aoAlterarStatus}></i>)
}

export default EventoCheckbox