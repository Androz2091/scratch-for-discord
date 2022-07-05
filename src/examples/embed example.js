export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="=6\`ushn0ewC41R$-^dvJ">prefix</variable>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="9p=y^o3Q9D#i[*\`~t8Qd">commandwithprefix</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
    <variable id=",I;KfD!^Ap.T))NyOX@w">example</variable>
  </variables>
  <block type="s4d_login" id="{|lO_b-0fA9\`}/b6#m6T" x="0" y="0">
    <value name="TOKEN">
      <block type="text" id="T3=]\`vNu7E~Pv%]r^%YC">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_connected" id="HcFcs6Jw;M1hHa#=JL9n" x="0" y="106">
    <statement name="STATEMENTS">
      <block type="variables_set" id="GZDP:Red|*ajsbPV}guA">
        <field name="VAR" id="=6\`ushn0ewC41R$-^dvJ">prefix</field>
        <value name="VALUE">
          <block type="text" id="[iP}[(^%wkCP!|kzFvV/">
            <field name="TEXT">!</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_on_message" id="+Q@qA4DZ.)H0dU~:qJFA" x="0" y="284">
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
            <field name="VAR" id="9p=y^o3Q9D#i[*\`~t8Qd">commandwithprefix</field>
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
              <block type="controls_if" id="?0_$Y+BD1xxSa0KA1t.,">
                <value name="IF0">
                  <block type="s4d_starts_with" id="[DhMa1*^%sHH}OksH^ME">
                    <value name="STRING">
                      <shadow type="text" id="iMH.F@gOp=IV:%r$~sSK">
                        <field name="TEXT">abc</field>
                      </shadow>
                      <block type="variables_get" id=",-bX4=FVdN5l;kLY*Q3l">
                        <field name="VAR" id="9p=y^o3Q9D#i[*\`~t8Qd">commandwithprefix</field>
                      </block>
                    </value>
                    <value name="SUBSTRING">
                      <shadow type="text" id="xwE0]+?l@G3~],}}ymCg">
                        <field name="TEXT">a</field>
                      </shadow>
                      <block type="variables_get" id="VfKek(*Bv2_ut)Hi##?:">
                        <field name="VAR" id="=6\`ushn0ewC41R$-^dvJ">prefix</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="variables_set" id="2}t[rFyvtZ\`O=Qr%1$#0">
                    <field name="VAR" id="dN-GQox{6nqmX%so5NT^">command</field>
                    <value name="VALUE">
                      <block type="text_getSubstring" id="tk/+|mA*Z|4~B9|.CuKM">
                        <mutation at1="true" at2="false"></mutation>
                        <field name="WHERE1">FROM_START</field>
                        <field name="WHERE2">LAST</field>
                        <value name="STRING">
                          <block type="variables_get" id="h17=Uep1/B8X+$A*ozx3">
                            <field name="VAR" id="9p=y^o3Q9D#i[*\`~t8Qd">commandwithprefix</field>
                          </block>
                        </value>
                        <value name="AT1">
                          <block type="math_arithmetic" id="zMrmYg}ltkz~B:dd]rz}">
                            <field name="OP">ADD</field>
                            <value name="A">
                              <shadow type="math_number" id=":0-MoF^cB]edp7KvQD!F">
                                <field name="NUM">1</field>
                              </shadow>
                              <block type="text_length" id="B7Hoy-?0PwUN)uQz2-x$">
                                <value name="VALUE">
                                  <shadow type="text" id="EQ,{AN8:Pd9Xzc%y@@r*">
                                    <field name="TEXT">abc</field>
                                  </shadow>
                                  <block type="variables_get" id="Oh^urZbwt%S(?:4fRptd">
                                    <field name="VAR" id="=6\`ushn0ewC41R$-^dvJ">prefix</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <shadow type="math_number" id="g@Q2d^jm*|VId)}Yl^:C">
                                <field name="NUM">1</field>
                              </shadow>
                            </value>
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
                                <field name="TEXT">example</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="variables_set" id="2,T8C}Q[1Uo.e9Q=iVMT">
                            <field name="VAR" id=",I;KfD!^Ap.T))NyOX@w">example</field>
                            <value name="VALUE">
                              <block type="lists_getIndex" id=";Nr8%rqJF(.%*Q{l]4va">
                                <mutation statement="false" at="true"></mutation>
                                <field name="MODE">GET_REMOVE</field>
                                <field name="WHERE">FROM_START</field>
                                <value name="VALUE">
                                  <block type="variables_get" id="LR(mwGY(R/fp^;t6,JOK">
                                    <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                  </block>
                                </value>
                                <value name="AT">
                                  <block type="math_number" id="u_HBhA}w/x=+09BeAy|3">
                                    <field name="NUM">1</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="jg_comments_connected_comment" id=")HAnE=LN}]x!RT,y890$">
                                <field name="TEXT">as far as i know the oder of blocks doesnt matter.&amp;#10;hyper link is a link to a site that you are sent &amp;#10;to when you click the text.&amp;#10;blocks that add images to the embed use image &amp;#10;links NOT image files.&amp;#10;also all comments on the first example aply to all &amp;#10;other examples.&amp;#10;embed blocks from one embed cannot be used in &amp;#10;another embed</field>
                                <next>
                                  <block type="controls_if" id="5\`:Ku_(z4Gj#j+bQQrQ}">
                                    <mutation elseif="4"></mutation>
                                    <value name="IF0">
                                      <block type="logic_compare" id="%R}N?B~[dBAB9ruw,K(G">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="variables_get" id="4%?yc?[@-5875%YPKJ+a">
                                            <field name="VAR" id=",I;KfD!^Ap.T))NyOX@w">example</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="jg_text_remake_paragraph_quotes" id="gF+_lV;nqWbOEGTl3{Y!">
                                            <field name="TEXT">1</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_m_create_embed_then" id="%*=aVEOuFmK{S[80@opB">
                                        <statement name="THEN">
                                          <block type="s4d_m_create_embed_then_set_color" id="^*(z)i4%u$HxPHoIxY(=">
                                            <value name="COLOR">
                                              <block type="colour_picker" id="mTKGFTo,2#y:t(gPwz?H">
                                                <field name="COLOUR">#ff0000</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="s4d_m_create_embed_then_set_author" id="\`Q#Mop2052$1WNwmPq@\`">
                                                <value name="AUTHOR">
                                                  <block type="s4d_member_username" id="g2(;zYXn(9DTQZ5alo~W">
                                                    <value name="MEMBER">
                                                      <block type="lime_s4d_message_attributes_content_author_id_timestamp" id="seGk}Sl*5Dka|cP*fZJ!">
                                                        <field name="dropdown">MEMBER</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="PFP">
                                                  <block type="lime_s4d_message_attributes_content_author_id_timestamp" id="\`_c.G#5eG2~93D=tB~/(">
                                                    <field name="dropdown">MEMBER</field>
                                                  </block>
                                                </value>
                                                <value name="HYPERLINK">
                                                  <block type="jg_text_remake_paragraph_quotes" id="?hozt;NmcUGV$%XAMP/T">
                                                    <field name="TEXT">https://scratch-for-discord-469.vercel.app/</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="s4d_m_create_embed_then_set_title" id="Zd)_QkHu}|91=*0f*7OT">
                                                    <value name="TITLE">
                                                      <block type="jg_text_remake_paragraph_quotes" id="?\`z3bwUX(|Kbsi9zv,L.">
                                                        <field name="TEXT">example 1</field>
                                                      </block>
                                                    </value>
                                                    <value name="URL">
                                                      <block type="jg_text_remake_paragraph_quotes" id="0{c^$2Y}ShsM.E{@BR]p">
                                                        <field name="TEXT">https://scratch-for-discord-469.vercel.app/</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_m_create_embed_then_set_thumbnail" id="\`[/A-E6ZMrr4UT)8x;@-">
                                                        <value name="THUMBNAIL">
                                                          <block type="jg_text_remake_paragraph_quotes" id="R3lB9Atlg*Z,G[KPXNgQ">
                                                            <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_m_create_embed_then_set_description" id="A27G;Jy/RBZP_X.C|G.X">
                                                            <value name="DESCRIPTION">
                                                              <block type="jg_text_remake_paragraph_quotes" id="a:m[(ch)*Dic1}zGr\`g~">
                                                                <field name="TEXT">this is an example of mrredo embed blocks</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="jg_comments_connected_comment" id="^HX;T+!4iQA^*keR48;$">
                                                                <field name="TEXT">duplicate the block below to add more fields</field>
                                                                <next>
                                                                  <block type="s4d_m_create_embed_then_add_field" id="~4EGQqH=4i/c:K4:rK?6">
                                                                    <comment pinned="false" h="96.7901611328125" w="606.4197387695312">inline means ther or not the field is on the same line as the previous field or if its on a new line

                                                                    </comment>
                                                                    <value name="TITLE">
                                                                      <block type="jg_text_remake_paragraph_quotes" id="D%IcHKMl+YeV1rGc/sJL">
                                                                        <field name="TEXT">example field</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="DESCRIPTION">
                                                                      <block type="jg_text_remake_paragraph_quotes" id=",qpO27A)KvaNn5xWyG%H">
                                                                        <field name="TEXT">this is an example of mrredo embed field blocks</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="INLINE">
                                                                      <block type="logic_boolean" id="06,vwNu=:4*QE--d=GDh">
                                                                        <field name="BOOL">FALSE</field>
                                                                      </block>
                                                                    </value>
                                                                    <next>
                                                                      <block type="s4d_m_create_embed_then_set_image" id="E|u{/6sHzX+TO@$^d2dL">
                                                                        <comment pinned="false" h="93.8271484375" w="659.7531127929688">this is the image on the embed not to be confused with the thumbnail which is in the top right corner this is on the bottom of the embed</comment>
                                                                        <value name="IMAGE">
                                                                          <block type="jg_text_remake_paragraph_quotes" id="o-t%b)mXWiMii@8Mqw9|">
                                                                            <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                          </block>
                                                                        </value>
                                                                        <next>
                                                                          <block type="s4d_m_create_embed_then_set_footer" id="CfZP_OMs:5]Eh9hjM,V?">
                                                                            <value name="FIELD">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="v6kIL^VlALy^53@mYr#P">
                                                                                <field name="TEXT">example</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="IMAGE">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="_+ii~NFu}Tay_iw$SQTW">
                                                                                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                              </block>
                                                                            </value>
                                                                            <next>
                                                                              <block type="s4d_m_create_embed_then_set_time" id="y8kzN9n(+N#[,P+DP}C(">
                                                                                <comment pinned="false" h="96.79010009765625" w="176.7901611328125">time stamp is the time that the embed was sent</comment>
                                                                                <next>
                                                                                  <block type="s4d_m_create_embed_then_send" id="@O\`#6oc@jm1ps$3,pf4w">
                                                                                    <value name="CHANNEL">
                                                                                      <block type="lime_s4d_message_context" id="7cc{_Z~cq3XG=J=nd-gB">
                                                                                        <field name="dropdown">CHANNEL</field>
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
                                    <value name="IF1">
                                      <block type="logic_compare" id="b0\${ziO09=Qb6dL,kDR1">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="variables_get" id="4%*2E*.M%ra:!1fiYW^-">
                                            <field name="VAR" id=",I;KfD!^Ap.T))NyOX@w">example</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="jg_text_remake_paragraph_quotes" id="::jC,mYcuqyQF,36Cs{A">
                                            <field name="TEXT">2</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO1">
                                      <block type="s4d_create_embed_then" id="9+m,DH/n]Zt4\`fJ|tQ@l">
                                        <statement name="THEN">
                                          <block type="s4d_create_embed_then_set_color" id="gQ02I4MBqrX0Eh/*|DqT">
                                            <value name="COLOR">
                                              <block type="colour_picker" id="S5;^jT.fzenUmmmaHxHA">
                                                <field name="COLOUR">#ff0000</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="s4d_create_embed_then_set_author" id="OGJ3z8w-3E)*67@%m[xw">
                                                <comment pinned="false" h="90.86419677734375" w="579.7530517578125">for some reason you cant set a hyper link for this?
i really dot know why
                                                </comment>
                                                <value name="AUTHOR">
                                                  <block type="s4d_member_username" id="7g:-Y76O[-p!|W#iY3fz">
                                                    <value name="MEMBER">
                                                      <block type="lime_s4d_message_attributes_content_author_id_timestamp" id="%[=|L5|j\`u~U]ggUF1Sk">
                                                        <field name="dropdown">MEMBER</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="PFP">
                                                  <block type="s4d_member_icon" id="23VZUY)Z;bKFK8mzt)IO">
                                                    <value name="MEMBER">
                                                      <block type="lime_s4d_message_attributes_content_author_id_timestamp" id="$6svbWJ0Jh4/AuM|7iwa">
                                                        <field name="dropdown">MEMBER</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="s4d_create_embed_then_set_title" id="JbJoW0)xg_*c8zm4cm;}">
                                                    <value name="TITLE">
                                                      <block type="jg_text_remake_paragraph_quotes" id="l:;drOKGQtza5L)=n1g:">
                                                        <field name="TEXT">example 2</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_create_embed_then_add_link" id="RhC}zuLjU%)I~De]/C?H">
                                                        <value name="DESCRIPTION">
                                                          <block type="jg_text_remake_paragraph_quotes" id=",~4m*5mBBe;Pjd\`w04Yn">
                                                            <field name="TEXT">https://scratch-for-discord-469.vercel.app/</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_create_embed_then_set_thumbnail" id=",v?VSedxKz?A\`-^zY=OR">
                                                            <value name="THUMBNAIL">
                                                              <block type="jg_text_remake_paragraph_quotes" id="L]N:^UL:OQv,vPSOiJ9o">
                                                                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_create_embed_then_set_description" id="b+n:?h]u(|qv%y$6U!p=">
                                                                <value name="DESCRIPTION">
                                                                  <block type="jg_text_remake_paragraph_quotes" id="e#C\`?lz2MqA)3;jC{504">
                                                                    <field name="TEXT">this is an example of jose embed blocks</field>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="jg_comments_connected_comment" id="_E:Eil^9e@T~:V~u?Z9d">
                                                                    <field name="TEXT">duplicate the block below to add more fields</field>
                                                                    <next>
                                                                      <block type="s4d_create_embed_then_add_field" id="dskGC\`L59i9b*ux~yQ.:">
                                                                        <value name="TITLE">
                                                                          <block type="jg_text_remake_paragraph_quotes" id="3%59:m/z6k7a.@W$8Bou">
                                                                            <field name="TEXT">example field</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="DESCRIPTION">
                                                                          <block type="jg_text_remake_paragraph_quotes" id="vo_vq:;(ze,$CFI\`%LT#">
                                                                            <field name="TEXT">this is an example of jose embed field blocks</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="INLINE">
                                                                          <block type="logic_boolean" id="NE{(FCXHB+,aL,9!5OWZ">
                                                                            <field name="BOOL">FALSE</field>
                                                                          </block>
                                                                        </value>
                                                                        <next>
                                                                          <block type="s4d_create_embed_then_set_image" id="z!1U^!?i==bB(YTHo(Q_">
                                                                            <value name="IMAGE">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="{y_|R~#{%ej!qx!+1+DO">
                                                                                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                              </block>
                                                                            </value>
                                                                            <next>
                                                                              <block type="s4d_create_embed_then_set_footer" id="1Rp\`rne{v#R11}7-(9i2">
                                                                                <value name="FOOTER">
                                                                                  <block type="jg_text_remake_paragraph_quotes" id="{K~wkp[nRq*l7^gS^PvK">
                                                                                    <field name="TEXT">example</field>
                                                                                  </block>
                                                                                </value>
                                                                                <value name="IMAGE">
                                                                                  <block type="jg_text_remake_paragraph_quotes" id="fI0v+Z8A3v,$Ok$!2c,y">
                                                                                    <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                                  </block>
                                                                                </value>
                                                                                <next>
                                                                                  <block type="jg_comments_connected_comment" id="I6Q{I+]7PK(}BfFxZE[X">
                                                                                    <field name="TEXT">for some reason jose embeds dont have time stamp</field>
                                                                                    <next>
                                                                                      <block type="s4d_create_embed_then_send" id="])*fnZxa~d:2m0EeV(gR">
                                                                                        <value name="CHANNEL">
                                                                                          <block type="lime_s4d_message_context" id="dHW\`]z?+2Zuhx^R85#1s">
                                                                                            <field name="dropdown">CHANNEL</field>
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
                                    <value name="IF2">
                                      <block type="logic_compare" id="-erdq1,~|il2_e]90^_F">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="variables_get" id="pY6OUD6//r*SlPrUPFkI">
                                            <field name="VAR" id=",I;KfD!^Ap.T))NyOX@w">example</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="jg_text_remake_paragraph_quotes" id="??B/Aj:B,q6ry;Br-1%*">
                                            <field name="TEXT">3</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO2">
                                      <block type="s4d_embed_create" id="JC%h:!mjP)T1QExS{yZ9">
                                        <statement name="THEN">
                                          <block type="s4d_embed_set_color" id="fuiw^l^21m{w#k7o;3Ln">
                                            <value name="COLOUR">
                                              <block type="colour_picker" id="Jgcj~0FNiBW-i=54d_Z1">
                                                <field name="COLOUR">#ff0000</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="s4d_embed_set_author" id="CMJuWo0uf0k)we5p$,uo">
                                                <value name="AUTHOR">
                                                  <block type="s4d_member_username" id="yVtq2F_XipX*whD{glDu">
                                                    <value name="MEMBER">
                                                      <block type="lime_s4d_message_attributes_content_author_id_timestamp" id=")Y9pRp=2\`7y{K_t.OQo$">
                                                        <field name="dropdown">MEMBER</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="PROFILE">
                                                  <block type="s4d_member_icon" id="])_;+2%EFMCcQq2Z\`;\`x">
                                                    <value name="MEMBER">
                                                      <block type="lime_s4d_message_attributes_content_author_id_timestamp" id="]i\`GZEvI0^xU=I%m?Jeh">
                                                        <field name="dropdown">MEMBER</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="URL">
                                                  <block type="jg_text_remake_paragraph_quotes" id="~%+Um.pi7neyE(9d[Gqs">
                                                    <field name="TEXT">https://scratch-for-discord-469.vercel.app/</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="s4d_embed_set_title" id="NRP5!XeQv-UR.XuK9Y(S">
                                                    <value name="TITLE">
                                                      <block type="jg_text_remake_paragraph_quotes" id="|ZM+viD$=ntNa5vLZeDy">
                                                        <field name="TEXT">example 3</field>
                                                      </block>
                                                    </value>
                                                    <value name="HYPERLINK">
                                                      <block type="jg_text_remake_paragraph_quotes" id="v9.1pi:S!~+me0?s^TUI">
                                                        <field name="TEXT">https://scratch-for-discord-469.vercel.app/</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_embed_set_desc" id="CBL;Zki_@8KCFx9)tu2_">
                                                        <value name="DESC">
                                                          <block type="jg_text_remake_paragraph_quotes" id="J[.#bWfJ4h6x84hA+;2\`">
                                                            <field name="TEXT">this is an example of eruption embed blocks</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_embed_set_thumb" id="qzGv?0rO2d5K[3o$v|Kj">
                                                            <value name="THUMB">
                                                              <block type="jg_text_remake_paragraph_quotes" id="iPZ4WXQ1k)7O^4(k!}6+">
                                                                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="jg_comments_connected_comment" id="#UKBM=*Bv,(=,HHAe##s">
                                                                <field name="TEXT">duplicate the block below to add more fields</field>
                                                                <next>
                                                                  <block type="s4d_embed_add_field" id="NVJ[o\`]CvQJbehrg3v^o">
                                                                    <value name="TITLE">
                                                                      <block type="jg_text_remake_paragraph_quotes" id="C~.RwmHCFD0LR=*p9~c%">
                                                                        <field name="TEXT">example field</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="DESCRIPTION">
                                                                      <block type="jg_text_remake_paragraph_quotes" id="5;y?Iek%tgRHb9?I;B\`C">
                                                                        <field name="TEXT">this is an example of eruption embed field blocks</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="INLINE">
                                                                      <block type="logic_boolean" id="V|un{jU/R57!}\`OzS5!C">
                                                                        <field name="BOOL">FALSE</field>
                                                                      </block>
                                                                    </value>
                                                                    <next>
                                                                      <block type="s4d_embed_set_image" id="EwRb-~fOQ3h?e=J#JYRL">
                                                                        <value name="IMAGE">
                                                                          <block type="jg_text_remake_paragraph_quotes" id="e,Qoc2!(}?Hi~7;GV4X;">
                                                                            <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                          </block>
                                                                        </value>
                                                                        <next>
                                                                          <block type="s4d_embed_set_footer" id="^wvfNQc1^k|%;Mj[a^Hj">
                                                                            <value name="FOOTER">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="8G{!?[qqsF+~ADr^bu~{">
                                                                                <field name="TEXT">example</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="ICON">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="MBd:FiNcrO@NV6rA)bHB">
                                                                                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                              </block>
                                                                            </value>
                                                                            <next>
                                                                              <block type="jg_comments_connected_comment" id="w%}q@|)c/xehoa?l5gFZ">
                                                                                <field name="TEXT">you can set a custom date with this but i &amp;#10;really dont know how nor do i believe that &amp;#10;eruption put in how it actually works :/</field>
                                                                                <next>
                                                                                  <block type="s4d_embed_set_timestamp" id="o@Hb/s@T,k_3q^:#,D=Q">
                                                                                    <mutation divisor_input="false"></mutation>
                                                                                    <field name="MODE">CURRENT</field>
                                                                                    <next>
                                                                                      <block type="s4d_reply" id="o?g]dqE3[iLXeqq%,kEg">
                                                                                        <value name="CONTENT">
                                                                                          <shadow type="text" id="GeU{ucJgB{M=nWIa%40*">
                                                                                            <field name="TEXT">Hey!</field>
                                                                                          </shadow>
                                                                                          <block type="s4d_embed_send" id="8lc3kG\`i*SizX:gpR/W1"></block>
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
                                    <value name="IF3">
                                      <block type="logic_compare" id="?zAHDePwWeAg6xy?[!n}">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="variables_get" id="!2$4vs;xe[k+^)x79mI.">
                                            <field name="VAR" id=",I;KfD!^Ap.T))NyOX@w">example</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="jg_text_remake_paragraph_quotes" id="4i)vtEjT}2U3-@fJjSh*">
                                            <field name="TEXT">4</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO3">
                                      <block type="make_ahq_embed" id="ShmVx#7Hr3.03?C7qMlv">
                                        <value name="button name">
                                          <block type="jg_text_remake_paragraph_quotes" id="dQuT?@DUg.-jB?Kzr?U(">
                                            <field name="TEXT">example_4</field>
                                          </block>
                                        </value>
                                        <statement name="STATEMENTS">
                                          <block type="color_ahq_embed" id="maj$$o~+8w*pj5]1^zu,">
                                            <value name="Label">
                                              <block type="colour_picker" id="7hO|m9~k$=}R^@iUBBM9">
                                                <field name="COLOUR">#ff0000</field>
                                              </block>
                                            </value>
                                            <value name="button name">
                                              <block type="jg_text_remake_paragraph_quotes" id="BN|L0O@-F/R=?|R-b0H$">
                                                <field name="TEXT">example_4</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="author_ahq_embed" id="EGrr}9Qh)m)v!Zk8YL:[">
                                                <value name="Label">
                                                  <block type="s4d_member_username" id="h-%YIAd=LDA/tRxchNjZ">
                                                    <value name="MEMBER">
                                                      <block type="lime_s4d_message_attributes_content_author_id_timestamp" id="1,iZn^,WF*il/z+NY;B~">
                                                        <field name="dropdown">MEMBER</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="image">
                                                  <block type="s4d_member_icon" id="n?h}k:2h22]~-c5!#C~]">
                                                    <value name="MEMBER">
                                                      <block type="lime_s4d_message_attributes_content_author_id_timestamp" id="PEL\`QF(i,.M#s}5Jc^aX">
                                                        <field name="dropdown">MEMBER</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="button name">
                                                  <block type="jg_text_remake_paragraph_quotes" id="MZxJLnmRpy@ni3pyrPWT">
                                                    <field name="TEXT">example_4</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="title_ahq_embed" id=".b]-zj_Bn)^-5Ght{l.=">
                                                    <value name="Label">
                                                      <block type="jg_text_remake_paragraph_quotes" id="BxtLuya!X64^e?Y=c;yx">
                                                        <field name="TEXT">example 4</field>
                                                      </block>
                                                    </value>
                                                    <value name="button name">
                                                      <block type="jg_text_remake_paragraph_quotes" id="HopGjtG%ggg*\`HY8j6}V">
                                                        <field name="TEXT">example_4</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="url_ahq_embed" id="ycj/Ge!+K5mfN^v]/XiR">
                                                        <value name="Label">
                                                          <block type="jg_text_remake_paragraph_quotes" id="wgKDw7B.n-)MO64|fH^.">
                                                            <field name="TEXT">https://scratch-for-discord-469.vercel.app/</field>
                                                          </block>
                                                        </value>
                                                        <value name="button name">
                                                          <block type="jg_text_remake_paragraph_quotes" id="sba_b)$JkY8fj@6}ahgk">
                                                            <field name="TEXT">example_4</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="des_ahq_embed" id="h7gBXsM;L|o:A1hz,;O/">
                                                            <value name="Label">
                                                              <block type="jg_text_remake_paragraph_quotes" id=";\`]lG9y#@^@Mi30-]XJ/">
                                                                <field name="TEXT">this is an example of ahq embed blocks</field>
                                                              </block>
                                                            </value>
                                                            <value name="button name">
                                                              <block type="jg_text_remake_paragraph_quotes" id="(Pv~GGE(4Ry@[?aqcfAv">
                                                                <field name="TEXT">example_4</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="thmb_ahq_embed" id="o(9bNV#\`L\`bKqF(s0/JG">
                                                                <value name="Label">
                                                                  <block type="jg_text_remake_paragraph_quotes" id="fZe*guWBjG{431X}d!.w">
                                                                    <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                  </block>
                                                                </value>
                                                                <value name="button name">
                                                                  <block type="jg_text_remake_paragraph_quotes" id="Sjzns8a:[w5(nb!yx[_p">
                                                                    <field name="TEXT">example_4</field>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="jg_comments_connected_comment" id="*={h=wdVuP-i$vC@KVa6">
                                                                    <field name="TEXT">duplicate the block below to add more fields</field>
                                                                    <next>
                                                                      <block type="fld_ahq_embed" id="Z,/lq5uss(ca(jAlraf?">
                                                                        <value name="Label">
                                                                          <block type="jg_text_remake_paragraph_quotes" id="-,@mxPMo^mP,4}HE#Fxl">
                                                                            <field name="TEXT">example field</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="image">
                                                                          <block type="jg_text_remake_paragraph_quotes" id="fl?X[n$#@JnCe0.?2SHV">
                                                                            <field name="TEXT">this is an example of eruption embed field blocks</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="ahq">
                                                                          <block type="logic_boolean" id="+6/tf_~W;bfB$O]w24iS">
                                                                            <field name="BOOL">FALSE</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="button name">
                                                                          <block type="jg_text_remake_paragraph_quotes" id="\`CSqxUm\`BQT.B~+J06.J">
                                                                            <field name="TEXT">example_4</field>
                                                                          </block>
                                                                        </value>
                                                                        <next>
                                                                          <block type="image_ahq_embed" id="jqZx}WSgzYaQdnvD|?0g">
                                                                            <value name="Label">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="RSCqy;e2Ac}048zD7n@w">
                                                                                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="button name">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="Y~Pt!A?M|O]V\`q)Dd![j">
                                                                                <field name="TEXT">example_4</field>
                                                                              </block>
                                                                            </value>
                                                                            <next>
                                                                              <block type="footer_ahq_embed" id="AbPgUGz1*?dpd2Xm0kDj">
                                                                                <value name="Label">
                                                                                  <block type="jg_text_remake_paragraph_quotes" id="H1**T/[8E^jX},SEUDJ7">
                                                                                    <field name="TEXT">example</field>
                                                                                  </block>
                                                                                </value>
                                                                                <value name="image">
                                                                                  <block type="jg_text_remake_paragraph_quotes" id="dvwp7soL2ErLpIw5hE(a">
                                                                                    <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                                  </block>
                                                                                </value>
                                                                                <value name="button name">
                                                                                  <block type="jg_text_remake_paragraph_quotes" id="?#\`\`~w993YhIxzY{mT6u">
                                                                                    <field name="TEXT">example_4</field>
                                                                                  </block>
                                                                                </value>
                                                                                <next>
                                                                                  <block type="stamp_ahq_embed" id="7Xl1sVC4SA4/j0*48?\`S">
                                                                                    <value name="button name">
                                                                                      <block type="jg_text_remake_paragraph_quotes" id="|qlD~mvlAhBj$n*0K@7*">
                                                                                        <field name="TEXT">example_4</field>
                                                                                      </block>
                                                                                    </value>
                                                                                    <next>
                                                                                      <block type="s4d_reply" id="%au0ulS[r1ju](J(S9}=">
                                                                                        <value name="CONTENT">
                                                                                          <shadow type="text" id="zj3hPf=gE5Qy$2mJ{kjv">
                                                                                            <field name="TEXT">Hey!</field>
                                                                                          </shadow>
                                                                                          <block type="send_ahq_embed" id="46]EDnsXiKA0um,vG{1s">
                                                                                            <value name="Label">
                                                                                              <block type="jg_text_remake_paragraph_quotes" id="PPEN*[Vs4MRgDjGKQ^Xm">
                                                                                                <field name="TEXT">example_4</field>
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
                                    <value name="IF4">
                                      <block type="logic_compare" id="%sF4oClD7uqt,_s6ntte">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="variables_get" id="y+p0#_Y|x-[l16k-,#|5">
                                            <field name="VAR" id=",I;KfD!^Ap.T))NyOX@w">example</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="jg_text_remake_paragraph_quotes" id="G9%x-/0{Vvw/q?Wk+\`gy">
                                            <field name="TEXT">5</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO4">
                                      <block type="gsa_create_embed" id="g6Uz;+rAh-]2@~k5ON=5">
                                        <field name="name">example_5</field>
                                        <statement name="STATEMENTS">
                                          <block type="gsa_set_embed_color" id="Sc0E3P0{!/C@vi:Be4x[">
                                            <value name="color">
                                              <block type="colour_picker" id="?k;tW\`TfBUv{7pq\`*}Uk">
                                                <field name="COLOUR">#ff0000</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="gsa_set_embed_author" id="57Fq^yQH:e^i*K-}7x1~">
                                                <value name="name">
                                                  <block type="s4d_member_username" id="Un97_Kj[sVsU=F5uejIU">
                                                    <value name="MEMBER">
                                                      <block type="lime_s4d_message_attributes_content_author_id_timestamp" id="en][BtCj{nQ}@a9iFhLa">
                                                        <field name="dropdown">MEMBER</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="icon_url">
                                                  <block type="s4d_member_icon" id="l{7j])t9?U@Tqd9v!ASq">
                                                    <value name="MEMBER">
                                                      <block type="lime_s4d_message_attributes_content_author_id_timestamp" id="ZSb\`-^)%;c7X7b*]Lf(@">
                                                        <field name="dropdown">MEMBER</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="url">
                                                  <block type="jg_text_remake_paragraph_quotes" id="StUFUihvjq?AFU.i{}4e">
                                                    <field name="TEXT">https://scratch-for-discord-469.vercel.app/</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="gsa_set_embed_title" id="|^4gKS-urZ?AWe5fu+mQ">
                                                    <value name="title">
                                                      <block type="jg_text_remake_paragraph_quotes" id="}vqogl,Y_7r]_q%hB9i*">
                                                        <field name="TEXT">example 4</field>
                                                      </block>
                                                    </value>
                                                    <value name="url">
                                                      <block type="jg_text_remake_paragraph_quotes" id="5iXrDMi6q5;iz}q+rVdJ">
                                                        <field name="TEXT">https://scratch-for-discord-469.vercel.app/</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="gsa_set_embed_description" id=";FfnOg+}LjvqBy3!~n}+">
                                                        <value name="name">
                                                          <block type="jg_text_remake_paragraph_quotes" id="wmWe^6:[x=LM}er;|]NF">
                                                            <field name="TEXT">this is an example of redman13 embed blocks</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="gsa_set_embed_thumbnail" id="I4I]Caj_rRu0/=$9MJn+">
                                                            <value name="name">
                                                              <block type="jg_text_remake_paragraph_quotes" id="6Z^2Yp!_log,9OwN#ZB~">
                                                                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="jg_comments_connected_comment" id="n_n*zKkt!UNBchCx3:pf">
                                                                <field name="TEXT">note all field blocks MUST be in a add fields &amp;#10;block</field>
                                                                <next>
                                                                  <block type="gsa_create_fields" id="{qFZCcjHeUHPB~qhx%F,">
                                                                    <statement name="STATEMENTS">
                                                                      <block type="jg_comments_connected_comment" id="[qU\`5TvJtLkEt;!cKU%C">
                                                                        <field name="TEXT">duplicate the block below to add more fields</field>
                                                                        <next>
                                                                          <block type="gsa_add_field" id="GqZe8E(p_S|MlA?8_(uI">
                                                                            <value name="title">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="gk,{(%sOri|kLTSrdF,?">
                                                                                <field name="TEXT">example field</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="description">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="EzEy5RnUR2*@AKtgWsgU">
                                                                                <field name="TEXT">this is an example of redman13 embed field blocks</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="inline">
                                                                              <block type="logic_boolean" id="Rjzc]vDm?.n#+.w1]\`#2">
                                                                                <field name="BOOL">FALSE</field>
                                                                              </block>
                                                                            </value>
                                                                          </block>
                                                                        </next>
                                                                      </block>
                                                                    </statement>
                                                                    <next>
                                                                      <block type="gsa_set_embed_image" id="d~kQ_s^P6kOxe3#MYG5%">
                                                                        <value name="name">
                                                                          <block type="jg_text_remake_paragraph_quotes" id="SFl0t0rNCn5-l#./jGHT">
                                                                            <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                          </block>
                                                                        </value>
                                                                        <next>
                                                                          <block type="gsa_set_embed_footer" id="D(rK5b4^(SA3kSc#@d_y">
                                                                            <value name="name">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="OJQFa!tAzJvt~FA.Oa*f">
                                                                                <field name="TEXT">example</field>
                                                                              </block>
                                                                            </value>
                                                                            <value name="icon_url">
                                                                              <block type="jg_text_remake_paragraph_quotes" id="*qR3Fw{ao!fVYZrrbi.@">
                                                                                <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/984121680458829835/ef5d4de4c598bda58c6edc09e9478b2d.png</field>
                                                                              </block>
                                                                            </value>
                                                                            <next>
                                                                              <block type="gsa_set_embed_timestamp" id="!ur@IIQ|SaL)bcMGrZxx">
                                                                                <comment pinned="false" h="102.716064453125" w="301.23455810546875">leave the input blank for current date and put in unix for custom date</comment>
                                                                                <next>
                                                                                  <block type="s4d_reply" id="ZUct!.$RO]WY?M2%PR7K">
                                                                                    <value name="CONTENT">
                                                                                      <shadow type="text" id="x)@BGOk-ik+?d\`7gtrYg">
                                                                                        <field name="TEXT">Hey!</field>
                                                                                      </shadow>
                                                                                      <block type="gsa_send_embed" id="C!#ieB^OWF\`1lblJj.2b">
                                                                                        <field name="NAME">example_5</field>
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
                                </next>
                              </block>
                            </next>
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
</xml>`