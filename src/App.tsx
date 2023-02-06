function App() {
  return (
    <div className='h-screen w-full bg-[#D6E2EF] flex items-center justify-center font-[Outfit] text-[15px]'>
      <div className=' bg-[#FFFFFF] rounded-2xl shadow-sm flex flex-col justify-center items-center mx-5'>
        <div className='rounded-xl overflow-hidden mx-4 my-4'>
          <img src='/image-qr-code.png' className='w-full h-[18rem]' />
        </div>
        <div className='text-center pb-8 pt-2 w-[20rem] flex flex-col items-center justify-center'>
          <p className='text-xl font-[700] text-[#1F3150] w-[15rem]'>
            Improve your front-end skills by building projects
          </p>
          <p className='mt-4 font-[400] text-[#7B869D] leading-5 w-[16rem]'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
