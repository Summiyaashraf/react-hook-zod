"use client";
import Form from "./components/Form";

function Home() {

  return (
    <main className="
    flex 
    flex-col 
    items-center 
    justify-between 
    min-h-screen 
    w-full 
    p-20
    sm:p-12 
    lg:p-24 
    bg-cover 
    bg-center 
    bg-no-repeat 
    text-black md:pt-"
    style={{
      backgroundImage:
        "url('background.jpg')", // Replace with your desired image URL
    }}
  >
     <Form />
    </main>
  );
}

export default Home;