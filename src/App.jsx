function App() {
  return (
    <>
      <div className="w-full my-0 mx-auto pt-[2%] px-[8%] font-normal  dark:text-[#ffffff] dark:bg-[#252128]  text-[#6B7280] duration-1000">
        <ToastContainer limit={1} transition={Slide} />
        <Header toggle={!darkMode} setToggle={toggleDarkMode} />
        <Hero />
        <Skills />
        <Profile />
        <Projects/>
      </div>
      <Footer />
    </>
  );
}

export default App
