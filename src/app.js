import React, { useEffect } from 'react';
import axios from 'axios';

import './style.scss';

function App() {
  useEffect(() => {
    const url = location.href;
    const code = new URL(url).searchParams.get("code");
    if(code) {
      axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token`,
        params: {
          'code': code,
          'client_id': '2ee5e7ed33fd851bfb4a',
          'client_secret': '0ef2987cee8a46a99dbb398a6c5ed331de0773aa'
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }
  }, [])

  return (
    <div className="app">
      <a href="https://github.com/login/oauth/authorize?scope=gist&client_id=2ee5e7ed33fd851bfb4a">Click here to begin!</a>
    </div>
  );
}

export default App;
