import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.css';
import "./styles.scss";

import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
<Router>
    <App />
</Router>, rootElement);
