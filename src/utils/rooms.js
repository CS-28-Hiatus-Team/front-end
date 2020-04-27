/*
Rooms have a Name, a Description, and a way to point to other rooms via, north, south, east, and west
Need a DLL that lists rooms going in 4 different directions
 */


export class Room {
    constructor(name, desc) {
        this.name = name;
        this.description = desc
    }
}

export class RoomMap {
    constructor(room, north, south, east, west) {
        this.room = room;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
    }
}

export function findRoom(rooms, name) {
    console.log(rooms);
    // Base Case
    if (rooms.length === 0) {
        return null;
    }
    if (rooms[0].name === name) {
        return rooms[0]
    }
    rooms.shift();
    return findRoom(rooms, name);
}
