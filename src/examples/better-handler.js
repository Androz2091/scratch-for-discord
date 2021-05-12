export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="K0^jd-$jg$=dzRu1m*Z.">prefix</variable>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
   <variable id="/x;AZt|\`Va:Hb020-{-I">commandwithprefix</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
  </variables>
  <block type="s4d_login" id="Img~hF9iVsFa/X%ttZYH" x="-759" y="-358">
    <value name="TOKEN">
      <block type="text" id="?~IW081_7$A25w.7disc">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_connected" id="GE#eeS_=aQ0Xnq@-zbTx" x="-708" y="-281">
    <statement name="STATEMENTS">
      <block type="variables_set" id="l=T7R!KSXb2/q2X?jh5X">
        <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
        <value name="VALUE">
          <block type="text" id="5J]FA(buP01Lz_*Tf^G]">
            <field name="TEXT">k!</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_on_message" id="+Q@qA4DZ.)H0dU~:qJFA" x="-711" y="-148">
    <statement name="STATEMENTS">
      <block type="controls_if" id="P@EUH)~gVEBH8I37Qsy?">
        <value name="IF0">
          <block type="logic_negate" id="c;n[?\`1XtWSD5O1CU;ub">
            <value name="BOOL">
              <block type="s4d_member_is_bot" id="YpeVf|k0L0Nna=7eMJSD">
                <value name="MEMBER">
                  <block type="s4d_message_author" id="oTwTfrH*4tgCt_g9e%xL"></block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
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
                <field name="VAR" id="/x;AZt|\`Va:Hb020-{-I">commandwithprefix</field>
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
                  <block type="controls_if" id="-7|3|KZj\`\`w]ghh@9K\`g">
                    <value name="IF0">
                      <block type="s4d_starts_with" id="MYf|s6^xDFq$Ghc+j5,:">
                        <value name="STRING">
                          <shadow type="text" id="O?E**UdTy)_W!5*RxgD)">
                            <field name="TEXT">abc</field>
                          </shadow>
                          <block type="variables_get" id=".+K+2yJ--xY!eALP6cQA">
                            <field name="VAR" id="/x;AZt|\`Va:Hb020-{-I">commandwithprefix</field>
                          </block>
                        </value>
                        <value name="SUBSTRING">
                          <shadow type="text" id="KlgZ6]Lo9?};g1D1+/aQ">
                            <field name="TEXT">a</field>
                          </shadow>
                          <block type="variables_get" id="5a(x=h~ph|ohG[ieo@3g">
                            <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="variables_set" id="[0oX4x:9+CQZ^T8_1!s{">
                        <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                        <value name="VALUE">
                          <block type="text_getSubstring" id="40)!yW4|wHfDP(1:hLQz">
                            <mutation at1="true" at2="false"></mutation>
                            <field name="WHERE1">FROM_START</field>
                            <field name="WHERE2">LAST</field>
                            <value name="STRING">
                              <block type="variables_get" id="1eH@3GJsHf:G=4KZIQ#1">
                                <field name="VAR" id="/x;AZt|\`Va:Hb020-{-I">commandwithprefix</field>
                              </block>
                            </value>
                            <value name="AT1">
                              <block type="math_arithmetic" id="ld#SbSor21_yhmBc3+nA">
                                <field name="OP">ADD</field>
                                <value name="A">
                                  <shadow type="math_number" id="oUcglqOjdE^jRH$wTN7g">
                                    <field name="NUM">1</field>
                                  </shadow>
                                  <block type="text_length" id=";8iz=wUgt^0*TSK;JVyY">
                                    <value name="VALUE">
                                      <shadow type="text">
                                        <field name="TEXT">abc</field>
                                      </shadow>
                                      <block type="variables_get" id="9;w$056?N{Oyp9|Fcs*0">
                                        <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <shadow type="math_number" id=";d-c?K#l2?O=t1U~W[;!">
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="controls_if" id="XO}3t*-s-x0a$bpU~_X]">
                            <value name="IF0">
                              <block type="logic_compare" id="X{nH,*4GYAhnEeXgtFXn">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id="qwD=mi-GiU-7VatO-~2S">
                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="y08UJ+H??]MC/V30+37O">
                                    <field name="TEXT">ping</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="s4d_reply" id="1j-H8TV18|1|2[OX7W7r">
                                <value name="CONTENT">
                                  <shadow type="text" id="@hipt/sKPMX-j+p{\`n4(">
                                    <field name="TEXT">pong!!</field>
                                  </shadow>
                                </value>
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
    </statement>
  </block>
</xml>
`;
