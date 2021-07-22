import React from 'react';
import './Sidebar.css';
import Button from "@material-ui/core/Button";
import {
    AccessTime,
    Add, Duo,
    ExpandMore,
    Inbox,
    LabelImportant,
    NearMe,
    Note, Person, Phone,
    Star
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import IconButton from "@material-ui/core/IconButton";
import {useDispatch} from "react-redux";
import {openSendMessage} from "./features/mailSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">

            <Button startIcon={<Add fontSize="large"/>}
                    className="sidebar__compose"
                    onClick={()=>dispatch(openSendMessage())}
            >
                Compose
            </Button>

            <SidebarOption Icon={Inbox}
                           title="Inbox"
                           number={55}
                           selected={true}/>

            <SidebarOption Icon={Star}
                           title="Starred"
                           number={55}/>

            <SidebarOption Icon={AccessTime}
                           title="Snoozed"
                           number={55}/>

            <SidebarOption Icon={LabelImportant}
                           title="Important"
                           number={55}/>

            <SidebarOption Icon={NearMe}
                           title="Sent"
                           number={55}/>

            <SidebarOption Icon={Note}
                           title="Drafts"
                           number={55}/>

            <SidebarOption Icon={ExpandMore}
                           title="More"
                           number={55}/>

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person/>
                    </IconButton>
                    <IconButton>
                        <Duo/>
                    </IconButton>
                    <IconButton>
                        <Phone/>
                    </IconButton>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;