export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="s4d_login" id="L)$.w:^Wagj@GvgHf7/=" x="0" y="0">
    <value name="TOKEN">
      <shadow type="text" id="LF/mH=|S0k=Ft*tcspL-">
        <field name="TEXT">Your bot token</field>
      </shadow>
    </value>
  </block>
  <block type="frost_slash_register" id="B!OZ\`L!n6wK1J|?tQCe1" x="0" y="106">
    <statement name="OPTIONS">
      <block type="frost_slash_command" id="2/*v/YZshjQxLBPQ-QqM">
        <value name="NAME">
          <shadow type="text" id="Huli$:q!l/q/MMS]*[iC">
            <field name="TEXT">ping</field>
          </shadow>
        </value>
        <value name="DESC">
          <shadow type="text" id="tkD^N%pwskHG-)u,S^i%">
            <field name="TEXT">Pong!</field>
          </shadow>
        </value>
        <next>
          <block type="frost_slash_command" id="=G^1i~d1t6#@hW*P(:{y">
            <value name="NAME">
              <shadow type="text" id="taXML_nO7|RnJx3;|31%">
                <field name="TEXT">say</field>
              </shadow>
            </value>
            <value name="DESC">
              <shadow type="text" id="FlOWE,Q_{O~KQ\`AkWmFN">
                <field name="TEXT">Say</field>
              </shadow>
            </value>
            <statement name="OPTIONS">
              <block type="frost_slash_options1" id="el*dEoT^Gct[=81meSFR">
                <field name="TYPE">3</field>
                <value name="NAME">
                  <shadow type="text" id="[~tJaF.@H~MqeOxh3j+r">
                    <field name="TEXT">text</field>
                  </shadow>
                </value>
                <value name="DESC">
                  <shadow type="text" id="C:q=lsO+0*1Kn9vZ\`4.m">
                    <field name="TEXT">Text to say</field>
                  </shadow>
                </value>
                <value name="REQUIRED">
                  <shadow type="logic_boolean" id="yQR@([QvoDId.!=cRTUC">
                    <field name="BOOL">TRUE</field>
                  </shadow>
                </value>
              </block>
            </statement>
            <next>
              <block type="frost_slash_command" id="E@Pjo\`/coY+B-s%IF918">
                <value name="NAME">
                  <shadow type="text" id="t+X?ejO6z.Dyo$42@5gi">
                    <field name="TEXT">sub</field>
                  </shadow>
                </value>
                <value name="DESC">
                  <shadow type="text" id=";-;K:8*ea$.iwIqGBu-%">
                    <field name="TEXT">a sub comamnd</field>
                  </shadow>
                </value>
                <statement name="OPTIONS">
                  <block type="frost_slash_sub_command" id="rql8+$O#L\`Yoy;s5b}9+">
                    <value name="NAME">
                      <shadow type="text" id="Yw$in~k7Lt;@}|p[yd+G">
                        <field name="TEXT">hi</field>
                      </shadow>
                    </value>
                    <value name="DESC">
                      <shadow type="text" id="vtda;7mK[#gTww~/{m)6">
                        <field name="TEXT">Hello</field>
                      </shadow>
                    </value>
                    <next>
                      <block type="frost_slash_sub_command" id=";DO~P3-lsvp$D[GBmeso">
                        <value name="NAME">
                          <shadow type="text" id="kWM6|iPNg%_V/kS!W-Z.">
                            <field name="TEXT">bye</field>
                          </shadow>
                        </value>
                        <value name="DESC">
                          <shadow type="text" id="GGkn1FiThS.rV*ox6/PY">
                            <field name="TEXT">Bye</field>
                          </shadow>
                        </value>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="frost_slash_command" id="!.:,sl1p)p/-iaAL2]VN">
                    <value name="NAME">
                      <shadow type="text" id="D?}Q#devRfc|(-pRC0/8">
                        <field name="TEXT">group</field>
                      </shadow>
                    </value>
                    <value name="DESC">
                      <shadow type="text" id="Y$)sbu,TH4FB\`9/~J_X|">
                        <field name="TEXT">a sub comamnd group</field>
                      </shadow>
                    </value>
                    <statement name="OPTIONS">
                      <block type="frost_slash_sub_command_group" id=";]@/Bmao0P!=[vedZR}m">
                        <value name="NAME">
                          <shadow type="text" id="R!0@3A@7CDvQ88FsI$mg">
                            <field name="TEXT">one</field>
                          </shadow>
                        </value>
                        <value name="DESC">
                          <shadow type="text" id="IV_mWgf4NI]xB,Iq#aVz">
                            <field name="TEXT">just a group</field>
                          </shadow>
                        </value>
                        <statement name="OPTIONS">
                          <block type="frost_slash_sub_command" id="1O5)I*q[-s85t9WmC)dK">
                            <value name="NAME">
                              <shadow type="text" id="VNyDyBRV}Z7FDm+llXX3">
                                <field name="TEXT">ok</field>
                              </shadow>
                            </value>
                            <value name="DESC">
                              <shadow type="text" id="FzUl{%N[f$(=h{HrBI36">
                                <field name="TEXT">Ok</field>
                              </shadow>
                            </value>
                          </block>
                        </statement>
                      </block>
                    </statement>
                    <next>
                      <block type="frost_slash_command" id="UcB2K3D[SqsP7#\`w:8L^">
                        <value name="NAME">
                          <shadow type="text" id=",2On:C%S\`TQxVF,.TX?C">
                            <field name="TEXT">choose</field>
                          </shadow>
                        </value>
                        <value name="DESC">
                          <shadow type="text" id="9I;I:uwn{?com!L*)w4.">
                            <field name="TEXT">Choose one</field>
                          </shadow>
                        </value>
                        <statement name="OPTIONS">
                          <block type="frost_slash_options1" id="[cN8|JZe,%4:t0,b3J#]">
                            <field name="TYPE">3</field>
                            <value name="NAME">
                              <shadow type="text" id="M{gbU%_r*;/BOwpgV1g^">
                                <field name="TEXT">Choice</field>
                              </shadow>
                            </value>
                            <value name="DESC">
                              <shadow type="text" id="qAp|Z)0B~pZ+7%WCAOQy">
                                <field name="TEXT">your choice</field>
                              </shadow>
                            </value>
                            <value name="REQUIRED">
                              <shadow type="logic_boolean" id="p9NU3sg|4-b^9MecsH5#">
                                <field name="BOOL">TRUE</field>
                              </shadow>
                            </value>
                            <statement name="CHOICES">
                              <block type="frost_slash_choices" id="/G1fh1BTa[=b~kpy_u1o">
                                <value name="NAME">
                                  <shadow type="text" id="CGw};..}X?#zuvKJ1_hz">
                                    <field name="TEXT">Big Berb</field>
                                  </shadow>
                                </value>
                                <value name="OPTION_NAME">
                                  <shadow type="text" id="|}O^bTB\`WfIx_=r7v#,I">
                                    <field name="TEXT">bberb</field>
                                  </shadow>
                                </value>
                                <next>
                                  <block type="frost_slash_choices" id="l:%wu)A}aay34l1@c8}7">
                                    <value name="NAME">
                                      <shadow type="text" id="#jR}tlQu9Tu*3Pd7e:re">
                                        <field name="TEXT">Small Berb</field>
                                      </shadow>
                                    </value>
                                    <value name="OPTION_NAME">
                                      <shadow type="text" id="z_zoX/0}SZ@q8?*isK28">
                                        <field name="TEXT">sberb</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="frost_slash_choices" id="[-1BikE-VQXnBYggY7@+">
                                        <value name="NAME">
                                          <shadow type="text" id="}W:ySa|?PJsX8-4(^#d-">
                                            <field name="TEXT">Knife</field>
                                          </shadow>
                                        </value>
                                        <value name="OPTION_NAME">
                                          <shadow type="text" id=")t@R_.llSzAGiT1,af0J">
                                            <field name="TEXT">knoif</field>
                                          </shadow>
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
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="on_slash" id="ZVFFr6^1=oeSoM}Z@1)J" x="0" y="2172">
    <statement name="STATEMENTS">
      <block type="controls_if" id="+cl7MYLHHiu*=i/b?._!">
        <value name="IF0">
          <block type="logic_compare" id="RHY5kM2q2OEgjg],ju~?">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="interaction_name" id="qDF3]i:))H$iLAEDTErb"></block>
            </value>
            <value name="B">
              <block type="text" id="*03[AmK8oO6@v9IJm4rF">
                <field name="TEXT">ping</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="slash_reply" id="$hEfG_(af|d-:r.%_3PA">
            <value name="CONTENT">
              <block type="text" id="e5ld!N}sXY]K?2TIh39k">
                <field name="TEXT">Pong!</field>
              </block>
            </value>
            <value name="BOOLEAN">
              <block type="logic_boolean" id="Lk]U$_DmHEC2@jg[=u;p">
                <field name="BOOL">FALSE</field>
                <comment pinned="false" h="128.88888549804688" w="265.55560302734375">true - only the person who t=did the comamnd can see it

