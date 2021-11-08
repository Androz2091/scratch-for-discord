export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="-8Wbv(jP@O;slx/\`tr1k">prefix</variable>
  </variables>
  <block type="s4d_login" id="N_yeS!7mtLO\`97Rk.[VA" x="0" y="0">
    <value name="TOKEN">
      <block type="text" id="7i_b?#mrh|oZ4x/UqJrz">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_connected" id="yOd}0#!}a|bdC^fed:Bg" x="0" y="104">
    <statement name="STATEMENTS">
      <block type="variables_set" id="|%hCY;no#IJ%o*]6!.Hd">
        <field name="VAR" id="-8Wbv(jP@O;slx/\`tr1k">prefix</field>
        <value name="VALUE">
          <block type="text" id="bg}-\`cZ)_Yo)iRLG]|ct">
            <field name="TEXT">you bot prefix</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_on_message" id="!UQyf#UM;p/OzHcF:pZ!" x="0" y="280">
    <statement name="STATEMENTS">
      <block type="controls_if" id="}GoP0)/}XV%OzT]g$kCo">
        <comment pinned="false" h="80" w="160">U can replace delete with smth else</comment>
        <value name="IF0">
          <block type="s4d_starts_with" id="9D!68OT;Zq~K5gveQQ]o">
            <value name="STRING">
              <shadow type="text" id="(^#FD1d+335xkOSUIX5^">
                <field name="TEXT">abc</field>
              </shadow>
              <block type="s4d_message_content" id="4zoiC{M]V]{WeD=Ze\`},"></block>
            </value>
            <value name="SUBSTRING">
              <shadow type="text" id="R,{e9**8ZtkPG4GZ)I/6">
                <field name="TEXT"></field>
              </shadow>
              <block type="text_join" id="W6Mz)Z?{FKW-=0p6EBHP">
                <mutation items="2"></mutation>
                <value name="ADD0">
                  <block type="variables_get" id="6ja]\`RPnr0%{k4B/c^xu">
                    <field name="VAR" id="-8Wbv(jP@O;slx/\`tr1k">prefix</field>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="text" id="*g3OO,w%BOH)a0!WTW+b">
                    <field name="TEXT">delete</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="send_on_channel" id="sA5D)T]Y\`^,OT,X4OqD5">
            <value name="CHANNEL">
              <block type="s4d_message_channel" id="Ah/C~1MllBcpT21(}PSH"></block>
            </value>
            <value name="IMAGE">
              <block type="load_image" id="Z,N{}Mqjf6TL2-4%RQH$">
                <value name="TOLOAD">
                  <block type="1imagepng" id=".%{CqVAN8]E4,aYWpO9:">
                    <mutation divisor_input="false"></mutation>
                    <field name="INFO">Delete</field>
                    <value name="IMAGE">
                      <block type="s4d_member_icon" id="^LSE+%Qw*B^5a~gAPHvf">
                        <value name="MEMBER">
                          <block type="s4d_mentioned_member" id="=eHW~ipyai(;prw:f%6{"></block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </statement>
        <next>
          <block type="controls_if" id="5I\`~g+PNBu\`I4fXer6VD">
            <comment pinned="false" h="80" w="160">U can replace batslap with smth else</comment>
            <value name="IF0">
              <block type="s4d_starts_with" id="0R.ZA21_=\`,QO+2MV3Y:">
                <value name="STRING">
                  <shadow type="text">
                    <field name="TEXT">abc</field>
                  </shadow>
                  <block type="s4d_message_content" id="lSna%kN/Fk68Q:xF0_X@"></block>
                </value>
                <value name="SUBSTRING">
                  <shadow type="text">
                    <field name="TEXT"></field>
                  </shadow>
                  <block type="text_join" id="iNyiy]6Xi-8Txo/c3P4J">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="variables_get" id="S?Y#T+:ou2gpe.1,^46E">
                        <field name="VAR" id="-8Wbv(jP@O;slx/\`tr1k">prefix</field>
                      </block>
                    </value>
                    <value name="ADD1">
                      <block type="text" id="Cy4WfFo/^K5pF,HA)3U:">
                        <field name="TEXT">batslap</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="send_on_channel" id="J6:ZT2y8Go))i~zx#};|">
                <value name="CHANNEL">
                  <block type="s4d_message_channel" id="UNcn=rzo/0T1a|of%{Fo"></block>
                </value>
                <value name="IMAGE">
                  <block type="load_image" id="i$NJD@{:lbpKsVmV|Mh4">
                    <value name="TOLOAD">
                      <block type="2imagepng" id="F]XfRs\`iu3X=/ydPXSP3">
                        <field name="INFO">Batslap</field>
                        <value name="IMAGE">
                          <block type="s4d_member_icon" id="mn}NtaIJVQa:z5@TI]L4">
                            <value name="MEMBER">
                              <block type="s4d_message_author" id="^P+l#C9XZUyh|Ab97X|T"></block>
                            </value>
                          </block>
                        </value>
                        <value name="IMAGE2">
                          <block type="s4d_member_icon" id="N%8dd^7d/2GWutHib-._">
                            <value name="MEMBER">
                              <block type="s4d_mentioned_member" id="qpu?xv+wq@$!M(^ad~D,"></block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </statement>
            <next>
              <block type="controls_if" id="k%jf0xSNg_KQ=0c5jP5~">
                <value name="IF0">
                  <block type="s4d_starts_with" id="*VpE[4OtL(lMx.+W15d!">
                    <value name="STRING">
                      <shadow type="text">
                        <field name="TEXT">abc</field>
                      </shadow>
                      <block type="s4d_message_content" id="[c2jf3=qdvg0DLV2Pl?7"></block>
                    </value>
                    <value name="SUBSTRING">
                      <shadow type="text">
                        <field name="TEXT"></field>
                      </shadow>
                      <block type="text_join" id="jZ%gGT,8o@vWjZ4Y*TpP">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="variables_get" id="#Y1)~f^h3yVf+wU)hNGo">
                            <field name="VAR" id="-8Wbv(jP@O;slx/\`tr1k">prefix</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="text" id="67wgPmX~TY@}q/iol*/8">
                            <field name="TEXT">triggered</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="send_on_channel" id="S_AfChd/exKQUo,Z:]!T">
                    <value name="CHANNEL">
                      <block type="s4d_message_channel" id="h}O(68IWZ2gDO6ds~b]D"></block>
                    </value>
                    <value name="IMAGE">
                      <block type="load_gif" id="YF|~gsc2qGWOLkZNWwZS">
                        <value name="TOLOAD">
                          <block type="1imagegif" id="ad?\`tI8ZwZowVkJZ9cT6">
                            <value name="IMAGE">
                              <block type="s4d_member_icon" id="qV$!5_f(D+*Xc[Iz~an0">
                                <value name="MEMBER">
                                  <block type="s4d_mentioned_member" id=",?RDwt5%x%$5ngG]H?Y8"></block>
                                </value>
                              </block>
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
    </statement>
  </block>
</xml>
`;
