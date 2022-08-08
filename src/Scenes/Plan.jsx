import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import {FieldArray, Form, Formik} from "formik";
import FormikInput from "../Components/FormikFields/FormikInput";
import { DateTime } from "luxon";

const StyledPlan = styled.div`
    .month {
      min-width: 90vw;
      max-width: 1200px;
      width: 100%;
      
      .month_header {
        border-bottom: solid 3px black;
        border-top: solid 3px black;
        height: 35px;
      }
      
      .month_content-wrapper {
        .month_content {
          
        }
      }
      
      &.closed {
        .month_content-wrapper {
          overflow: hidden;
          height: 0px;
        }
      }
    }
`

const Plan = () => {
    const [months, setMonths] = useState([{name:'first month', expenses:[], incomes:[]}]);
    const [openMonth, setOpenMonth] = useState(0);

    const validateMonth = (formData) => {
        return {}
    }

    const getForm = (monthData, isOpen, monthIndex) => {
        console.log("mont data", monthData.manual ? monthData : months[0]);
        return (
            <div className={"month"}>
                <div  className={"month_header"}
                      onClick={() => {setOpenMonth(monthIndex)}}>
                    {monthData.name}
                    <div>{monthData.valid ? "Month valid" : "Mont is not valid"}</div>
                </div>
                <div className={`month_content ${isOpen ? "" : "closed"}`}>
                    {isOpen &&
                        <Formik initialValues={monthData.manual ? monthData : months[0]}
                                validate={
                            (formData) => {
                                const errors = validateMonth(formData);
                                const newMonths = [...months];
                                const newMontData = {...formData, manual: true, valid: !errors, name: monthData.name};
                                console.log("newMontData", newMontData);
                                newMonths[monthIndex] = newMontData;
                                setMonths(newMonths);
                                return errors
                            }
                        }
                                render = {({values}) => {
                                    return (
                                        <Form>
                                            <FieldArray name="expenses" render={(arrayHelpers) => {
                                                return (
                                                    <div>
                                                        <button type="button"
                                                                onClick={() => {
                                                                    arrayHelpers.push({name:"", amount:""});
                                                                }}>
                                                            Add expense
                                                        </button>
                                                        {values.expenses.map((expence, expenceIndex) => (
                                                            <div>
                                                                Target
                                                                <FormikInput name={`expenses.${expenceIndex}.name`}/>
                                                                Value
                                                                <FormikInput name={`expenses.${expenceIndex}.amount`} type={"number"}/>
                                                                <button onClick={() => {
                                                                    arrayHelpers.remove(expenceIndex);
                                                                }}>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        ))}
                                                        {values.incomes.map((income, incomeIndex) => (
                                                                <div>
                                                                    <FormikInput name={`incomes.${incomeIndex}.name`}/>
                                                                    <FormikInput name={`incomes.${incomeIndex}.amount`} type={"number"}/>
                                                                    <button onClick={() => {
                                                                        arrayHelpers.remove(incomeIndex);
                                                                    }}>
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            ))}
                                                    </div>
                                                    )
                                            }}/>
                                            <FieldArray name="incomes" render={(arrayHelpers) => {
                                                return (
                                                    <div>
                                                        <button type="button"
                                                                onClick={() => {
                                                                    arrayHelpers.push({name:"", amount:""});
                                                                }}>
                                                            Add income
                                                        </button>
                                                        {values.incomes.map((income, incomeIndex) => (
                                                            <div>
                                                                <FormikInput name={`incomes.${incomeIndex}.name`}/>
                                                                <FormikInput name={`incomes.${incomeIndex}.amount`} type={"number"}/>
                                                                <button onClick={() => {
                                                                    arrayHelpers.remove(incomeIndex);
                                                                }}>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )
                                            }}/>
                                        </Form>
                                    )
                                }}
                        >
                        </Formik>
                    }
                </div>
            </div>
        )
    }

  return (
    <StyledPlan>
        {months.map((month, index) => {
            return (
                getForm(month, openMonth === index, index)
            )
        })}
        <button type={"button"}
                onClick={() => {
                    const newMonths = [...months];
                    newMonths.push({name:`month ${newMonths.length + 1}`, expenses:[], income:[]});
                    setMonths(newMonths);
                }}>
            Add month
        </button>
    </StyledPlan>
  );
}

Plan.propTypes = {};
Plan.defaultProps = {};

export default Plan;