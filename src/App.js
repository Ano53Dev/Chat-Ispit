import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  appContainer: `max-w-[728px] mx-auto pt-10  text-center `,
  sectionContainer: `flex flex-col h-[90vh] bg-purple-300 mt-10 shadow-xl border relative`,
  body: `bg-slate-300`,
};

function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className={style.body}>
    <div className={style.appContainer}>
      <section className='{style.sectionContainer}'>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
    </div>
  
  );
}

export default App;
