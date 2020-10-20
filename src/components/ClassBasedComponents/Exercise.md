## 9. Convert these functional components to class based components

```js
//1
function App (){
    return(
        <div>
            <Header username='Sav'/>
            <Greeting/>
        </div>
    );
}
//2
function Header(props){
    return(
        <header>
            <p> Welcome {props.username} </p>
        </header>
    );
}
//3
function Greeting(){
    const date = new Date(); 
        const hours = date.getHours(); 
        let timeofday; 
        
        if(hours <12){
            timeofday = "morning";
        }else if(hours >=12 && hours<17){
            timeofday = "afternoon";
        }else{
            timeofday = "night";
        }
    return(
        <h1> Good {timeofday} to you, sir or madam!</h1>
    )
}
```

<details><summary>Solution</summary>

```js
class App extends React.Component{
    render(){
        return(
            <div>
                <Header username="Savannah"/>
                <Greeting/>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <header>
                <p>Welcome {this.props.username}</p>
            </header>
        );
    }
}

class Greeting extends React.Component{
    render(){
        const date = new Date(); 
        const hours = date.getHours(); 
        let timeofday; 
        
        if(hours <12){
            timeofday = "morning";
        }else if(hours >=12 && hours<17){
            timeofday = "afternoon";
        }else{
            timeofday = "night";
        }
        return(
            <h1> Good {timeofday} to you, sir or madam!</h1>
            )
    }
}
```

</details>