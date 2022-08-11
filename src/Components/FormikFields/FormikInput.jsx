import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import {useField} from "formik";

const StyledFormikInput = styled.div`
`

const FormikInput = (props) => {
    const [field, meta, helpers] = useField(props.name);

    const inputProps = {...field, ...props};
    console.log("input props is", inputProps);
  return (
    <StyledFormikInput dataTestid={props.name}>
        <input type={"text"} {...field} {...props} />
    </StyledFormikInput>
  );
}

FormikInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};
FormikInput.defaultProps = {};

export default FormikInput;