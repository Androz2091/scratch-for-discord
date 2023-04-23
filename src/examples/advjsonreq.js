export default `

<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="OZ0l|^XRQH?T?s;b$B%X">arguments</variable>
    <variable id="dN-GQox{6nqmX%so5NT^">command</variable>
  </variables>
  <block type="s4d_login" id="y[4JwXGqNG|t:_hxHYN2" x="259" y="199">
    <value name="TOKEN">
      <shadow type="text" id="gp{Yg4df0X+FC7i,P-\`d">
        <field name="TEXT">Your bot token</field>
      </shadow>
    </value>
  </block>
  <block type="jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot" id="6ds1YPEJGmaNzH|%4/tx" x="262" y="284">
    <statement name="STATEMENTS">
      <block type="jg_comments_connected_comment" id="_3U%aig8FR@iZL~V-x%I">
        <field name="TEXT">We can use the shortcut block to avoid&amp;#10;having to check the author first</field>
        <next>
          <block type="jg_comments_connected_comment" id="!nvJdTJtEgu0;7Cb_H+k">
            <field name="TEXT">(these are comment blocks btw so that things can&amp;#10;be explained better)</field>
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
                                <field name="TEXT">!post</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="jg_comments_connected_comment" id="eM!=1$x3B?tIA5Y/;]nl">
                            <field name="TEXT">This uses a command handler to make things easier.</field>
                            <next>
                              <block type="s4d_reply" id="-{l,tE6ZGFbL6\`Pn_@~#">
                                <value name="CONTENT">
                                  <shadow type="text" id="aL1?|+/#9ra54-jg7_Gm">
                                    <field name="TEXT">You have written the following content after !say:</field>
                                  </shadow>
                                  <block type="text_join" id="dsEhwJvByZk5)n7$/yhS">
                                    <mutation items="3"></mutation>
                                    <value name="ADD0">
                                      <block type="text" id="@lB|Z6LF_C4h(LA|vHt3">
                                        <field name="TEXT">Posting \`\`</field>
                                      </block>
                                    </value>
                                    <value name="ADD1">
                                      <block type="lists_split" id="dXoK}l3=r:Qu|E|[I_EZ">
                                        <mutation mode="JOIN"></mutation>
                                        <field name="MODE">JOIN</field>
                                        <value name="INPUT">
                                          <block type="variables_get" id=":}|4XGnUc}sJZ_qIWFFX">
                                            <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                          </block>
                                        </value>
                                        <value name="DELIM">
                                          <shadow type="text" id="R/4CiqYnjEYgTePNX7l=">
                                            <field name="TEXT"> </field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="ADD2">
                                      <block type="text" id="56zK7E4nX-}vEZVNwLoX">
                                        <field name="TEXT">\`\` to site...</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="jg_comments_connected_comment" id="sSI~}dgAAgnU98S^Q8E9">
                                    <field name="TEXT">The URL is the API/Site you want to interact with.&amp;#10;The API in this example is a fake one, but it's&amp;#10;most likely going to be similar to how you need&amp;#10;to do things.</field>
                                    <next>
                                      <block type="jg_web_request_advanced_new_send_request" id="{x@(V0_lKF/.pTwug[Kc">
                                        <field name="METHOD">"post"</field>
                                        <value name="URL">
                                          <block type="text" id="p;Z?5c~I,YTET?S5M|WY">
                                            <field name="TEXT">https://www.turtsocielmediaaLoL.me/api/post</field>
                                          </block>
                                        </value>
                                        <statement name="HEADERS">
                                          <block type="jg_web_request_advanced_header" id="zzu8hQ:fCXY]4mOBJ3z/">
                                            <value name="KEY">
                                              <block type="text" id="vHxs3K#q2]PZ-~63xM6?">
                                                <field name="TEXT">Authorization</field>
                                              </block>
                                            </value>
                                            <value name="VALUE">
                                              <block type="frost_env" id="MM1aQt17J=w,+7,@}izS">
                                                <value name="VALUE">
                                                  <shadow type="text" id="9yngKfI]X:3,NLLOJ874">
                                                    <field name="TEXT">api-key</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </statement>
                                        <statement name="BODY">
                                          <block type="jg_web_request_advanced_data_section" id="IbWi)FMmq)$Xb/}(f~wV">
                                            <field name="LABEL">post</field>
                                            <statement name="STATEMENTS">
                                              <block type="jg_web_request_advanced_data" id="Q[PyajKZR2BEHp0K0;QK">
                                                <value name="KEY">
                                                  <block type="text" id="e5vgtmcc;tZpvp?s?2?d">
                                                    <field name="TEXT">content</field>
                                                  </block>
                                                </value>
                                                <value name="VALUE">
                                                  <block type="lists_split" id="/LMe^LY$Su4s+]w+cE$l">
                                                    <mutation mode="JOIN"></mutation>
                                                    <field name="MODE">JOIN</field>
                                                    <value name="INPUT">
                                                      <block type="variables_get" id="b$8C?0D;.lLX3^Frc{7\`">
                                                        <field name="VAR" id="OZ0l|^XRQH?T?s;b$B%X">arguments</field>
                                                      </block>
                                                    </value>
                                                    <value name="DELIM">
                                                      <shadow type="text" id="N.~;-R!0l0zu]-:~YVK[">
                                                        <field name="TEXT"> </field>
                                                      </shadow>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </statement>
                                          </block>
                                        </statement>
                                        <statement name="THEN">
                                          <block type="jg_comments_connected_comment" id="6Ei$M5/[(3O!!F}xcxu7">
                                            <field name="TEXT">The response codes 200 or below should mean&amp;#10;we made the request successfully!&amp;#10;You can learn what these response codes are here:&amp;#10;https://developer.mozilla.org/en-US/docs/Web/HTTP/Status</field>
                                            <next>
                                              <block type="controls_if" id=",C+ENtB^},t}{L6Q04@w">
                                                <mutation else="1"></mutation>
                                                <value name="IF0">
                                                  <block type="logic_compare" id="ag!f?XJ^yMQjj:@)M}bf">
                                                    <field name="OP">LTE</field>
                                                    <value name="A">
                                                      <block type="jg_web_request_advanced_response_status" id="v?S}Yi/tX%TrXJ}ei-OF"></block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="math_number" id="[iHG0RHAUeFJ#GElz+PO">
                                                        <field name="NUM">200</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="s4d_reply" id="pto_S[f3iMfC(WNB.2Hd">
                                                    <value name="CONTENT">
                                                      <shadow type="text" id="7DPLEs^_QcV/-a(VonQ4">
                                                        <field name="TEXT">The post was sent!</field>
                                                      </shadow>
                                                    </value>
                                                  </block>
                                                </statement>
                                                <statement name="ELSE">
                                                  <block type="jg_comments_connected_comment" id="SrVQ%,@bE(GR@Wyc;rlQ">
                                                    <field name="TEXT">Something may have gone wrong.&amp;#10;Lets tell that to the user.&amp;#10;In this case, the API also sends back the error in&amp;#10;a key called "error", so we can send that back&amp;#10;too.</field>
                                                    <next>
                                                      <block type="s4d_reply" id="lk5WKFEEgc6?f*M3):@P">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="/Z$_bO\`0H)iO)EqVp@Dx">
                                                            <field name="TEXT">Hey!</field>
                                                          </shadow>
                                                          <block type="text_join" id="DRiRn={8eQ(p*8X$D,_N">
                                                            <mutation items="5"></mutation>
                                                            <value name="ADD0">
                                                              <block type="text_multiline" id="gd[1!R4r0LQgTV2^?M;.">
                                                                <field name="TEXT">Oops! Something may have gone wrong!&amp;#10;The site responded with status **</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="jg_web_request_advanced_response_status" id="!db(~eY@o4H)sdKUOIcW"></block>
                                                            </value>
                                                            <value name="ADD2">
                                                              <block type="text_multiline" id="6D*(p78{3wvW)vj;!?{P">
                                                                <field name="TEXT">**.&amp;#10;\`\`</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD3">
                                                              <block type="jg_web_request_advanced_get_response_data" id="gD5DFy,%P]%v/B~l7d1F">
                                                                <value name="VALUE">
                                                                  <block type="text" id=":(_:QpLWi%53;JO!eO%n">
                                                                    <field name="TEXT">error</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD4">
                                                              <block type="text" id="nz0=]lR1tCpChzqVhu_b">
                                                                <field name="TEXT">\`\`</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                              </block>
                                            </next>
                                          </block>
                                        </statement>
                                        <statement name="IF_ERROR">
                                          <block type="jg_comments_connected_comment" id="[-8LD/qJv)MUY~*dZKzp">
                                            <field name="TEXT">We got a server error, lets show it in console.</field>
                                            <next>
                                              <block type="s4d_print" id="GsQXECH+7C}@K;uV^MEb">
                                                <value name="PRINT">
                                                  <block type="frost_other_err" id="RL{TR-~!e#lP_Zo[FSO/"></block>
                                                </value>
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
  <block type="jg_unused_floating_comment" id="(VMHrgh]t9~36QQGxdkg" x="1033" y="1009">
    <field name="TEXT">This API here wants us to be a real user.&amp;#10;Lets login with what it asks for, an API key.&amp;#10;The API you are using should tell you how to get&amp;#10;this API key. This is usually going to be in&amp;#10;the header, and should be stored in something&amp;#10;like a process.env block to keep it safe.</field>
  </block>
  <block type="jg_comments_floating_image" id="#V15L9skKe8D02L4d@mN" x="1720" y="1002">
    <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/985798574702997504/unknown.png</field>
  </block>
  <block type="jg_comments_floating_arrow" id="C%WMsGUM;0~tejTjQ]e{" x="952" y="1111">
    <field name="arrow">left</field>
  </block>
  <block type="jg_unused_floating_comment" id="MPWEm8*]B:8sA8Q!*M?o" x="1257" y="1206">
    <field name="TEXT">The "post" data section is what this API wants.&amp;#10;A request object in S4D should be data section, so&amp;#10;a requests body would be a data section named&amp;#10;"body".&amp;#10;"content" is what we are going to post on their&amp;#10;site.</field>
  </block>
  <block type="jg_comments_floating_arrow" id="lQ?ky9LP/yevz)*}--r3" x="1176" y="1254">
    <field name="arrow">left</field>
  </block>
  <block type="jg_comments_floating_image" id="X!l(Y3Z7)}Rr~2B=3ej^" x="1044" y="1702">
    <field name="TEXT">https://media.discordapp.net/attachments/914411539887456296/985797162598301736/unknown.png</field>
  </block>
</xml>

`;