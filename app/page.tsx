
export default function Home() {
  return (
    // <main className="bg-gray-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
    //     <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm dark:bg-gray-600">
    //       <div className="flex justify-between items-center">
    //         <div className="flex flex-col">
    //           <span className="text-gray-600 font-semibold -mb-1 dark:text-gray-300">In Transit</span>
    //           <span className="text-4xl font-semibold dark:text-white">Coolblue</span>
    //         </div>
    //         <div className="size-12 rounded-full bg-orange-400"/>
    //       </div>
    //       <div className="my-2 flex items-center gap-2">
    //         <span className="px-2.5 py-1.5 bg-green-400 rounded-full text-white font-medium uppercase text-xs transition hover:bg-green-500 hover:scale-125">Today</span>
    //         <span className="dark:text-gray-100">9:30 ~ 10:30</span>
    //       </div>
    //       <div className="relative">
    //         <div className="bg-gray-200 w-full h-2 rounded-full absolute"/>
    //         <div className="bg-green-400 w-2/3 h-2 rounded-full absolute" />
    //       </div>
    //       <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300">
    //         <span>Expected</span>
    //         <span>Sorting center</span>
    //         <span>In transit</span>
    //         <span className="text-gray-300 dark:text-gray-500">Delivered</span>
    //       </div>
    //     </div>
    // </main>

    // 반응형,peer,그라디언트 넣기 예제
    // <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
    //     <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col md:flex-row gap-2">
    //         <input className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-purple-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:bg-red-100 invalid:focus:ring-red-500 peer" type="email" required placeholder="Email address"/>
    //         <span className="text-red-500 font-medium hidden peer-invalid:block">Email is required</span>
    //         <button className="text-white py-2 rounded-full active:scale-90 transition-transform font-medium outline-none md:px-10 bg-black peer-invalid:bg-red-100">Log in</button>
    //     </div>
    // </main>

    //  선택자로 구분 예제
    //  <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
    //     <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-100">
    //         <input className="w-full rounded-full h-10 bg-gray-200 pl-5 ring ring-transparent focus:ring-purple-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:bg-red-100 invalid:focus:ring-red-500 peer" type="text" required placeholder="Email address"/>
    //         <span className="text-red-500 font-medium hidden peer-invalid:block">Email is required</span>
    //         <button className="text-white py-2 rounded-full active:scale-90 transition-transform font-medium md:px-10 bg-black peer-invalid:bg-red-100">Log in</button>
    //     </div>
    // </main>

    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-4">
         {["Nico","Me","You", "Yourslef"].map((person,index)=>
         <div key={index} className="flex items-center gap-5 odd:bg-gray-100 even:bg-cyan-100 p-2.5 rounded-xl">
          <div className="size-10 bg-blue-400 rounded-full" />
          <span className="text-lg font-medium">{person}</span>
          <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full">
            <span>{index}</span>
          </div>
         </div>)}
      </div>
    </main>
  );
}
// dark modifier는 기본 컴퓨터 화면모드에 따라 바뀐다 


/**
 * 
  .ring {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
 * 
 * 
 * ring class는 두개의 변수를 생성(--tw-ring-offset-shadow , --tw-ring-shadow )
 * 기본적으로 정해진 속성을 쓰는 경우도 있지만 ring의 경우 세세하게 지정해서 만들어낼 수 있다
 * 
 * 예를 들면 
  .bg-black {
      --tw-bg-opacity: 1;
      background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  }
 * 
   --tw-bg-opacity의 경우 우리가 지정해서 만들어낼 수 있다
   bg-opacity-50를 className에 같이 써주면 지정된다



   그라데이션 
   bg-gradient-to-tr from-cyan-500 via-yellow-200 to-purple-400
 * 
 */