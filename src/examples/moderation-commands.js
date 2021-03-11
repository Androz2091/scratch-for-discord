export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="K0^jd-$jg$=dzRu1m*Z.">prefix</variable>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="/x;AZt|\`Va:Hb020-{-I">commandwithprefix</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
    <variable id="CMw~@jaj4]7FFFkZNniO">warn</variable>
  </variables>
  <block type="s4d_login" id="VP]|ENX\`|v{qwa@_Z,R7" x="1065" y="-473">
    <value name="TOKEN">
      <block type="text" id="i!RRDHv37[zo?rTXhw$r">
        <field name="TEXT">your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" id="-#L^xOPVXdo.6[7N{zkK" x="1190" y="-279">
    <statement name="STATEMENTS">
      <block type="controls_if" id="f%B;lWKiyQM1wK~Q$,6e">
        <value name="IF0">
          <block type="logic_negate" id="B6/_a!a$~A|BX{)@\`!6.">
            <value name="BOOL">
              <block type="s4d_member_is_bot" id="j-,c{C=NErtj8sg\`5y\`$">
                <value name="MEMBER">
                  <block type="s4d_message_author" id="sJ?!bz]~bWL1hUE~BxK!"></block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="variables_set" id="~*,T}#xfnn*4cn6~cV!G">
            <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
            <value name="VALUE">
              <block type="lists_split" id="{gJvO}rGmmH=9%JIaWFs">
                <mutation mode="SPLIT"></mutation>
                <field name="MODE">SPLIT</field>
                <value name="INPUT">
                  <block type="s4d_message_content" id="+%.*z89^Krhm_M1FgTTb"></block>
                </value>
                <value name="DELIM">
                  <shadow type="text" id="b=3f*TX5,RNEE|+k7;Uc">
                    <field name="TEXT"> </field>
                  </shadow>
                </value>
              </block>
            </value>
            <next>
              <block type="variables_set" id="q{upkw3wQU-sLZmp,6pt">
                <field name="VAR" id="/x;AZt|\`Va:Hb020-{-I">commandwithprefix</field>
                <value name="VALUE">
                  <block type="lists_getIndex" id="v7yC2y*(AYo+2e4[3Tl[">
                    <mutation statement="false" at="true"></mutation>
                    <field name="MODE">GET_REMOVE</field>
                    <field name="WHERE">FROM_START</field>
                    <value name="VALUE">
                      <block type="variables_get" id="F1.Q)82PQM~]*!^4IWqq">
                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                      </block>
                    </value>
                    <value name="AT">
                      <block type="math_number" id="33?2;Ae~4-A(P^qkYPvw">
                        <field name="NUM">1</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="controls_if" id="]p[Yk!mbQ.qy4JW$9nAb">
                    <value name="IF0">
                      <block type="s4d_starts_with" id="1+h_vY]O4~NK=FQCrYu+">
                        <value name="STRING">
                          <shadow type="text" id="O?E**UdTy)_W!5*RxgD)">
                            <field name="TEXT">abc</field>
                          </shadow>
                          <block type="variables_get" id="R#yU.jXyL5Y5;2vKX,0@">
                            <field name="VAR" id="/x;AZt|\`Va:Hb020-{-I">commandwithprefix</field>
                          </block>
                        </value>
                        <value name="SUBSTRING">
                          <shadow type="text" id="KlgZ6]Lo9?};g1D1+/aQ">
                            <field name="TEXT">a</field>
                          </shadow>
                          <block type="variables_get" id="T]\`7A4M,bAX(9[ndZ0gi">
                            <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="variables_set" id="w\`t/54w-ur]~.p|M^lF7">
                        <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                        <value name="VALUE">
                          <block type="text_getSubstring" id="hgD0SZyuT}2-8@C\`re%Q">
                            <mutation at1="true" at2="false"></mutation>
                            <field name="WHERE1">FROM_START</field>
                            <field name="WHERE2">LAST</field>
                            <value name="STRING">
                              <block type="variables_get" id="TDu5}u$cr*)m5H;pw5Fl">
                                <field name="VAR" id="/x;AZt|\`Va:Hb020-{-I">commandwithprefix</field>
                              </block>
                            </value>
                            <value name="AT1">
                              <block type="math_arithmetic" id="^x6#cXPmdx{FH4G#Wc*U">
                                <field name="OP">ADD</field>
                                <value name="A">
                                  <shadow type="math_number" id="oUcglqOjdE^jRH$wTN7g">
                                    <field name="NUM">1</field>
                                  </shadow>
                                  <block type="text_length" id="^{J/e,~\`zK49eGEzKUtI">
                                    <value name="VALUE">
                                      <shadow type="text">
                                        <field name="TEXT">abc</field>
                                      </shadow>
                                      <block type="variables_get" id="T^Q]2^Lh|9{uNh(K3C@x">
                                        <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <shadow type="math_number" id="_D^,Bc;3V.3}cmiao~Gi">
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="controls_if" id="U=FPg{}%WtFudVCR1$/|">
                            <mutation elseif="1"></mutation>
                            <value name="IF0">
                              <block type="logic_compare" id="YFOT0py[V5352]X5#@%w">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id="I.}1|W*-Z9;/!gw{M${u">
                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="Gh[hk5-JR)++G*z7!]pV">
                                    <field name="TEXT">kick</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="controls_if" id="o]te~B,h}P/!3ShhKr:r">
                                <mutation else="1"></mutation>
                                <value name="IF0">
                                  <block type="s4d_member_has_permission" id="LifDj~*WumHnEJN$(c-/">
                                    <field name="PERMISSION">KICK_MEMBERS</field>
                                    <value name="MEMBER">
                                      <block type="s4d_message_author" id="AdB],Y|1p^zGK0Wd|TW~"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="controls_if" id=")1s3k9D]/a=_KA(+mV!F">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="logic_compare" id="|cn7W4csbW:BlclDow=8">
                                        <field name="OP">NEQ</field>
                                        <value name="A">
                                          <block type="s4d_mentioned_member" id="G[!#W*shuzu:8(y0^yxd"></block>
                                        </value>
                                        <value name="B">
                                          <block type="logic_null" id="{X387n9l6#hJcK1z7#5N"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="controls_if" id=";t-*_$oud]p9I%dA$79@">
                                        <mutation else="1"></mutation>
                                        <value name="IF0">
                                          <block type="s4d_member_has_permission" id="NJIl8.3pr?Ahg;6J!QPT">
                                            <field name="PERMISSION">KICK_MEMBERS</field>
                                            <value name="MEMBER">
                                              <block type="s4d_mentioned_member" id="jl8k.:v.P5oeeDGUqJ9S"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_reply" id="bZvE6)~Pq|{t:zfh~_:|">
                                            <value name="CONTENT">
                                              <shadow type="text" id="HHUXV[fzex)hP@l^1f:u">
                                                <field name="TEXT">you cannot kick staffs!</field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </statement>
                                        <statement name="ELSE">
                                          <block type="lists_getIndex" id="=PvRSEFXsu(-ttmUTs#d">
                                            <mutation statement="true" at="true"></mutation>
                                            <field name="MODE">REMOVE</field>
                                            <field name="WHERE">FROM_START</field>
                                            <value name="VALUE">
                                              <block type="variables_get" id="T]vp*v{^V\`^9:KGiSLZw">
                                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                              </block>
                                            </value>
                                            <value name="AT">
                                              <block type="math_number" id="3~Z.W8H:/,$^(1BEAPq0">
                                                <field name="NUM">1</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="controls_if" id="SWn}9|9~zz/K:v_shP1.">
                                                <mutation else="1"></mutation>
                                                <value name="IF0">
                                                  <block type="lists_getIndex" id="vTZ_BlhC,Z})6jiAe*\`0">
                                                    <mutation statement="false" at="true"></mutation>
                                                    <field name="MODE">GET</field>
                                                    <field name="WHERE">FROM_START</field>
                                                    <value name="VALUE">
                                                      <block type="variables_get" id="b80TPAEmN3Y4+#nXnF4D">
                                                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                      </block>
                                                    </value>
                                                    <value name="AT">
                                                      <block type="math_number" id="~]-%2TsMhIe+P{qrwKvd">
                                                        <field name="NUM">1</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="s4d_send_member" id="?#)]pMD]Gf]ANj+VoS_e">
                                                    <value name="CONTENT">
                                                      <block type="text_join" id="w,y?iy-gQd37.ga)_+3C">
                                                        <mutation items="8"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text" id="U){gKmP5e[;3HD[Y;~}8">
                                                            <field name="TEXT">you were kicked from the server </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_server_name" id="VN.$W]VJ-Ph!3Jg.Sc.8">
                                                            <value name="SERVER">
                                                              <block type="s4d_message_guild" id="f9/OZQjKbgWJk+/1rqb)"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="s4d_newline" id="\`uJ4dQfnE^#Ww;UorMHq"></block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="text" id="dB$;|RJ_fc(,C0_.K-|U">
                                                            <field name="TEXT">author: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD4">
                                                          <block type="s4d_member_tag" id="g\`B1(3Ti1iFS4Da}Xtv6">
                                                            <value name="MEMBER">
                                                              <block type="s4d_message_author" id="/^Op;4toGBnzT@H48Sxm"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD5">
                                                          <block type="s4d_newline" id="^NzXUA2M_c-_83;y)xyv"></block>
                                                        </value>
                                                        <value name="ADD6">
                                                          <block type="text" id="xB[ArlsjRpPNic(1\`Il.">
                                                            <field name="TEXT">reason: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD7">
                                                          <block type="lists_split" id="UN@FpjUDrBq@b~fWrmDo">
                                                            <mutation mode="JOIN"></mutation>
                                                            <field name="MODE">JOIN</field>
                                                            <value name="INPUT">
                                                              <block type="variables_get" id=":I@Q[-{P4-D~[NaXDa$Y">
                                                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                              </block>
                                                            </value>
                                                            <value name="DELIM">
                                                              <shadow type="text" id="(\`|exPEEs[FI57TzZ@3b">
                                                                <field name="TEXT"> </field>
                                                              </shadow>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="MEMBER">
                                                      <block type="s4d_mentioned_member" id="8^aB~NrrZG+eP841?cp_"></block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_kick_member" id="IBoH/-Cm;Hjwo*;GRaxY">
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id=",$_fwJ^q;\`CpV3(+d|3P"></block>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <statement name="ELSE">
                                                  <block type="s4d_send_member" id="];IKu=+lTg8L82t=Dp2+">
                                                    <value name="CONTENT">
                                                      <block type="text_join" id="7B[]T0.I=X#8u.$z)^$x">
                                                        <mutation items="8"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text" id="FdSuHflao,_doZ7o^b-h">
                                                            <field name="TEXT">you were kicked from the server </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_server_name" id="hKN9cwqSg%Rt@Xa*DVf/">
                                                            <value name="SERVER">
                                                              <block type="s4d_message_guild" id="z{gGHxq+9~KU8iGBn{Ln"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="s4d_newline" id="F)b9U(xz[-t?;xlnWy${"></block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="text" id=";jzS9ikoh}_piHw{~p44">
                                                            <field name="TEXT">author: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD4">
                                                          <block type="s4d_member_tag" id=")TJVX|XSoRWN.j#r{LF@">
                                                            <value name="MEMBER">
                                                              <block type="s4d_message_author" id="t_I-;?_wu1aJ!##xY?AY"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD5">
                                                          <block type="s4d_newline" id="w[2N!P[gwZsvTb*,Hq=c"></block>
                                                        </value>
                                                        <value name="ADD6">
                                                          <block type="text" id="jR4WU=nOGQ;@s2bF{MfU">
                                                            <field name="TEXT">reason: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD7">
                                                          <block type="text" id=".*|KCm3ze[cNhytrF1J*">
                                                            <field name="TEXT">not defined</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="MEMBER">
                                                      <block type="s4d_mentioned_member" id="QF|i@Z.c.90z#D0!NY!O"></block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_kick_member" id="J87of.tubG.e^^;3_[(;">
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id="#gb;qpZwonF)9)F]~RG7"></block>
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
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply" id="SDK@6rfpogOX+I1;Pq?m">
                                        <value name="CONTENT">
                                          <shadow type="text" id="jmgy(\`ws}DX}]O*M#Qdc">
                                            <field name="TEXT">you need to mention a member to kick him!</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                                <statement name="ELSE">
                                  <block type="s4d_reply" id="TQ9vT8WcbLcXeRnrZ]ga">
                                    <value name="CONTENT">
                                      <shadow type="text" id="RJjyiLf]q!$8#n,L4UKd">
                                        <field name="TEXT">you need kick members permissions to kick a member!</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <value name="IF1">
                              <block type="logic_compare" id="Nb3bF^gteWheD@o+VW=s">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id="#*80dq]_/d/@))_w)Qtk">
                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="S?$yPbVJW+.e0-xx~??,">
                                    <field name="TEXT">ban</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO1">
                              <block type="controls_if" id="%i7k^2{?s]VbFOEL3x^R">
                                <mutation else="1"></mutation>
                                <value name="IF0">
                                  <block type="s4d_member_has_permission" id="s9X\`#nmsK0C_.Wmh/%Q|">
                                    <field name="PERMISSION">BAN_MEMBERS</field>
                                    <value name="MEMBER">
                                      <block type="s4d_message_author" id="]*pL$el@K}u\`oamb4C\`\`"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="controls_if" id="BI.SFlg%=^0e/4y[jCr[">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="logic_compare" id="Zv@nc/piz$;Gx6N.yWB0">
                                        <field name="OP">NEQ</field>
                                        <value name="A">
                                          <block type="s4d_mentioned_member" id="T+6Zqv/i-QIEo*@yqUXp"></block>
                                        </value>
                                        <value name="B">
                                          <block type="logic_null" id="\`\`_2SXi4|AbI]ppdj~Vq"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="controls_if" id="lgD)[1Lr*PmL(c$7e:~%">
                                        <mutation else="1"></mutation>
                                        <value name="IF0">
                                          <block type="s4d_member_has_permission" id="~t0[9#%nBCH3d1p2^N?@">
                                            <field name="PERMISSION">BAN_MEMBERS</field>
                                            <value name="MEMBER">
                                              <block type="s4d_mentioned_member" id="W8:C=C\`^O1jRukj{gaVT"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_reply" id="BkrhzJq*ZAo.n{)v%_Gn">
                                            <value name="CONTENT">
                                              <shadow type="text" id="0yu~?Ss~E:^4VZp9iBz]">
                                                <field name="TEXT">you cannot ban staffs!</field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </statement>
                                        <statement name="ELSE">
                                          <block type="lists_getIndex" id="GG;rx{c!uHg0gM(7;|W3">
                                            <mutation statement="true" at="true"></mutation>
                                            <field name="MODE">REMOVE</field>
                                            <field name="WHERE">FROM_START</field>
                                            <value name="VALUE">
                                              <block type="variables_get" id=";K|)h3y?:mR(Db.:;3;a">
                                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                              </block>
                                            </value>
                                            <value name="AT">
                                              <block type="math_number" id="ksxl2uw29z5fUmk5[Gn/">
                                                <field name="NUM">1</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="controls_if" id=")}+*B=WzCQ@o3r[}[*ab">
                                                <mutation else="1"></mutation>
                                                <value name="IF0">
                                                  <block type="lists_getIndex" id="Z6/0p\`E!v%xEAJMIAt!X">
                                                    <mutation statement="false" at="true"></mutation>
                                                    <field name="MODE">GET</field>
                                                    <field name="WHERE">FROM_START</field>
                                                    <value name="VALUE">
                                                      <block type="variables_get" id="Z62V+;GLlFqA7Vc5[Weu">
                                                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                      </block>
                                                    </value>
                                                    <value name="AT">
                                                      <block type="math_number" id="Y:bB6v4-($;zS\`mI!957">
                                                        <field name="NUM">1</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="s4d_send_member" id="O30a9$#ovabHrZr}E]P=">
                                                    <value name="CONTENT">
                                                      <block type="text_join" id="@djoNUJiY_Cf.I)Ymcf^">
                                                        <mutation items="8"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text" id="\`~~(v]}X5[BXpdd)6Esh">
                                                            <field name="TEXT">you were banned from the server </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_server_name" id="[Ahmt;_jqnkXx(+:eR{u">
                                                            <value name="SERVER">
                                                              <block type="s4d_message_guild" id="pz+umOQe7bu}T6Zv!V9^"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="s4d_newline" id="g*qwI]kvnpk=dI^!fV~%"></block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="text" id="oUp^:D0KRXPHy];sW;it">
                                                            <field name="TEXT">author: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD4">
                                                          <block type="s4d_member_tag" id=",[4oSQ:]pa0MD\`CfZT#K">
                                                            <value name="MEMBER">
                                                              <block type="s4d_message_author" id="3~{iOH{%QDO1CzJksR(U"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD5">
                                                          <block type="s4d_newline" id="!BQzAq/yiiziipHoo!!l"></block>
                                                        </value>
                                                        <value name="ADD6">
                                                          <block type="text" id=".*CT05wycE[|W4~jpHpZ">
                                                            <field name="TEXT">reason: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD7">
                                                          <block type="lists_split" id="tM9kHtAcPrrE0uHE8zs=">
                                                            <mutation mode="JOIN"></mutation>
                                                            <field name="MODE">JOIN</field>
                                                            <value name="INPUT">
                                                              <block type="variables_get" id="t5Z|+nwt\`r*h(k{$Xu7%">
                                                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                              </block>
                                                            </value>
                                                            <value name="DELIM">
                                                              <shadow type="text" id="*(zE2c5R)9OZy=d+Sx}I">
                                                                <field name="TEXT"> </field>
                                                              </shadow>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="MEMBER">
                                                      <block type="s4d_mentioned_member" id="8:y1)kG?JZo-^YAM^XSz"></block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_ban_member" id="5(zHTZr-Z7AmO~ZNj!u4">
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id="C-a%;a*^):0VDXqrf76\`"></block>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <statement name="ELSE">
                                                  <block type="s4d_send_member" id="xOC@R3s@*HP9~^2i+v-2">
                                                    <value name="CONTENT">
                                                      <block type="text_join" id="9@pqYuXb~(I!hTVP$Yu9">
                                                        <mutation items="8"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text" id="=z-Eb4hAzgH(sdo2s)|K">
                                                            <field name="TEXT">you were banned from the server </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_server_name" id="fn/EcIKc(XbK{u]xV4u_">
                                                            <value name="SERVER">
                                                              <block type="s4d_message_guild" id="IU8{;t!Uw\`RUR!kN}]il"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="s4d_newline" id="8%=(PXw3+/5~i$dYK3T}"></block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="text" id="Eo9}Ax~YXs_kQu??s~=X">
                                                            <field name="TEXT">author: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD4">
                                                          <block type="s4d_member_tag" id="K1j8X.ls,YQhGK~/qj?@">
                                                            <value name="MEMBER">
                                                              <block type="s4d_message_author" id="%/78.}7Gj}TMOkX^g]ay"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD5">
                                                          <block type="s4d_newline" id="vQ8VV{AQv:(Xw)R^E6i}"></block>
                                                        </value>
                                                        <value name="ADD6">
                                                          <block type="text" id="+^o%;l43USbg},33hLD#">
                                                            <field name="TEXT">reason: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD7">
                                                          <block type="text" id="^K7*QzP4HaeP4+*VfCo;">
                                                            <field name="TEXT">not defined</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="MEMBER">
                                                      <block type="s4d_mentioned_member" id="8*v*eomw=?d%NN0XUrE\`"></block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_ban_member" id="#{xV]gX{L,~mElHqqcJW">
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id="Lo*O?iAdwq3OViQm\`,a0"></block>
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
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply" id="hHA@.26g)dY5V^KFU6si">
                                        <value name="CONTENT">
                                          <shadow type="text" id="%di[n^[wl]tZyCrTwouq">
                                            <field name="TEXT">you need to mention a member to ban him!</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                                <statement name="ELSE">
                                  <block type="s4d_reply" id="^8#=XxWVx%$me|KH$aSz">
                                    <value name="CONTENT">
                                      <shadow type="text" id="pwP7uCJ{~n\`p^G*!bba#">
                                        <field name="TEXT">you need to have ban members permissions to ban a member!</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if" id="4y]%IKjK(AB^1/5zWcTu">
                                <mutation elseif="1"></mutation>
                                <value name="IF0">
                                  <block type="logic_compare" id="2DONoPvcqJYvcT.y|jd[">
                                    <field name="OP">EQ</field>
                                    <value name="A">
                                      <block type="variables_get" id="xdd0{9$tHCq2X!Fo6Q.N">
                                        <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="text" id="*mMJ_Ad5NuLm9?B2bPUy">
                                        <field name="TEXT">warn</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="controls_if" id="0z?cFlX_F,kU.{%ry:!C">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="s4d_member_has_permission" id="uge.00|=*CiRC?mrM)W\`">
                                        <field name="PERMISSION">KICK_MEMBERS</field>
                                        <value name="MEMBER">
                                          <block type="s4d_message_author" id="yI@LME3~f3vuK3#hSPG+"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="controls_if" id="O=fAv#$qv;;29?|-Olgr">
                                        <mutation else="1"></mutation>
                                        <value name="IF0">
                                          <block type="logic_compare" id="nvVDa:66E3J3GO.Y[~Rt">
                                            <field name="OP">NEQ</field>
                                            <value name="A">
                                              <block type="s4d_mentioned_member" id="]wtUQ4YrtR3CNoR@NEsF"></block>
                                            </value>
                                            <value name="B">
                                              <block type="logic_null" id="uWI]v\`j#^4R{,vj!tlTj"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="lists_getIndex" id="(\`VOv!W]x0yus8T-#64=">
                                            <mutation statement="true" at="true"></mutation>
                                            <field name="MODE">REMOVE</field>
                                            <field name="WHERE">FROM_START</field>
                                            <value name="VALUE">
                                              <block type="variables_get" id="mZMj9Lq-frmQYU+D3SYM">
                                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                              </block>
                                            </value>
                                            <value name="AT">
                                              <block type="math_number" id="tTa48x/T63q(#MrPA:sy">
                                                <field name="NUM">1</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="controls_if" id="Z-bIq~4I,:9*k:Zb6|c~">
                                                <mutation else="1"></mutation>
                                                <value name="IF0">
                                                  <block type="logic_compare" id="?#(_Cnl{o=u||NVh!qDd">
                                                    <field name="OP">NEQ</field>
                                                    <value name="A">
                                                      <block type="s4d_get_data" id="8\`m6iT]dG^[$X!m,mqLH">
                                                        <value name="KEY">
                                                          <shadow type="text" id="CEad_4aEd5]j2FEg*Z}j">
                                                            <field name="TEXT">hello</field>
                                                          </shadow>
                                                          <block type="text_join" id="6\`R*/Lze\`ptPcDxA8cO:">
                                                            <mutation items="3"></mutation>
                                                            <value name="ADD0">
                                                              <block type="s4d_member_id" id="w^}QLdk2.M3p/Dm(?]bQ">
                                                                <value name="MEMBER">
                                                                  <block type="s4d_mentioned_member" id="VU._4|Nsr.gaz~BGq8-w"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_message_guild_raw" id="J4n)5Hq=qVC5t{j3S+2u">
                                                                <field name="SEARCH_TYPE">ID</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD2">
                                                              <block type="text" id="ka2tC/\`:XRj/Whc.n%|W">
                                                                <field name="TEXT">warns</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="logic_null" id="lxo,q2fv%j{FyGw0M+wS"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="controls_if" id="E64VN:mBJaR*,Q,6_Mv?">
                                                    <mutation else="1"></mutation>
                                                    <value name="IF0">
                                                      <block type="lists_getIndex" id="}yKe)m7dok?qAFl6[f6G">
                                                        <mutation statement="false" at="true"></mutation>
                                                        <field name="MODE">GET</field>
                                                        <field name="WHERE">FROM_START</field>
                                                        <value name="VALUE">
                                                          <block type="variables_get" id="!JBBDq7q,*!5UOECZ)GB">
                                                            <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                          </block>
                                                        </value>
                                                        <value name="AT">
                                                          <block type="math_number" id=")5omI(jWgbr6$Uw4W3Pi">
                                                            <field name="NUM">1</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="variables_set" id="1vVj!T#+Sxj4eclN{^N-">
                                                        <field name="VAR" id="CMw~@jaj4]7FFFkZNniO">warn</field>
                                                        <value name="VALUE">
                                                          <block type="lists_create_with" id="0Eea$-7jZ_F@\`\`oB3T;@">
                                                            <mutation items="2"></mutation>
                                                            <value name="ADD0">
                                                              <block type="s4d_get_data" id="xlwB,^}gJ85oQ.dVsPB%">
                                                                <value name="KEY">
                                                                  <shadow type="text">
                                                                    <field name="TEXT">hello</field>
                                                                  </shadow>
                                                                  <block type="text_join" id="!k!\`^$#Ypq5u}=DaUr]s">
                                                                    <mutation items="3"></mutation>
                                                                    <value name="ADD0">
                                                                      <block type="s4d_member_id" id="Yq0bHnZIo=J0PCl^!3F9">
                                                                        <value name="MEMBER">
                                                                          <block type="s4d_mentioned_member" id="lDzN(M-Q-:un6\`qy\`K~]"></block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                    <value name="ADD1">
                                                                      <block type="s4d_message_guild_raw" id="cm%w[;Ts.!LbvAfu#vtp">
                                                                        <field name="SEARCH_TYPE">ID</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="ADD2">
                                                                      <block type="text" id="IJH}cqPRmP6U[?Qj{Msw">
                                                                        <field name="TEXT">warns</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="text_join" id="Cm]oy+{2jR.Bpt9j^Ppm">
                                                                <mutation items="6"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text" id="}T$2z*bm7WGY])ng6\`O:">
                                                                    <field name="TEXT">reason: </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="lists_split" id="=aM0|}g3t7j8e[UDxp0u">
                                                                    <mutation mode="JOIN"></mutation>
                                                                    <field name="MODE">JOIN</field>
                                                                    <value name="INPUT">
                                                                      <block type="variables_get" id="9~_2,:mZsZyFmVgn$$Vd">
                                                                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="DELIM">
                                                                      <shadow type="text" id="HnkDg85Ot5w@zDNb!~QL">
                                                                        <field name="TEXT"> </field>
                                                                      </shadow>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="s4d_newline" id="rSlH7XBFS}f6QIN|L@ib"></block>
                                                                </value>
                                                                <value name="ADD3">
                                                                  <block type="text" id="R%^aR*ABw7eR##k0LG~H">
                                                                    <field name="TEXT">author: </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD4">
                                                                  <block type="s4d_member_tag" id="w|*qHqeIwELq+.c)|k.y">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_message_author" id="49WBTOoZkE{E5q~_hEc:"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD5">
                                                                  <block type="s4d_newline" id="^LQQO@4WadB2P7um!0Jf"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_set_data" id="agCu[jksd_A96HPXQ*;3">
                                                            <value name="KEY">
                                                              <shadow type="text">
                                                                <field name="TEXT">hello</field>
                                                              </shadow>
                                                              <block type="text_join" id="CwYf\`iK]EJ\`BgEO-!qer">
                                                                <mutation items="3"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="s4d_member_id" id="15D\`zkL6e#-a%;\`V!Yn$">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_mentioned_member" id="}]\`|lHg!Z*O\`BU4XYme\`"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="s4d_message_guild_raw" id="j6@.toH,3KwoU3b1.^^G">
                                                                    <field name="SEARCH_TYPE">ID</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="text" id="8HA6KxL_|uo?R[+^]I#y">
                                                                    <field name="TEXT">warns</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="VALUE">
                                                              <shadow type="text">
                                                                <field name="TEXT">world</field>
                                                              </shadow>
                                                              <block type="variables_get" id=";r]u^wi$;!+mj=lWFZY6">
                                                                <field name="VAR" id="CMw~@jaj4]7FFFkZNniO">warn</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <statement name="ELSE">
                                                      <block type="variables_set" id="i#LT4*/gT-_K@v5ynQIL">
                                                        <field name="VAR" id="CMw~@jaj4]7FFFkZNniO">warn</field>
                                                        <value name="VALUE">
                                                          <block type="lists_create_with" id="nJ7R+J=o+eXjV%tqpBx^">
                                                            <mutation items="2"></mutation>
                                                            <value name="ADD0">
                                                              <block type="s4d_get_data" id="18_?~Aszx5n:8UtZsNSk">
                                                                <value name="KEY">
                                                                  <shadow type="text">
                                                                    <field name="TEXT">hello</field>
                                                                  </shadow>
                                                                  <block type="text_join" id="G+dGQizBm?cArqjJku)^">
                                                                    <mutation items="3"></mutation>
                                                                    <value name="ADD0">
                                                                      <block type="s4d_member_id" id="%2)4:};G~O5d#YfaLHvc">
                                                                        <value name="MEMBER">
                                                                          <block type="s4d_mentioned_member" id="p+rH0^2:Vj^\`=hcna9%L"></block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                    <value name="ADD1">
                                                                      <block type="s4d_message_guild_raw" id="/@Dz;m]ehdAuOMGU];b-">
                                                                        <field name="SEARCH_TYPE">ID</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="ADD2">
                                                                      <block type="text" id="f.Ig-;o;J=dVA@p*\`t8(">
                                                                        <field name="TEXT">warns</field>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="text_join" id="{:KHn[/xY-)mdvQS5Gq9">
                                                                <mutation items="6"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text" id="GX}KnSu.}17ynPB(PDn/">
                                                                    <field name="TEXT">reason: </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="text" id="5HFHvR(!V:GGPyAM;U54">
                                                                    <field name="TEXT">not defined</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="s4d_newline" id="5~wf[SEwr.nJG@B!v2=|"></block>
                                                                </value>
                                                                <value name="ADD3">
                                                                  <block type="text" id="^C1#[hm9r+E~hm~x_fi2">
                                                                    <field name="TEXT">author: </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD4">
                                                                  <block type="s4d_member_tag" id="Jryq*_8T(7HRhi.d#L?:">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_message_author" id="T%oG(ix?BWaV3T76:#2|"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD5">
                                                                  <block type="s4d_newline" id="75Xegc~EHA~WLTse.}Ck"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_set_data" id="$5=K-IwnoXRg.Ujo?+kp">
                                                            <value name="KEY">
                                                              <shadow type="text">
                                                                <field name="TEXT">hello</field>
                                                              </shadow>
                                                              <block type="text_join" id="4CE-$z?.{jM\`A;/)VG{0">
                                                                <mutation items="3"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="s4d_member_id" id="*]qo]t16cyg5R=TEw(B;">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_mentioned_member" id="WOJM}F={Nw=q@,]g:B;5"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="s4d_message_guild_raw" id="\`!anAm-t.4p@{fdzNx]#">
                                                                    <field name="SEARCH_TYPE">ID</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="text" id="RfMJKzs|5Je*tg~nUQf$">
                                                                    <field name="TEXT">warns</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="VALUE">
                                                              <shadow type="text">
                                                                <field name="TEXT">world</field>
                                                              </shadow>
                                                              <block type="variables_get" id="a%#x~R]9/6,KR/G,*F*l">
                                                                <field name="VAR" id="CMw~@jaj4]7FFFkZNniO">warn</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="s4d_reply" id="KNO5Ji,r$jWKJY8If}i)">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="YXLV|7I_N3fjNWJN7e,|">
                                                            <field name="TEXT">sucessfuly warned that member!</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <statement name="ELSE">
                                                  <block type="controls_if" id="a4!%lQtI0BAFo+}hYj/t">
                                                    <mutation else="1"></mutation>
                                                    <value name="IF0">
                                                      <block type="lists_getIndex" id="iV7}\`zc4RiqB:Gamb7]k">
                                                        <mutation statement="false" at="true"></mutation>
                                                        <field name="MODE">GET</field>
                                                        <field name="WHERE">FROM_START</field>
                                                        <value name="VALUE">
                                                          <block type="variables_get" id="fO%,?RQSg(Qnyusj~%%q">
                                                            <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                          </block>
                                                        </value>
                                                        <value name="AT">
                                                          <block type="math_number" id="C:L;ur?^2U6WwqM.y\`1q">
                                                            <field name="NUM">1</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="variables_set" id="@^$U$$\`ss~[Wgx(~1^dE">
                                                        <field name="VAR" id="CMw~@jaj4]7FFFkZNniO">warn</field>
                                                        <value name="VALUE">
                                                          <block type="lists_create_with" id="(gG{JrHF2jhG4YI$~b/O">
                                                            <mutation items="1"></mutation>
                                                            <value name="ADD0">
                                                              <block type="text_join" id="]9(#q?]Oe6mv@,{DC5PC">
                                                                <mutation items="6"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text" id="d}(?:z%SOEIepa[U1DCa">
                                                                    <field name="TEXT">reason: </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="lists_split" id="gk1%vvJ~{[fFN#5Z)tgA">
                                                                    <mutation mode="JOIN"></mutation>
                                                                    <field name="MODE">JOIN</field>
                                                                    <value name="INPUT">
                                                                      <block type="variables_get" id="PJ^e,a1|q9d{T[Ml$S^$">
                                                                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="DELIM">
                                                                      <shadow type="text" id="OHtrlCHft.C.fWw{^*3\`">
                                                                        <field name="TEXT"> </field>
                                                                      </shadow>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="s4d_newline" id="$M;Kh$PCX*:]v}Sq4bZC"></block>
                                                                </value>
                                                                <value name="ADD3">
                                                                  <block type="text" id="Mq~c?YW|z\`Kcg!x-nq.O">
                                                                    <field name="TEXT">author: </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD4">
                                                                  <block type="s4d_member_tag" id="alpzSGAHL+)8-\`7wo1J)">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_message_author" id=";]io;]s$LX5guP2I}R:="></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD5">
                                                                  <block type="s4d_newline" id="Mb|\`(YV|*odLtnp{OSn4"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_set_data" id="|70_H)_SYHi?x.^=]ESW">
                                                            <value name="KEY">
                                                              <shadow type="text" id="[-+p_f_F8-Y%XMxxgaTo">
                                                                <field name="TEXT">hello</field>
                                                              </shadow>
                                                              <block type="text_join" id="|o6r4WoQ,eL\`*)FcC8H4">
                                                                <mutation items="3"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="s4d_member_id" id="GYonsX[;!zL]k?roL]*{">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_mentioned_member" id="jIxF!:S*@|\`t9v4jk?-F"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="s4d_message_guild_raw" id="d*_!Y8#Hg5}Wkf\`lMP\`Q">
                                                                    <field name="SEARCH_TYPE">ID</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="text" id="k2RC=nXV/5!jwVB4}BC5">
                                                                    <field name="TEXT">warns</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="VALUE">
                                                              <shadow type="text" id=",0P8${UqD38pV5!TkoX4">
                                                                <field name="TEXT">world</field>
                                                              </shadow>
                                                              <block type="variables_get" id="Fjy?k6.2mDTm+w?ev)W?">
                                                                <field name="VAR" id="CMw~@jaj4]7FFFkZNniO">warn</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <statement name="ELSE">
                                                      <block type="variables_set" id="t@gmrbkyZioQETt\`[f3;">
                                                        <field name="VAR" id="CMw~@jaj4]7FFFkZNniO">warn</field>
                                                        <value name="VALUE">
                                                          <block type="lists_create_with" id=")4}AP4Fc3G%Ss(GOkOeR">
                                                            <mutation items="1"></mutation>
                                                            <value name="ADD0">
                                                              <block type="text_join" id="shV)[E[C9Lt~-i]NX#^#">
                                                                <mutation items="6"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text" id="oG1I+0Zgx1@|EowFES0.">
                                                                    <field name="TEXT">reason: </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="text" id="v^T[!:8\`gJC{DzCvR:~=">
                                                                    <field name="TEXT">not defined</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="s4d_newline" id="QfqO6]+Jnx:Ym?|-hOp%"></block>
                                                                </value>
                                                                <value name="ADD3">
                                                                  <block type="text" id="7~lv=vlax{E{Q+d/9RQa">
                                                                    <field name="TEXT">author: </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD4">
                                                                  <block type="s4d_member_tag" id="WCJ6E9QxCrV,KKpM^Bl$">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_message_author" id="diAHhh!GBmoMNqKecaoU"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD5">
                                                                  <block type="s4d_newline" id="5y7|zv(W-685?[DLBwLq"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_set_data" id="_bkVy;M28)+GB\`IBBl-9">
                                                            <value name="KEY">
                                                              <shadow type="text">
                                                                <field name="TEXT">hello</field>
                                                              </shadow>
                                                              <block type="text_join" id="W{%N13utpbqPde:Sin,}">
                                                                <mutation items="3"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="s4d_member_id" id="P?R9-1%pN?HOIcl[ExFg">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_mentioned_member" id="Jw=o{rn@l9xYzxG0vz.D"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="s4d_message_guild_raw" id="7HgrKfvsbo)y!!TYIxAf">
                                                                    <field name="SEARCH_TYPE">ID</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="text" id="bwic^g=?5Nx)$~Z#WvgX">
                                                                    <field name="TEXT">warns</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="VALUE">
                                                              <shadow type="text">
                                                                <field name="TEXT">world</field>
                                                              </shadow>
                                                              <block type="variables_get" id="!qex[~\`d7VgxSU-3lqk%">
                                                                <field name="VAR" id="CMw~@jaj4]7FFFkZNniO">warn</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="s4d_reply" id=";AzW${_UXJeFrP9[lPEM">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="g-h$AIa)pO9-.ei)^Fa!">
                                                            <field name="TEXT">sucessfuly warned that member!</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                              </block>
                                            </next>
                                          </block>
                                        </statement>
                                        <statement name="ELSE">
                                          <block type="s4d_reply" id="1j-H8TV18|1|2[OX7W7r">
                                            <value name="CONTENT">
                                              <shadow type="text" id="@hipt/sKPMX-j+p{\`n4(">
                                                <field name="TEXT">you need to mention a member to give him a warn</field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply" id="fIyq#=*9l4m5SyesPuA?">
                                        <value name="CONTENT">
                                          <shadow type="text" id="VvlIXe4Xe,rDCYGoU6SB">
                                            <field name="TEXT">you dont have permissions!</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                                <value name="IF1">
                                  <block type="logic_compare" id="W]^8Z8S[-vFC8dV@ip;O">
                                    <field name="OP">EQ</field>
                                    <value name="A">
                                      <block type="variables_get" id="%3fNsw8z5!o5mKhV.j6c">
                                        <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="text" id="_Z0-?9s-hW-SvSlbPC}B">
                                        <field name="TEXT">warns</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO1">
                                  <block type="controls_if" id="NTO+QN7a)dj#PNZf(8~E">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="logic_compare" id="*96fzJD.evbr{u~eRoD}">
                                        <field name="OP">NEQ</field>
                                        <value name="A">
                                          <block type="s4d_mentioned_member" id="c,-$:58*m+VVwAVn-KCj"></block>
                                        </value>
                                        <value name="B">
                                          <block type="logic_null" id="V]|%l|DJUv.XT]@_BXJx"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="controls_if" id=")kF1=!sQdJ})?n%RJ*j5">
                                        <mutation else="1"></mutation>
                                        <value name="IF0">
                                          <block type="logic_compare" id="V:Moe/G[;dp)E17%=R|y">
                                            <field name="OP">NEQ</field>
                                            <value name="A">
                                              <block type="s4d_get_data" id="]xt9@K^KDM#osV[\`~bJ;">
                                                <value name="KEY">
                                                  <shadow type="text">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_join" id="=Mwf}RF1Wr2?+HmNdeE3">
                                                    <mutation items="3"></mutation>
                                                    <value name="ADD0">
                                                      <block type="s4d_member_id" id="Oo7!|(JssosC@VY3#!hU">
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id="ly2wu}dzNW_xV!Dw#A3,"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="s4d_message_guild_raw" id=";D^My4bbs.t,wo0C!0.{">
                                                        <field name="SEARCH_TYPE">ID</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD2">
                                                      <block type="text" id="/kmeOxtJXLBG,Q^)taNh">
                                                        <field name="TEXT">warns</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="logic_null" id="b;{^IEOSie[XLN#_WXl4"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_reply" id="vZ/|U.OTG(xM4k4x:cKj">
                                            <value name="CONTENT">
                                              <shadow type="text" id="Yhj}y+;[)4:n@:!#C-pY">
                                                <field name="TEXT">Hey!</field>
                                              </shadow>
                                              <block type="s4d_message_embed" id="c$l)9uzHI}{v,y9#9NVR">
                                                <mutation xmlns="http://www.w3.org/1999/xhtml" message="true" color="true" title="true"></mutation>
                                                <value name="MESSAGE">
                                                  <block type="lists_split" id="R[aPov+.,Ry^)/6.()0/">
                                                    <mutation mode="JOIN"></mutation>
                                                    <field name="MODE">JOIN</field>
                                                    <value name="INPUT">
                                                      <block type="s4d_get_data" id="lifz$U%2B(y*O;\`0;eq]">
                                                        <value name="KEY">
                                                          <shadow type="text">
                                                            <field name="TEXT">hello</field>
                                                          </shadow>
                                                          <block type="text_join" id="TvONp+@#N1[vYwetz_vi">
                                                            <mutation items="3"></mutation>
                                                            <value name="ADD0">
                                                              <block type="s4d_member_id" id="r8kr(7vZ7^d,[0nUnhr[">
                                                                <value name="MEMBER">
                                                                  <block type="s4d_mentioned_member" id="]-#(Sl-:Nj?|x^HKL^}P"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_message_guild_raw" id="A?Z#IV,@D_Ov-{2N0cjL">
                                                                <field name="SEARCH_TYPE">ID</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD2">
                                                              <block type="text" id="^^}:u\`~W[Dv[8I]zgZP*">
                                                                <field name="TEXT">warns</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="DELIM">
                                                      <shadow type="text" id="+418y_eUC?k+ag!$Ruki">
                                                        <field name="TEXT">,</field>
                                                      </shadow>
                                                      <block type="s4d_newline" id="a6S~w:?u?3pZbYe{5~*5"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="COLOR">
                                                  <block type="colour_random" id="P|d6]dV$(3QS#1k\`LBHb"></block>
                                                </value>
                                                <value name="TITLE">
                                                  <block type="text" id="RcpB8;fB@%ejvT8+Iz6;">
                                                    <field name="TEXT">member warns</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </statement>
                                        <statement name="ELSE">
                                          <block type="s4d_reply" id="XwHe)0bli,hH9Cv=_{@K">
                                            <value name="CONTENT">
                                              <shadow type="text" id="hf!Jup,KjD0P_3,2^^(C">
                                                <field name="TEXT">this member has no warns!</field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply" id="7?L~,JbRBOerb[\`/#Uei">
                                        <value name="CONTENT">
                                          <shadow type="text" id="L.G7a*cKh{7SpEDs4e9%">
                                            <field name="TEXT">you need to mention a member to give see his warns</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                                <next>
                                  <block type="controls_if" id="_5R}Bw!?9{U{S)ptJFH+">
                                    <value name="IF0">
                                      <block type="logic_compare" id="7UM~;qH0\`_6?:b+r1r9y">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="variables_get" id="m?7mt89x1{A(ve#$_2VP">
                                            <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="text" id="vU%apEyjm,5dlE.aK7vA">
                                            <field name="TEXT">clearwarn</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="controls_if" id="Pn*9ON[$EHZ:D5uw_701">
                                        <mutation else="1"></mutation>
                                        <value name="IF0">
                                          <block type="s4d_member_has_permission" id="hrHJ.o4jytPF=!SE#tH,">
                                            <field name="PERMISSION">KICK_MEMBERS</field>
                                            <value name="MEMBER">
                                              <block type="s4d_message_author" id="aA/@1[lmv0%V{?m#PkJ$"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="controls_if" id="@stR:YIIH*P7u7S-9q,3">
                                            <mutation else="1"></mutation>
                                            <value name="IF0">
                                              <block type="logic_compare" id="b!-c=44#V=$hUwOzmvR7">
                                                <field name="OP">NEQ</field>
                                                <value name="A">
                                                  <block type="s4d_mentioned_member" id="x#u8_8Q%w|eWNYE]-biD"></block>
                                                </value>
                                                <value name="B">
                                                  <block type="logic_null" id=".r:9gd6%WNj~?vaK}x^V"></block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="lists_getIndex" id="=wyIj\`,xW|Yg?R6h|{^{">
                                                <mutation statement="true" at="true"></mutation>
                                                <field name="MODE">REMOVE</field>
                                                <field name="WHERE">FROM_START</field>
                                                <value name="VALUE">
                                                  <block type="variables_get" id="tbV6#k(eV%r_c+5]l_kN">
                                                    <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                  </block>
                                                </value>
                                                <value name="AT">
                                                  <block type="math_number" id="DbU*_LQ7g)4|G=H.kf?3">
                                                    <field name="NUM">1</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="controls_if" id="6(/EAS(a62-Fy~a]=]gB">
                                                    <mutation else="1"></mutation>
                                                    <value name="IF0">
                                                      <block type="logic_compare" id="-7NgAvpn*G[oVvD8E:+Y">
                                                        <field name="OP">NEQ</field>
                                                        <value name="A">
                                                          <block type="s4d_get_data" id="x^Av]7@hp;PZ]msW1#+u">
                                                            <value name="KEY">
                                                              <shadow type="text">
                                                                <field name="TEXT">hello</field>
                                                              </shadow>
                                                              <block type="text_join" id="xihBL,;K3kd6UP2QWndI">
                                                                <mutation items="3"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="s4d_member_id" id="p0p-mlWIRB[-hS8g9f[E">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_mentioned_member" id="yV-o2UKx?qgVGJU8xYlj"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="s4d_message_guild_raw" id="lHMv_8kkVLaRm=sRxhYt">
                                                                    <field name="SEARCH_TYPE">ID</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="text" id="0QIMXxeZ0@@q\`(O.-]|@">
                                                                    <field name="TEXT">warns</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="logic_null" id="6gE(OGf{#.fRKjaVPrO3"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_delete_data" id="=\`dMw@htp,X_DQ2DVe:}">
                                                        <value name="KEY">
                                                          <shadow type="text">
                                                            <field name="TEXT">hello</field>
                                                          </shadow>
                                                          <block type="text_join" id="}B[aGn{jONx@6xA\`K328">
                                                            <mutation items="3"></mutation>
                                                            <value name="ADD0">
                                                              <block type="s4d_member_id" id="KUkK/=[~LH9.8c]0ug6/">
                                                                <value name="MEMBER">
                                                                  <block type="s4d_mentioned_member" id="U]YcM[gS%bjQc-kp)n9q"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_message_guild_raw" id="PE%7(Kh5X#2_W8,_F{:n">
                                                                <field name="SEARCH_TYPE">ID</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD2">
                                                              <block type="text" id="~PjW/FJBDSpd[WBuMSLd">
                                                                <field name="TEXT">warns</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_reply" id="*GVCswJ|E8XvTj=}_1-3">
                                                            <value name="CONTENT">
                                                              <shadow type="text" id="yQ^tOzAvZmb@1yd*PqSE">
                                                                <field name="TEXT">cleared this member warns!</field>
                                                              </shadow>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <statement name="ELSE">
                                                      <block type="s4d_reply" id="[_+n~2C{TJ~qMIB9Mg/{">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="$r@8qds?QrvH.AOguDp5">
                                                            <field name="TEXT">this member dont have a warn!</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </statement>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                            <statement name="ELSE">
                                              <block type="s4d_reply" id="M|H-yoxwN!pxB7gr1xlC">
                                                <value name="CONTENT">
                                                  <shadow type="text" id="eXqhqe9e0a,7G4]yM|c~">
                                                    <field name="TEXT">you need to mention a member to give him a warn</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </statement>
                                          </block>
                                        </statement>
                                        <statement name="ELSE">
                                          <block type="s4d_reply" id="adlx{emA{DJ{j%\`WNO+?">
                                            <value name="CONTENT">
                                              <shadow type="text" id="(^:F]o9l4B}@/3BEA]#4">
                                                <field name="TEXT">you dont have permissions!</field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
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
  <block type="s4d_on_connected" id="SQa9Zw+nTPF!N[i(txsd" x="887" y="-63">
    <statement name="STATEMENTS">
      <block type="variables_set" id="+G-=fR$e~cW3X2IF-m\`L">
        <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
        <value name="VALUE">
          <block type="text" id="\`92_~r/YNCHURA,IZF_L">
            <field name="TEXT">k!</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
</xml>
`;
