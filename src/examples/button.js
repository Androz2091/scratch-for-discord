export default `<xml xmlns="https://developers.google.com/blockly/xml">
<variables>
  <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
  <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
</variables>
<block type="s4d_login" id="{|lO_b-0fA9\`}/b6#m6T" x="62" y="12">
  <value name="TOKEN">
    <block type="text" id="T3=]\`vNu7E~Pv%]r^%YC">
      <field name="TEXT">Your bot token</field>
    </block>
  </value>
</block>
<block type="s4d_on_message" id="+Q@qA4DZ.)H0dU~:qJFA" x="62" y="112">
  <statement name="STATEMENTS">
    <block type="variables_set" id="Fo+ksP#~73~o,EeQmq{u">
      <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
      <value name="VALUE">
        <block type="lists_split" id="1YzV9Eu2@GGwP5RREIIR">
          <mutation mode="SPLIT"></mutation>
          <field name="MODE">SPLIT</field>
          <value name="INPUT">
            <block type="s4d_message_content" id="E#m(;pB|W+d+AtJCc{5e"></block>
          </value>
          <value name="DELIM">
            <shadow type="text" id="Z.|mO+X9gt-/BR;jjMkI">
              <field name="TEXT"> </field>
            </shadow>
          </value>
        </block>
      </value>
      <next>
        <block type="variables_set" id="U^i0Ox!/+F6x[NrTqTpR">
          <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
          <value name="VALUE">
            <block type="lists_getIndex" id="9ul#e70.^\`!G^_~-BlK~">
              <mutation statement="false" at="true"></mutation>
              <field name="MODE">GET_REMOVE</field>
              <field name="WHERE">FROM_START</field>
              <value name="VALUE">
                <block type="variables_get" id="z-Mavm-5KXE/Y;G)]0%i">
                  <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                </block>
              </value>
              <value name="AT">
                <block type="math_number" id="n6Es1J;;TYupl;g]g)Eg">
                  <field name="NUM">1</field>
                </block>
              </value>
            </block>
          </value>
          <next>
            <block type="controls_if" id="3XA36VU);D_1N5vf9p(Z">
              <value name="IF0">
                <block type="logic_compare" id="1igBlMs)G_=BaFXSd3rc">
                  <field name="OP">EQ</field>
                  <value name="A">
                    <block type="variables_get" id="764~nc#(*|4bhyY/,K{h">
                      <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                    </block>
                  </value>
                  <value name="B">
                    <block type="text" id="[P2gt2r%QKJF3|~Q$E~+">
                      <field name="TEXT">!button</field>
                    </block>
                  </value>
                </block>
              </value>
              <statement name="DO0">
                <block type="s4d_send_button" id="C6N[E}e;5;$}?Vt\`CVGi">
                  <value name="CHANNEL">
                    <block type="s4d_message_channel" id="z4X^:Z/k}B!FY:\`er:y7"></block>
                  </value>
                  <value name="CONTENT">
                    <block type="text" id="[^$vbon!U1Cs{fDxB2xc">
                      <field name="TEXT">this is a message</field>
                    </block>
                  </value>
                  <value name="BUTTON">
                    <block type="s4d_message_block" id="6O20D%C#^Cyw$.FdopP}">
                      <mutation xmlns="http://www.w3.org/1999/xhtml" label="true" custom_id="true"></mutation>
                      <comment pinned="true" h="80" w="188">buttons cannot have space in id!</comment>
                      <value name="LABEL">
                        <block type="text" id="ok#VhTG-)Nkp,nmm2ABd">
                          <field name="TEXT">this is a button!</field>
                        </block>
                      </value>
                      <value name="CUSTOM_ID">
                        <block type="text" id="}?_OGuvGN/J9UacZ{$uh">
                          <field name="TEXT">this_is_the_button_id</field>
                        </block>
                      </value>
                    </block>
                  </value>
                  <next>
                    <block type="s4d_send_button" id="i6iDzIejrdCO2sGjVQ).">
                      <value name="CHANNEL">
                        <block type="s4d_message_channel" id=".HO8GOEAhXHc|!rVjxwI"></block>
                      </value>
                      <value name="CONTENT">
                        <block type="text" id="JrX~4JaYZ{\`2Jje(.+cz">
                          <field name="TEXT">this is a message</field>
                        </block>
                      </value>
                      <value name="BUTTON">
                        <block type="s4d_button_row" id="IZ9B/+kS.WHo59ys0T3z">
                          <comment pinned="true" h="80" w="160">this is how you use button row!</comment>
                          <statement name="BUTTONS">
                            <block type="s4d_message_row_block" id="W$//w,._2WV(/5lKoHBe">
                              <mutation xmlns="http://www.w3.org/1999/xhtml" label="true" custom_id="true"></mutation>
                              <value name="LABEL">
                                <block type="text" id="\`s1:8}s_EvlaIGbtF)Re">
                                  <field name="TEXT">this is a button!</field>
                                </block>
                              </value>
                              <value name="CUSTOM_ID">
                                <block type="text" id="C.4bmJsk:s1+/.m,yM@Z">
                                  <field name="TEXT">this_is_the_button_id</field>
                                </block>
                              </value>
                              <next>
                                <block type="s4d_message_row_block" id="._CES5bzEIVHr+O0[*0n">
                                  <mutation xmlns="http://www.w3.org/1999/xhtml" label="true" custom_id="true"></mutation>
                                  <value name="LABEL">
                                    <block type="text" id="n|HL%gnpJ3s6n,$ITj%!">
                                      <field name="TEXT">this is a button!</field>
                                    </block>
                                  </value>
                                  <value name="CUSTOM_ID">
                                    <block type="text" id="u_thQ=2;e,qcTNK-iyPA">
                                      <field name="TEXT">this_is_the_button_id</field>
                                    </block>
                                  </value>
                                </block>
                              </next>
                            </block>
                          </statement>
                        </block>
                      </value>
                    </block>
                  </next>
                </block>
              </statement>
            </block>
          </next>
        </block>
      </next>
    </block>
  </statement>
</block>
<block type="s4d_on_click" id="W_oym!aTfS$?|QDfaI.P" x="-516" y="332">
  <comment pinned="true" h="72" w="270">this is the event that get when the button was clicked</comment>
  <statement name="STATEMENTS">
    <block type="controls_if" id="{gT[%Nqi|m9pb1W^(;23">
      <value name="IF0">
        <block type="logic_compare" id="gBO:HYHk[-/{qi+/_6/e">
          <field name="OP">EQ</field>
          <comment pinned="true" h="77" w="423">seeing if the button id is the same as the button that i want to see if it was clicked</comment>
          <value name="A">
            <block type="s4d_button_click_id" id="#hlk=_ywLNnFA}trj[@$"></block>
          </value>
          <value name="B">
            <block type="text" id="F*aUWtiK{xsm,wVmxt[*">
              <field name="TEXT">this_is_the_button_id</field>
            </block>
          </value>
        </block>
      </value>
      <statement name="DO0">
        <block type="s4d_send_channel" id="sg2]e(!0_JB,Gp~2xRaP">
          <value name="CONTENT">
            <block type="text_join" id="]Wdv!6|aWPaYp%?7qYhc">
              <mutation items="3"></mutation>
              <comment pinned="true" h="87" w="385">pinging the member that has clicked the button</comment>
              <value name="ADD0">
                <block type="s4d_button_click_member" id="RRT#{)S-hNhlP(WM$}St"></block>
              </value>
              <value name="ADD1">
                <block type="s4d_newline" id="Vt^1^bN];wM=wS@XrK1\`"></block>
              </value>
              <value name="ADD2">
                <block type="text" id="U6dK07QqVe/Lr8c\`ZU$l">
                  <field name="TEXT">clicked the button!</field>
                </block>
              </value>
            </block>
          </value>
          <value name="CHANNEL">
            <block type="s4d_button_click_channel" id="|D6:?l?B8qB9)7;0?#5("></block>
          </value>
          <next>
            <block type="s4d_button_think" id="yA51X}^SDmnM,PoHB1\`-">
              <comment pinned="true" h="75" w="284">making the button think</comment>
              <value name="TRUEORFALSE">
                <block type="logic_boolean" id="1hiL~R{7_m9u)RLN{xP]">
                  <field name="BOOL">TRUE</field>
                </block>
              </value>
              <next>
                <block type="s4d_wait_seconds" id="!XX?_!L7el[j;%::wbjM">
                  <value name="TIME">
                    <shadow type="math_number" id="[9%n5$=$UggWVf1}nq^J">
                      <field name="NUM">4</field>
                    </shadow>
                  </value>
                  <next>
                    <block type="s4d_button_edit" id="%m7)nq4Lyoi0m5UuTuce">
                      <comment pinned="true" h="76.79998779296875" w="290.13336181640625">u need to use the think block first to use this block!</comment>
                      <value name="REPLY">
                        <block type="text" id="u5_l??l-cAacMN)X/t+7">
                          <field name="TEXT">ok you clicked</field>
                        </block>
                      </value>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </next>
        </block>
      </statement>
    </block>
  </statement>
</block>
</xml>
`;