import React from "react";

import styled from 'styled-components';
import {Link} from "react-router-dom";

const Themeh2 = styled.p`
  color: #bddce6;
  margin: 0;
  padding: 0;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`;

const A = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

const App = () => {
    return (
        <div class="flex-container">
            <A href="/theme1">
                <button class="theme">
                    <Themeh2 className="mar"><span class="fz">#0</span> - HELLO WORLD! WELCOME TO ANFO! (READ THIS)</Themeh2>
                </button>
            </A>

            <A href="/theme2">
            <button class="theme">
                <Themeh2 className="mar"><span class="md">#1</span> - Hello! Now we are moderating this!</Themeh2>
            </button>
            </A>

                <A href="/theme3">
            <button class="theme">
                <Themeh2 className="mar">Thank you for FLEX!</Themeh2>
            </button>
                </A>

                    <A href="/theme4">
            <button class="theme">
                <Themeh2 className="mar">These frogs told me everything! </Themeh2>
            </button>
                    </A>

                        <A href="/theme5">
            <button className="theme">
                <Themeh2 className="mar">These frogs told me everything! </Themeh2>
            </button>
                        </A>

                            <A href="/theme6">
            <button className="theme">
                <Themeh2 className="mar">These frogs told me everything! </Themeh2>
            </button>
                            </A>

                                <A href="/theme7">
            <button className="theme">
                <Themeh2 className="mar">These frogs told me everything! </Themeh2>
            </button>
                                </A>

                                    <A href="/theme8">
            <button className="theme">
                <Themeh2 className="mar">These frogs told me everything! </Themeh2>
            </button>
                                    </A>
        </div>


    );
}

export default App;