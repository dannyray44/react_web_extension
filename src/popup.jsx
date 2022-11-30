import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createRoot } from 'react-dom/client';
import { IconButton } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    min_height: 10
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Bets" {...a11yProps(0)} />
          <Tab label="Funds" {...a11yProps(1)} />
          <Tab label="Help" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BetsPannel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two!!
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three!!!
      </TabPanel>
    </Box>
  );
}

function BetsPannel() {
  return(
    <>
      <IconButton aria-label='Refresh'>
        <CachedIcon />
      </IconButton>
    </>
  )
}

const container = document.getElementById("react-target");
const root = createRoot(container);
root.render(<BasicTabs />);
