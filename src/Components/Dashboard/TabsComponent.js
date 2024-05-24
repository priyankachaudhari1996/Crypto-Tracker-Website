import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from '@mui/material';
import "./tabscomponent.css";
import Grid from './GridView/Grid';
import List from './ListView/List';
import { color } from 'framer-motion';

export default function TabsComponent({coins}) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  const theme= createTheme({
    palette:{
        primary:{
            main: "#0000FF",
        }
    }
  })
  const style={
    fontWeight:600,
    color:"white",
  }

  return (
    <ThemeProvider theme={theme} >
      <TabContext value={value}  >
        <div >
          <TabList onChange={handleChange} variant="fullWidth"  >
            <Tab label="Grid" value="grid" sx={style}  />
            <Tab label="List" value="list" sx={style}  />
            
          </TabList>
        </div>


        {/* *****************   Grid View   ****************** */}
        <TabPanel value="grid">
          <div className='coin-cards-container'>
          {coins.map((coin,ind)=>{
              return(
                
                <Grid coin={coin} key={coin.id} />
              )
            })}
          </div>
        </TabPanel>




        {/* ******************  List View   ****************** */}
        <TabPanel value="list">

            <div>
              <table>
                <thead>
                    <tr>
                      <th className='list-first-th'>Name & Symbol</th>
                      <th>Price Change % in 24hrs</th>
                      <th>Current Price</th>
                      <th>Total Volume</th>
                      <th>Market Cap</th>
                      <th>Add to WatchList</th>
                    </tr>

                </thead>

                <tbody>
                      {coins.map((coin,ind)=>{
                        return(
                          <List coin={coin} key={coin.id}  />
                        )
                      })}
                </tbody>
              </table>
            </div>
        </TabPanel>
        
      </TabContext>
    </ThemeProvider>
  );
}