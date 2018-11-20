import React, { Component } from 'react';
import './App.css';


class App extends Component {


    // constructor(props) {
    //     super(props);
    // this.state = {
    //     checked: true
    // }

  
    state = {
        items: [],
        isLoaded: false,
        data2: [],
        data3: [],
        data2other: [],
        data3other: [],
        isdata2: false,
        isdata3: false,
        popular:[],
        others:[]
  
    }
  
    componentDidMount() {
        fetch('https://api.zoomcar.com/v4/cities?platform=web')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
  
                })
            });

    }



    onClearArray = () => {

    console.log("onclear",this.state.isdata3)
     
        if(this.state.isdata3 == true){

        this.setState({


            isdata3: false,
  

        });
    }else{

        this.setState({


            isdata3:true,
            // isdata2:false

        });
        console.log("onclear",this.state.isdata3)
    console.log("onclear",this.state.isdata2)
    

    }
    

    };

    makeMEClick = () => {

     
        if(this.state.isdata2 == true){

        this.setState({


            isdata2: false,
  

        });
    }else{

        this.setState({


            isdata2:true,
            // isdata3:false

        });

    }   

    }

    render() {


        var {
            isLoaded,
            items,
            data2,
            data3,
            popular,
            others,
            data2other,
            data3other
        } = this.state;

        if (!isLoaded) {
            return <div> Loading... </div>;
        } else {
            if (this.state.isdata2 === true  && this.state.isdata3 === false ) {
                console.log("isdata2",this.state.isdata2)
                console.log("isdata3",this.state.isdata3)
                
                var Data = this.state.data2
  
                return (


                    <div className = "App">

                     <div className = "App-header">CITIES</div>
                     <div className ="button">  
  
                     HD ENABLED <input className="check" type="checkbox"  onChange={this.makeMEClick}/>
                   ONE WAY ENABLED    <input className="check" type="checkbox" onChange={this.onClearArray} />
                  
                    
                   </div> 
                   <div className ="main">        
               <h4 className="chat-ok">popular</h4>
                    <div className="ul-class"> {
                        this.state.data2.map(x => <div className="li-class" key = {x.id}> 
                        <img src={x.icon} width={40} height={40} mode='fit' />  
                                   <p>{x.name}</p> 
                      </div>
                        )
                    } </div>

                     <h4 className="chat-ok">others</h4>
                     <div className="ul-class2"> {
                        this.state.data2other.map(x => <div className="li-class2" key = {x.id}> 
                        <img src={x.icon} width={40} height={40} mode='fit' />  
                         <p>{x.name}</p> 
                      
            
                        
                           </div>


                        )
                    } </div>

                    </div>  
                    </div>

                );




            } else if(this.state.isdata3 == true && this.state.isdata2 == false){
            
                var Data = this.state.data3

                return (


                    <div className = "App">

                     <div className = "App-header">CITIES</div>
                     <div className ="button">  
                     HD ENABLED <input className="check" type="checkbox"  onChange={this.makeMEClick}/>
                   ONE WAY ENABLED    <input className="check" type="checkbox" onChange={this.onClearArray} />
                  
                  
                   </div> 
                   <div className ="main">        
               <h4 className="chat-ok">popular</h4>
                    <div className="ul-class"> {
                        this.state.data3.map(x => <div className="li-class" key = {x.id}> 
                        <img src={x.icon} width={40} height={40} mode='fit' />  
                                   <p>{x.name}</p> 
                      </div>
                        )
                    } </div>

                     <h4 className="chat-ok">others</h4>
                     <div className="ul-class2"> {
                        this.state.data3other.map(x => <div className="li-class2" key = {x.id}> 
                        <img src={x.icon} width={40} height={40} mode='fit' />  
                         <p>{x.name}</p> 
                      
            
                        
                           </div>


                        )
                    } </div>

                    </div> 
                    </div>

                );
            
             } else {
                
              if(this.state.others.length === 0){
                for (var i in this.state.items['cities']) {
                    if (this.state.items['cities'][i]['hd_enabled'] === true && this.state.items['cities'][i]['popular'] === true) {
                        this.state.data2.push(this.state.items['cities'][i])
                    }
                }
                for (var j in this.state.items['cities']) {
                    if (this.state.items['cities'][j]['one_way_enabled'] === true && this.state.items['cities'][i]['popular'] === true) {
                        this.state.data3.push(this.state.items['cities'][j])
                    }
                }
                for (var k in this.state.items['cities']) {
                    if (this.state.items['cities'][k]['popular'] === true) {
                        this.state.popular.push(this.state.items['cities'][k])
                    }
                }
                for (var m in this.state.items['cities']) {
                    if (this.state.items['cities'][m]['popular'] === false) {
                        this.state.others.push(this.state.items['cities'][m])
                    }
                }
                for (var d in this.state.items['cities']) {
                    if (this.state.items['cities'][i]['hd_enabled'] === true && this.state.items['cities'][i]['popular'] === false) {
                        this.state.data2other.push(this.state.items['cities'][d])
                    }
                }
                for (var f in this.state.items['cities']) {
                    if (this.state.items['cities'][j]['one_way_enabled'] === true && this.state.items['cities'][i]['popular'] === false) {
                        this.state.data3other.push(this.state.items['cities'][f])
                    }
                }
             

                return (

                    <div className = "App">
                    
                    <div className = "App-header">CITIES</div>
                  <div className ="button"> 
                  
                  HD ENABLED <input className="check" type="checkbox"  onChange={this.makeMEClick}/>
                   ONE WAY ENABLED    <input className="check" type="checkbox" onChange={this.onClearArray} />
                  
                   </div> 
               <div className ="main">        
               <h4 className="chat-ok">popular</h4>
                    <div className="ul-class"> {
                        this.state.popular.map(x => <div className="li-class" key = {x.id}> 
                        <img src={x.icon} width={40} height={40} mode='fit' />  
                                   <p>{x.name}</p> 
                      </div>
                        )
                    } </div>

                     <h4 className="chat-ok">others</h4>
                     <div className="ul-class2"> {
                        this.state.others.map(x => <div className="li-class2" key = {x.id}> 
                        <img src={x.icon} width={40} height={40} mode='fit' />  
                         <p>{x.name}</p> 
                      
            
                        
                           </div>


                        )
                    } </div>

                    </div>
                </div>    
                );
            }else{
                return (


                    <div className = "App">
                    
                    <div className = "App-header">CITIES</div>
                  <div className ="button">  
                  HD ENABLED <input className="check" type="checkbox"  onChange={this.makeMEClick}/>
                  ONE WAY ENABLED    <input className="check" type="checkbox" onChange={this.onClearArray} />
                 
                   </div> 
               <div className ="main">        
                   <h4 className="chat-ok">popular</h4>
                    <div className="ul-class"> {
                        this.state.popular.map(x => <div className="li-class" key = {x.id}> 
                        
                        <img src={x.icon} width={40} height={40} mode='fit' />  
                                   <p>{x.name}</p> 

                       
                           </div>


                        )
                    } </div>

                    <h4 className="chat-ok">others</h4>
                     <div className="ul-class2"> {
                        this.state.others.map(x => <div className="li-class2" key = {x.id}> 
                            <img src={x.icon} width={40} height={40} mode='fit' />  
                            <p>{x.name}</p> 
                    
         
                           </div>
                        )
                    } </div>

                    </div>
                </div>    
                );

            }   
            }
        } // end of first else
    } // end of render




}
export default App;