false - everyone can see it
                </comment>
              </block>
            </value>
          </block>
        </statement>
        <next>
          <block type="controls_if" id="^49kG)M9)CBqEp-shYr-">
            <value name="IF0">
              <block type="logic_compare" id="S:D-={%%evt1%qw%Dqgj">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="interaction_name" id="Dqd[\`K9]*5:N_zysR=?:"></block>
                </value>
                <value name="B">
                  <block type="text" id="2N#f\`34n!^ujiePA01t]">
                    <field name="TEXT">say</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="slash_reply" id="OrV0Op4DS+TN~ddWV|-z">
                <value name="CONTENT">
                  <block type="options" id="@%?fL.Cuxa]i1{*PU~H6">
                    <mutation mode="String"></mutation>
                    <field name="SEARCH">String</field>
                    <value name="BOOLEAN">
                      <block type="text" id="4ft]D*XbFIFck}UX{!2L">
                        <field name="TEXT">text</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="BOOLEAN">
                  <block type="logic_boolean" id="M~UM5GM)[+,v]yCTIoP6">
                    <field name="BOOL">FALSE</field>
                    <comment pinned="false" h="128" w="265">true - only the person who t=did the comamnd can see it

false - everyone can see it
                    </comment>
                  </block>
                </value>
              </block>
            </statement>
            <next>
              <block type="controls_if" id="}gh)NfkL+?_6#qKf1h:e">
                <value name="IF0">
                  <block type="logic_compare" id="c+{h7,ZnJ_*v?TggG55b">
                    <field name="OP">EQ</field>
                    <value name="A">
                      <block type="interaction_name" id="pGIG;5wHTn7dRYKD;bcP"></block>
                    </value>
                    <value name="B">
                      <block type="text" id="t9YX+d57cuBm~i0m^=gR">
                        <field name="TEXT">sub</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="controls_if" id="aMex@NV,k]dP5I_x!x3\`">
                    <value name="IF0">
                      <block type="logic_compare" id="ydMWP0yCR2Uyf#H-(T;1">
                        <field name="OP">EQ</field>
                        <value name="A">
                          <block type="options" id="\`k8RtUfZT@6JhRMpZ^6l">
                            <mutation mode="Subcommand"></mutation>
                            <field name="SEARCH">Subcommand</field>
                            <value name="BOOLEAN">
                              <block type="text" id="*=zpwcc}d]M@/kx[4zz@">
                                <field name="TEXT">hi</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="text" id=":_4Z*6b+RlyLej/l.KTT">
                            <field name="TEXT">hi</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="slash_reply" id="3ds?@p2hCRo@5y)f[0v@">
                        <value name="CONTENT">
                          <block type="text" id="3\`FP{g.q](kL|c|qTfTb">
                            <field name="TEXT">Hello</field>
                          </block>
                        </value>
                        <value name="BOOLEAN">
                          <block type="logic_boolean" id="ZT|aw.tJKQ{1vnIQxtON">
                            <field name="BOOL">FALSE</field>
                            <comment pinned="false" h="128" w="265">true - only the person who t=did the comamnd can see it

