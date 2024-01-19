import React, { useState } from 'react';
import Notification from './Notification';
import { Bell ,LayoutList} from 'lucide-react';

const App = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  const [notifications, setNotifications] = useState([
    'New message received',
    'You have a meeting at 2:00 PM',
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [viewedNotifications, setViewedNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (!viewedNotifications) {
      setViewedNotifications(true);
      setNotificationCount(0);
    }
  };

  const handleNotificationClose = () => {
    setShowNotifications(false);
  };

  const handleNotificationView = () => {
    setViewedNotifications(true);
    setNotificationCount(0);
  };

  return (
    <div className="App">
      <div className=" ">
        <div className="relative">
          <button
            onClick={handleNotificationClick}
            className={`relative p-2 ${viewedNotifications ? 'bg-slate-200' : 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'}-500  rounded-full hover:bg-${
              viewedNotifications ? 'gray text-indigo-800' : 'text-black blue'
            }-600 focus:outline-none`}
          >
            {!viewedNotifications && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-xs px-2 rounded-full">
                {notificationCount}
              </span>
            )}
            <Bell style={{color:" #5c6ac4"}}/>
          </button>
          {showNotifications && (
            <Notification
              count={notificationCount}
              notifications={notifications}
              onView={handleNotificationView}
              onClose={handleNotificationClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
