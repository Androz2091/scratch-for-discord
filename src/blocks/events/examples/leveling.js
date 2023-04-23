export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="M[vaD@JoJPb/1tEa6?p~">member_xp</variable>
    <variable id="+@B4vb]CdaQAcV3iYZ3L">member_level</variable>
  </variables>
  <block type="s4d_login" id="|rEc6MK@B\`#CAd.0nrou" x="-713" y="-88">
    <value name="TOKEN">
      <block type="text" id="#-0;+I4Z4Ja.7?i1tEC#">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" id="i=%I:.GpXHXHR-MazeNH" x="-713" y="-12">
    <statement name="STATEMENTS">
      <block type="controls_if" id="MfL_sev~ks[YLX%tm:st">
        <value name="IF0">
          <block type="logic_negate" id="N!ILu_]4_BvksLxRV4wK">
            <value name="BOOL">
              <block type="s4d_member_is_bot" id="2-0d8n$Y]7()h.o7O*Y2">
                <value name="MEMBER">
                  <block type="s4d_message_author" id="^Ro{ic}Z@hR$-,X!^]/S"></block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="variables_set" id="~}l5zZhB7uE~@8N@HI,q">
            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
            <value name="VALUE">
              <block type="s4d_get_data" id="w^H/=6#PE0py+]@Dzo[n">
                <value name="KEY">
                  <shadow type="text" id="88r!7qHuf3[MAZi)[.Ap">
                    <field name="TEXT">hello</field>
                  </shadow>
                  <block type="text_join" id="t|;4SUYtCcIm=SMnP1RA">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="text" id="F1})AwLPmPBJPiB/.X!@">
                        <field name="TEXT">xp-</field>
                      </block>
                    </value>
                    <value name="ADD1">
                      <block type="s4d_message_author_raw" id="Rj[w_ZyGOWe)#cBT)b%b">
                        <field name="SEARCH_TYPE">ID</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="variables_set" id="^\`ZAnTvZB/C\`!s|i4wW8">
                <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                <value name="VALUE">
                  <block type="s4d_get_data" id="h5b5dBE76^+Si[[@nzpR">
                    <value name="KEY">
                      <shadow type="text">
                        <field name="TEXT">hello</field>
                      </shadow>
                      <block type="text_join" id="|w0zLKo6a!VjZ[\`h]ie1">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="text" id="/_\`/W\`B=E:hKeVdrB0[5">
                            <field name="TEXT">level-</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="s4d_message_author_raw" id="]%Zo:C(Zm2cd[[cA=OP2">
                            <field name="SEARCH_TYPE">ID</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="controls_if" id="AwKZxHL{ez%!sm2pTZ:N">
                    <mutation elseif="1"></mutation>
                    <value name="IF0">
                      <block type="logic_negate" id=")BL3sNk,s[7k[D=)5Wb-">
                        <value name="BOOL">
                          <block type="variables_get" id="EL@M$sfQwo4_kp:H[Ego">
                            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="variables_set" id="u,h(12V3!js1cM8_EsWD">
                        <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                        <value name="VALUE">
                          <block type="math_number" id="3K{AwEiQ|xzrqsTvjM*0">
                            <field name="NUM">0</field>
                          </block>
                        </value>
                      </block>
                    </statement>
                    <value name="IF1">
                      <block type="logic_negate" id="R*H!?sV5!C,Lx+OJs#jM">
                        <value name="BOOL">
                          <block type="variables_get" id="u_yI(T/!%YChjJAIcj[$">
                            <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO1">
                      <block type="variables_set" id="#_ki4I?oh@v0db%WCXzi">
                        <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                        <value name="VALUE">
                          <block type="math_number" id="v*z}8{H/jC9v:7uxTn#9">
                            <field name="NUM">0</field>
                          </block>
                        </value>
                      </block>
                    </statement>
                    <next>
                      <block type="s4d_set_data" id="\`7WbsnzyzwNl%gCO%9J9">
                        <value name="KEY">
                          <shadow type="text" id="Q.iRfNq!Jgox/.hB5Bs}">
                            <field name="TEXT">hello</field>
                          </shadow>
                          <block type="text_join" id=":HW].AU64kQwP~m3dI^g">
                            <mutation items="2"></mutation>
                            <value name="ADD0">
                              <block type="text" id="_R=tGhLLUkSBHi_jk!">
                                <field name="TEXT">xp-</field>
                              </block>
                            </value>
                            <value name="ADD1">
                              <block type="s4d_message_author_raw" id="W!dQlYRxcQy~uu+j%onT">
                                <field name="SEARCH_TYPE">ID</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="VALUE">
                          <shadow type="text" id=":6^F\`uO_USAFvH*$p9S~">
                            <field name="TEXT">world</field>
                          </shadow>
                          <block type="math_arithmetic" id="wK29a{2jG2kU-?0hFhqR">
                            <field name="OP">ADD</field>
                            <value name="A">
                              <shadow type="math_number" id="GM/dp{=o8js[D}i09\`b^">
                                <field name="NUM">1</field>
                              </shadow>
                              <block type="variables_get" id="ONqeqk89!f=j}!*L7;PL">
                                <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                              </block>
                            </value>
                            <value name="B">
                              <shadow type="math_number" id=".K2[!\`fX!l9vw!p51c!N">
                                <field name="NUM">1</field>
                              </shadow>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="variables_set" id="s?jTk;tHQ]fYWv^re!7j">
                            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                            <value name="VALUE">
                              <block type="math_arithmetic" id="E)ATuTT-KyjPm,M=JdwP">
                                <field name="OP">ADD</field>
                                <value name="A">
                                  <shadow type="math_number">
                                    <field name="NUM">1</field>
                                  </shadow>
                                  <block type="variables_get" id="t0-[e[+LUi|~z/;*dp#6">
                                    <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <shadow type="math_number" id="]z~}4N-c?LinHgC|kVmO">
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="controls_if" id="=-T,u2,YqI(b-,5R-raJ">
                                <value name="IF0">
                                  <block type="logic_compare" id="2bDZYW1aw[iAcj6jy2o*">
                                    <field name="OP">GT</field>
                                    <value name="A">
                                      <block type="variables_get" id="R3qfLFppQKY36e!(k\`uh">
                                        <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="math_number" id="K%+C!jxTTKzP,~bTIQ#s">
                                        <field name="NUM">100</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_set_data" id="(-b?AF=}h+7kqqm\`x)@=">
                                    <value name="KEY">
                                      <shadow type="text">
                                        <field name="TEXT">hello</field>
                                      </shadow>
                                      <block type="text_join" id="\`hFN7Yl,*qK\`Fy/*uC}{">
                                        <mutation items="2"></mutation>
                                        <value name="ADD0">
                                          <block type="text" id="NIpT7$oFJOwy@/ga5s+#">
                                            <field name="TEXT">level-</field>
                                          </block>
                                        </value>
                                        <value name="ADD1">
                                          <block type="s4d_message_author_raw" id=":FZ;uMH7;/2aHmyJSD_Y">
                                            <field name="SEARCH_TYPE">ID</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="VALUE">
                                      <shadow type="text">
                                        <field name="TEXT">world</field>
                                      </shadow>
                                      <block type="math_arithmetic" id="mVh6;B0CWdne-%@s-,R;">
                                        <field name="OP">ADD</field>
                                        <value name="A">
                                          <shadow type="math_number">
                                            <field name="NUM">1</field>
                                          </shadow>
                                          <block type="variables_get" id="HELI-rppC{2{:JXRZZ2_">
                                            <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <shadow type="math_number" id="P:L?@*mm?(R[hD)oUiHe">
                                            <field name="NUM">1</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="variables_set" id="BgXDQa45|TjY$inY!uy=">
                                        <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                        <value name="VALUE">
                                          <block type="math_arithmetic" id="iE-Gj#gv~B6n]zoM6OYl">
                                            <field name="OP">ADD</field>
                                            <value name="A">
                                              <shadow type="math_number">
                                                <field name="NUM">1</field>
                                              </shadow>
                                              <block type="variables_get" id=")4f,y[AS~[eziQP6oy~i">
                                                <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <shadow type="math_number" id="9j04Bn#=cd5{AIdY:p.#">
                                                <field name="NUM">1</field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="s4d_reply" id="e,mtP-XG1y;zync)}qdU">
                                            <value name="CONTENT">
                                              <shadow type="text" id="xT2PT;Qo)Nuw7a=8s=$j">
                                                <field name="TEXT">Salut!</field>
                                              </shadow>
                                              <block type="text_join" id="_BHM*Q=qtcbpbnf$Zu92">
                                                <mutation items="5"></mutation>
                                                <value name="ADD0">
                                                  <block type="text" id="%+!]Dt.S]{Ioo~dX|^22">
                                                    <field name="TEXT">Congratulations, </field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_message_author" id="ggQ[+aM[.Ml|,[Bv:OB0"></block>
                                                </value>
                                                <value name="ADD2">
                                                  <block type="text" id="4MsXLy0texd3plR9Uj{c">
                                                    <field name="TEXT">you jumped to level </field>
                                                  </block>
                                                </value>
                                                <value name="ADD3">
                                                  <block type="variables_get" id="6mrLVVv|S4nIJ%MMc^Nq">
                                                    <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                                  </block>
                                                </value>
                                                <value name="ADD4">
                                                  <block type="text" id="g?7rO4hF+JjCKY5Zq@e*">
                                                    <field name="TEXT">!!</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </statement>
                                <next>
                                  <block type="controls_if" id="$]k-m(;+PW!Y)ZhSQsJ.">
                                    <mutation elseif="1"></mutation>
                                    <value name="IF0">
                                      <block type="logic_compare" id="FA9h-?ZQp31zoC,-CJj?">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="s4d_message_content" id="QW9fD=khz9ml7Y{X\`_~0"></block>
                                        </value>
                                        <value name="B">
                                          <block type="text" id="W_@NL7X,en6waLiu/eNn">
                                            <field name="TEXT">!level</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply" id="ECw;)=}O[mTwG[R)65ZU">
                                        <value name="CONTENT">
                                          <shadow type="text" id="n1@ol$k#rsjQ8uFcc^B:">
                                            <field name="TEXT">Salut!</field>
                                          </shadow>
                                          <block type="text_join" id="@R:tUMom]M232DDjLyi=">
                                            <mutation items="3"></mutation>
                                            <value name="ADD0">
                                              <block type="s4d_message_author" id="H|zP9k/8vnf2g8G24Toz"></block>
                                            </value>
                                            <value name="ADD1">
                                              <block type="text" id="iX(DW[~h)*\`MRy0gY2A@">
                                                <field name="TEXT">, you are currently level: </field>
                                              </block>
                                            </value>
                                            <value name="ADD2">
                                              <block type="variables_get" id="ahx}S^8VdjY~#}/-NXD]">
                                                <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </statement>
                                    <value name="IF1">
                                      <block type="logic_compare" id="Ws]$L;eS[]E,~vSSZFXc">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="s4d_message_content" id="t$a4Rj\`p]Z*XTXL#[URF"></block>
                                        </value>
                                        <value name="B">
                                          <block type="text" id="6SAlzvfzT4\`qGSs@FPYE">
                                            <field name="TEXT">!xp</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO1">
                                      <block type="s4d_reply" id="~QZ8R39dl)(twOjjXr]w">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">Salut!</field>
                                          </shadow>
                                          <block type="text_join" id="Y!x8?.0jWWnr5Lp]?k!n">
                                            <mutation items="5"></mutation>
                                            <value name="ADD0">
                                              <block type="s4d_message_author" id="|G/@9fZe@\`%~TwJ@KQB/"></block>
                                            </value>
                                            <value name="ADD1">
                                              <block type="text" id="9RIm=A!+pQ/uATenE)oP">
                                                <field name="TEXT">, you need </field>
                                              </block>
                                            </value>
                                            <value name="ADD2">
                                              <block type="math_arithmetic" id="#k7xdN{K1em1;g4x(4r,">
                                                <field name="OP">MINUS</field>
                                                <value name="A">
                                                  <shadow type="math_number" id="AOgc*g=oG+.dQ9JyEXR-">
                                                    <field name="NUM">100</field>
                                                  </shadow>
                                                </value>
                                                <value name="B">
                                                  <shadow type="math_number" id="k[[G+xVv)AoAC$7{OS?G">
                                                    <field name="NUM">100</field>
                                                  </shadow>
                                                  <block type="variables_get" id="Jv~.y|;NFyQ9TD$|ZGwI">
                                                    <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="ADD3">
                                              <block type="text" id="C]/q-tyzgRtj~?~w$2E#">
                                                <field name="TEXT"> to jump to level </field>
                                              </block>
                                            </value>
                                            <value name="ADD4">
                                              <block type="math_arithmetic" id="ny^4i;T7mbDK{@WB@B6v">
                                                <field name="OP">ADD</field>
                                                <value name="A">
                                                  <shadow type="math_number" id="qw:DB*#:O-@6K*6cJIq0">
                                                    <field name="NUM">1</field>
                                                  </shadow>
                                                  <block type="variables_get" id="NHy%/wvKxeou}^ExT9}/">
                                                    <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <shadow type="math_number" id="BJv^%DY.Y?-7^KnZcm{x">
                                                    <field name="NUM">1</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
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