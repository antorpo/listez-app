import React from 'react';
import SideMenu from './SideMenu';

export default {
  component: SideMenu,
  title: 'Components/Menu lateral',
}

export const Primary = () =>(
     <SideMenu> 
        <ul>
            <li>opcion 1</li>
            <li>opcion 2</li>
            <li>opcion 3</li>
        </ul>
    </SideMenu>
    );