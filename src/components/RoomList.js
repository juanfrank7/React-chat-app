import React from 'react';

function RoomList (props) {
  const orderedRooms = [...props.rooms].sort((a, b) => a.id - b.id);
  return (
    <div className="room-list">
      <ul>
        <h3>Your rooms:</h3>
        {orderedRooms.map(room => {
          const active = props.roomId === room.id ? 'active' : '';
            <li key={room.id} className={'room ' + active}>
              <a onClick={() => props.subscribeToRoom(room.id)} href="#">
                {room.name}
              </a>
            </li>
        })}
      </ul>
    </div>
  );
}

export default RoomList;
