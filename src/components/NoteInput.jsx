import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import { add } from "../utils/content";
const NoteInput = ({
  title,
  handleBody,
  body,
  handleTitle,
  onSubmitHandler,
}) => {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <form className='add-new-page__input' onSubmit={onSubmitHandler}>
        <input
          className='add-new-page__input__title'
          type='text'
          placeholder={add[locale].contentTitle}
          value={title}
          onChange={handleTitle}
        />
        <textarea
          className='add-new-page__input__body'
          placeholder={add[locale].contentBody}
          value={body}
          onChange={handleBody}
        />
        <div className='add-new-page__action'>
          <button
            className='action'
            type='submit'
            title={add[locale].contentAction}
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path fill='none' d='M0 0h24v24H0V0z'></path>
              <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'></path>
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

NoteInput.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleBody: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};

export default NoteInput;
