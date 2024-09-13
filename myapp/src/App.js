import {Component} from 'react'
import UserProfile from './components/UserProfile'
import './App.css'

const initialUserDetailsList=[
    {
      uniqueNo: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      role: 'Software Developer'
    },
    {
      uniqueNo: 2,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Floyd Miles',
      role: 'Software Developer'
    },
    {
      uniqueNo: 3,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Jacob Jones',
      role: 'Software Developer'
    },
    {
      uniqueNo: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
      name: 'Devon Lane',
      role: 'Software Developer'
    }
  ]


class App extends Component{
    state={
        searchInput:"",
        userDetailsList:initialUserDetailsList
    }

    
  onChangeSearchInput=(event) =>{
    
    this.setState({
        
        searchInput:event.target.value
    })
  }

  deleteUser = (uniqueNo) => {
    const {userDetailsList}=this.state
    const deleatedUsersList=userDetailsList.filter((eachUser)=>eachUser.uniqueNo!==uniqueNo
    )
    this.setState({
        userDetailsList:deleatedUsersList
    })
  };
    render(){
        const{searchInput ,userDetailsList}=this.state

        const filteredUsersList=userDetailsList.filter((eachUser) =>eachUser.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
        return(
            <div className="container">
                <h1>users list</h1>
                <input type="search" onChange={this.onChangeSearchInput} value={searchInput} placeholder='search by name'/>
              
            <ul>
               {filteredUsersList.map((eachUser) =>{
                return(
                <UserProfile key={eachUser.uniqueNo} deleteUser={this.deleteUser} userDetails={eachUser}/>
                )
               })}
            </ul>
            </div>
        )
    }
}

export default App;
