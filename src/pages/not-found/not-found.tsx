import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const NotFound = (): JSX.Element => (
  <main className="page-content" style={{display: 'flex', alignItems: 'center'}}>
    <div className="container" style={{textAlign: 'center', verticalAlign: 'center'}}>
      <p className='title title--size-m page-content__title'>Страница не найдена</p>
      <Link className='btn btn--accent btn--cta' style={{marginTop: '56px'}} to={AppRoute.Root} >Перейти на главную</Link>
    </div>
  </main>
);

export default NotFound;
