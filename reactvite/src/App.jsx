import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 return (
    <>
       <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
              Submit
            </Button>
            <Typography variant="body1" sx={{ marginTop: 2 }} align="center">
              Don't have an account? <Link to="/register">Register here</Link>
            </Typography>
   
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
              Register
            </Button>
            <Typography variant="body1" sx={{ marginTop: 2 }} align="center">
               Already have an account? <Link to="/login">Login here</Link> 
               </Typography>
    </>
  )
}

export default App
