import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";
import parser from "html-react-parser";

const NoteDetail = ({ title, createdAt, body }) => {
  return (
    <div className='detail-page'>
      <h2 className='detail-page__title'>{title}</h2>
      <h3 className='detail-page__createdAt'>{showFormattedDate(createdAt)}</h3>
      <p className='detail-page__body'>{body}</p>
    </div>
  );
};

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
