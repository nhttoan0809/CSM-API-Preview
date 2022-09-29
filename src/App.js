import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import agentAPI from './api/agentAPI';
import authAPI from './api/authAPI';

const Boxcustomized = styled((props) => (
  <Box {...props}></Box>
))(() => ({
  margin: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '10px'
}))

function App() {
  return (
    <div className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '10px',
      }}
    >


      {/* Author */}
      <Boxcustomized>
        <Typography variant='h3' sx={{ m: '5px' }}>Auth</Typography>


        <Boxcustomized>
          <Typography>{authAPI.path_login}</Typography>
          <Button variant="contained"
            onClick={() => { 
              authAPI.login('thanhtoan', 'thanhtoan123') }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{authAPI.path_logout}</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{authAPI.path_register}</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{authAPI.path_updateInfomation}</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{authAPI.path_updateCompanyInfomation}</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>

      </Boxcustomized>










      {/* Agent */}
      <Boxcustomized>
        <Typography variant='h3'>Agent</Typography>


        <Boxcustomized>
          <Typography>{ }</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{ }</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{ }</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>


      </Boxcustomized>










      {/* Warehouse */}
      <Boxcustomized>
        <Typography variant='h3'>Warehouse</Typography>


        <Boxcustomized>
          <Typography>{ }</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>


      </Boxcustomized>










      {/* Sensor */}
      <Boxcustomized>
        <Typography variant='h3'>Sensor</Typography>


        <Boxcustomized>
          <Typography>{ }</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>


      </Boxcustomized>










      {/* Pallet */}
      <Boxcustomized>
        <Typography variant='h3'>Pallet</Typography>


        <Boxcustomized>
          <Typography>{ }</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>


      </Boxcustomized>










      {/* Product */}
      <Boxcustomized>
        <Typography variant='h3'>Product</Typography>


        <Boxcustomized>
          <Typography>{ }</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>


      </Boxcustomized>










      {/* Pallet_template */}
      <Boxcustomized>
        <Typography variant='h3'>Pallet_template</Typography>


        <Boxcustomized>
          <Typography>{ }</Typography>
          <Button variant="contained"
            onClick={() => { }}
          >Submit</Button>
        </Boxcustomized>


      </Boxcustomized>

    </div>
  );
}

export default App;
