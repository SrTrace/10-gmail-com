import React from 'react';
import "./EmailRow.css";
import {Checkbox, IconButton} from "@material-ui/core";
import {LabelImportantOutlined, StarBorderOutlined} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectMail} from "./features/mailSlice";

const EmailRow = ( {title, subject, description, time, id}) => {
    let history = useHistory();
    let dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            title,
            subject,
            description,
            time,
            id,
        }));

        history.push('/mail');
    };

    return (
        <div
            className="emailRow"
            onClick={openMail}
        >
            <div className="emailRow__options">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>

            <h3 className="emailRow__title">{title}</h3>

            <div className="emailRow__message">
                <h4>{subject}{' '}
                <span className="emailRow__description">- {description}</span>
                </h4>
            </div>

            <div className="emailRow__time">{time}</div>
        </div>
    );
};

export default EmailRow;