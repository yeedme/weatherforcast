import {
    Button,
    Input,
    Header,
    Aside,
    Container,
    Main,
    Dropdown,
    DropdownMenu,
    DropdownItem
  } from 'element-ui'
  
  const coms = [
    Button, 
    Input, 
    Header,
    Aside, 
    Container,
    Main,
    Dropdown,
    DropdownMenu,
    DropdownItem
  ]
  
  export default {
    install(Vue, options){
      coms.map(c => {
        Vue.component(c.name, c)
      })
      console.log(options);
      
    }
  }