false - everyone can see it
                            </comment>
                          </block>
                        </value>
                      </block>
                    </statement>
                    <next>
                      <block type="controls_if" id="!lBGsP-n)g7A0IiKyrXa">
                        <value name="IF0">
                          <block type="logic_compare" id="[=!0:Uvz-sz5AY7br|(4">
                            <field name="OP">EQ</field>
                            <value name="A">
                              <block type="options" id=":hF+L!u71P48/-1AftXR">
                                <mutation mode="Subcommand"></mutation>
                                <field name="SEARCH">Subcommand</field>
                                <value name="BOOLEAN">
                                  <block type="text" id="o^$[z3M2%0z#,tPMGw0j">
                                    <field name="TEXT">bye</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="text" id="W_PK3oLR?=q_{]i.*)74">
                                <field name="TEXT">bye</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="slash_reply" id="1#=c%;-/gJS1fnC-Bk??">
                            <value name="CONTENT">
                              <block type="text" id="NCJ^RZ7eXw+8%ry10j{:">
                                <field name="TEXT">Ok bye :(</field>
                              </block>
                            </value>
                            <value name="BOOLEAN">
                              <block type="logic_boolean" id="#~,}^,WgyeFR3V$w9(.C">
                                <field name="BOOL">FALSE</field>
                                <comment pinned="false" h="128" w="265">true - only the person who t=did the comamnd can see it

false - everyone can see it
                                </comment>
                              </block>
                            </value>
                          </block>
                        </statement>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="controls_if" id="iW*XVjdBZmTR\`Ev%$gCH">
                    <value name="IF0">
                      <block type="logic_compare" id="hZV|1/(SJ:,f5JSig=+Y">
                        <field name="OP">EQ</field>
                        <value name="A">
                          <block type="interaction_name" id=")[3gP2d^EpGeIZYG!F;i"></block>
                        </value>
                        <value name="B">
                          <block type="text" id="NqAtaW\`Q@+;WbC[ho3k@">
                            <field name="TEXT">group</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="controls_if" id="{2WMp+-{BV6Je^n!(EO\`">
                        <value name="IF0">
                          <block type="logic_compare" id="j)8SBLQMb-},L,YP0E8D">
                            <field name="OP">EQ</field>
                            <value name="A">
                              <block type="options" id="fW(7UUiX!)^J;XaW8Ev|">
                                <mutation mode="SubcommandGroup"></mutation>
                                <field name="SEARCH">SubcommandGroup</field>
                                <value name="BOOLEAN">
                                  <block type="text" id="qjh!/AHN%S5^YLP8[ET+">
                                    <field name="TEXT">one</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="text" id="Rcp-p2|249ojxn;hJ}uN">
                                <field name="TEXT">one</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="controls_if" id="mT/wg)N!v/z,y6mUVag!">
                            <value name="IF0">
                              <block type="logic_compare" id="kk;mOeo,)3-AFXiZIClq">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="options" id=":#jGT2cbY^,jI[nhA|ap">
                                    <mutation mode="Subcommand"></mutation>
                                    <field name="SEARCH">Subcommand</field>
                                    <value name="BOOLEAN">
                                      <block type="text" id=";V*Q/+j;{o1,mc^uYk6Z">
                                        <field name="TEXT">ok</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id=".9,6OIYa%zdP1OtAMEij">
                                    <field name="TEXT">ok</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="slash_reply" id="OF3/c,^FK@SQ@~bV@b.|">
                                <value name="CONTENT">
                                  <block type="text" id="7(3IE~7[JPsBqEOeu5#9">
                                    <field name="TEXT">ok</field>
                                  </block>
                                </value>
                                <value name="BOOLEAN">
                                  <block type="logic_boolean" id="D,WximD.aWF$|VQFk^8g">
                                    <field name="BOOL">FALSE</field>
                                    <comment pinned="false" h="128" w="265">true - only the person who t=did the comamnd can see it

false - everyone can see it
                                    </comment>
                                  </block>
                                </value>
                              </block>
                            </statement>
                          </block>
                        </statement>
                      </block>
                    </statement>
                    <next>
                      <block type="controls_if" id="l]#[v::o*/{FX3bw~wm%">
                        <value name="IF0">
                          <block type="logic_compare" id="Y1N,Pika;k6XiKCp@tKd">
                            <field name="OP">EQ</field>
                            <value name="A">
                              <block type="interaction_name" id="x:/x=c*KW/@8Ut;:Z/df"></block>
                            </value>
                            <value name="B">
                              <block type="text" id="dzJKX%HB.0aQ|GSK;(rq">
                                <field name="TEXT">choose</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="controls_if" id="6yZzu^uzw:^e.n)nYEt7">
                            <value name="IF0">
                              <block type="logic_compare" id=";LWp^uD/#izs*EJwt?u/">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="options" id=":oP4RTc|io#]wtbs_y6.">
                                    <mutation mode="String"></mutation>
                                    <field name="SEARCH">String</field>
                                    <value name="BOOLEAN">
                                      <block type="text" id="CEXgOrpK,;{(PA$RxT4G">
                                        <field name="TEXT">Choice</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text" id="I2\`F13kjm};/bJUF^XdW">
                                    <field name="TEXT">bberb</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="slash_reply" id="n[tNk6/94eI\`iw88OM[z">
                                <value name="CONTENT">
                                  <block type="text" id="$#uRPq+G,GXXXd^=vOdH">
                                    <field name="TEXT">You chose the Big Berd</field>
                                  </block>
                                </value>
                                <value name="BOOLEAN">
                                  <block type="logic_boolean" id="/Z1YS8yVsaq24O5y/PZ;">
                                    <field name="BOOL">FALSE</field>
                                    <comment pinned="false" h="128" w="265">true - only the person who t=did the comamnd can see it

false - everyone can see it
                                    </comment>
                                  </block>
                                </value>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if" id="USD:R6$94-mfa[L8xIWx">
                                <value name="IF0">
                                  <block type="logic_compare" id="p?bFM?uich$8=j88+E.G">
                                    <field name="OP">EQ</field>
                                    <value name="A">
                                      <block type="options" id="/()^1r=BJFxs{yxTMgi3">
                                        <mutation mode="String"></mutation>
                                        <field name="SEARCH">String</field>
                                        <value name="BOOLEAN">
                                          <block type="text" id="4Dc(VlMWS3W@8naG0S0.">
                                            <field name="TEXT">Choice</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="text" id="r:(tT#NKl3VpQjpc$0%=">
                                        <field name="TEXT">sberb</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="slash_reply" id="/P8x16fg-c4xxhWjpFim">
                                    <value name="CONTENT">
                                      <block type="text" id="(PvUqsoPE6/2V@iJmDXz">
                                        <field name="TEXT">You chose the Small Berd</field>
                                      </block>
                                    </value>
                                    <value name="BOOLEAN">
                                      <block type="logic_boolean" id="B,oS=n1AV}@pw+B.7/))">
                                        <field name="BOOL">FALSE</field>
                                        <comment pinned="false" h="128" w="265">true - only the person who t=did the comamnd can see it

false - everyone can see it
                                        </comment>
                                      </block>
                                    </value>
                                  </block>
                                </statement>
                                <next>
                                  <block type="controls_if" id="~M;yV@M%do|MJ4YnQFT*">
                                    <value name="IF0">
                                      <block type="logic_compare" id="nuEx(0L6KjT(jpN,QZ*j">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="options" id=":9Rz5:vxmTd8dz0fBfQ]">
                                            <mutation mode="String"></mutation>
                                            <field name="SEARCH">String</field>
                                            <value name="BOOLEAN">
                                              <block type="text" id="}RlOf]W]fz^CLH-$?q^*">
                                                <field name="TEXT">Choice</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="text" id="{}XMTJR!)N+\`**f5PI]3">
                                            <field name="TEXT">knoif</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="slash_reply" id="+\`Z9MNDH:BfOJHe-iq-@">
                                        <value name="CONTENT">
                                          <block type="text" id="9.w=Gcb=d40l\`h#tCWD/">
                                            <field name="TEXT">Why do you want a knife</field>
                                          </block>
                                        </value>
                                        <value name="BOOLEAN">
                                          <block type="logic_boolean" id="VY7/kLhJYyX2PnpPvtld">
                                            <field name="BOOL">FALSE</field>
                                            <comment pinned="false" h="128" w="265">true - only the person who t=did the comamnd can see it

false - everyone can see it
                                            </comment>
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
    </statement>
  </block>
</xml>`;