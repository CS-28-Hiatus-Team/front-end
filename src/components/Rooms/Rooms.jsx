import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {RoomMap, Room, findRoom} from "../../utils/rooms";
import {useSelector} from "react-redux";
import {ActionsContext} from "../../contexts/ActionsContext";

function Rooms() {
    const actions = useContext(ActionsContext);
    const {rooms} = useSelector(state => state.room);

    useEffect(()=> {
        if (rooms.length === 0) {
            actions.rooms.getLocalData();
        }
    }, [rooms])

    return <h1>Rooms</h1>
}

export default Rooms;
