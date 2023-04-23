export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
    <variable id="fztpO]@!)|*c81-vAZ)P">coins</variable>
    <variable id="pK)]BnI78#-mnt07o.d7">usernames</variable>
    <variable id="(T#kNiqRn+jEg3IU-|Di">current</variable>
    <variable id="AdaWTQxSsF7s6K$p*P9T">text</variable>
    <variable id="0D\`BNNIb2nl,{_^LQ.ro">i</variable>
  </variables>
  <block type="s4d_login" id="ElbJuj$NT2dlI#1HE22|" x="0" y="0">
    <value name="TOKEN">
      <shadow type="text" id="y5}IuCOjz%OfC}a/1P0r">
        <field name="TEXT">Your bot token</field>
      </shadow>
    </value>
  </block>
  <block type="jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot" id="?Th7$8UcKH9bWq9+F+O_" x="0" y="106">
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
                        <field name="TEXT">!leaderboard</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="jg_comments_connected_comment" id="JU-L_i4b$4N)]4XI2WG!">
                    <field name="TEXT">The leaderboard here uses a dootabase.&amp;#10;The item we are getting is the member ID,&amp;#10;and the value is how many coins they have.&amp;#10;&amp;#10;The goal is to get a fully sorted list that has&amp;#10;the members tag and coins on each item.&amp;#10;This allows for multiple pages.</field>
                    <next>
                      <block type="jg_web_currentdata" id="b]BRW@a84!eZ0osO9h\`H">
                        <value name="datafile">
                          <block type="jg_text_remake_paragraph_quotes" id="..Pe=CP#iD^T|;lN[I|6">
                            <field name="TEXT">coins.json</field>
                          </block>
                        </value>
                        <next>
                          <block type="jg_comments_connected_comment" id="j,[R(/m[-}=J}/#d3@%L">
                            <field name="TEXT">The Data File will be the database&amp;#10;named "coins.json" in our repl.&amp;#10;This contains our users and their coins.</field>
                            <next>
                              <block type="jg_comments_connected_image" id="B.YfDL*]gp51je9gM$,F">
                                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/991174683288412221/unknown.png</field>
                                <next>
                                  <block type="variables_set" id=");/_r?wK~ZCKR{5lIT5.">
                                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">coins</field>
                                    <value name="VALUE">
                                      <block type="lists_create_with" id="Rp:pTHK4k;it,4SHR,Ou">
                                        <mutation items="0"></mutation>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="variables_set" id="*WX[xJsL0\`]oVXh*--@#">
                                        <field name="VAR" id="pK)]BnI78#-mnt07o.d7">usernames</field>
                                        <value name="VALUE">
                                          <block type="lists_create_with" id="nokQ\`tE+T):)C~~p{5+M">
                                            <mutation items="0"></mutation>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="jg_web_foreachkey" id="+c-g]T_f7PSOJtO3JL!V">
                                            <statement name="THEN">
                                              <block type="variables_set" id="2kRu+jfAK!B;xx8K)8uh">
                                                <field name="VAR" id="(T#kNiqRn+jEg3IU-|Di">current</field>
                                                <value name="VALUE">
                                                  <block type="math_number" id="A7()E];20IB}p[fwwkAF">
                                                    <field name="NUM">1</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="controls_whileUntil" id=",7|02lo%QugW0ukNaXM^">
                                                    <field name="MODE">UNTIL</field>
                                                    <value name="BOOL">
                                                      <block type="logic_compare" id="fV3\`J=Da~RYX/6psyCmw">
                                                        <field name="OP">GTE</field>
                                                        <value name="A">
                                                          <block type="jg_web_valueofkey" id="mITD3+bWWl{+TIs_:mh}">
                                                            <value name="key">
                                                              <block type="jg_web_foreachkeyinput" id="8B(*+W(K2z8nHL6FmL^P"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="jg_web_valueofkey" id="O3X5J)Z=!M|pBd+FgRoL">
                                                            <value name="key">
                                                              <block type="jg_web_keynumber" id="ItCAO##zqHS0ZcMD*uzc">
                                                                <value name="datafile">
                                                                  <block type="variables_get" id="UU{*UH#uc*Ue!L8I3SlR">
                                                                    <field name="VAR" id="(T#kNiqRn+jEg3IU-|Di">current</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="math_change" id="E[{)$e:3WcO/V/YI,M2O">
                                                        <field name="VAR" id="(T#kNiqRn+jEg3IU-|Di">current</field>
                                                        <value name="DELTA">
                                                          <shadow type="math_number" id="9:a{],,)BDo:+-Az@Fo6">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="jg_comments_connected_comment" id="ktw%(2.OP.UGRfq1Bo\`9">
                                                        <field name="TEXT">The repeat until loop will get the index we&amp;#10;should insert the values at.</field>
                                                        <next>
                                                          <block type="lists_setIndex" id="zEt(+o^pg;-_r6U]s,}^">
                                                            <mutation at="true"></mutation>
                                                            <field name="MODE">INSERT</field>
                                                            <field name="WHERE">FROM_START</field>
                                                            <value name="LIST">
                                                              <block type="variables_get" id="3Q!f|)1V+d6O~N5J@\`!p">
                                                                <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">coins</field>
                                                              </block>
                                                            </value>
                                                            <value name="AT">
                                                              <block type="variables_get" id="#@I0)4@0JNFWO;p$2.A|">
                                                                <field name="VAR" id="(T#kNiqRn+jEg3IU-|Di">current</field>
                                                              </block>
                                                            </value>
                                                            <value name="TO">
                                                              <block type="jg_web_valueofkey" id="21Br;Su-(E~kMwG%Me!+">
                                                                <value name="key">
                                                                  <block type="jg_web_foreachkeyinput" id="6mXKdPGo@lB04[9uahn\`"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="lists_setIndex" id="su50-ur;P0N$ucgc~XL/">
                                                                <mutation at="true"></mutation>
                                                                <field name="MODE">INSERT</field>
                                                                <field name="WHERE">FROM_START</field>
                                                                <value name="LIST">
                                                                  <block type="variables_get" id="bwirs@v}vC%@]S;2NgG3">
                                                                    <field name="VAR" id="pK)]BnI78#-mnt07o.d7">usernames</field>
                                                                  </block>
                                                                </value>
                                                                <value name="AT">
                                                                  <block type="variables_get" id="7(i/U7Wb^93EocP=kSEI">
                                                                    <field name="VAR" id="(T#kNiqRn+jEg3IU-|Di">current</field>
                                                                  </block>
                                                                </value>
                                                                <value name="TO">
                                                                  <block type="jg_web_foreachkeyinput" id="4+EjrzK%q!ksQLi]~;,z"></block>
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
                                            </statement>
                                            <next>
                                              <block type="variables_set" id="YXXi8Y5AIwO)Js(NyA*M">
                                                <field name="VAR" id="AdaWTQxSsF7s6K$p*P9T">text</field>
                                                <value name="VALUE">
                                                  <block type="jg_text_remake_paragraph_quotes" id="bzl2PM}BotKBZ7j8:,iu">
                                                    <field name="TEXT">Format: (username): (coins)&amp;#10;&amp;#10;</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="controls_for" id="YNpWYZ}dp}2;QCK;HZ^*">
                                                    <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
                                                    <value name="FROM">
                                                      <shadow type="math_number" id="P\`4(j!8O%ev3HhbNNDa4">
                                                        <field name="NUM">1</field>
                                                      </shadow>
                                                    </value>
                                                    <value name="TO">
                                                      <shadow type="math_number" id="eq}IwZ9(+AWnLg$@)GWq">
                                                        <field name="NUM">10</field>
                                                      </shadow>
                                                      <block type="lists_length" id="eO{V44a@V?6_ApZa^R]i">
                                                        <value name="VALUE">
                                                          <block type="variables_get" id="3JnFKLR,}LudnpfyIzCk">
                                                            <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">coins</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="BY">
                                                      <shadow type="math_number" id="}$lkrETJ^m?+5#Nn+g9!">
                                                        <field name="NUM">1</field>
                                                      </shadow>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="variables_set" id="BMgd^@(lp:](#86/r#c)">
                                                        <field name="VAR" id="AdaWTQxSsF7s6K$p*P9T">text</field>
                                                        <value name="VALUE">
                                                          <block type="text_join" id="-A*kf*TG]Pgd,(#l7nyR">
                                                            <mutation items="5"></mutation>
                                                            <value name="ADD0">
                                                              <block type="variables_get" id="%]IK8rG*]\`Z+Egx.t[Rb">
                                                                <field name="VAR" id="AdaWTQxSsF7s6K$p*P9T">text</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_member_username" id="/[1q6^;!Yi5q$LKl.3o~">
                                                                <value name="MEMBER">
                                                                  <block type="jg_members_get_member_by_id" id="aLJD/k%5;]wjvnRprarn">
                                                                    <value name="ID">
                                                                      <shadow type="text" id="0?+6^ep2-6taqg%[d{rD">
                                                                        <field name="TEXT">12345</field>
                                                                      </shadow>
                                                                      <block type="lists_getIndex" id="xl%8:8H;*D0|1!wPV1~N">
                                                                        <mutation statement="false" at="true"></mutation>
                                                                        <field name="MODE">GET</field>
                                                                        <field name="WHERE">FROM_START</field>
                                                                        <value name="VALUE">
                                                                          <block type="variables_get" id="B]6yV0h-Uke,qNFw$d~y">
                                                                            <field name="VAR" id="pK)]BnI78#-mnt07o.d7">usernames</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="AT">
                                                                          <block type="variables_get" id="Nvj$S|i+sB]J]EeV?O^.">
                                                                            <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD2">
                                                              <block type="jg_text_remake_paragraph_quotes" id="+6;/7_gsJjr-(bq{=B%/">
                                                                <field name="TEXT">: </field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD3">
                                                              <block type="lists_getIndex" id="/UsW(avNP3ZHlsCOQW=|">
                                                                <mutation statement="false" at="true"></mutation>
                                                                <field name="MODE">GET</field>
                                                                <field name="WHERE">FROM_START</field>
                                                                <value name="VALUE">
                                                                  <block type="variables_get" id="li2{.em-hmd8#R@2|)bz">
                                                                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">coins</field>
                                                                  </block>
                                                                </value>
                                                                <value name="AT">
                                                                  <block type="variables_get" id="sgj#xw}6FX]]mdx*oQXu">
                                                                    <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD4">
                                                              <block type="s4d_newline" id="2!;aAL_L:4z~{~.|%oHg"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="jg_comments_connected_comment" id="[$#9\`m$D*El!*($wQbR:">
                                                        <field name="TEXT">This loop simply gets the data from the list and&amp;#10;puts it into text for something like an embed.&amp;#10;You can modify this to change the way it looks.</field>
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
</xml>
`