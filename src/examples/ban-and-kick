export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="K0^jd-$jg$=dzRu1m*Z.">prefix</variable>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="/x;AZt|\`Va:Hb020-{-I">commandwithprefix</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
    <variable id="fztpO]@!)|*c81-vAZ)P">list</variable>
  </variables>
  <block type="s4d_on_connected" id="GE#eeS_=aQ0Xnq@-zbTx" x="-1038" y="-462">
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
  <block type="s4d_login" id="Img~hF9iVsFa/X%ttZYH" x="-759" y="-358">
    <value name="TOKEN">
      <block type="text" id="?~IW081_7$A25w.7disc">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" id="+Q@qA4DZ.)H0dU~:qJFA" x="-1262" y="-213">
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
                                    <field name="TEXT">kick</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="controls_if" id="$TY$Z2VQeKdRQa!9=*W*">
                                <mutation else="1"></mutation>
                                <value name="IF0">
                                  <block type="s4d_member_has_permission" id="6Zo3p4,YtoA?i!oRhJ\`}">
                                    <field name="PERMISSION">KICK_MEMBERS</field>
                                    <value name="MEMBER">
                                      <block type="s4d_message_author" id="E$%B!]wdU(|9XLU.Vw7n"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="controls_if" id="D5/g0|j|4DCZ6W,Hburk">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="logic_compare" id="$Q8r%J@e6l|y1Q;]~?NZ">
                                        <field name="OP">NEQ</field>
                                        <value name="A">
                                          <block type="s4d_mentioned_member" id="c1SudjhHO5/Z$FEn,_yW"></block>
                                        </value>
                                        <value name="B">
                                          <block type="logic_null" id="msy{7oq?dUNMms)^q%m?"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="controls_if" id="}7C5,hX+mDa#FQx^;1u}">
                                        <mutation else="1"></mutation>
                                        <value name="IF0">
                                          <block type="s4d_member_has_permission" id="\`X*3=/^Kr[a*lH3x%N[~">
                                            <field name="PERMISSION">KICK_MEMBERS</field>
                                            <value name="MEMBER">
                                              <block type="s4d_mentioned_member" id="*9lz45kBbBWrEtQ/hMT|"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="lists_getIndex" id="|6%f!+Aew/*(5DJ?./F:">
                                            <mutation statement="true" at="true"></mutation>
                                            <field name="MODE">REMOVE</field>
                                            <field name="WHERE">FROM_START</field>
                                            <value name="VALUE">
                                              <block type="variables_get" id="*Jt].8[S4n!DGwC7u{{_">
                                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                              </block>
                                            </value>
                                            <value name="AT">
                                              <block type="math_number" id="#UgG+r\`5cxWu|qUMO2o7">
                                                <field name="NUM">1</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="controls_if" id="Mv$koLtRKf|-GTV\`a9a-">
                                                <mutation else="1"></mutation>
                                                <value name="IF0">
                                                  <block type="lists_getIndex" id="*^8t4^XHX1JLQa1rC.M=">
                                                    <mutation statement="false" at="true"></mutation>
                                                    <field name="MODE">GET</field>
                                                    <field name="WHERE">FROM_START</field>
                                                    <value name="VALUE">
                                                      <block type="variables_get" id="=4]3G:wlORk-di|C+Yu2">
                                                        <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                                                      </block>
                                                    </value>
                                                    <value name="AT">
                                                      <block type="math_number" id="4F.6e{sBVFJoQwl7w.0_">
                                                        <field name="NUM">1</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="s4d_send_member" id="Auw1M)85KcF(a}VUmz%j">
                                                    <value name="CONTENT">
                                                      <block type="text_join" id="aOyhq-PFNVFGi[$1#E|#">
                                                        <mutation items="9"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text" id="1e(zJvaFpICg-rm,g.f[">
                                                            <field name="TEXT">you were kicked from </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_server_name" id="bKgugw%%X\`}i,^c=|e?w">
                                                            <value name="SERVER">
                                                              <block type="s4d_message_guild" id="h^DVt=M:~?ExiI~)-%Cn"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="text" id="gn$YokI]Bu*tJj=0^Ri{">
                                                            <field name="TEXT">!</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="s4d_newline" id="TlnQWb[qA\`MW?cKY2/rI"></block>
                                                        </value>
                                                        <value name="ADD4">
                                                          <block type="text" id="Qe)Y1[eTkoTyV7a6ht=Y">
                                                            <field name="TEXT">by: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD5">
                                                          <block type="s4d_member_tag" id="7OJ!SYm~;WPcMbRgKjKx">
                                                            <value name="MEMBER">
                                                              <block type="s4d_message_author" id="MqfL0}9=*PhVnjLjDhfn"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD6">
                                                          <block type="s4d_newline" id="%-:j*_1hiveIq_~vGp%L"></block>
                                                        </value>
                                                        <value name="ADD7">
                                                          <block type="text" id="s*=A~Pe3!h;4O,KqjN:a">
                                                            <field name="TEXT">reason: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD8">
                                                          <block type="lists_split" id="*i[F[#UgsM3:Kt![X5k*">
                                                            <mutation mode="JOIN"></mutation>
                                                            <field name="MODE">JOIN</field>
                                                            <value name="INPUT">
                                                              <block type="variables_get" id="2soSX$t2u!OUA2,=ZU$z">
                                                                <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                              </block>
                                                            </value>
                                                            <value name="DELIM">
                                                              <shadow type="text" id=":7OCQh-6Vit$@t,}tWlO">
                                                                <field name="TEXT"> </field>
                                                              </shadow>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="MEMBER">
                                                      <block type="s4d_mentioned_member" id="KCQK_(x2XzNe*lB:K,ii"></block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_kick_member" id="Y5EM^azRq7knWv0myR[B">
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id="+wgp#0nqT7ta$h(8GE=B"></block>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <statement name="ELSE">
                                                  <block type="s4d_send_member" id="?O5\`w[J1_#}r]d=tN|:B">
                                                    <value name="CONTENT">
                                                      <block type="text_join" id="b{6~Zhgzq[F}I8s6|fOL">
                                                        <mutation items="9"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text" id="3}sTZUTkl9^{X0u.*?cP">
                                                            <field name="TEXT">you were kicked from </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_server_name" id="QSyBsAGa@bD7p@8sZcDq">
                                                            <value name="SERVER">
                                                              <block type="s4d_message_guild" id="#H(:DNL=t?S4[kRMQ0lq"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="text" id="e?ybac,F|]D\`^9H:?-),">
                                                            <field name="TEXT">!</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="s4d_newline" id="Hve]]]L;.H7w0*XSmOvJ"></block>
                                                        </value>
                                                        <value name="ADD4">
                                                          <block type="text" id="b.67^Ml[7M}8Cd]8/A5R">
                                                            <field name="TEXT">by: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD5">
                                                          <block type="s4d_member_tag" id="]9+@yvJu./b$g@}[=|fe">
                                                            <value name="MEMBER">
                                                              <block type="s4d_message_author" id="P@@cx!3N[oVETN9B#x9d"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD6">
                                                          <block type="s4d_newline" id="Q{^?j@@zbZ;e:zB,gc1J"></block>
                                                        </value>
                                                        <value name="ADD7">
                                                          <block type="text" id="B*6KcxVUK|s%X^H}=pJ0">
                                                            <field name="TEXT">reason: </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD8">
                                                          <block type="text" id="tuuFpEmTM\`7f}%K5)b]/">
                                                            <field name="TEXT">not defined</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="MEMBER">
                                                      <block type="s4d_mentioned_member" id="!UrBt*NNIH[}E:PPBQ:o"></block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_kick_member" id="S]!@p6il,IQR[t3oFCH{">
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id=".u{1{Q#ejZj\`/\`xu76{x"></block>
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
                                          <block type="s4d_reply" id=")V|!IaX%2Cbgcp\`zwC~D">
                                            <value name="CONTENT">
                                              <shadow type="text" id="eHYZDc.5UY9v1k*EIgVH">
                                                <field name="TEXT">you cannot kick a staff!</field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply" id="6L4K{O0;{]o;:;=-I}CD">
                                        <value name="CONTENT">
                                          <shadow type="text" id="KMIgm,|wba[mg|zl9zB5">
                                            <field name="TEXT">you need to ping a member to kick!</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                                <statement name="ELSE">
                                  <block type="s4d_reply" id="X)t!wb8e[PDc1XEjS,a5">
                                    <value name="CONTENT">
                                      <shadow type="text" id="{Bv,cvX3wr}$NU{YW7+~">
                                        <field name="TEXT">you dont have kick permissions!</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if" id="ZR=jx[y+GFfs5N?${=%A">
                                <value name="IF0">
                                  <block type="logic_compare" id="BNeF@$Q_oe]t8roDIs)+">
                                    <field name="OP">EQ</field>
                                    <value name="A">
                                      <block type="variables_get" id="E8.b85;-p5eCOoNDl4#k">
                                        <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="text" id="s?[gj@h$c5NnW$K-S9_P">
                                        <field name="TEXT">ban</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="controls_if" id="U4Cx4J!Y,bXO2x\`=wT$V">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="s4d_member_has_permission" id=",w}}kU)V(=,m,dU4Y_t-">
                                        <field name="PERMISSION">BAN_MEMBERS</field>
                                        <value name="MEMBER">
                                          <block type="s4d_message_author" id="BeQncG\`y(IeZRdK=-K*5"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="controls_if" id="hqbwU;|d{-lYF1o_^?zi">
                                        <mutation else="1"></mutation>
                                        <value name="IF0">
                                          <block type="logic_compare" id="R:[ng!-VQ8IS{!Wp;{{k">
                                            <field name="OP">NEQ</field>
                                            <value name="A">
                                              <block type="s4d_mentioned_member" id="Vj5tcN$TL;LH[B^l=I|\`"></block>
                                            </value>
                                            <value name="B">
                                              <block type="logic_null" id="V{tRhP(6ea=%(Nn?T:3F"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="controls_if" id="Prmg^$+x.sIr0S8}qNB{">
                                            <mutation else="1"></mutation>
                                            <value name="IF0">
                                              <block type="s4d_member_has_permission" id="ASi/$%Vj)KhjP}G-Zf98">
                                                <field name="PERMISSION">BAN_MEMBERS</field>
                                                <value name="MEMBER">
                                                  <block type="s4d_mentioned_member" id="@5;7aG?q+c678UY-]JTG"></block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="lists_getIndex" id="{nJ#RGghm{$+k|j)F15f">
                                                <mutation statement="true" at="true"></mutation>
                                                <field name="MODE">REMOVE</field>
                                                <field name="WHERE">FROM_START</field>
                                                <value name="VALUE">
                                                  <block type="variables_get" id="]HOn(m~1yjUV)~gPEm)z">
                                                    <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                  </block>
                                                </value>
                                                <value name="AT">
                                                  <block type="math_number" id="bVU2\`xaBY[bnYbim-Ya|">
                                                    <field name="NUM">1</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="controls_if" id="{ccDKI\`d@TyV\`Rw\`=J$6">
                                                    <mutation else="1"></mutation>
                                                    <value name="IF0">
                                                      <block type="lists_getIndex" id="B,!,_HimBGOHob9-)=m1">
                                                        <mutation statement="false" at="true"></mutation>
                                                        <field name="MODE">GET</field>
                                                        <field name="WHERE">FROM_START</field>
                                                        <value name="VALUE">
                                                          <block type="variables_get" id="5i38tvfKk3177]/;^ij:">
                                                            <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                                                          </block>
                                                        </value>
                                                        <value name="AT">
                                                          <block type="math_number" id="uZ7ril_p.f,dC)R^^lAU">
                                                            <field name="NUM">1</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_send_member" id="F4[6Hg]Fd00VEs#]{2cX">
                                                        <value name="CONTENT">
                                                          <block type="text_join" id="9?nzCxUm1$4=Qu4-#{4e">
                                                            <mutation items="9"></mutation>
                                                            <value name="ADD0">
                                                              <block type="text" id="VALc(fqay^JoC-yXVGxt">
                                                                <field name="TEXT">you were banned from </field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_server_name" id="Et)rr|hK\`3B@XH3;e+||">
                                                                <value name="SERVER">
                                                                  <block type="s4d_message_guild" id="Z@EvxougbV5OwO,)=74x"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD2">
                                                              <block type="text" id="44p0D!qg:V7;/GkINN%i">
                                                                <field name="TEXT">!</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD3">
                                                              <block type="s4d_newline" id="}0xC]Q;2D,EWd2/V#U^I"></block>
                                                            </value>
                                                            <value name="ADD4">
                                                              <block type="text" id="lYa1#KJNtjCTYR*Ct[~~">
                                                                <field name="TEXT">by: </field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD5">
                                                              <block type="s4d_member_tag" id="ganRB~=zff\`p:pUXs2wZ">
                                                                <value name="MEMBER">
                                                                  <block type="s4d_message_author" id=",$^9qRmZMm$2f|T0lFe#"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD6">
                                                              <block type="s4d_newline" id="JT#U/GVi)B{%DUyyiYgm"></block>
                                                            </value>
                                                            <value name="ADD7">
                                                              <block type="text" id="Q#)i)UgBy*7gTyG[]:N|">
                                                                <field name="TEXT">reason: </field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD8">
                                                              <block type="lists_split" id="1TbqD*Q30aW4aI$z5^[.">
                                                                <mutation mode="JOIN"></mutation>
                                                                <field name="MODE">JOIN</field>
                                                                <value name="INPUT">
                                                                  <block type="variables_get" id=".hY3@cR(*Bl}j/*|8oDS">
                                                                    <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                                  </block>
                                                                </value>
                                                                <value name="DELIM">
                                                                  <shadow type="text" id="lQAQHIHfKAN9gnB11@t}">
                                                                    <field name="TEXT"> </field>
                                                                  </shadow>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id="A+*?jl*5yjwLRQ@72xn4"></block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_ban_member" id="d^%ZXy!Ohq5[T9/y2.Q@">
                                                            <value name="MEMBER">
                                                              <block type="s4d_mentioned_member" id="Y%CHmMbAZQ::7HUY9v}G"></block>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <statement name="ELSE">
                                                      <block type="s4d_send_member" id="o7AP+Ogry6]C2{bQ6p.,">
                                                        <value name="CONTENT">
                                                          <block type="text_join" id="463JSfg0xIB1Rlm#NmVw">
                                                            <mutation items="9"></mutation>
                                                            <value name="ADD0">
                                                              <block type="text" id="e5%I8_x$bb^{,368H4:\`">
                                                                <field name="TEXT">you were banned from </field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_server_name" id="D^|Jt.Of|W3J.m^(|bxh">
                                                                <value name="SERVER">
                                                                  <block type="s4d_message_guild" id="jcW9R%i46JPjR,CLW?VI"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD2">
                                                              <block type="text" id="fx-dI?4}7$a8t,7DMMeL">
                                                                <field name="TEXT">!</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD3">
                                                              <block type="s4d_newline" id="{OVc:!#^y,cqs7w~2s2["></block>
                                                            </value>
                                                            <value name="ADD4">
                                                              <block type="text" id="Pc]!uy{JOc{uw-}zer[j">
                                                                <field name="TEXT">by: </field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD5">
                                                              <block type="s4d_member_tag" id="c^K9yIgl!t?{B+2EJiAI">
                                                                <value name="MEMBER">
                                                                  <block type="s4d_message_author" id="X\`jhJfa0X({B~^BFaQg."></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD6">
                                                              <block type="s4d_newline" id="HknAl8fx)%5pGiAs,0jN"></block>
                                                            </value>
                                                            <value name="ADD7">
                                                              <block type="text" id=",mJ/tTL$][a)A[a5Tk0(">
                                                                <field name="TEXT">reason: </field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD8">
                                                              <block type="text" id="WCxk+?\`p.kCqKo$^6hvv">
                                                                <field name="TEXT">not defined</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id="bryyi?v2pQld;f)O)TO{"></block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_ban_member" id="b7[dph;aO6*bJ\`x1l878">
                                                            <value name="MEMBER">
                                                              <block type="s4d_mentioned_member" id="wGaH%@o#Y]s5_@DqGyQF"></block>
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
                                              <block type="s4d_reply" id="!RNP0LkbR1tMU%RT%fWz">
                                                <value name="CONTENT">
                                                  <shadow type="text" id="s5O(?HxQKcu%0KKF9wah">
                                                    <field name="TEXT">you cannot ban a staff!</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </statement>
                                          </block>
                                        </statement>
                                        <statement name="ELSE">
                                          <block type="s4d_reply" id="32VQ^pzJaluayFN-m6F;">
                                            <value name="CONTENT">
                                              <shadow type="text" id="gE\`QzAat\`ZWb^vjBPes%">
                                                <field name="TEXT">you need to ping a member to ban!</field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply" id="wZ{,uIb@z9YECJfsFbx#">
                                        <value name="CONTENT">
                                          <shadow type="text" id="p?|QRwQz!(XWjLNY}[:?">
                                            <field name="TEXT">you dont have ban permissions!</field>
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
