import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center'    
  },
    img:{
    width:100,
    height:100,    
  },
  title:{
    fontSize:50,
    color:'#132743',
    fontWeight:'bold'
  },
  bloco1:{
    height:150,
    width:150,
    borderRadius:2,
    borderWidth:2,
    borderColor:'#132743',  
    margin:10  
  },
  card:{
    justifyContent:'space-around',
    flexDirection:'row',    
  },
  play:{
    backgroundColor:'#ff6187',
    height:50,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'#132743',
  },
  res:{    
    height:50,
    textAlign:'center',    
    fontSize:30,
    fontWeight:'bold',    
  },
  cont:{
    backgroundColor:'#132743',
    flexDirection:'row',
    justifyContent:'space-around',
    height:46
  },
  btn:{
    height:46,
    width:60
  },
  btnText:{
    fontSize:30,
    color:'#fff',
    textAlign:'center'   
  },
  btnTextm:{
    fontSize:50,
    color:'#fff',
    textAlign:'center',
    marginTop:-15    
  },
  zerar:{
    width:"60%",
    height:40,
    backgroundColor:'#ff6187',
    borderRadius:4,
    justifyContent:'center',   
    margin:5,    
  },
  btnzerar:{
    color:'#132743',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
  },
  sobre:{
    fontSize:20,
    fontWeight:'bold',
    color:'#132743',
    padding:50
  },
  dicas:{
    marginTop:20,
    color:'#132743',
    fontSize:20,
    fontWeight:'bold'
  },
  subDi:{
    marginTop:5,
    color:'#132743',
    fontWeight:'bold'

  },
    
    
       
  
});

export default styles;