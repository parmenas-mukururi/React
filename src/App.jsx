import { useState, useEffect } from 'react'
import './App.css'
import SearchComponent from './components/Search Component/SearchComponent'
import UserInfoComponent from './components/UserInfoComponent/UserInfoComponent'


function App() {

  const [username, setuserName] = useState("")
  const [profile, setprofile] = useState({})

  const onSearch = (username) => {
    setuserName(username)
  }


  useEffect(() => {
    async function fetchData() {
      const token = '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';
      const api = `https://api.github.com/users/${username}`
      const response = await fetch(api, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      console.log(response)
      const jsonData = await response.json()

      return jsonData;

    }
    fetchData().then((data) => {
      setprofile(data)
    })
  }, [username])
  return (
    <>

      <SearchComponent
        onSearch={onSearch}
      />
      <UserInfoComponent
        avatar={profile.avatar_url}
        name={profile.login}
        location={profile.location}
        repos={`${profile.public_repos} Repos`}
        date={`User since ${profile.created_at}`}
        bio={profile.bio}
      />
    </>
  )
}

export default App
