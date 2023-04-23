export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="RZxjdgit;+n*/oVOSP+l">botid</variable>
    <variable id="QR.#=[=ge?ZUtd#Pi^P;">defaultprefix</variable>
    <variable id="K0^jd-$jg$=dzRu1m*Z.">prefix</variable>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="/x;AZt|\`Va:Hb020-{-I">commandwithprefix</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
  </variables>
  <block type="s4d_login" id="kNoxTIZ{Bwm)?E=8WUj$" x="0" y="0">
    <value name="TOKEN">
      <block type="text" id="7d=gRYO/t!D8}kD(g9Vg">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_connected" id="frbwd]tL+Y@XP1J0iZ[1" x="0" y="104">
    <statement name="STATEMENTS">
      <block type="variables_set" id="T=rS1\`JsnDm#G-z:},wN">
        <field name="VAR" id="RZxjdgit;+n*/oVOSP+l">botid</field>
        <value name="VALUE">
          <block type="text" id="jO~*4~*.yH9-UnCf/[K+">
            <field name="TEXT">Your bot id</field>
          </block>
        </value>
        <next>
          <block type="variables_set" id="QuZBN{zb1hzHT:1Gu/)B">
            <field name="VAR" id="QR.#=[=ge?ZUtd#Pi^P;">defaultprefix</field>
            <value name="VALUE">
              <block type="text" id="#e{o94(Cd-g%TTK*S?Zr">
                <field name="TEXT">!</field>
              </block>
            </value>
            <next>
              <block type="s4d_set_data" id="[3f+w7z.pSHYEjc5{.*6">
                <value name="KEY">
                  <shadow type="text" id="m;bpqC5cIwg5#9+]ok#K">
                    <field name="TEXT">prefix</field>
                  </shadow>
                </value>
                <value name="VALUE">
                  <shadow type="text" id="Ql)T0bx{MJ495)6/DE^d">
                    <field name="TEXT">world</field>
                  </shadow>
                  <block type="variables_get" id=";{]Lon*I[5;@Xor=qXX6">
                    <field name="VAR" id="QR.#=[=ge?ZUtd#Pi^P;">defaultprefix</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="s4d_on_message" id="+Q@qA4DZ.)H0dU~:qJFA" x="0" y="376">
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
          <block type="variables_set" id="i)7uIu1de.-(P#_zD3d*">
            <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
            <value name="VALUE">
              <block type="s4d_get_data" id=";]6BN~\`eV2;H(|~9E6:z">
                <value name="KEY">
                  <shadow type="text" id="S6ubS7s;8zRPn(Lpm5K+">
                    <field name="TEXT">hello</field>
                  </shadow>
                  <block type="text_join" id="V72|~9\`XzWt7c5x3Z8T!">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="s4d_message_guild_raw" id="km!xbh~2R6RcNa{\`t8AG">
                        <field name="SEARCH_TYPE">ID</field>
                      </block>
                    </value>
                    <value name="ADD1">
                      <block type="text" id="gy/l,tv_zCM2Fwwz17U[">
                        <field name="TEXT">-prefix</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="controls_if" id="?Qq5+RBtKW)/q*Xf_zKh">
                <value name="IF0">
                  <block type="logic_compare" id="R/Cde;!29AdAQ4mmroNT">
                    <field name="OP">EQ</field>
                    <value name="A">
                      <block type="variables_get" id="%:8i6t}K!ku%#w[:l{(9">
                        <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="logic_null" id="J%uPF.+5=.xFj1GHO^}l"></block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="variables_set" id="{+Wln|(DY(tAb#n]uI_z">
                    <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                    <value name="VALUE">
                      <block type="s4d_get_data" id="7-MAB2)5y,Bjcz]5Dtsb">
                        <value name="KEY">
                          <shadow type="text" id="yn2+3K+B$C5ZFk3WiZ:^">
                            <field name="TEXT">prefix</field>
                          </shadow>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="s4d_set_data" id="^?CV@E+0)[a3A\`38I~eo">
                        <value name="KEY">
                          <shadow type="text" id="wg,AQ:r{@[[[+Z:|s^;7">
                            <field name="TEXT">hello</field>
                          </shadow>
                          <block type="text_join" id="ib8{e*TEBIsq+YH_2wO(">
                            <mutation items="2"></mutation>
                            <value name="ADD0">
                              <block type="s4d_message_guild_raw" id="o|$pc?2a-4{7u}N0gM*1">
                                <field name="SEARCH_TYPE">ID</field>
                              </block>
                            </value>
                            <value name="ADD1">
                              <block type="text" id="BK.}1+A]cwz4]Q$^h~a/">
                                <field name="TEXT">-prefix</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="VALUE">
                          <shadow type="text" id="Y3OZx+Q0g6)5s~6C+55+">
                            <field name="TEXT">world</field>
                          </shadow>
                          <block type="variables_get" id="+|;X1O7G2#fHpb5vCIn/">
                            <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                          </block>
                        </value>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
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
                          <block type="controls_if" id=")hxoCumK8aIuJ.}=uT[,">
                            <value name="IF0">
                              <block type="logic_compare" id="I]t^u1jOKG:M2H14Ao+]">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="s4d_member_id" id="%p#}Z1d0xjnA]Sr?rS+N">
                                    <value name="MEMBER">
                                      <block type="s4d_mentioned_member" id="vYFCRtO=nw4:2t?i_Gj%"></block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="variables_get" id="4f!l/GUQT?%GK.ZLNww9">
                                    <field name="VAR" id="RZxjdgit;+n*/oVOSP+l">botid</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="s4d_reply" id="eC1XnS:E[#KP:/jYqC_X">
                                <value name="CONTENT">
                                  <shadow type="text" id=",-nGF9y?E(#5v#iEV{eW">
                                    <field name="TEXT">Hey!</field>
                                  </shadow>
                                  <block type="text_join" id="Be^:u3J*6l}rRmpj]rxJ">
                                    <mutation items="2"></mutation>
                                    <value name="ADD0">
                                      <block type="text" id="kv#zx}MuxGwn8I9q,Gq\`">
                                        <field name="TEXT">My prefix is:</field>
                                      </block>
                                    </value>
                                    <value name="ADD1">
                                      <block type="variables_get" id="3S+dt#}q3cAYguE~=L)2">
                                        <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if" id="-7|3|KZj``w]ghh@9K\`g">
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
                                                <field name="TEXT">prefix</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="controls_if" id="W#A}at2w[C5qdwzGw/4u">
                                            <mutation else="1"></mutation>
                                            <value name="IF0">
                                              <block type="s4d_member_has_permission" id="ycsP$).;j+r6]Y[Ap-kz">
                                                <field name="PERMISSION">ADMINISTRATOR</field>
                                                <value name="MEMBER">
                                                  <block type="s4d_message_author" id="vG??SD*!5u/B)$nC-%Y7"></block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="variables_set" id="|gVG(g;mHhzSK7#Ag|%X">
                                                <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                                <value name="VALUE">
                                                  <block type="lists_getIndex" id="e\`LXPvwzXBZ~+$?|P7p9">
                                                    <mutation statement="false" at="true"></mutation>
                                                    <field name="MODE">GET_REMOVE</field>
                                                    <field name="WHERE">FROM_START</field>
                                                    <value name="VALUE">
                                                      <block type="variables_get" id="ZpS$lcl{yd?_DaTH(s]L">
                                                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                      </block>
                                                    </value>
                                                    <value name="AT">
                                                      <block type="math_number" id="..^mVQsE//.buTtF)SCZ">
                                                        <field name="NUM">1</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="controls_if" id="e$B~jIMHS4i7it\`vm9]3">
                                                    <mutation else="1"></mutation>
                                                    <value name="IF0">
                                                      <block type="logic_negate" id="AX{u(NS]z!|qE=W)%Dlf">
                                                        <value name="BOOL">
                                                          <block type="logic_operation" id="yv#L9/,,#q?0.45]+tlN">
                                                            <field name="OP">OR</field>
                                                            <value name="A">
                                                              <block type="logic_compare" id="9F-mfrjN)J]/cN8LubDu">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                  <block type="variables_get" id="cn%rk,\`rFPTA5B887_-C">
                                                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="logic_null" id="xBOS,zLHmoOV\`p~G!V^o"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="logic_compare" id="9y!dtwysL1E5RQPy|e{8">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                  <block type="variables_get" id="Tg#avW/PM1_o+@Q|7gv,">
                                                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="text" id="GC~C3``G,%Oc3kLJZBMV">
                                                                    <field name="TEXT">space</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="variables_set" id="BhSKEfxx.dMVQ#xB4Q)8">
                                                        <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                                                        <value name="VALUE">
                                                          <block type="variables_get" id="*BWs)e0_3l9\`Irs0wqC?">
                                                            <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_set_data" id="~4;Vtg2q!U/H/oB[bNn#">
                                                            <value name="KEY">
                                                              <shadow type="text" id="16bP4#)1FwAOs3S/11u_">
                                                                <field name="TEXT">hello</field>
                                                              </shadow>
                                                              <block type="text_join" id="T2r.SS^4-m4t|h;z+.#;">
                                                                <mutation items="2"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="s4d_message_guild_raw" id="(iuxktqh7#hDRVNh|NBB">
                                                                    <field name="SEARCH_TYPE">ID</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="text" id="?Af@^+}zra^BSZ]f[u^|">
                                                                    <field name="TEXT">-prefix</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="VALUE">
                                                              <shadow type="text" id="~^QPGho^Y#@G:6QR!Tn9">
                                                                <field name="TEXT">world</field>
                                                              </shadow>
                                                              <block type="variables_get" id="xMpoM^b;D.kc5DOY(\`g2">
                                                                <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_reply" id="!xwz}7PVp0B5OX!pm15u">
                                                                <value name="CONTENT">
                                                                  <shadow type="text" id="iB?f,W|F\`v(fOohT!LdM">
                                                                    <field name="TEXT">Hey!</field>
                                                                  </shadow>
                                                                  <block type="text_join" id="rNSW}0_bxyX];cCf$Hel">
                                                                    <mutation items="2"></mutation>
                                                                    <value name="ADD0">
                                                                      <block type="text" id="(_|\`z,6~X-UTf4IL*T{C">
                                                                        <field name="TEXT">Set prefix to:</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="ADD1">
                                                                      <block type="variables_get" id="A1(37Sa57[/@3;0,#S@!">
                                                                        <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
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
                                                    <statement name="ELSE">
                                                      <block type="s4d_reply" id="mx.h\`HtHL[wC3BOMn4U|">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="@uuvLK}9v^H1,1J1:T5^">
                                                            <field name="TEXT">Hey!</field>
                                                          </shadow>
                                                          <block type="text_join" id="JW0fMNjx{pBT4\`mQ!+qj">
                                                            <mutation items="3"></mutation>
                                                            <value name="ADD0">
                                                              <block type="text" id="j7xeo[tys_mbLcxKViZ9">
                                                                <field name="TEXT">You need to put the new prefix after</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="variables_get" id="?go(zE:^gqqTuTpz-s,8">
                                                                <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD2">
                                                              <block type="variables_get" id="v1Kr=%^i*t?BQ/aVqPA+">
                                                                <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
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
                                                    <field name="TEXT">pong!!</field>
                                                  </shadow>
                                                  <block type="text_join" id="2xz@Vogccs-@jK/w*bvX">
                                                    <mutation items="3"></mutation>
                                                    <value name="ADD0">
                                                      <block type="text" id="qwUV_yl2z0GI,Pv6:;2*">
                                                        <field name="TEXT">You dont have permission to use</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="variables_get" id="RV~d@u,/~5B?DXyNiy0V">
                                                        <field name="VAR" id="K0^jd-$jg$=dzRu1m*Z.">prefix</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD2">
                                                      <block type="variables_get" id="wNidEce!}ZAoc-)dg4Iv">
                                                        <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </statement>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="controls_if" id="bhAM]r^e?Ns\`R/^kDCIf">
                                            <value name="IF0">
                                              <block type="logic_compare" id="q[0$lQyIfF-]w@d/:W?t">
                                                <field name="OP">EQ</field>
                                                <value name="A">
                                                  <block type="variables_get" id="877JVE29,\`Bx([{gGJ0d">
                                                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="text" id="E$Llb,aMmkxQ@r3VXk=b">
                                                    <field name="TEXT">say</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="s4d_reply" id="@bVh/FZdX.egmAL6j#X%">
                                                <value name="CONTENT">
                                                  <shadow type="text" id="ThiX/rY)UA)Y+PTwx31Z">
                                                    <field name="TEXT">Hey!</field>
                                                  </shadow>
                                                  <block type="lists_split" id="6|b*M*ST_[khbd2AyZd=">
                                                    <mutation mode="JOIN"></mutation>
                                                    <field name="MODE">JOIN</field>
                                                    <value name="INPUT">
                                                      <block type="variables_get" id=";Q0L8;i,-Y)ws,e7j{Ho">
                                                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                      </block>
                                                    </value>
                                                    <value name="DELIM">
                                                      <shadow type="text" id="/#?l*]v6m~WMK9!ptU6|">
                                                        <field name="TEXT"> </field>
                                                      </shadow>
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
</xml>
`;
