import Image from 'next/image'

export default function Login() {
    return (
        <div className="flex justify-center max-w-screen-sm bg-[#202A36] mx-auto h-screen">
            <title>WMS App</title>
            <div className='w-full mx-auto mt-20'>
                <Image
                    className='m-auto max-w-[65%]'
                    src="/logo.png"
                    alt='Logo'
                    height="450"
                    width="450"
                    priority
                />

                <div className='text-center mt-5'>
                    <div className='text-white text-base'>
                        Hello Again!
                    </div>
                    <div className='text-[#707B81] text-xs'>
                        Welcome Back You’ve Been Missed!
                    </div>
                </div>

                <div className='w-[80%] mx-auto mt-12'>
                    <form className='mt-5'>
                        <label className="block">
                            <span className="block text-sm font-medium text-white">Username</span>
                            <input autoFocus type="text" className="mt-1 w-full block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                        </label>

                        <label className="block mt-6">
                            <span className="block text-sm font-medium text-white">Password</span>
                            <input type="password" className="mt-1 w-full block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                        </label>

                        <button type='button' className="bg-[#3DD2A5] hover:bg-[#30a582] text-white font-bold py-2 rounded-full mt-10 w-full">
                            Login
                        </button>
                    </form>
                </div>

                <div className='w-[80%] mx-auto mt-20 text-center'>
                    <div className='text-[#707B81] text-xs'>
                        Warehouse App V.1
                    </div>
                </div>

            </div>


        </div>
    )
}
