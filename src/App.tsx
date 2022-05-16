import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import './App.css';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <MantineProvider theme={{ colors: { 
        alien: ["#1f9b0f", "#1f9b0f", "#1f9b0f", "#1f9b0f", "#1f9b0f", "#1f9b0f", "#1f9b0f", "#1f9b0f", "#1f9b0f", "#1f9b0f"]
      }, fontSizes: {
        lg: 30
      }
      }}>
        <NotificationsProvider>
         <Planets/>
        </NotificationsProvider>
      </MantineProvider>
      
    </div>
  );
}

export default App;
