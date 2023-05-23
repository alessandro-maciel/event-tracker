import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';
import useListaDeEventos from '../../states/hooks/useListaDeEventos';
import { useRecoilValue } from 'recoil';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import { filtroDeEventos } from '../../states/atom';

export default function ListaDeEventos() {
  const todosOsEventos = useListaDeEventos();
  const filtro = useRecoilValue<IFiltroDeEventos>(filtroDeEventos)

  const eventos = todosOsEventos.filter(evento => {
    if (!filtro.data) {
      return true;
    }
    
    return filtro.data.toISOString().slice(0,10) === evento.inicio.toISOString().slice(0,10);
  })

  return (<section>
    <Filtro/>
    <div className={style.Scroll}>
      {eventos.map(evento => (
        <Evento evento={evento} key={evento.id} />
      ))}
    </div>
  </section>)
}