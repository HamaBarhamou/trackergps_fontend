/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Barhamou <hamabarhamou@gmail.com>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/14 20:07:57 by Barhamou          #+#    #+#             */
/*   Updated: 2022/06/06 14:02:52 by Barhamou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import {useState,createContext} from 'react';
import Rapports from "./pages/Rapports";
import Clients from "./pages/Clients";
import Parametrage from "./pages/Parametrage";


export const UserContext = createContext();

function App() {

  const [userdata,setUserdata] = useState({"userName":""})
  const [datasetting,setDatasetting] = useState({})
  const proxy = "https://sheltered-depths-77817.herokuapp.com/"

  const updateData = (data) =>{
    setUserdata(data)
  }

  const updatedatasetting = (data) =>{
    setDatasetting(data)
  }

  return (
    <UserContext.Provider value={{userdata,updateData,proxy,datasetting,updatedatasetting}}>   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion/>} />
          <Route path= "/about" element={<About />} />
          <Route path= "/home" element={<Home />} /> 
          <Route path= "/trackergps_fontend" element={<Connexion />} /> 
          <Route path= "/rapport" element={<Rapports/>} />
          <Route path= "/clients" element={<Clients/>} />
          <Route path= "/parametrage" element={<Parametrage/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
