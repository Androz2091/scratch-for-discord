export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="=6\`ushn0ewC41R$-^dvJ">prefix</variable>
    <variable id="9p=y^o3Q9D#i[*\`~t8Qd">commandwithprefix</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
  </variables>
  <block type="s4d_login" id="{|lO_b-0fA9\`}/b6#m6T" x="0" y="0">
    <value name="TOKEN">
      <block type="text" id="T3=]\`vNu7E~Pv%]r^%YC">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_connected" id="HcFcs6Jw;M1hHa#=JL9n" x="0" y="104">
    <statement name="STATEMENTS">
      <block type="variables_set" id="GZDP:Red|*ajsbPV}guA">
        <field name="VAR" id="=6\`ushn0ewC41R$-^dvJ">prefix</field>
        <value name="VALUE">
          <block type="text" id="[iP}[(^%wkCP!|kzFvV/">
            <field name="TEXT">!</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_on_message" id="+Q@qA4DZ.)H0dU~:qJFA" x="0" y="280">
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
            <field name="VAR" id="9p=y^o3Q9D#i[*\`~t8Qd">commandwithprefix</field>
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
              <block type="controls_if" id="?0_$Y+BD1xxSa0KA1t.,">
                <value name="IF0">
                  <block type="s4d_starts_with" id="[DhMa1*^%sHH}OksH^ME">
                    <value name="STRING">
                      <shadow type="text" id="iMH.F@gOp=IV:%r$~sSK">
                        <field name="TEXT">abc</field>
                      </shadow>
                      <block type="variables_get" id=",-bX4=FVdN5l;kLY*Q3l">
                        <field name="VAR" id="9p=y^o3Q9D#i[*\`~t8Qd">commandwithprefix</field>
                      </block>
                    </value>
                    <value name="SUBSTRING">
                      <shadow type="text" id="xwE0]+?l@G3~],}}ymCg">
                        <field name="TEXT">a</field>
                      </shadow>
                      <block type="variables_get" id="VfKek(*Bv2_ut)Hi##?:">
                        <field name="VAR" id="=6\`ushn0ewC41R$-^dvJ">prefix</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="variables_set" id="2}t[rFyvtZ\`O=Qr%1$#0">
                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                    <value name="VALUE">
                      <block type="text_getSubstring" id="tk/+|mA*Z|4~B9|.CuKM">
                        <mutation at1="true" at2="false"></mutation>
                        <field name="WHERE1">FROM_START</field>
                        <field name="WHERE2">LAST</field>
                        <value name="STRING">
                          <block type="variables_get" id="h17=Uep1/B8X+$A*ozx3">
                            <field name="VAR" id="9p=y^o3Q9D#i[*\`~t8Qd">commandwithprefix</field>
                          </block>
                        </value>
                        <value name="AT1">
                          <block type="math_arithmetic" id="zMrmYg}ltkz~B:dd]rz}">
                            <field name="OP">ADD</field>
                            <value name="A">
                              <shadow type="math_number" id=":0-MoF^cB]edp7KvQD!F">
                                <field name="NUM">1</field>
                              </shadow>
                              <block type="text_length" id="B7Hoy-?0PwUN)uQz2-x$">
                                <value name="VALUE">
                                  <shadow type="text" id="EQ,{AN8:Pd9Xzc%y@@r*">
                                    <field name="TEXT">abc</field>
                                  </shadow>
                                  <block type="variables_get" id="Oh^urZbwt%S(?:4fRptd">
                                    <field name="VAR" id="=6\`ushn0ewC41R$-^dvJ">prefix</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <shadow type="math_number" id="g@Q2d^jm*|VId)}Yl^:C">
                                <field name="NUM">1</field>
                              </shadow>
                            </value>
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
                                <field name="TEXT">say</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="s4d_reply" id="-{l,tE6ZGFbL6\`Pn_@~#">
                            <value name="CONTENT">
                              <shadow type="text" id="aL1?|+/#9ra54-jg7_Gm">
                                <field name="TEXT">You have written the following content after !say:</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="s4d_reply" id=")aBPXtsn1JD-vhr:VEL-">
                                <value name="CONTENT">
                                  <shadow type="text" id="9FEK\`)XQ20Dm!SwfYg}5">
                                    <field name="TEXT">Salut!</field>
                                  </shadow>
                                  <block type="lists_split" id="dXoK}l3=r:Qu|E|[I_EZ">
                                    <mutation mode="JOIN"></mutation>
                                    <field name="MODE">JOIN</field>
                                    <value name="INPUT">
                                      <block type="variables_get" id=":}|4XGnUc}sJZ_qIWFFX">
                                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                      </block>
                                    </value>
                                    <value name="DELIM">
                                      <shadow type="text" id="R/4CiqYnjEYgTePNX7l=">
                                        <field name="TEXT"> </field>
                                      </shadow>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </next>
                          </block>
                        </statement>
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
</xml>
  `;