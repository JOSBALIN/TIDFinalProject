import * as React from 'react';

import MonthPicker from './month-picker';
import DateButton from './date-button';
import { getDatesOfMonth } from './util';
import '../management/managementmodules.css';

export type DatePickerProps = {
  /**
   * This function is called when the selected date is changed.
   */
  onChange?: (date: Date) => void;
  /**
   * The selected date.
   */
  selected?: Date;
  /**
   * The minimum date that can be selected (inclusive).
   */
  minDate?: Date;
  /**
   * The maximum date that can be selected (inclusive).
   */
  maxDate?: Date;
} & React.PropsWithRef<
  Omit<React.HTMLProps<HTMLDivElement>, 'onChange' | 'selected'>
>;


// Yesterday's date. Used to define the possible minimum value of date-picker (today)
let date = new Date();
date.setDate(date.getDate() - 1);

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      onChange,
      selected = new Date(),
      minDate = date,
      maxDate,
      className,
      ...props
    },
    ref
  ) => {
    const minDateVal = minDate.getTime();
    const maxDateVal =
      typeof maxDate === 'undefined'
        ? Number.POSITIVE_INFINITY
        : maxDate.getTime();

    const [monthDate, setMonthDate] = React.useState<Date>(selected);
    const [selectedDate, setSelectedDate] = React.useState<Date>(selected);

    const nextMonth = React.useCallback(
      () =>
        setMonthDate(d => {
          const m = d.getMonth();
          const y = d.getFullYear();
          if (m === 11) {
            return new Date(y + 1, 0);
          } else {
            return new Date(y, m + 1);
          }
        }),
      [monthDate]
    );

    const prevMonth = React.useCallback(
      () =>
        setMonthDate(d => {
          const m = d.getMonth();
          const y = d.getFullYear();
          if (m === 0) {
            return new Date(y - 1, 11);
          } else {
            return new Date(y, m - 1);
          }
        }),
      [monthDate]
    );

    const setNewSelectedDate = (date: Date) => {
      setSelectedDate(date);
      onChange?.(date);
    };

    if (
      process.env.NODE_ENV !== 'production' &&
      (selected.getTime() > maxDateVal || selected.getTime() < minDateVal)
    ) {
      console.warn(
        'Selected date must fall in the range of maxDate and minDate'
      );
    }

    return (
      <div
        className={`sdp ${className}`}
        aria-label="Date Picker"
        tabIndex={0}
        ref={ref}
        {...props}
      >
        <MonthPicker
          month={monthDate.getMonth()}
          year={monthDate.getFullYear()}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
        />
        <div className="sdp--dates-grid">
          <p className="sdp--text sdp--text__inactive">Su</p>
          <p className="sdp--text sdp--text__inactive">Mo</p>
          <p className="sdp--text sdp--text__inactive">Tu</p>
          <p className="sdp--text sdp--text__inactive">We</p>
          <p className="sdp--text sdp--text__inactive">Th</p>
          <p className="sdp--text sdp--text__inactive">Fr</p>
          <p className="sdp--text sdp--text__inactive">Sa</p>
          {getDatesOfMonth(monthDate).map(({ d, active }) => {
            const dVal = d.getTime();

            return (
              <DateButton
                key={dVal}
                date={d}
                active={dVal >= minDateVal && dVal <= maxDateVal && active}
                selected={selectedDate.toDateString() === d.toDateString()}
                onClick={setNewSelectedDate}
              />
            );
          })}
        </div>
      </div>
    );
  }
);

export default DatePicker;