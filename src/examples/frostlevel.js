export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="p27^/-FmJT9?ju~_]oT-">prefix</variable>
    <variable id="M[vaD@JoJPb/1tEa6?p~">member_xp</variable>
    <variable id="7J|c+=tT495^ch?D]%#e">arguments</variable>
    <variable id="+@B4vb]CdaQAcV3iYZ3L">member_level</variable>
    <variable id="P:v1*(tsIf8zdty}_SMF">commandwithprefix</variable>
    <variable id="vk8drNL\`f;O0)H0y*u{(">command</variable>
  </variables>
  <block type="s4d_login" id="|rEc6MK@B\`#CAd.0nrou" x="0" y="0">
    <value name="TOKEN">
      <block type="text" id="#-0;+I4Z4Ja.7?i1tEC#">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_connected" id="@.NwjBg%Q/^[=~ikZpA~" x="0" y="104">
    <statement name="STATEMENTS">
      <block type="variables_set" id="3m?984U|Xttb$vJaC5rP">
        <field name="VAR" id="p27^/-FmJT9?ju~_]oT-">prefix</field>
        <value name="VALUE">
          <block type="text" id="YL_Yu^rkg9kW1mCS.ZP0">
            <field name="TEXT">!</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_on_message" id="i=%I:.GpXHXHR-MazeNH" x="0" y="280">
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
                                  <block type="s4d_set_data" id="ZyzpZ#mXJCgC]_!OAc0y">
                                    <value name="KEY">
                                      <shadow type="text">
                                        <field name="TEXT">hello</field>
                                      </shadow>
                                      <block type="text_join" id="?v8Tcgt2D0^]*|Ut8V3R">
                                        <mutation items="2"></mutation>
                                        <value name="ADD0">
                                          <block type="text" id="QD{|\`I9BudTR]{\`]6_hF">
                                            <field name="TEXT">xp-</field>
                                          </block>
                                        </value>
                                        <value name="ADD1">
                                          <block type="s4d_message_author_raw" id="4@mPKT9BcXWbqoG~g0YM">
                                            <field name="SEARCH_TYPE">ID</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="VALUE">
                                      <shadow type="text" id="ZRY[8%^o=~2\`,a6K0f]K">
                                        <field name="TEXT">world</field>
                                      </shadow>
                                      <block type="math_number" id="qYtAuuUr]:sbDwn..^G7">
                                        <field name="NUM">0</field>
                                      </block>
                                    </value>
                                    <next>
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
                                                        <field name="TEXT">Congratulations, &lt;@</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="s4d_message_author" id="ggQ[+aM[.Ml|,[Bv:OB0"></block>
                                                    </value>
                                                    <value name="ADD2">
                                                      <block type="text" id="4MsXLy0texd3plR9Uj{c">
                                                        <field name="TEXT">&gt; you jumped to level</field>
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
                                    </next>
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
        </statement>
      </block>
    </statement>
  </block>
  <block type="s4d_on_message" id="-jCaty9f0+POF;~[Y(*g" x="0" y="1728">
    <statement name="STATEMENTS">
      <block type="controls_if" id="?59I/[1hu-fHEU#cy18W">
        <value name="IF0">
          <block type="logic_negate" id="n{sqgt=#Uug]c)Oix]9J">
            <value name="BOOL">
              <block type="s4d_member_is_bot" id="{El?GV$Xy;/Sw4H@y\`i5">
                <value name="MEMBER">
                  <block type="s4d_message_author" id="2Mf[whs#6!AcmU8MkcU+"></block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="variables_set" id="mAPD15fzZn@g9-z=jbJl">
            <field name="VAR" id="7J|c+=tT495^ch?D]%#e">arguments</field>
            <value name="VALUE">
              <block type="lists_split" id="yf\`L5hJh!fm6[6qmVm0s">
                <mutation mode="SPLIT"></mutation>
                <field name="MODE">SPLIT</field>
                <value name="INPUT">
                  <block type="s4d_message_content" id="3}@bKo7Fd]kg$e0U.p)y"></block>
                </value>
                <value name="DELIM">
                  <shadow type="text" id="EwE:iZPk/X4ga;nA3;E%">
                    <field name="TEXT"> </field>
                  </shadow>
                </value>
              </block>
            </value>
            <next>
              <block type="variables_set" id="}*F=^zL.+m6rPG7?ICn]">
                <field name="VAR" id="P:v1*(tsIf8zdty}_SMF">commandwithprefix</field>
                <value name="VALUE">
                  <block type="lists_getIndex" id="N=VihQJl,Mb},~6vzW1%">
                    <mutation statement="false" at="true"></mutation>
                    <field name="MODE">GET_REMOVE</field>
                    <field name="WHERE">FROM_START</field>
                    <value name="VALUE">
                      <block type="variables_get" id="ZKe$FD=)3:N[#Do\`sLL@">
                        <field name="VAR" id="7J|c+=tT495^ch?D]%#e">arguments</field>
                      </block>
                    </value>
                    <value name="AT">
                      <block type="math_number" id="Pd)cWx(Oa@0xl1M*.fI;">
                        <field name="NUM">1</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="controls_if" id="*\`P5_a9T6Gr|6..6x[j4">
                    <value name="IF0">
                      <block type="s4d_starts_with" id="z=lM|(XZt.d7L5}kpQ}S">
                        <value name="STRING">
                          <shadow type="text" id="pO9cLamt]915g2q6@KKD">
                            <field name="TEXT">abc</field>
                          </shadow>
                          <block type="variables_get" id="DRTB}lJW1pM@ENWo/NmE">
                            <field name="VAR" id="P:v1*(tsIf8zdty}_SMF">commandwithprefix</field>
                          </block>
                        </value>
                        <value name="SUBSTRING">
                          <shadow type="text" id="c/i}@xm14vt5:ZUhpuT]">
                            <field name="TEXT">a</field>
                          </shadow>
                          <block type="variables_get" id="=[H,}i7YEYd1GamqKcKw">
                            <field name="VAR" id="p27^/-FmJT9?ju~_]oT-">prefix</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="variables_set" id="6iV:p%H0I?#Yu$M\`=HZ{">
                        <field name="VAR" id="vk8drNL\`f;O0)H0y*u{(">command</field>
                        <value name="VALUE">
                          <block type="text_getSubstring" id="!H[w1wsSo~/@Wr;6^b#}">
                            <mutation at1="true" at2="false"></mutation>
                            <field name="WHERE1">FROM_START</field>
                            <field name="WHERE2">LAST</field>
                            <value name="STRING">
                              <block type="variables_get" id="i241b$#,B9XLw\`M[eZ0*">
                                <field name="VAR" id="P:v1*(tsIf8zdty}_SMF">commandwithprefix</field>
                              </block>
                            </value>
                            <value name="AT1">
                              <block type="math_arithmetic" id="tAX_z}nS1I%oo^U?jQN}">
                                <field name="OP">ADD</field>
                                <value name="A">
                                  <shadow type="math_number" id="VL#b9IN_?rrL?K]2.#%n">
                                    <field name="NUM">1</field>
                                  </shadow>
                                  <block type="text_length" id="jvVdBL1[]us=js3ah~Fo">
                                    <value name="VALUE">
                                      <shadow type="text" id="|g@3gyI9/jiQx?~GPa=%">
                                        <field name="TEXT">abc</field>
                                      </shadow>
                                      <block type="variables_get" id="+{oN#R_Biym?q3dl0i9{">
                                        <field name="VAR" id="p27^/-FmJT9?ju~_]oT-">prefix</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <shadow type="math_number" id="2/aiys_[\`k[#Z3KA53f{">
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="controls_if" id="$]k-m(;+PW!Y)ZhSQsJ.">
                            <value name="IF0">
                              <block type="logic_compare" id="FA9h-?ZQp31zoC,-CJj?">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id="0#QPzco9YU4bNx_6#A^?">
                                    <field name="VAR" id="vk8drNL\`f;O0)H0y*u{(">command</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="W_@NL7X,en6waLiu/eNn">
                                    <field name="TEXT">level</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="s4d_send_in_channel" id="9AI}q/y!gIGF_GAN,L_@">
                                <value name="CONTENT">
                                  <block type="text" id="TkXHZX6Du/GR-$Xt:IY]">
                                    <field name="TEXT"></field>
                                  </block>
                                </value>
                                <value name="CHANNEL">
                                  <block type="s4d_message_channel" id="Z9X4~0{8uHV~X\`(nBZws"></block>
                                </value>
                                <value name="GW">
                                  <block type="s4d_create_rankcard_then" id="L0pRn2FIzO_$8j:|KJ[o">
                                    <statement name="THEN">
                                      <block type="s4d_set_username" id="VSy*#Jv_9po!HaNB/(R,">
                                        <value name="STRING">
                                          <block type="s4d_message_author_raw" id="[l:(dZKxM\`mT7heVMX(J">
                                            <field name="SEARCH_TYPE">NICKNAME</field>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="s4d_set_avatar" id="w/@@s~_h%+UZ\`hV:l$I8">
                                            <value name="STRING">
                                              <block type="s4d_member_icon" id="H\`.P(xp|s):MhPQB]HX]">
                                                <value name="MEMBER">
                                                  <block type="s4d_message_author" id="]d|(I2JqAhx2$ErqNSR["></block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="s4d_set_background" id="Pjcqxb?C6Sz/xvN}jRHa">
                                                <value name="STRING">
                                                  <block type="text" id="T:S3B[H[orUL.F%G/FTK">
                                                    <field name="TEXT">https://media.discordapp.net/attachments/725039631443427328/906640561660899348/unknown.png</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="s4d_set_level" id="h7T0YgMbw7%,MR%DJ/l~">
                                                    <value name="VALUE">
                                                      <block type="variables_get" id="NHy%/wvKxeou}^ExT9}/">
                                                        <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_set_xp" id="w#:G]}tFH*c!Mv(r}*MA">
                                                        <field name="TYPE">current</field>
                                                        <value name="VALUE">
                                                          <block type="variables_get" id="Jv~.y|;NFyQ9TD$|ZGwI">
                                                            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_set_xp" id="=!u}cb:8FA|%t1c^EL1b">
                                                            <field name="TYPE">needed</field>
                                                            <value name="VALUE">
                                                              <block type="math_arithmetic" id="?E1QZWcS[#7kfYVaK^D+">
                                                                <field name="OP">MINUS</field>
                                                                <value name="A">
                                                                  <shadow type="math_number" id="0/Dqi:)LHvW}WGAtCu5!">
                                                                    <field name="NUM">100</field>
                                                                  </shadow>
                                                                </value>
                                                                <value name="B">
                                                                  <shadow type="math_number" id="maAmpY(9doO42-GJRvZu">
                                                                    <field name="NUM">100</field>
                                                                  </shadow>
                                                                  <block type="variables_get" id="C5eUH1!{d5#J*M]Mkzp^">
                                                                    <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
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
