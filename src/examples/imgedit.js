export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
  </variables>
  <block type="s4d_login" id="{|lO_b-0fA9\`}/b6#m6T" x="506" y="299">
    <value name="TOKEN">
      <block type="text" id="T3=]\`vNu7E~Pv%]r^%YC">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" id="%y2hl-7n+fW+.4AK+_oZ" x="510" y="418">
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
              <block type="controls_if" id="-!_-{af[DloC,B1lnLdN">
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
                        <field name="TEXT">!grayimage</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="jg_beginJimp" id="(J!,ST3JDk?za)[}SpAI">
                    <value name="JimpURL">
                      <block type="lists_getIndex" id="8.sCn](8RbT[Ks^QwJ[Q">
                        <mutation statement="false" at="true"></mutation>
                        <field name="MODE">GET</field>
                        <field name="WHERE">FROM_START</field>
                        <value name="VALUE">
                          <block type="variables_get" id="9L|LkvS=CBHdTqNbhdnM">
                            <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                          </block>
                        </value>
                        <value name="AT">
                          <block type="math_number" id="pPpGQ12k_+(5WM)JhV]F">
                            <field name="NUM">1</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="beginJimp">
                      <block type="jg_jimp_grayscale" id="DC8B-+~tL@%l-?+lQazf">
                        <next>
                          <block type="jg_saveJimpageAs" id="yWmFy)nl{LA7\`q4/7c;H">
                            <value name="CONTENT">
                              <block type="text" id="p7{qXH^n]X#_ED}EOM{[">
                                <field name="TEXT">gray.png</field>
                              </block>
                            </value>
                            <next>
                              <block type="jg_sendImage" id="wQ?ATIHveVZu%n9KwL/:">
                                <value name="NAME">
                                  <block type="text" id="EQFMV2Bw-oViPQme{SsC">
                                    <field name="TEXT">./gray.png</field>
                                  </block>
                                </value>
                                <value name="CHANNEL">
                                  <block type="s4d_message_channel" id="]ZwbOhQP{j!5nO{4,H8f"></block>
                                </value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
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
