import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';
import useListaDeEventos from '../../states/hooks/useListaDeEventos';

export default function ListaDeEventos() {
  const eventos = useListaDeEventos()

  return (<section>
    <Filtro/>
    <div className={style.Scroll}>
      {eventos.map(evento => (
        <Evento evento={evento} key={evento.id} />
      ))}
    </div>
  </section>)
}