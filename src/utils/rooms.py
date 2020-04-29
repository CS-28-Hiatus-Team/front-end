import json

class Room:
    def __init__(self, name, desc, NORTH, EAST, SOUTH, WEST, map):
        self.name = name
        self.desc = desc
        self.NORTH = NORTH
        self.EAST = EAST
        self.SOUTH = SOUTH
        self.WEST = WEST
        self.map = map
    def __str__(self):
        return f'{self.name}, {self.desc}, {self.NORTH}, {self.EAST}, {self.SOUTH}, {self.WEST}, {self.map}'


import csv

rooms = dict()

def room_reader(rooms={}):
    with open('rooms.csv', 'r') as csvfile:
        reader = csv.reader(csvfile)
        next(reader)
        for row in reader:
            rooms[str(row[0])] = Room(row[0], row[1], row[2], row[3], row[4], row[5], row[6])
            # rooms[str(row[0])] = json.dumps(rooms[str(row[0])].__dict__)
        return rooms
room_reader(rooms)

for room in rooms:
    print(room)
