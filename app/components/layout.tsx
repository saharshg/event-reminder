const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col h-screen bg-orange-200 font-mono text-sky-300 selection:bg-sky-700 selection:text-orange-200'>
      <header className='flex justify-between'>
        <h1 className='leading text-2xl font-bold'>Event Reminder App</h1>
        {/*
                  <div className="h-[14px] w-[434px]">
                  <img
                    src="/logo.png"
                    alt="Remix"
                    className="block w-full dark:hidden"
                  />
                </div>
                */}
      </header>
      {children}
      <footer className='block fixed right-0 bottom-0'>
        <div className='italic'>
          Made with <span className='text-red-800 text-md'>❤️</span> by{" "}
          <a
            className=' hover:text-sky-700 hover:uppercase'
            href='https://www.saharshgoyal.com'
            target='_blank'
          >
            Saharsh Goyal
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
