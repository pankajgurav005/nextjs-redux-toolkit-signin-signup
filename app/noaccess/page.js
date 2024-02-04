export default function Noaccess() {
  const redirectToLogin = () => {

  }
  return(
    <>
      <div className="h-screen flex flex-wrap flex-col justify-center align-middle content-center">
        <span className="text-2xl font-bold text-center">NO ACCESS!!!!</span>
        <span className="font-bold">PLEASE LOGIN TO CHEK THIS PAGE</span>
        {/* <div onClick={redirectToLogin} className="text-center">
          <button className="rounded cursor-pointer uppercase h-8 text-sm bg-slate-400 w-24 text-white font-semibold flex flex-wrap justify-center content-center mr-4">LOGIN</button>
        </div> */}
      </div>
    </>
  )
}