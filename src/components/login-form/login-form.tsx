import {FormInput, LoginFormInputs} from '../../types/types';
import {SubmitHandler, useForm} from 'react-hook-form';
import {login} from '../../store/user/api-actions';
import {useAppDispatch} from '../../hooks';
import {LOGIN_INPUTS} from '../../const';
import {Link} from 'react-router-dom';

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
  } = useForm<LoginFormInputs>({
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data: LoginFormInputs) => {
    dispatch(login(data));
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="login-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          {LOGIN_INPUTS.map((field: FormInput<keyof LoginFormInputs>) => (
            <div className="custom-input login-form__input" key={field.name}>
              <label className="custom-input__label" htmlFor={field.type}>{field.label}</label>
              <input
                {...register(field.name, {
                  required: 'Это обязательное поле',
                  pattern: {
                    value: field.pattern,
                    message: field.errorText
                  }
                })}
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
              />
              {errors[field.name] && <div style={{color: '#f2890f'}}>{errors[field.name]?.message}</div>}
            </div>
          ))}
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я согласен с<Link className="link link--active-silver link--underlined" to="#">правилами обработки персональных данных</Link> и пользовательским соглашением</span>
      </label>
    </form>
  );
};

export default LoginForm;
