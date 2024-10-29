import { PieChart } from '@mui/x-charts/PieChart';

export const TaskStatusPie = () => {
    
  return (
<PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Nueva' },
            { id: 1, value: 15, label: 'En progreso' },
            { id: 2, value: 20, label: 'Cerrada' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
};