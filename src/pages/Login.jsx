import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'

import supabase from '../config/client'

const Login = () => {
  const navigate = useNavigate()
  console.log(supabase)
  return (
    <div>
        Login
    </div>
  )
}

export default Login