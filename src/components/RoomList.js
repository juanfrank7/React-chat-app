import React from 'react';

function RoomList ({ roomId, subscribeToRoom, rooms }) {
  const orderedRooms = [...rooms].sort((a, b) => a.id - b.id);
  return (
    <div className="room-list">
      <ul>
        <h3>Your rooms:</h3>
        {orderedRooms.map((room) => {
          let active = '';
          if(roomId === room.id){
              active = 'active';
          }
          <li key={room.id} className={`room ${active}`}>
            <a onClick={() => subscribeToRoom(room.id)} >
              {room.name}
            </a>
          </li>
        })}
      </ul>
    </div>
  );
}

export default RoomList;
