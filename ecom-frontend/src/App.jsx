

function App() {

  return(
    <BrowserRouter>
    <p>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/verify-otp" element={<VerifyOtp />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
      </Routes>
    </p>
    
    </BrowserRouter>
  )
}

export default App
