import React from 'react';

const DisplayDeviceList = () => {
  // Placeholder data
  const devices = [
    { id: 1, name: 'Device 1', status: 'Available' },
    { id: 2, name: 'Device 2', status: 'Unavailable' },
  ];

  return (
    <div className="device-list-main">
      <h4 className="text-primary fw-medium mb-3">Available Devices</h4>
      <ul className="list-group">
        {devices.map(device => (
          <li key={device.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{device.name}</span>
            <span>{device.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayDeviceList;