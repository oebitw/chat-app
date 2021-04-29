import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm';

import('./App.css');

const App = ()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
        height='100vh'
        projectID='744570ea-b8a8-49b3-9b2b-fd3894d94ed2'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {... chatAppProps} />}
        />
    );
}


export default App;