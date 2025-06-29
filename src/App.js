import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import agentAPI from './api/agentAPI';
import authAPI from './api/authAPI';
import warehouseAPI from './api/warehouseAPI';
import sensorAPI from './api/sensorAPI';
import palletAPI from './api/palletAPI';
import productAPI from './api/productAPI';
import pallet_template from './api/pallet_template';

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
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: '10px',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}
    >

      {/* Author */}
      <Boxcustomized>
        <Typography variant='h3' sx={{ m: '5px' }}>Auth</Typography>


        <Boxcustomized>
          <Typography>{authAPI.path_login}</Typography>
          <Button variant="contained"
            onClick={() => {
              authAPI.login('tansong', 'tansong456')
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{authAPI.path_logout}</Typography>
          <Button variant="contained"
            onClick={() => {
              authAPI.logout()
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{authAPI.path_register}</Typography>
          <Button variant="contained"
            onClick={() => { 
              authAPI.register('thanhtoan','123','teo','tts@gmail.com','sss')
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{authAPI.path_updateInfomation}</Typography>
          <Button variant="contained"
            onClick={() => {

            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{authAPI.path_updateCompanyInfomation}</Typography>
          <Button variant="contained"
            onClick={() => { 
              authAPI.updateCompanyInfomation('asd', 'sadasd')
          }}
          >Submit</Button>
        </Boxcustomized>

      </Boxcustomized>


      {/* Agent */}
      <Boxcustomized>
        <Typography variant='h3'>Agent</Typography>


        <Boxcustomized>
          <Typography>{agentAPI.path_add_agent }</Typography>
          <Button variant="contained"
            onClick={() => { 
              agentAPI.add('asdas','dsad','12')                         
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{agentAPI.path_update_agent_information }</Typography>
          <Button variant="contained"
            onClick={() => { 
              agentAPI.update_agent_information('abc',)
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{agentAPI.path_delete }</Typography>
          <Button variant="contained"
            onClick={() => { 
              agentAPI.delete()
            }}
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

        <Boxcustomized>
          <Typography>{warehouseAPI.path_warehouse_add}</Typography>
          <Button variant="contained"
            onClick={() => { 
              warehouseAPI.warehouse_add('a','b','c','b','e')     //fail
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{warehouseAPI.path_warehouse_update_information }</Typography>
          <Button variant="contained"
            onClick={() => { 
              warehouseAPI.warehouse_update_information('a','b','z','r','r')
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{warehouseAPI.path_warehouse_import }</Typography>
          <Button variant="contained"
            onClick={() => { 
              warehouseAPI.warehouse_import(1,2,3,4)
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{warehouseAPI.path_warehouse_export }</Typography>
          <Button variant="contained"
            onClick={() => { 
              warehouseAPI.warehouse_export()
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{warehouseAPI.path_warehouse_delete }</Typography>
          <Button variant="contained"
            onClick={() => { 
              warehouseAPI.warehouse_delete()
            }}
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

        <Boxcustomized>
          <Typography>{sensorAPI.path_sensor_assign}</Typography>
          <Button variant="contained"
            onClick={() => { 
              sensorAPI.sensor_assign(2)
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{sensorAPI.path_sensor_update_position }</Typography>
          <Button variant="contained"
            onClick={() => { 
              sensorAPI.sensor_update_position(1,2,3,4) 
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{sensorAPI.path_remove_sensor}</Typography>
          <Button variant="contained"
            onClick={() => { 
              sensorAPI.remove_sensor()
            }}
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

        <Boxcustomized>
          <Typography>{palletAPI.path_import }</Typography>
          <Button variant="contained"
            onClick={() => { 
              palletAPI.import('2','2','2')
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{palletAPI.path_delete }</Typography>
          <Button variant="contained"
            onClick={() => {palletAPI.deleta_pallet(1,2,3,4) 
            }}                  
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{palletAPI.path_add_pallet_to_warehouse }</Typography>
          <Button variant="contained"
            onClick={() => { 
              palletAPI.add_pallet_to_warehouse('1','2')
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{palletAPI.path_remove_pallet_from_warehouse }</Typography>
          <Button variant="contained"
            onClick={() => {
              palletAPI.remove_pallet_from_warehouse()
             }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{palletAPI.path_update_pallet_information }</Typography>
          <Button variant="contained"
            onClick={() => {
              palletAPI.update_pallet_information('asda')
             }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{palletAPI.path_update_pallet_position }</Typography>
          <Button variant="contained"
            onClick={() => { 
              palletAPI.update_pallet_position('2')
            }}
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

        <Boxcustomized>
          <Typography>{productAPI.path_remove_product_from_pallet }</Typography>
          <Button variant="contained"
            onClick={() => { 
              productAPI.remove_product_from_pallet()
            }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{productAPI.path_update_product_information }</Typography>
          <Button variant="contained"
            onClick={() => {
              productAPI.update_product_information('1',2,3,4)    // fail
             }}
          >Submit</Button>
        </Boxcustomized>

        <Boxcustomized>
          <Typography>{productAPI.path_update_product_position }</Typography>
          <Button variant="contained"
            onClick={() => { 
              productAPI.update_product_position('2')
            }}
          >Submit</Button>
        </Boxcustomized>



      </Boxcustomized>


      {/* Pallet_template */}
      <Boxcustomized>
        <Typography variant='h3'>Pallet_template</Typography>


        <Boxcustomized>
          <Typography>{pallet_template.path_get_all_pallet_template }</Typography>
          <Button variant="contained"
            onClick={() => {
              pallet_template.get_all_pallet_template()
             }}
          >Submit</Button>
        </Boxcustomized>


      </Boxcustomized>

    </div>
  );
}

export default App;
