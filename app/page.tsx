import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/List";
import "./globals.css"
import Nav from "../app/components/Nav";
import Footer from "../app/components/footer";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    
    <main className='max-w-4xl mx-auto mt-4'>
      <section className="w-full flex-center flex-col">
        <Nav/>
            <h1 className="gradient head_text text-center">
           
            
                
            </h1>
            <p className="desc text-center ">Effortlessly log exercises, sets, and reps, making progress tracking a breeze. Your go-to app for sculpting your fitness legacy.</p>
        
        </section>
      <div className='text-center my-5 flex flex-col gap-4'>
  
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
      <Footer/>
    </main>
  );
}


