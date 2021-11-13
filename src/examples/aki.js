export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
    <variable id="jLn2@H/-B13h+%etNX$3">gamemode</variable>
  </variables>
  <block type="s4d_login" id="d.XFke3!*9jDEjUWg-un" x="0" y="0">
    <value name="TOKEN">
      <block type="text" id="MKj~~:mxzXKE7cs[)^\`h">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" id="7Np501-Q@xa/^bIp.FVj" x="0" y="104">
    <statement name="STATEMENTS">
      <block type="controls_if" id="UojS}1PP$3C\`|=L)!pk6">
        <value name="IF0">
          <block type="logic_negate" id="hd@a8:KcL)yG;)IUmAPP">
            <value name="BOOL">
              <block type="s4d_member_is_bot" id="2q$*UrS*me29d.AD;WW~">
                <value name="MEMBER">
                  <block type="s4d_message_author" id="mgqeiFm_z}~~TS21HKlY"></block>
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
                  <block type="controls_if" id="oN!BOn13LY}vK(/1~pkB">
                    <value name="IF0">
                      <block type="logic_compare" id="jP2W7=.VZ_Hf8dY(+5!$">
                        <field name="OP">EQ</field>
                        <value name="A">
                          <block type="variables_get" id="Z2gsiSxN|[65R@0iD^cq">
                            <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="text" id="|sc^)//}=h$R$,9P)Hiu">
                            <field name="TEXT">!akinator</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="variables_set" id="9i]z8M!a*d;s/G(%Q/,:">
                        <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                        <value name="VALUE">
                          <block type="lists_getIndex" id="|_s5N_o/L*9=_\`6-haD+">
                            <mutation statement="false" at="true"></mutation>
                            <field name="MODE">GET_REMOVE</field>
                            <field name="WHERE">FROM_START</field>
                            <value name="VALUE">
                              <block type="variables_get" id="^Wtc+~r#;R3z/|#eQKou">
                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                              </block>
                            </value>
                            <value name="AT">
                              <block type="math_number" id="_LJXt7~PF#o6k?K4Y*79">
                                <field name="NUM">1</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="controls_if" id="6|ijaF#9vRfeB=wgFa-{">
                            <mutation elseif="2" else="1"></mutation>
                            <value name="IF0">
                              <block type="logic_compare" id="+txV*i=r\`E?Q:\`-hP)mX">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id="\`kDMcbxD-38^K/NWzt8S">
                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="TkScfAC-Mp*(vYj!o0Vl">
                                    <field name="TEXT">c</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="variables_set" id="2e!=TxVx,6E{Jsh,zgU;">
                                <field name="VAR" id="jLn2@H/-B13h+%etNX$3">gamemode</field>
                                <value name="VALUE">
                                  <block type="text" id=".Xzh.E%dBVoNYMt0pj\`#">
                                    <field name="TEXT">character</field>
                                  </block>
                                </value>
                              </block>
                            </statement>
                            <value name="IF1">
                              <block type="logic_compare" id="}.Sw_,R7F~{LguX_2G|8">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id="E0)|+%d%UT0HZZ7qjXm9">
                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="_vc+F]2vG^Vi-CrL{V6/">
                                    <field name="TEXT">a</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO1">
                              <block type="variables_set" id="+9+HZr}9+)3W~x93Haz6">
                                <field name="VAR" id="jLn2@H/-B13h+%etNX$3">gamemode</field>
                                <value name="VALUE">
                                  <block type="text" id="r0cq3a23p[6u=G?[~+z!">
                                    <field name="TEXT">animal</field>
                                  </block>
                                </value>
                              </block>
                            </statement>
                            <value name="IF2">
                              <block type="logic_compare" id="+_d/Ro[aY=9zFSmuiQMG">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id=")WY,47/EJM:uFyVu?2zM">
                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="#L(C#VgFU0Vs2ecU8wtv">
                                    <field name="TEXT">o</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO2">
                              <block type="variables_set" id="5;AVipeBpCDovs2SMlVb">
                                <field name="VAR" id="jLn2@H/-B13h+%etNX$3">gamemode</field>
                                <value name="VALUE">
                                  <block type="text" id="{rbr(gDMjdINe,:\`wQTZ">
                                    <field name="TEXT">object</field>
                                  </block>
                                </value>
                              </block>
                            </statement>
                            <statement name="ELSE">
                              <block type="variables_set" id="oEFjs74$!_GhBi1FOuVV">
                                <field name="VAR" id="jLn2@H/-B13h+%etNX$3">gamemode</field>
                                <value name="VALUE">
                                  <block type="text" id="DlJOA@c6:$gzIk8C3_}l">
                                    <field name="TEXT">character</field>
                                  </block>
                                </value>
                              </block>
                            </statement>
                            <next>
                              <block type="Akinator" id=":Nss0zJlNy2}O@0R\`%,[">
                                <value name="MESSAGE">
                                  <block type="variables_get" id="o;J_-QRAz8el2:iYw@=[">
                                    <field name="VAR" id="jLn2@H/-B13h+%etNX$3">gamemode</field>
                                  </block>
                                </value>
                              </block>
                            </next>
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