import React from 'react'
import styled from 'styled-components'

import { HashLink as Link } from 'react-router-hash-link';

export default function () {

    const items = [1, 2, 3]

    return <Sidebar>
        <nav className="bg-light">
            <ul>
                {items.map(e => <li key={`link-id-${e}`}>
                    <Link className="sidebar-item" to={`#atividade-${e}`}>Atividade {e}</Link>
                </li>)}
            </ul>
        </nav>
    </Sidebar>
}

const Sidebar = styled.div `
    min-width:100px;
    height:90%;
    position:fixed;
    display:inline-block;
    list-style:none;
    

    /* border:solid 1px red; */

    a{
        min-width:150px;
        text-decoration:none;
        color:gray;
        font-weight:bold;
        text-align:center;
    
        &:hover{
            color:#343a40;
        }
    }

    ul{
        width:100%;
        li{

            width:100%;
            display:block;
            padding:2px 4px;
        }
    }

    .sidebar-item{
        position:relative;
        display:block;
        border:solid 1px blue;
    }
`