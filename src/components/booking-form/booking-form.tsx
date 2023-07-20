import {BookingFormFields, BookingFormInputs, BookingInfo, BookingQuestRequest, FormInput} from '../../types/types';
import {BOOKING_INPUTS, Date, dateDictionary} from '../../const';
import {formatTime, getDateAndTime} from '../../utils/common';
import {bookQuest} from '../../store/booking/api-actions';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppDispatch} from '../../hooks';
import {Link} from 'react-router-dom';

type BookingFormProps = {
  bookingInfo: BookingInfo;
  questId: string;
}

const BookingForm = ({bookingInfo, questId}: BookingFormProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
  } = useForm<BookingFormFields>({
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<BookingFormFields> = (data: BookingFormFields) => {
    const [date, time] = getDateAndTime(data.date);

    const bookingQuest: BookingQuestRequest = {
      date: date as Date,
      time: time,
      contactPerson: data.contactPerson,
      phone: data.phone,
      withChildren: data.withChildren,
      peopleCount: +data.peopleCount,
      placeId: bookingInfo.id
    };

    dispatch(bookQuest([bookingQuest, questId]));
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        {Object.entries(bookingInfo.slots).map(([date, infoList]) => (
          <fieldset key={date} className="booking-form__date-section">
            <legend className="booking-form__date-title">{dateDictionary[date as Date]}</legend>
            <div className="booking-form__date-inner-wrapper">
              {infoList.map((info) => (
                <label key={date + info.time} className="custom-radio booking-form__date">
                  <input
                    type="radio"
                    id={`${date}${formatTime(info.time)}`}
                    disabled={!info.isAvailable}
                    required
                    value={`${date}${formatTime(info.time)}`}
                    {...register('date', {
                      required: 'Это обязательное поле'
                    })}
                  />
                  <span className="custom-radio__label">{info.time}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        {BOOKING_INPUTS.map((field: FormInput<keyof BookingFormInputs>) => (
          <div key={field.name} className="custom-input booking-form__input">
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
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" {...register('withChildren')} />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required/>
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

export default BookingForm;
