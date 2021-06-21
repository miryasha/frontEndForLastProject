import React from 'react'

// npm install @fullcalendar/core
// npm install @fullcalendar/react @fullcalendar/daygrid
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "@fullcalendar/core/main.cjs";
import "@fullcalendar/daygrid/main.cjs";


const UserCalendar = () => {

    const events = [{ title: "today's event", date: new Date() }];

    return (
        <div className="UserCalendar">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={events}
        />
      </div>
    )
}

export default UserCalendar
