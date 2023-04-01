import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return( 

    <div className="w-[100vw] bg-[#282A3A] flex flex-col items-center overflow-x-hidden">
      <h1 className="bg-[#1A5F7A]  text-white w-11/12 mx-auto mt-[40px] px-10 py-2 text-center 
      rounded-md font-bold text-2xl">Random Gif</h1>
     
     <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
     <Random/>
      <Tag/>
     </div>
      
    </div>
  );
}
