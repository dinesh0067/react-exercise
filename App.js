import React, { Component } from 'react';
import './App.css';
import Child, { data } from './Child';
import Parent from './Parent';
import { syncBuiltinESMExports } from 'module';
import FunctionaParent from "./FunctionaParent";
import Employees from "./Employees";
import EmployeesWithHooks from './EmployeesWithHooks';
import ShoppingCart from './ShoppingCart';
import Cart from './Cart';
import Counter from './Counter';
import { ShoppingCartProvider } from "./ShoppingCartContext";
const App = ()=> {  
    return (
      <ShoppingCartProvider>
      <div className="container">
        <div className="row">
           <ShoppingCart />
           <Counter />
           <Cart />
        </div>
      </div>
    </ShoppingCartProvider>


      // <div className="container">
      //   <div className="row">
      //     {/* <Employees /> */}
      //     {/* <EmployeesWithHooks></EmployeesWithHooks> */}
      //     <ShoppingCart></ShoppingCart>
      //   </div>
      // </div>
    );
 }


export default App;
