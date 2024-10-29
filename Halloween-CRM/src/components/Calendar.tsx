import * as React from 'react';
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Typography, List, ListItem, Card, CardContent } from "@mui/material";

export const Calendar = () => {
  const events: { date: string; time: string; title: string; responsible: string; }[] = [
    { date: "2024-10-28", time: "10:30 AM", title: "Entrevista a XXX negocio", responsible: "Aylin" },
    { date: "2024-10-28", time: "09:00 AM", title: "Conferencia para colaboradores XXXX", responsible: "Julia" },
    { date: "2024-10-28", time: "09:00 AM", title: "Conferencia para colaboradores XXXX", responsible: "Julia" },
  ];

  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2024-10-28'));
  const selectedEvents = events.filter(e => e.date === value?.format("YYYY-MM-DD"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem>
          <DateCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoItem>
      </DemoContainer>

      <Box mt={2}>
        <Typography variant="h5">Eventos</Typography>
        <Box mt={2}>
          {selectedEvents.length > 0 ? (
            <List>
              {selectedEvents.map((event, index) => (
                <ListItem key={index}>
                  <Card sx={{ width: "100%", my: 1 }}>
                    <CardContent>
                      <Typography variant="subtitle1">{event.title}</Typography>
                      <Typography variant="body2">Hora: {event.time}</Typography>
                      <Typography variant="body2">Responsable: {event.responsible}</Typography>
                    </CardContent>
                  </Card>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="textSecondary">No hay eventos para este día.</Typography>
          )}
        </Box>
      </Box>
    </LocalizationProvider>
  );
};
